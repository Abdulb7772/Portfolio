import { Outlet } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
