import React from "react";

export default function WordCard({ word, translation, audioUrl }) {
  const playAudio = () => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold text-blue-700">{word}</h3>
        <p className="text-gray-600">Translation: {translation}</p>
      </div>
      <button
        onClick={playAudio}
        className="text-blue-600 text-2xl hover:text-blue-800"
        title="Play pronunciation"
      >
        🔊
      </button>
    </div>
  );
}
