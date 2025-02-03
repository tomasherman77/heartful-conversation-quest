import { useState } from 'react';
import { toast } from "@/hooks/use-toast";

export function SuggestionForm() {
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestion.trim()) {
      // Here you would typically send this to a backend
      console.log('New suggestion:', suggestion);
      toast({
        title: "¡Gracias por tu sugerencia!",
        description: "Tu pregunta ha sido recibida.",
      });
      setSuggestion('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8">
      <div className="flex flex-col space-y-2">
        <label htmlFor="suggestion" className="text-sm font-medium text-gray-700">
          Sugerir una nueva pregunta
        </label>
        <textarea
          id="suggestion"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="min-h-[100px] w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
          placeholder="Escribe tu sugerencia aquí..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Enviar sugerencia
        </button>
      </div>
    </form>
  );
}