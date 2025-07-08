import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const hideNavbarRoutes = ["/lessons", "/quiz", "/progress"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-blue-50">
      {!shouldHideNavbar && <Navbar />}

      {/* Main page content */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>

      {/* ✅ PASTE THIS ICON BLOCK HERE */}
      {location.pathname === "/" && (
        <div className="flex justify-end gap-x-4 mt-4 mr-4">
          <button
            className="border p-2 rounded text-sm text-center hover:bg-blue-100"
            onClick={() => navigate("/lessons")}
          >
          <div className="text-2xl icon-box">📘</div>


            <span>Lessons</span>
          </button>
          <button
            className="border p-2 rounded text-sm text-center hover:bg-blue-100"
            onClick={() => navigate("/quiz")}
          >
            <div className="text-2xl">🧠</div>
            <span>Quiz</span>
          </button>
          <button
            className="border p-2 rounded text-sm text-center hover:bg-blue-100"
            onClick={() => navigate("/progress")}
          >
            <div className="text-2xl">📈</div>
            <span>Progress</span>
          </button>
          <button
            className="border p-2 rounded text-sm text-center hover:bg-blue-100"
            onClick={() => navigate("/settings")}
          >
            <div className="text-2xl">⚙️</div>
            <span>Settings</span>
          </button>
        </div>
      )}
    </div>
  );
}
