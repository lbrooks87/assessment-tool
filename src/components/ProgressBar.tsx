interface ProgressBarProps {
  current: number;
  answered: number;
  total: number;
}

export default function ProgressBar({ current, answered, total }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>
          Question {current + 1} of {total}
        </span>
        <span>{Math.round((answered / total) * 100)}% Complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${(answered / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
