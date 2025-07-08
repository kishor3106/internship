const handleSubmit = () => {
  const newCard = { question, answer, options };

  const existing = JSON.parse(localStorage.getItem("flashcards")) || [];
  localStorage.setItem("flashcards", JSON.stringify([...existing, newCard]));

  navigate("/"); // go back to main flashcard page
};
