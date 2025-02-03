import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { CategorySelector } from '@/components/game/CategorySelector';
import { CardDeck } from '@/components/game/CardDeck';

const categories = [
  {
    id: 'perspective',
    name: 'Perspectiva',
    emoji: '🤓',
    description: 'Debate y diferentes formas de ver la vida'
  },
  {
    id: 'presentation',
    name: 'Presentación',
    emoji: '😁',
    description: 'Gustos personales y preferencias'
  },
  {
    id: 'depth',
    name: 'Profundidad',
    emoji: '😌',
    description: 'Intimidad y auto-exploración'
  },
  {
    id: 'unwind',
    name: 'Descomprimir',
    emoji: '😜',
    description: 'Relax y creatividad'
  }
];

const questions = {
  perspective: [
    { id: '1', category: 'Perspectiva', emoji: '🤓', text: '¿Crees que la felicidad se encuentra en lo cotidiano o en lo extraordinario?' },
    { id: '2', category: 'Perspectiva', emoji: '🤓', text: '¿Cómo definirías el éxito y qué importancia le das en la vida?' },
    { id: '3', category: 'Perspectiva', emoji: '🤓', text: '¿Qué papel juega el fracaso en el crecimiento personal?' }
  ],
  presentation: [
    { id: '1', category: 'Presentación', emoji: '😁', text: '¿Cuál es tu película favorita y por qué?' },
    { id: '2', category: 'Presentación', emoji: '😁', text: '¿Qué libro ha marcado un antes y un después en tu vida?' },
    { id: '3', category: 'Presentación', emoji: '😁', text: '¿Qué tipo de música te inspira y te mueve emocionalmente?' }
  ],
  depth: [
    { id: '1', category: 'Profundidad', emoji: '😌', text: '¿Qué es lo que realmente te hace sentir vivo/a?' },
    { id: '2', category: 'Profundidad', emoji: '😌', text: '¿Cuál ha sido el momento más desafiante de tu vida y qué aprendiste de él?' },
    { id: '3', category: 'Profundidad', emoji: '😌', text: '¿Qué es lo que más valoras de ti mismo/a?' }
  ],
  unwind: [
    { id: '1', category: 'Descomprimir', emoji: '😜', text: '¿Qué actividad te ayuda a liberar el estrés de forma creativa?' },
    { id: '2', category: 'Descomprimir', emoji: '😜', text: '¿Cuál ha sido la situación más divertida o absurda que hayas vivido?' },
    { id: '3', category: 'Descomprimir', emoji: '😜', text: '¿Qué sueño extraño recuerdas haber tenido y cómo lo interpretas?' }
  ]
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: { id: string }) => {
    setSelectedCategory(category.id);
  };

  return (
    <div className="min-h-screen p-4">
      <Header />
      <main className="container mx-auto py-8">
        {!selectedCategory ? (
          <CategorySelector 
            categories={categories} 
            onSelect={handleCategorySelect}
          />
        ) : (
          <div className="flex flex-col items-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-8 text-gray-600 hover:text-gray-800"
            >
              ← Volver a categorías
            </button>
            <CardDeck
              questions={questions[selectedCategory as keyof typeof questions]}
              category={categories.find(c => c.id === selectedCategory)?.name || ''}
              emoji={categories.find(c => c.id === selectedCategory)?.emoji || ''}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;