import { useId } from 'react'
import { useLanguage } from '../../i18n/LanguageContext.jsx'

// Central 5-point star icon, precomputed around (100, 68) so it sits in the
// upper portion of the inner navy disc, leaving room below for the year
// (and, in Arabic mode, the module title).
const STAR_POINTS = [
  '100,53',
  '103.53,63.15',
  '114.27,63.37',
  '105.71,69.85',
  '108.82,80.14',
  '100,74',
  '91.18,80.14',
  '94.29,69.85',
  '85.73,63.37',
  '96.47,63.15',
].join(' ')

export default function Badge({ moduleTitle, year, size = 160 }) {
  const { lang } = useLanguage()
  const isRtl = lang === 'ar'
  const arcId = `badge-arc-${useId()}`

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden={moduleTitle ? undefined : 'true'}
      role={moduleTitle ? 'img' : undefined}
      aria-label={moduleTitle ? `${moduleTitle} ${year}` : undefined}
    >
      <defs>
        <path id={arcId} d="M 39 84 A 61 61 0 1 1 161 84" fill="none" />
      </defs>

      {/* Ribbon tails, drawn first so the medal circle overlaps their tops */}
      <polygon
        points="76,150 92,150 92,196 84,186 76,196"
        fill="var(--navy)"
        stroke="var(--orange)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <polygon
        points="108,150 124,150 124,196 116,186 108,196"
        fill="var(--navy)"
        stroke="var(--orange)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Outer navy ring */}
      <circle cx="100" cy="84" r="80" fill="var(--navy)" />

      {/* Thin orange accent ring, the badge's single sparing use of orange as a stroke */}
      <circle
        cx="100"
        cy="84"
        r="75"
        fill="none"
        stroke="var(--orange)"
        strokeWidth="1.5"
      />

      {/* Middle cream ring */}
      <circle cx="100" cy="84" r="70" fill="var(--cream)" />

      {/* Inner navy disc holding the icon, title (Arabic) and year */}
      <circle cx="100" cy="84" r="52" fill="var(--navy)" />

      <polygon points={STAR_POINTS} fill="#FFFFFF" />

      {isRtl ? (
        <>
          <text
            x="100"
            y="101"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="600"
            textLength="92"
            lengthAdjust="spacingAndGlyphs"
          >
            {moduleTitle}
          </text>
          <text
            x="100"
            y="122"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="14"
            fontWeight="700"
          >
            {year}
          </text>
        </>
      ) : (
        <>
          <text
            fill="var(--navy)"
            fontSize="9"
            fontWeight="600"
            letterSpacing="0.5"
          >
            <textPath
              href={`#${arcId}`}
              startOffset="50%"
              textAnchor="middle"
              textLength="180"
              lengthAdjust="spacingAndGlyphs"
            >
              {moduleTitle.toUpperCase()}
            </textPath>
          </text>
          <text
            x="100"
            y="113"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="16"
            fontWeight="700"
          >
            {year}
          </text>
        </>
      )}
    </svg>
  )
}
