import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExerciseList() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Choose Your Workout</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
        <button onClick={() => navigate("/exercise/pushups")}>Pushups</button>
        <button onClick={() => navigate("/exercise/pullups")}>Pullups</button>
        <button onClick={() => navigate("/exercise/biceps")}>Biceps</button>
        <button onClick={() => navigate("/exercise/triceps")}>Triceps</button>
      </div>
    </div>
  );
}
