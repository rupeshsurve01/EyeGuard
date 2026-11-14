interface WellnessCardProps {
  icon: string;
  title: string;
  description: string;
  nextReminder: string;
  interval: string;
  iconClass: string;
}

function WellnessCard({
  icon,
  title,
  description,
  nextReminder,
  interval,
  iconClass,
}: WellnessCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${iconClass}`}
          >
            {icon}
          </div>

          <div>
            <h3 className="font-semibold text-white">
              {title}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {description}
            </p>
          </div>
        </div>

        <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
          Active
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-950 p-4">
        <div>
          <p className="text-sm text-slate-400">
            Next reminder
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {nextReminder}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-500">
            Interval
          </p>

          <p className="mt-1 text-sm font-medium text-slate-300">
            {interval}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WellnessCard;