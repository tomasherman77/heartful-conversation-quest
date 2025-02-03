import { useState } from 'react';
import { cn } from '@/lib/utils';

interface GameCardProps {
  category: string;
  question: string;
  emoji: string;
}

export function GameCard({ category, question, emoji }: GameCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn(
        "flip-card w-full max-w-md aspect-[3/4] cursor-pointer",
        isFlipped && "flipped"
      )}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front rounded-xl shadow-lg bg-white p-8 flex flex-col items-center justify-center">
          <span className="text-6xl mb-4">{emoji}</span>
          <h3 className="text-2xl font-semibold text-gray-800">{category}</h3>
          <p className="text-sm text-gray-500 mt-2">Toca para revelar</p>
        </div>
        <div className="flip-card-back rounded-xl shadow-lg bg-white p-8 flex flex-col items-center justify-center">
          <p className="text-xl text-gray-800 leading-relaxed">{question}</p>
        </div>
      </div>
    </div>
  );
}