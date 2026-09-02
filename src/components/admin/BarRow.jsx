export default function BarRow({ label, percent, detail, onClick }) {
  const clampedPercent = Math.max(0, Math.min(100, percent))

  const content = (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-navy">{label}</span>
        <span className="shrink-0 text-sm text-navy-700">{detail}</span>
      </div>
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-navy-100">
        <div
          className="h-full rounded-full bg-orange"
          style={{ width: clampedPercent + '%' }}
        />
      </div>
    </div>
  )

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="w-full rounded-xl p-2 text-start transition-colors hover:bg-navy-100/40"
      >
        {content}
      </button>
    )
  }

  return <div className="w-full p-2">{content}</div>
}
