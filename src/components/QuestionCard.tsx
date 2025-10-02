import responses from "@/data/responses";
import { Card, CardContent } from "./ui/card";
import { Question } from "@/data/questions";
import { Button } from "./ui/button";

interface QuestionCardProps {
  handleResponse: (value: number) => void;
  question: Question;
  currentQuestionIndex: number;
  userResponses: Array<number>;
}

export default function QuestionCard({
  handleResponse,
  question,
  currentQuestionIndex,
  userResponses,
}: QuestionCardProps) {
  return (
    <Card className="border-2 border-gray-100">
      <p className="text-sm text-gray-500 text-center">
        Rate each statement based on your personal experience
      </p>
      <CardContent className="p-8 pt-0">
        <p className="text-2xl text-center mb-2 h-[3lh]">{question.text}</p>

        <div className="space-y-3 mt-6">
          {responses.map((option) => (
            <Button
              variant="outline"
              key={option.value}
              onClick={() => handleResponse(option.value)}
              className={`w-full p-6 text-left rounded-lg border-2 transition-all duration-75 ${
                userResponses[currentQuestionIndex] === option.value
                  ? "border-purple-500 bg-purple-50"
                  : `border-gray-200 hover:bg-${option.color}-50 hover:border-${option.color}-300`
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option.label}</span>
                {/*<span className="text-gray-400">{option.value}</span>*/}
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
