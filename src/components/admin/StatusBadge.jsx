import { useLanguage } from '../../i18n/LanguageContext.jsx'

// Status pill shared across the admin dashboard. `completed` / `failed`
// use the narrow semantic-color exception (muted emerald / rose), always
// paired with an icon glyph and a text label - never color alone. The
// neutral states (`in-progress`, `not-started`) stay in muted navy tones.
const STATUS_CONFIG = {
  completed: {
    labelKey: 'completedStatus',
    icon: '✓',
    classes: 'border-emerald-600 bg-emerald-50 text-emerald-700',
  },
  failed: {
    labelKey: 'failedStatus',
    icon: '✕',
    classes: 'border-rose-600 bg-rose-50 text-rose-700',
  },
  'in-progress': {
    labelKey: 'inProgressStatus',
    icon: '●',
    classes: 'border-navy-200 bg-navy-100/60 text-navy-700',
  },
  'not-started': {
    labelKey: 'notStartedStatus',
    icon: '○',
    classes: 'border-navy-200 bg-white text-navy-400',
  },
}

export default function StatusBadge({ status }) {
  const { t } = useLanguage()
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG['not-started']

  return (
    <span
      className={
        'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium ' +
        config.classes
      }
    >
      <span aria-hidden="true">{config.icon}</span>
      <span>{t(config.labelKey)}</span>
    </span>
  )
}
