import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "../../hooks/useTheme";

export function AppShell() {
  const { theme, toggle } = useTheme();

  return (
    <div className="flex h-screen bg-surface text-text">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex items-center justify-end border-b border-border px-6 py-3">
          <ThemeToggle theme={theme} toggle={toggle} />
        </header>
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
