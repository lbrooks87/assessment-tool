import interpretations from "@/data/interpretations";
import questions from "@/data/questions";

  export default function processResponses(userResponses: Array<number>) {
    const categories = Object.fromEntries(
      [...new Set(questions.map((q) => q.category))].map((cat) => [
        cat,
        { x: 0, y: 0, xCount: 0, yCount: 0 },
      ])
    ) as Record<
      keyof typeof interpretations,
      { x: number; y: number; xCount: number; yCount: number }
    >;

    // Initialize categories
    const uniqueCategories = [...new Set(questions.map((q) => q.category))];
    uniqueCategories.forEach((cat) => {
      categories[cat] = { x: 0, y: 0, xCount: 0, yCount: 0 };
    });

    // Process responses
    questions.forEach((q, idx) => {
      let value = userResponses[idx];
      if (value) {
        const cat = categories[q.category];

        if (q.invert) value = -value;
        cat[q.axis] += value;
        cat[`${q.axis}Count`]++;
      }
    });

    // Calculate averages and determine quadrants
    return (Object.keys(categories) as Array<keyof typeof categories>).map(
      (key) => {
        const cat = categories[key];
        const avgX = cat.xCount > 0 ? cat.x / cat.xCount : 0;
        const avgY = cat.yCount > 0 ? cat.y / cat.yCount : 0;

        // Determine quadrant (1-4)
        //  2 | 1
        // ---+---
        //  3 | 4
        const quadrant =  (avgX >= 0 && avgY >= 0) ? 1 :
                        (avgX < 0 && avgY >= 0) ? 2 :
                        (avgX < 0 && avgY < 0) ? 3 : 4;

        const interpretation = interpretations[key][`q${quadrant}`];

        return {
          name: key,
          x: avgX,
          y: avgY,
          quadrant: quadrant,
          interpretation: interpretation,
        };
      }
    );
  };