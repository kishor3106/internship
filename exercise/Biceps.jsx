import React from "react";

export default function Biceps() {
  return (
    <div
      style={{
        padding: "3rem",
        backgroundColor: "#fef3c7", // light orange
        minHeight: "100vh",
        color: "#1f2937", // dark text
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#dc2626",
          marginBottom: "1rem",
        }}
      >
        Bicep Curls
      </h1>

      <img
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
        alt="Bicep Curls Exercise"
        style={{
          width: "100%",
          maxWidth: "600px",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "2rem",
        }}
      />

      <ol style={{ fontSize: "1.5rem", lineHeight: "2" }}>
        <li>💪 Hold dumbbells at your sides with palms facing forward.</li>
        <li>⬆️ Curl the weights while keeping elbows tucked.</li>
        <li>✋ Squeeze at the top, then lower slowly.</li>
        <li>🔁 Repeat for desired reps.</li>
      </ol>
    </div>
  );
}
