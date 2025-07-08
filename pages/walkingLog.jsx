import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WalkingLog() {
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`📝 Walking Logged:
- Duration: ${duration} mins
- Calories: ${calories} cal
- Note: ${note}`);
    
    navigate("/"); // Go back to dashboard
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>🚶 Walking Log</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div>
          <label>Duration (minutes):</label><br />
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Calories Burned:</label><br />
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label>Notes:</label><br />
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{ ...inputStyle, height: "80px" }}
          />
        </div>
        <button type="submit" style={buttonStyle}>Submit Log</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
