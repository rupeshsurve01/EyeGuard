import StatCard from "../components/StatCard";
import WellnessCard from "../components/WellnessCard";

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <p className="text-sm font-medium text-blue-400">Welcome back 👋</p>

        <h1 className="mt-1 text-3xl font-bold text-white">
          Your screen wellness today
        </h1>

        <p className="mt-2 text-slate-400">
          Keep your eyes healthy and take regular breaks while working.
        </p>
      </div>

      {/* Statistics Cards */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <StatCard
          icon="🖥️"
          label="Screen Time"
          value="2h 34m"
          description="Total active computer time"
          status="Today"
          statusClass="bg-blue-500/10 text-blue-400"
          hoverClass="hover:border-blue-500/40"
          iconClass="bg-blue-500/10"
        />

        <StatCard
          icon="☕"
          label="Breaks Taken"
          value="3"
          description="Breaks completed today"
          status="Good"
          statusClass="bg-green-500/10 text-green-400"
          hoverClass="hover:border-green-500/40"
          iconClass="bg-green-500/10"
        />

        <StatCard
          icon="⏱️"
          label="Next Break"
          value="12 min"
          description="Recommended break time"
          status="Soon"
          statusClass="bg-yellow-500/10 text-yellow-400"
          hoverClass="hover:border-yellow-500/40"
          iconClass="bg-yellow-500/10"
        />
      </div>

      {/* Today's Activity */}
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
            <p className="text-2xl font-bold text-white">2h 34m</p>
            <p className="text-xs text-slate-500">Total active time</p>
          </div>
        </div>

        {/* Activity Chart */}
        <div className="mt-8">
          <div className="flex h-56 items-end gap-3">
            {[
              { time: "9 AM", value: 25 },
              { time: "10 AM", value: 45 },
              { time: "11 AM", value: 70 },
              { time: "12 PM", value: 35 },
              { time: "1 PM", value: 20 },
              { time: "2 PM", value: 60 },
              { time: "3 PM", value: 80 },
              { time: "4 PM", value: 50 },
            ].map((item) => (
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

                <span className="text-[11px] text-slate-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wellness Status */}
      {/* Wellness Status */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <WellnessCard
          icon="👁️"
          title="20-20-20 Rule"
          description="Regular eye-rest reminders"
          nextReminder="In 12 minutes"
          interval="20 minutes"
          iconClass="bg-blue-500/10"
        />

        <WellnessCard
          icon="💧"
          title="Hydration Reminder"
          description="Stay hydrated while working"
          nextReminder="In 28 minutes"
          interval="30 minutes"
          iconClass="bg-cyan-500/10"
        />
      </div>
    </div>
  );
}

export default Dashboard;
