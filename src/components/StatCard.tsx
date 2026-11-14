interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  description: string;
  status: string;
  statusClass: string;
  hoverClass: string;
  iconClass: string;
}

function StatCard({
  icon,
  label,
  value,
  description,
  status,
  statusClass,
  hoverClass,
  iconClass,
}: StatCardProps) {
  return (
    <div
      className={`group rounded-2xl border border-slate-800 bg-slate-900 p-5 transition ${hoverClass}`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${iconClass}`}
        >
          {icon}
        </div>

        <span
          className={`rounded-lg px-2.5 py-1 text-xs font-medium ${statusClass}`}
        >
          {status}
        </span>
      </div>

      <p className="mt-5 text-sm text-slate-400">
        {label}
      </p>

      <h2 className="mt-1 text-3xl font-bold tracking-tight text-white">
        {value}
      </h2>

      <p className="mt-2 text-xs text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default StatCard;