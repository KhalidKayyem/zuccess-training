// Deterministic synthetic learner population for the admin dashboard.
// Built with a seeded PRNG (mulberry32, seed 1337) so re-importing this
// module always yields byte-identical data. Do NOT use Math.random() here.

function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6D2B79F5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const rand = mulberry32(1337)

const MODULE_ID = 'food-hygiene-complete'

export const GROUP_ORDER = [
  'kitchen-staff',
  'front-of-house',
  'delivery-drivers',
  'warehouse-receiving',
  'supervisors',
]

// Group configuration, in the exact order status buckets must be generated.
const GROUP_CONFIG = {
  'kitchen-staff': {
    total: 40,
    completed: 39,
    failed: 1,
    inProgress: 0,
    notStarted: 0,
    completedScoreRange: [82, 98],
    failedScoreRange: [55, 68],
  },
  'front-of-house': {
    total: 35,
    completed: 34,
    failed: 1,
    inProgress: 0,
    notStarted: 0,
    completedScoreRange: [80, 97],
    failedScoreRange: [55, 68],
  },
  'delivery-drivers': {
    total: 25,
    completed: 20,
    failed: 2,
    inProgress: 1,
    notStarted: 2,
    completedScoreRange: [70, 88],
    failedScoreRange: [45, 68],
  },
  'warehouse-receiving': {
    total: 25,
    completed: 23,
    failed: 1,
    inProgress: 1,
    notStarted: 0,
    completedScoreRange: [78, 96],
    failedScoreRange: [55, 68],
  },
  supervisors: {
    total: 25,
    completed: 25,
    failed: 0,
    inProgress: 0,
    notStarted: 0,
    completedScoreRange: [85, 99],
    failedScoreRange: [55, 68],
  },
}

// Name pools for generating realistic Gulf / Middle-Eastern employee names.
const FIRST_NAMES = [
  'Ahmed', 'Mohammed', 'Omar', 'Khalid', 'Youssef', 'Hassan',
  'Fatima', 'Layla', 'Sara', 'Noura', 'Maryam', 'Rania',
  'Abdullah', 'Ibrahim', 'Yasmin', 'Huda', 'Karim', 'Tariq',
  'Amina', 'Zainab', 'Faisal', 'Nasser', 'Salma', 'Reem',
]

const LAST_NAMES = [
  'Al-Sayed', 'Al-Harbi', 'Mansour', 'Al-Farsi', 'Qureshi', 'Haddad',
  'Al-Otaibi', 'Al-Rashid', 'Khoury', 'Al-Zahrani', 'Barakat', 'Al-Mutairi',
  'Saleh', 'Al-Qahtani', 'Nassar', 'Al-Amin', 'Fakhoury', 'Al-Dosari',
]

// Fixed anchor date for computing completedAt offsets. Never Date.now().
const ANCHOR_DATE = new Date('2026-08-28T00:00:00Z')

function randInt(min, max) {
  // Uniform integer in [min, max], inclusive, rounded to nearest whole number.
  return Math.round(min + rand() * (max - min))
}

function pick(arr) {
  return arr[Math.floor(rand() * arr.length)]
}

function makeName() {
  return `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`
}

function daysBeforeAnchor(days) {
  const d = new Date(ANCHOR_DATE.getTime() - days * 24 * 60 * 60 * 1000)
  return d.toISOString().slice(0, 10)
}

// Groups where retakes (attempts: 2 on completed learners) are weighted
// more heavily, since retakes are more common among weaker performers.
const RETAKE_WEIGHTED_GROUPS = new Set(['delivery-drivers', 'warehouse-receiving'])

function buildLearners() {
  const learners = []
  let seq = 1

  for (const groupId of GROUP_ORDER) {
    const cfg = GROUP_CONFIG[groupId]
    const statusSequence = [
      ...Array(cfg.completed).fill('completed'),
      ...Array(cfg.failed).fill('failed'),
      ...Array(cfg.inProgress).fill('in-progress'),
      ...Array(cfg.notStarted).fill('not-started'),
    ]

    for (const status of statusSequence) {
      const learnerId = `L-${String(seq).padStart(4, '0')}`
      seq += 1
      const name = makeName()

      let bestScore = null
      let attempts = 0
      let completedAt = null

      if (status === 'completed') {
        const [lo, hi] = cfg.completedScoreRange
        bestScore = randInt(lo, hi)

        // Determine retake (attempts: 2) deterministically via rand(),
        // weighted toward the weaker groups (delivery-drivers, warehouse-receiving).
        const retakeChance = RETAKE_WEIGHTED_GROUPS.has(groupId) ? 0.28 : 0.05
        attempts = rand() < retakeChance ? 2 : 1

        const daysBack = randInt(3, 90)
        completedAt = daysBeforeAnchor(daysBack)
      } else if (status === 'failed') {
        const [lo, hi] = cfg.failedScoreRange
        bestScore = randInt(lo, hi)

        // Delivery drivers occasionally show repeated struggle (attempts: 2).
        attempts = groupId === 'delivery-drivers' && rand() < 0.5 ? 2 : 1
      } else {
        // in-progress / not-started
        bestScore = null
        attempts = 0
      }

      learners.push({
        learnerId,
        name,
        groupId,
        moduleId: MODULE_ID,
        status,
        bestScore,
        attempts,
        completedAt,
      })
    }
  }

  return learners
}

export const LEARNERS = buildLearners()

export function getGroupStats(groupId, learners = LEARNERS) {
  const rows = learners.filter((l) => l.groupId === groupId)
  return computeStats(rows, groupId)
}

export function getOverallStats(learners = LEARNERS) {
  return computeStats(learners)
}

function computeStats(rows, groupId) {
  const total = rows.length
  const completed = rows.filter((l) => l.status === 'completed').length
  const failed = rows.filter((l) => l.status === 'failed').length
  const inProgress = rows.filter((l) => l.status === 'in-progress').length
  const notStarted = rows.filter((l) => l.status === 'not-started').length

  const completionRate = total > 0 ? completed / total : 0
  const attempted = completed + failed
  const passRate = attempted > 0 ? completed / attempted : 0

  const scored = rows.filter((l) => l.bestScore !== null)
  const avgScore =
    scored.length > 0
      ? Math.round(
          (scored.reduce((sum, l) => sum + l.bestScore, 0) / scored.length) * 10
        ) / 10
      : 0

  const stats = {
    total,
    completed,
    failed,
    inProgress,
    notStarted,
    completionRate,
    passRate,
    avgScore,
  }

  return groupId !== undefined ? { groupId, ...stats } : stats
}

export const GROUP_STATS = GROUP_ORDER.reduce((acc, groupId) => {
  acc[groupId] = getGroupStats(groupId)
  return acc
}, {})

export const OVERALL_STATS = getOverallStats()
