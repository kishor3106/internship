import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlashcardApp from "./FlashcardApp";
import AddFlashcard from "./AddFlashcard"; // 👈 create this new file

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<FlashcardApp />} />
        <Route path="/add" element={<AddFlashcard />} /> {/* 👈 new page */}
      </Routes>
    
  );
}

export default App;
