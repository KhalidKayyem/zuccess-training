/**
 * @file Shared JSDoc type definitions for the data files under src/data/.
 * This file has no runtime behavior — it exists purely to document the
 * shapes used across the other src/data/*.js files.
 */

/**
 * @typedef {Object} Localized
 * @property {string} en - English text.
 * @property {string} ar - Arabic text.
 */

/**
 * @typedef {Object} Module
 * @property {string} id - Unique module identifier.
 * @property {Localized} title - Module title.
 * @property {Localized} description - Module description.
 * @property {string[]} groupIds - The EmployeeGroup ids this module is assigned to.
 * @property {number} estimatedMinutes - Estimated time to complete, in minutes.
 * @property {boolean} hasVideo - Whether this module includes a video.
 * @property {string|null} videoSrc - Video source URL/path, or null if hasVideo is false.
 * @property {Card[]} cards - The content cards that make up this module.
 * @property {Assessment} assessment - The assessment for this module.
 */

/**
 * @typedef {Object} Card
 * @property {string} id - Unique card identifier.
 * @property {Localized} title - Card title.
 * @property {Localized} body - Card body content.
 * @property {Localized[]} [keyPoints] - Optional list of key points.
 */

/**
 * @typedef {Object} Assessment
 * @property {number} passingScore - Minimum score required to pass, e.g. 70.
 * @property {Question[]} questions - The questions in this assessment.
 */

/**
 * @typedef {Object} QuestionOption
 * @property {string} id - Unique option identifier (unique within its question).
 * @property {Localized} text - Option text.
 */

/**
 * @typedef {Object} Question
 * @property {string} id - Unique question identifier.
 * @property {Localized} prompt - The question prompt.
 * @property {QuestionOption[]} options - The available answer options.
 * @property {string} correctOptionId - Must equal one of options[].id.
 * @property {Localized} explanation - Explanation shown after answering.
 */

/**
 * @typedef {Object} EmployeeGroup
 * @property {string} id - Unique group identifier.
 * @property {Localized} name - Group name.
 */

/**
 * @typedef {Object} LearnerRecord
 * @property {string} learnerId - Unique learner identifier.
 * @property {string} name - Plain (not bilingual) name of the real employee.
 * @property {string} groupId - The EmployeeGroup id this learner belongs to.
 * @property {string} moduleId - The Module id this record tracks progress for.
 * @property {'not-started'|'in-progress'|'failed'|'completed'} status - Progress status.
 * @property {number} attempts - Number of assessment attempts made.
 * @property {number|null} bestScore - Best score achieved, or null if none yet.
 * @property {string|null} completedAt - ISO date string of completion, or null.
 */

export {}
