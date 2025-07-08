import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaBrain, FaChartLine, FaCog } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  const buttons = [
    { label: "Lessons", icon: <FaBookOpen />, path: "/lessons" },
    { label: "Quiz", icon: <FaBrain />, path: "/quiz" },
    { label: "Progress", icon: <FaChartLine />, path: "/progress" },
    { label: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center">
      <h1 className="text-3xl font-bold mb-6">🌍 Welcome to Language App</h1>
      <div className="grid grid-cols-2 gap-6">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => navigate(btn.path)}
            className="bg-white shadow-md p-6 rounded-xl w-36 h-36 flex flex-col items-center justify-center hover:bg-blue-100"
          >
            <div className="text-3xl mb-2">{btn.icon}</div>
            <div className="text-lg font-semibold">{btn.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
