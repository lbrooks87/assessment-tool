const categories = [
  "Community and Support Networks",
  "Social and Cultural Learning",
  "Learning Preferences",
  "Motivation and Problem-Solving"
] as const;

export default categories;

export const categoryAxes: Record<typeof categories[number], { xLabel: string; yLabel: string }> = {
  "Community and Support Networks": {
    xLabel: "High Support ↔ Independent",
    yLabel: "Natural/Family ↔ External/Programs",
  },
  "Social and Cultural Learning": {
    xLabel: "Individual ↔ Collective",
    yLabel: "Relational/Stories ↔ Structured",
  },
  "Learning Preferences": {
    xLabel: "Hands-On/Doing ↔ Passive/Watching",
    yLabel: "Structured ↔ Flexible",
  },
  "Motivation and Problem-Solving": {
    xLabel: "Analytical/Step-by-step ↔ Intuitive/Big picture",
    yLabel: "Intrinsic/Curiosity ↔ Extrinsic/Rewards",
  },
};

export const categoryColors: Record<typeof categories[number], `#${string}`> = {
  "Community and Support Networks": "#8E00C2",
  "Social and Cultural Learning": "#005A9E",
  "Learning Preferences": "#00672B",
  "Motivation and Problem-Solving": "#735400  "
};