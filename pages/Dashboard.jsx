import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const activities = [
  { type: "walking", label: "🚶 Walking" },
  { type: "running", label: "🏃 Running" },
  { type: "sleeping", label: "😴 Sleeping" },
  { type: "swimming", label: "🏊 Swimming" },
  { type: "exercise", label: "💪 Exercise" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const handleClick = (type) => {
    if (type === "walking") {
      navigate("/activity/walking/log");
    } else if (type === "exercise") {
      navigate("/exercise"); // ✅ Go to exercise list page
    } else {
      navigate(`/activity/${type}`);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Fitness Dashboard</h1>
      <div className="activity-grid">
        {activities.map((activity) => (
          <button
            key={activity.type}
            onClick={() => handleClick(activity.type)}
            className="activity-button"
          >
            {activity.label}
          </button>
        ))}
      </div>
     
    </div>
    
  );
} 
