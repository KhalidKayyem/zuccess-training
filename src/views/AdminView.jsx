import { useEffect, useRef, useState } from 'react'
import { GROUPS } from '../data/groups.js'
import { useLanguage } from '../i18n/LanguageContext'
import { AdminOverview } from '../components/admin/AdminOverview.jsx'
import GroupDetail from '../components/admin/GroupDetail.jsx'
import LearnerDetail from '../components/admin/LearnerDetail.jsx'

export default function AdminView() {
  const { t, lang } = useLanguage()

  const [screen, setScreen] = useState('overview')
  const [groupId, setGroupId] = useState(null)
  const [learnerId, setLearnerId] = useState(null)

  // Scroll offsets keyed by screen identity, kept in a ref so writes never
  // trigger a re-render - only the screen/groupId/learnerId state should.
  const scrollOffsets = useRef({})

  function saveScroll(key) {
    scrollOffsets.current[key] = window.scrollY
  }

  useEffect(() => {
    const key = screen === 'group' ? 'group:' + groupId : screen
    const savedOffset = scrollOffsets.current[key]

    const frame = requestAnimationFrame(() => {
      if (screen !== 'learner' && typeof savedOffset === 'number') {
        window.scrollTo(0, savedOffset)
      } else {
        window.scrollTo(0, 0)
      }
    })

    return () => cancelAnimationFrame(frame)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen])

  function handleSelectGroup(id) {
    saveScroll('overview')
    setScreen('group')
    setGroupId(id)
  }

  function handleSelectLearner(id) {
    saveScroll('group:' + groupId)
    setScreen('learner')
    setLearnerId(id)
  }

  function handleBackToOverview() {
    setScreen('overview')
    setGroupId(null)
    setLearnerId(null)
  }

  function handleBackToGroup() {
    setScreen('group')
    setLearnerId(null)
  }

  const currentGroup = groupId ? GROUPS.find((g) => g.id === groupId) : null

  return (
    <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
          <button
            type="button"
            onClick={handleBackToOverview}
            className={
              screen === 'overview'
                ? 'font-semibold text-navy'
                : 'text-navy-400 transition-colors hover:text-navy'
            }
          >
            {t('overviewLabel')}
          </button>

          {(screen === 'group' || screen === 'learner') && currentGroup && (
            <>
              <span aria-hidden="true" className="text-navy-400">
                /
              </span>
              {screen === 'learner' ? (
                <button
                  type="button"
                  onClick={handleBackToGroup}
                  className="text-navy-400 transition-colors hover:text-navy"
                >
                  {currentGroup.name[lang]}
                </button>
              ) : (
                <span className="font-semibold text-navy">{currentGroup.name[lang]}</span>
              )}
            </>
          )}
        </nav>

        {screen === 'overview' && <AdminOverview onSelectGroup={handleSelectGroup} />}

        {screen === 'group' && groupId && (
          <GroupDetail
            groupId={groupId}
            onSelectLearner={handleSelectLearner}
            onBack={handleBackToOverview}
          />
        )}

        {screen === 'learner' && learnerId && (
          <LearnerDetail learnerId={learnerId} onBack={handleBackToGroup} />
        )}
      </div>
    </main>
  )
}
