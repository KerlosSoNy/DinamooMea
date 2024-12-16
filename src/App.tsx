import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="flex flex-row gap-4">
      <Toaster />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App
