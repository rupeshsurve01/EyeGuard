import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: "▦" },
    { name: "Statistics", icon: "◒" },
    { name: "Reminders", icon: "◷" },
    { name: "Settings", icon: "⚙" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-slate-800 bg-slate-900">
        {/* Logo */}
        <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl">
            🛡
          </div>

          <div>
            <h1 className="text-lg font-bold">EyeGuard</h1>
            <p className="text-xs text-slate-400">Screen Wellness</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                activePage === item.name
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="w-6 text-center text-lg">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>
            </button>
          ))}
        </nav>

        {/* Status */}
        <div className="border-t border-slate-800 p-4">
          <div className="rounded-xl bg-slate-800 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

              <span className="text-sm font-medium">
                EyeGuard Active
              </span>
            </div>

            <p className="text-xs text-slate-400">
              Monitoring your screen activity
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
          <div>
            <h2 className="text-xl font-semibold">
              {activePage}
            </h2>

            <p className="text-sm text-slate-400">
              Take care of your eyes while you work.
            </p>
          </div>

          <button className="rounded-xl border border-slate-700 px-4 py-2 text-slate-300 transition hover:bg-slate-800">
            ⚙ Settings
          </button>
        </header>

        {/* Page Content */}
        <section className="p-8">
          {activePage === "Dashboard" && <Dashboard />}

          {activePage !== "Dashboard" && (
            <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900">
              <div className="text-center">
                <h2 className="text-2xl font-bold">
                  {activePage}
                </h2>

                <p className="mt-2 text-slate-400">
                  This section will be built next.
                </p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;