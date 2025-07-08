import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
export default function FlashcardApp() {
  const [flashcards, setFlashcards] = useState([
    {
      question: "What is the capital of France?",
      answer: "Paris",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
    },
    {
      question: "What is 2 + 2?",
      answer: "4",
      options: ["3", "4", "5", "22"],
    },
    {
    question: "What is the capital of india?",
    answer: "delhi",
    options: ["Berlin", "Madrid", "delhi", "Rome"],
  },
  {
    question: "What is 2 + 3?",
    answer: "5",
    options: ["3", "4", "5", "22"],
  },
  {
    question: "Who wrote 'Hamlet'?",
    answer: "William Shakespeare",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
  },
  {
    question: "What is the boiling point of water?",
    answer: "100°C",
    options: ["90°C", "80°C", "100°C", "120°C"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
  },
  {
    question: "What gas do plants absorb?",
    answer: "Carbon Dioxide",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  },
  {
    question: "How many continents are there?",
    answer: "7",
    options: ["5", "6", "7", "8"],
  },
  {
    question: "What is the largest ocean?",
    answer: "Pacific",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
  },
  {
    question: "What is the square root of 64?",
    answer: "8",
    options: ["6", "7", "8", "9"],
  },
  {
    question: "Which organ pumps blood?",
    answer: "Heart",
    options: ["Brain", "Lungs", "Heart", "Liver"],
  },
  {
    question: "Which language is used for web styling?",
    answer: "CSS",
    options: ["HTML", "CSS", "Python", "React"],
  },

  ]);
  
  
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");

  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newOptions, setNewOptions] = useState(["", "", "", ""]);

 const checkAnswer = (option) => {
  if (selectedOption) return; // Prevent multiple submissions

  setSelectedOption(option);

  if (option === flashcards[currentIndex].answer) {
    setFeedback("✅ Correct!");
    setScore((prev) => prev + 1);
  } else {
    setFeedback(`❌ Wrong! Correct Answer: ${flashcards[currentIndex].answer}`);
  }
};


  const addFlashcard = () => {
    if (newQuestion && newAnswer && newOptions.every(opt => opt)) {
      setFlashcards([
        ...flashcards,
        { question: newQuestion, answer: newAnswer, options: newOptions },
      ]);
      setNewQuestion("");
      setNewAnswer("");
      setNewOptions(["", "", "", ""]);
    }
  };

  const deleteFlashcard = () => {
    if (flashcards.length === 0) return;
    const updated = flashcards.filter((_, i) => i !== currentIndex);
    setFlashcards(updated);
    setSelectedOption("");
    setFeedback("");
    setCurrentIndex(0);
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    setSelectedOption("");
    setFeedback("");
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? flashcards.length - 1 : prev - 1));
    setSelectedOption("");
    setFeedback("");
  };
  

  return (
    <div style={styles.container}>
      <h1>  Flashcard Quiz App</h1>

      {flashcards.length > 0 ? (
        <div style={styles.card}>
          <h2 style={styles.question}>{flashcards[currentIndex].question}</h2>

          <div style={styles.options}>
            {flashcards[currentIndex].options.map((option, i) => (
              <button
                key={i}
                style={{
                  ...styles.optionButton,
                  backgroundColor:
                    selectedOption === option
                      ? option === flashcards[currentIndex].answer
                        ? "#c8f7c5" // green
                        : "#f7c5c5" // red
                      : "white",
                }}
                onClick={() => checkAnswer(option)}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>

          {feedback && <p style={styles.feedback}>{feedback}</p>}
        </div>
      ) : (
        <p>No flashcards yet.</p>
      )}

      <div style={styles.buttonGroup}>
        <button onClick={prevCard} disabled={flashcards.length === 0}>
          Previous
        </button>
        <button onClick={nextCard} disabled={flashcards.length === 0}>
          Next
        </button>
        <button onClick={deleteFlashcard} disabled={flashcards.length === 0}>
          Delete
        </button>
      </div>

      <div style={styles.form}>
        <input
          type="text"
          placeholder="Enter question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter correct answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        {newOptions.map((opt, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => {
              const updatedOptions = [...newOptions];
              updatedOptions[i] = e.target.value;
              setNewOptions(updatedOptions);
            }}
          />
        ))}
        <button 
  onClick={() => navigate("/add")}
  style={{
    position: "absolute", 
    top: "20px", 
    right: "20px", 
    fontSize: "24px",
    backgroundColor: "#ffffff20",
    border: "2px solid white",
    borderRadius: "10px",
    padding: "10px 15px",
    cursor: "pointer", 
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 0 8px rgba(255,255,255,0.4)"
  }}
>
  ➕ Add Flashcard
</button>
      </div>
<h1>your score </h1>
<p style={{ color: "white", fontSize: "18px" }}>
  Score: {score} / {flashcards.length}
</p>


    </div>
    
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100vh", // 👈 Full viewport height
    width: "100vw",  // 👈 Full viewport width
    margin: 0,       // 👈 Remove any margin
    padding: 0,
    backgroundImage: "url(''https://plus.unsplash.com/premium_photo-1678216286021-e81f66761751?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },


 card: {
  border: "2px solid #ccc",
  borderRadius: "10px",
  padding: "100px",
  margin: "20px auto",
  maxWidth: "500px",
  backgroundColor: "rgba(0, 0, 0,0.7)", // 👈 semi-transparent black
  minHeight: "200px",
  color: "white", // 👈 makes text visible on dark background
}
,
  question: {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "15px",
  },
  options: {
    display: "flex",
    flexWrap: "wrap",           // allow wrapping
    justifyContent: "center",   // center rows
    gap: "10px",
    marginTop: "10px",
  },
  
  optionButton: {
    flex: "0 0 45%",             // 45% of parent per button
    maxWidth: "200px",
    minWidth: "120px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    boxSizing: "border-box",
    backgroundColor: "white",  // or any light color
color: "black"

  },
  
  buttonGroup: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  form: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
  feedback: {
    marginTop: "15px",
    fontWeight: "bold",
    fontSize: "16px",
  },

};  