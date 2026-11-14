interface ActivityChartProps {
  data: {
    time: string;
    value: number;
  }[];
}

function ActivityChart({ data }: ActivityChartProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Today's Activity
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Your screen usage throughout the day
          </p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-white">
            2h 34m
          </p>

          <p className="text-xs text-slate-500">
            Total active time
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex h-56 items-end gap-3">
          {data.map((item) => (
            <div
              key={item.time}
              className="flex h-full flex-1 flex-col items-center justify-end gap-3"
            >
              <div className="flex h-full w-full items-end">
                <div
                  className="w-full rounded-t-lg bg-blue-500/80 transition hover:bg-blue-400"
                  style={{ height: `${item.value}%` }}
                  title={`${item.time}: ${item.value}% activity`}
                />
              </div>

              <span className="text-[11px] text-slate-500">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityChart;