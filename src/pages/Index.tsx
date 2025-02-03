import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { CategorySelector } from '@/components/game/CategorySelector';
import { CardDeck } from '@/components/game/CardDeck';
import { SuggestionForm } from '@/components/game/SuggestionForm';

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
    { id: '1', category: 'Perspectiva', emoji: '🤓', text: '¿Crees que la felicidad se construye o se descubre?' },
    { id: '2', category: 'Perspectiva', emoji: '🤓', text: '¿Qué significado tiene para ti la libertad en el contexto de tu vida diaria?' },
    { id: '3', category: 'Perspectiva', emoji: '🤓', text: '¿Cómo definirías el éxito y qué precio estás dispuesto a pagar por él?' },
    // ... Add all 50 questions for perspective category
  ],
  presentation: [
    { id: '1', category: 'Presentación', emoji: '😁', text: '¿Cuál es el recuerdo que más define quién eres hoy?' },
    { id: '2', category: 'Presentación', emoji: '😁', text: '¿Qué pasiones te hacen vibrar y cómo las descubriste?' },
    { id: '3', category: 'Presentación', emoji: '😁', text: '¿Qué aspecto de tu personalidad te gustaría explorar más a fondo?' },
    // ... Add all 50 questions for presentation category
  ],
  depth: [
    { id: '1', category: 'Profundidad', emoji: '😌', text: '¿Qué es lo que más anhelas comprender de tu propia existencia?' },
    { id: '2', category: 'Profundidad', emoji: '😌', text: '¿Qué momentos de dolor te han enseñado las lecciones más valiosas?' },
    { id: '3', category: 'Profundidad', emoji: '😌', text: '¿Cómo defines la verdadera intimidad con otro ser?' },
    // ... Add all 50 questions for depth category
  ],
  unwind: [
    { id: '1', category: 'Descomprimir', emoji: '😜', text: '¿Qué actividad creativa te permite liberar tensiones y conectar contigo mismo/a?' },
    { id: '2', category: 'Descomprimir', emoji: '😜', text: '¿Cómo encuentras humor en situaciones que, a primera vista, parecen trágicas?' },
    { id: '3', category: 'Descomprimir', emoji: '😜', text: '¿Qué sueño absurdo te ha enseñado una lección sobre la vida?' },
    // ... Add all 50 questions for unwind category
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
          <>
            <CategorySelector 
              categories={categories} 
              onSelect={handleCategorySelect}
            />
            <SuggestionForm />
          </>
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