import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ActivityDetail from "./pages/ActivityDetail";
import WalkingLog from "./pages/WalkingLog";
import fitnessImage from './images/fitness.jpeg';
import Pushups from "./exercise/Pushups";
import ExerciseList from "./exercise/ExerciseList";
import Pullups from "./exercise/Pullups";     // ✅ FIXED
import Biceps from "./exercise/Biceps";       // ✅ FIXED
import Triceps from "./exercise/Triceps";     // ✅ FIXED

export default function App() {
  return (
    <Router>
    <div style={{
  backgroundImage: `url(${fitnessImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  padding: "2rem",
  color: "white",
  position: "relative"
}}>
  <div style={{
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // dark overlay
    zIndex:1
  }}></div>

  <div style={{ position: "relative", zIndex: 2 }}>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/activity/:type" element={<ActivityDetail />} />
      <Route path="/activity/walking/log" element={<WalkingLog />} />
     
       <Route path="/exercise" element={<ExerciseList />} />
        <Route path="/exercise/pushups" element={<Pushups />} />
        <Route path="/exercise/pullups" element={<Pullups />} />
        <Route path="/exercise/biceps" element={<Biceps />} />
        <Route path="/exercise/triceps" element={<Triceps />} />
    </Routes>
  </div>
</div>

    </Router>
  );
}
