import { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import categories, { categoryAxes, categoryColors } from "@/data/categories";
import { CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, Tooltip, TooltipProps, XAxis, YAxis } from "recharts";
import { FileDown, RefreshCw } from "lucide-react";

const CustomTooltip = ({ active, payload }: { active: boolean, payload: any }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border rounded-lg shadow-lg">
        <p className="font-semibold text-sm">{data.name}</p>
        <p className="text-xs text-gray-600">
          Position: ({data.x.toFixed(1)}, {data.y.toFixed(1)})
        </p>
      </div>
    );
  }
  return null;
};

interface ResultsDisplayProps {
  data: Array<{
    name: typeof categories[number];
    x: number;
    y: number;
    quadrant: number;
    interpretation: {
      title: string;
      desc: string;
    };
  }>;
  resetAssessment: () => void;
}

export default function ResultsDisplay({ data, resetAssessment }: ResultsDisplayProps) {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number] | null>(null);

  const displayData = selectedCategory
    ? data.filter((d) => d.name === selectedCategory)
    : data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Learning and Workplace Profile
            </CardTitle>
            <CardDescription>
              Your personalized assessment results across four key dimensions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Quick Summary */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">
                Your Learning Profile Summary
              </h3>
              <p className="text-gray-700">
                You demonstrate a unique combination of learning preferences
                across {data.filter((d) => d.x !== 0 || d.y !== 0).length}{" "}
                dimensions, with particular strengths in{" "}
                {data.toSorted(
                  (a, b) =>
                    Math.abs(b.x) +
                    Math.abs(b.y) -
                    Math.abs(a.x) -
                    Math.abs(a.y)
                )[0]?.interpretation.title || "balanced approaches"}
                .
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setSelectedCategory(null)
                }
              >
                All Categories
              </Button>
              {(
                Object.keys(categoryColors) as Array<typeof categories[number]>
              ).map((cat) => (
                <Button
                  key={cat as string}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor:
                      selectedCategory === cat
                        ? categoryColors[cat]
                        : "transparent",
                    borderColor: categoryColors[cat],
                    color:
                      selectedCategory === cat ? "white" : categoryColors[cat],
                  }}
                >
                  {cat as string}
                </Button>
              ))}
            </div>

            {/* Scatter Plot */}
            <div className="bg-white rounded-xl p-4 shadow-inner relative">
              {/* Quadrant Labels Overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{ padding: "20px 100px 100px 100px" }}
              >
                <div className="relative w-full h-full">
                  {selectedCategory ? (
                    <>
                      <div className="absolute top-[15%] left-[10%] text-xs text-gray-600 bg-white/90 px-2 py-1 rounded">
                        {selectedCategory ===
                          "Community and Support Networks" &&
                          "Support + Family"}
                        {selectedCategory === "Social and Cultural Learning" &&
                          "Alone + Stories"}
                        {selectedCategory === "Learning Preferences" &&
                          "Doing + Clear Path"}
                        {selectedCategory ===
                          "Motivation and Problem-Solving" &&
                          "Step-by-Step + Interest"}
                      </div>
                      <div className="absolute bottom-[25%] left-[10%] text-xs text-gray-600 bg-white/90 px-2 py-1 rounded">
                        {selectedCategory ===
                          "Community and Support Networks" &&
                          "Support + Programs"}
                        {selectedCategory === "Social and Cultural Learning" &&
                          "Alone + Structure"}
                        {selectedCategory === "Learning Preferences" &&
                          "Doing + Open"}
                        {selectedCategory ===
                          "Motivation and Problem-Solving" &&
                          "Step-by-Step + Rewards"}
                      </div>
                      <div className="absolute top-[15%] right-[10%] text-xs text-gray-600 bg-white/90 px-2 py-1 rounded">
                        {selectedCategory ===
                          "Community and Support Networks" && "Alone + Family"}
                        {selectedCategory === "Social and Cultural Learning" &&
                          "Together + Stories"}
                        {selectedCategory === "Learning Preferences" &&
                          "Watching + Clear Path"}
                        {selectedCategory ===
                          "Motivation and Problem-Solving" &&
                          "Whole + Interest"}
                      </div>
                      <div className="absolute bottom-[25%] right-[10%] text-xs text-gray-600 bg-white/90 px-2 py-1 rounded">
                        {selectedCategory ===
                          "Community and Support Networks" &&
                          "Alone + Programs"}
                        {selectedCategory === "Social and Cultural Learning" &&
                          "Together + Structure"}
                        {selectedCategory === "Learning Preferences" &&
                          "Watching + Open"}
                        {selectedCategory ===
                          "Motivation and Problem-Solving" && "Whole + Rewards"}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute top-[20%] left-[15%] text-xs text-gray-500 font-medium">
                        Quadrant 1
                      </div>
                      <div className="absolute bottom-[30%] left-[15%] text-xs text-gray-500 font-medium">
                        Quadrant 2
                      </div>
                      <div className="absolute top-[20%] right-[15%] text-xs text-gray-500 font-medium">
                        Quadrant 3
                      </div>
                      <div className="absolute bottom-[30%] right-[15%] text-xs text-gray-500 font-medium">
                        Quadrant 4
                      </div>
                    </>
                  )}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={500}>
                <ScatterChart
                  margin={{ top: 20, right: 20, bottom: 100, left: 100 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis
                    type="number"
                    dataKey="x"
                    domain={[-2, 2]}
                    ticks={[-2, -1, 0, 1, 2]}
                    label={{
                      value: selectedCategory
                        ? categoryAxes[selectedCategory]?.xLabel
                        : "Working Alone ← → Working with Support",
                      position: "insideBottom",
                      offset: -5,
                      style: { fontSize: 13, textAnchor: "middle" },
                    }}
                  />
                  <YAxis
                    type="number"
                    dataKey="y"
                    domain={[-2, 2]}
                    ticks={[-2, -1, 0, 1, 2]}
                    label={{
                      value: selectedCategory
                        ? categoryAxes[selectedCategory]?.yLabel
                        : "Family & Community ← → Programs & Services",
                      angle: -90,
                      position: "insideLeft",
                      offset: 10,
                      style: { fontSize: 13, textAnchor: "middle" },
                    }}
                  />
                  <ReferenceLine x={0} stroke="#666" strokeDasharray="3 3" />
                  <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />
                  <Tooltip content={CustomTooltip} />
                  <Scatter name="Results" data={displayData}>
                    {displayData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={categoryColors[entry.name]}
                        fillOpacity={0.8}
                        r={10}
                      />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed Results Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                Your Profile Summary
              </h3>
              {data.map((item) => (
                <Card
                  key={item.name}
                  className="border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: categoryColors[item.name] }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3
                        className="font-bold text-lg"
                        style={{ color: categoryColors[item.name] }}
                      >
                        {item.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        Quadrant {item.quadrant}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-800">
                        {item.interpretation.title}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.interpretation.desc}
                      </p>
                    </div>
                    <div className="mt-4 flex gap-4 text-xs text-gray-500">
                      <span>
                        {categoryAxes[item.name]?.xLabel}: {item.x.toFixed(1)}
                      </span>
                      <span>
                        {categoryAxes[item.name]?.yLabel}: {item.y.toFixed(1)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Recommendations */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Using Your Results</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Consider using your results to:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    • Advocate for workplace or learning accommodations that
                    align with your preferences
                  </li>
                  <li>• Identify career pathways that match your strengths</li>
                  <li>• Reflect on support networks that help you thrive</li>
                  <li>
                    • Explore learning environments that feel affirming and
                    accessible to you
                  </li>
                  <li>
                    • Develop personalized strategies for success in
                    professional or educational spaces
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4 pt-4">
              <Button
                onClick={resetAssessment}
                variant="outline"
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Retake Assessment
              </Button>
              <Button
                onClick={() => window.print()}
                variant="outline"
                className="flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                Print/Save Results
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
