export default function KpiTile({ label, value }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-navy-200 bg-white p-5 shadow-sm">
      <span className="text-sm font-medium text-navy-700">{label}</span>
      <span className="text-3xl font-bold text-navy">{value}</span>
    </div>
  )
}
