import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const activityInfo = {
  walking: { calories: 200, time: "30 mins" },
  running: { calories: 350, time: "20 mins" },
  sleeping: { calories: 50, time: "8 hours" },
  swimming: { calories: 400, time: "30 mins" },
  exercise: { calories: 300, time: "40 mins" },
};

export default function ActivityDetail() {
  const { type } = useParams();
  const navigate = useNavigate();
  const data = activityInfo[type];

  if (!data) {
    return <p>Invalid activity type</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📝 {type.toUpperCase()} Summary</h2>
      <div style={styles.card}>
        <p><strong>Calories Burned:</strong> {data.calories} cal</p>
        <p><strong>Time Duration:</strong> {data.time}</p>
        <button onClick={() => navigate("/")} style={styles.backButton}>
          ⬅ Back to Dashboard
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial",
    
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    
  },
  card: {
    display: "inline-block",
    padding: "30px",
    background: "#f0f0f0",
    borderRadius: "12px",
    fontSize: "18px",
    backgroundColor:"black",
  },
  backButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
