interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

interface CategorySelectorProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

export function CategorySelector({ categories, onSelect }: CategorySelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category)}
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-center space-x-4"
        >
          <span className="text-4xl">{category.emoji}</span>
          <div className="text-left">
            <h3 className="font-semibold text-lg">{category.name}</h3>
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}