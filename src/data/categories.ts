const categories = [
  "Community and Support Networks",
  "Social and Cultural Learning",
  "Learning Preferences",
  "Motivation and Problem-Solving"
] as const;

export default categories;

export const categoryAxes: Record<typeof categories[number], { xLabel: string; yLabel: string }> = {
  "Community and Support Networks": {
    xLabel: "Working Alone ↔ Working with Support",
    yLabel: "Family & Community ↔ Programs & Services",
  },
  "Social and Cultural Learning": {
    xLabel: "Learning Alone ↔ Learning Together",
    yLabel: "Stories & Experience ↔ Steps & Structure",
  },
  "Learning Preferences": {
    xLabel: "Learning by Doing ↔ Learning by Watching",
    yLabel: "Clear Path ↔ Open Exploration",
  },
  "Motivation and Problem-Solving": {
    xLabel: "One Step at a Time ↔ Seeing the Whole",
    yLabel: "Personal Interest ↔ External Rewards",
  },
};

export const categoryColors: Record<typeof categories[number], `#${string}`> = {
  "Community and Support Networks": "#8b5cf6",
  "Social and Cultural Learning": "#3b82f6",
  "Learning Preferences": "#10b981",
  "Motivation and Problem-Solving": "#f59e0b"
};