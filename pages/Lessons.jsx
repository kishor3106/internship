import React from "react";
import { useNavigate } from "react-router-dom";

export default function Lessons() {
  const navigate = useNavigate();

  const categories = [
    { label: "Vocabulary", icon: "🧠", path: "/lessons/vocabulary" },
    { label: "Grammar", icon: "✍️", path: "/lessons/grammar" },
    { label: "Verbs", icon: "🔤", path: "/lessons/verbs" },
    { label: "Common Phrases", icon: "🗣️", path: "/lessons/phrases" },
    { label: "Daily Conversation", icon: "📅", path: "/lessons/conversation" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">📚 Select a Lesson Category</h1>

      <div className="grid gap-4">
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:bg-blue-100 transition"
          >
            <span className="text-xl">{item.icon} {item.label}</span>
            <span className="text-gray-400">➤</span>
          </button>
        ))}
      </div>
    </div>
  );
}
