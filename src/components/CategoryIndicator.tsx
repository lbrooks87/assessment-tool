import categories, { categoryColors } from "@/data/categories";

interface CategoryIndicatorProps {
  currentCategory: typeof categories[number];
  categoryProgress: number;
  categoryQuestionCount: number;
}

export default function CategoryIndicator({
  currentCategory,
  categoryProgress,
  categoryQuestionCount
}: CategoryIndicatorProps) {
  return (
    <div className="text-center space-y-2">
      <span
        className="inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
        style={{ backgroundColor: categoryColors[currentCategory] }}
      >
        {currentCategory}
      </span>
      <p className="text-xs text-gray-500">
        {categoryProgress} of {categoryQuestionCount} questions in this
        category
      </p>
    </div>
  );
}
