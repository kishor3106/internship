import React from "react";
import WordCard from "../components/WordCard";
import todayLesson from "../data/todayLesson";

export default function Home() {
  const streak = 4; // Example: 4-day streak
  const lastScore = 85; // Example: 85% score

  return (
    <div className="max-w-3xl mx-auto p-4">
      

      <p className="mb-6 text-lg text-gray-700">Your daily dose of new words and language practice.</p>

      {/* Word of the Day */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">📖 Word of the Day</h2>
        <WordCard word="Hola" translation="Hello" audioUrl="/assets/hola.mp3" />
      </section>

      {/* Today's Lesson */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">📝 Today's Lesson</h2>
        <div className="grid gap-4">
          {todayLesson.map((item, index) => (
            <WordCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Streak & Score Section */}
      <section className="bg-white rounded-lg shadow-md p-4 flex justify-between mt-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">🔥 Current Streak</h3>
          <p className="text-gray-600">{streak} days</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">📊 Last Quiz Score</h3>
          <p className="text-gray-600">{lastScore}%</p>
        </div>
      </section>
    </div>
  );
}
