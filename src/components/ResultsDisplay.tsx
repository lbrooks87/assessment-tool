import { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import categories, { categoryAxes, categoryColors } from "@/data/categories";
import {
  CartesianGrid,
  Cell,
  Label,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FileDown, RefreshCw } from "lucide-react";

const CustomTooltip = ({
  active,
  payload,
}: {
  active: boolean;
  payload: any;
}) => {
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
    name: (typeof categories)[number];
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

export default function ResultsDisplay({
  data,
  resetAssessment,
}: ResultsDisplayProps) {
  /*  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[number] | null
  >(null);*/

  console.log(data);

  // If filtered, select only the data for that category
  const displayData = data; /*selectedCategory
    ? data.filter((d) => d.name === selectedCategory)
    : data;*/

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Learning and Workplace Profile
            </CardTitle>
            <CardDescription>
              Your personalized assessment results across four key domains
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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
            {/* Quick Summary */}
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">
                Your Learning Profile Summary
              </h3>
              <p className="text-gray-700">
                You demonstrate a unique combination of learning preferences
                across {data.filter((d) => d.x !== 0 || d.y !== 0).length}{" "}
                dimensions, with particular focus on a{" "}
                <span className="font-bold">
                  {data.toSorted(
                    (a, b) =>
                      Math.abs(b.x) +
                      Math.abs(b.y) -
                      Math.abs(a.x) -
                      Math.abs(a.y)
                  )[0]?.interpretation.title || "balanced"}
                </span>{" "}
                approach.
              </p>
            </div>

            {/* Scatter Plot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.map((data_pt) => (
                <Card
                  className="border-l-4 hover:shadow-lg transition-all"
                  style={{ borderLeftColor: categoryColors[data_pt.name] }}
                  key={data_pt.name}
                >
                  <CardHeader>
                    <CardTitle
                      className="text-lg font-semibold"
                      style={{ color: categoryColors[data_pt.name] }}
                    >
                      {data_pt.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ResponsiveContainer width="100%" height={300}>
                      <ScatterChart
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis
                          type="number"
                          dataKey="x"
                          domain={[-2, 2]}
                          ticks={[-2, -1, 0, 1, 2]}
                          label={{
                            value: categoryAxes[data_pt.name]?.xLabel || "",
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
                            value: categoryAxes[data_pt.name]?.yLabel || "",
                            angle: -90,
                            position: "insideLeft",
                            offset: 10,
                            style: { fontSize: 13, textAnchor: "middle" },
                          }}
                        />
                        <ReferenceLine
                          x={0}
                          stroke="#666"
                          strokeDasharray="3 3"
                        />
                        <ReferenceLine
                          y={0}
                          stroke="#666"
                          strokeDasharray="3 3"
                        />
                        <Tooltip content={CustomTooltip} />
                        <Scatter name="Results" data={data_pt ? [data_pt] : []}>
                          <Cell
                            fill={categoryColors[data_pt.name]}
                            fillOpacity={0.8}
                          />
                        </Scatter>
                        <Label
                          value="Quadrant 1"
                          position="insideTopRight"
                          offset={10}
                          style={{ fontSize: 10, fill: "#888" }}
                        />
                        <Label
                          value="Quadrant 2"
                          position="insideTopLeft"
                          offset={10}
                          style={{ fontSize: 10, fill: "#888" }}
                        />
                        <Label
                          value="Quadrant 3"
                          position="insideBottomLeft"
                          offset={10}
                          style={{ fontSize: 10, fill: "#888" }}
                        />
                        <Label
                          value="Quadrant 4"
                          position="insideBottomRight"
                          offset={10}
                          style={{ fontSize: 10, fill: "#888" }}
                        />
                      </ScatterChart>
                    </ResponsiveContainer>

                    <Card>
                      <CardHeader>
                        <CardTitle
                          className="font-semibold"
                          style={{ color: categoryColors[data_pt.name] }}
                        >
                          {data_pt.interpretation.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {data_pt.interpretation.desc}
                        </p>
                      </CardContent>
                      <CardFooter className="flex flex-col items-start">
                        <div className="flex gap-4 text-xs text-gray-500 italic">
                          <span>
                            {categoryAxes[data_pt.name]?.xLabel}:{" "}
                            <b>{data_pt.x.toFixed(1)}</b>
                          </span>
                          <span>
                            {categoryAxes[data_pt.name]?.yLabel}:{" "}
                            <b>{data_pt.y.toFixed(1)}</b>
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 italic mt-2">
                          Quadrant <b>{data_pt.quadrant}</b>
                        </div>
                      </CardFooter>
                    </Card>
                  </CardContent>
                </Card>
              ))}
            </div>

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
