import { useState } from 'react';
import { GameCard } from './GameCard';

interface Question {
  id: string;
  category: string;
  emoji: string;
  text: string;
}

interface CardDeckProps {
  questions: Question[];
  category: string;
  emoji: string;
}

export function CardDeck({ questions, category, emoji }: CardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];

  const nextQuestion = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <GameCard
        category={category}
        emoji={emoji}
        question={currentQuestion.text}
      />
      <button
        onClick={nextQuestion}
        className="mt-4 px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
      >
        Siguiente carta
      </button>
    </div>
  );
}