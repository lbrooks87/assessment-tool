"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, BarChart3 } from "lucide-react";

import questions from "@/data/questions";

import processResponses from "@/lib/processResponses";
import ResultsDisplay from "@/components/ResultsDisplay";
import ProgressBar from "@/components/ProgressBar";
import CategoryIndicator from "@/components/CategoryIndicator";
import QuestionCard from "@/components/QuestionCard";

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState<Array<number>>([]);
  const [showResults, setShowResults] = useState(false);

  const handleResponse = (value: number) => {
    setUserResponses((responses) => {
      const newResponses = [...responses];
      newResponses[currentQuestion] = value;
      return newResponses;
    });

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetAssessment = () => {
    setUserResponses([]);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const isComplete = Object.keys(userResponses).length === questions.length;

  if (showResults) {
    const data = processResponses(userResponses);

    return <ResultsDisplay data={data} resetAssessment={resetAssessment} />;
  } else {
    const currentQ = questions[currentQuestion];
    const currentCategory = currentQ.category;
    const categoryQuestions = questions.filter(
      (q) => q.category === currentCategory
    );
    const categoryProgress = categoryQuestions.filter(
      (q) => userResponses[questions.indexOf(q)] !== undefined
    ).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">
                Learning and Workplace Assessment Tool
              </CardTitle>
              <CardDescription className="text-xl text-muted-foreground italic">
                Discover your unique learning style and workplace preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress Bar */}
              <ProgressBar current={currentQuestion} answered={userResponses.length} total={questions.length} />

              {/* Category Indicator */}
              <CategoryIndicator
                currentCategory={currentCategory}
                categoryProgress={categoryProgress}
                categoryQuestionCount={categoryQuestions.length}
              />

              {/* Question Card */}
              <QuestionCard
                handleResponse={handleResponse}
                question={currentQ}
                currentQuestionIndex={currentQuestion}
                userResponses={userResponses}
              />

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <Button
                  onClick={goToPrevious}
                  variant="outline"
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                {isComplete && (
                  <Button
                    onClick={() => setShowResults(true)}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <BarChart3 className="w-4 h-4" />
                    View Results
                  </Button>
                )}

                <Button
                  onClick={goToNext}
                  variant="outline"
                  disabled={
                    currentQuestion === questions.length - 1 ||
                    userResponses[currentQuestion] === undefined
                  }
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
