import categories from "./categories";

const interpretations: Record<typeof categories[number], Record<'q1' | 'q2' | 'q3' | 'q4', { title: string; desc: string }>> = {
  "Community and Support Networks": {
    'q1': {
      title: "Self-Directed & System-Based",
      desc: "You navigate learning and work with confidence and self-sufficiency. You thrive in environments with clear expectations and accessible resources that you can use as needed. Spaces with documented resources and self-paced development opportunities support your strengths.",
    },
    'q2': {
      title: "Community-Supported & System-Based",
      desc: "You benefit from organized support systems like mentorship programs and workplace guidance. You feel confident in environments with clear resources, tools, and structured support. Seeking out professional development opportunities and helpful technologies supports your success.",
    },
    'q3': {
      title: "Community-Supported & Relationship-Based",
      desc: "You feel most supported through trusted relationships like family, friends, and mentors. You value environments that prioritize connection, mutual care, and shared wisdom. Seeking out spaces that emphasize mentorship, peer collaboration, and reciprocal support will help you thrive.",
    },
    'q4': {
      title: "Self-Directed & Relationship-Based",
      desc: "You work well on your own but value guidance from trusted personal relationships. While you prefer autonomy, having access to community support and peer discussions provides motivation and clarity. Environments offering flexible mentorship while maintaining your independence work best.",
    },
  },
  "Social and Cultural Learning": {
    'q1': {
      title: "Collective Focus & Structure-Based",
      desc: "You work best in teams with organized processes and shared goals. You enjoy collaborative problem-solving within clear frameworks. Environments with defined roles, project-based learning, and coordinated workflows support your success.",
    },
    'q2': {
      title: "Individual Focus & Structure-Based",
      desc: "You excel in clearly defined environments where you can work toward personal goals. You do best with clear expectations, measurable objectives, and opportunities to problem-solve independently. Programs with structured milestones and logical workflows align with your approach.",
    },
    'q3': {
      title: "Individual Focus & Story-Based",
      desc: "You're reflective and prefer learning that allows for personal meaning-making. You thrive in settings that emphasize storytelling, real-world connections, and narrative learning. Opportunities for creative expression and personal reflection support your strengths.",
    },
    'q4': {
      title: "Collective Focus & Story-Based",
      desc: "You thrive where knowledge is co-created through shared experience and community engagement. You excel in collaborative environments that value teamwork, storytelling, and collective wisdom. Spaces centered on community-driven projects feel especially affirming.",
    },
  },
  "Learning Preferences": {
    'q1': {
      title: "Learning by Observing & Open Path",
      desc: "You absorb knowledge best with flexibility to explore at your own pace. You prefer self-directed learning and open discussions. Environments allowing for autonomy, research, and reflective practices align with your strengths.",
    },
    'q2': {
      title: "Learning by Doing & Open Path",
      desc: "You thrive when exploring and experimenting freely. You prefer hands-on learning without rigid structures. You excel in creative, entrepreneurial, or innovative environments where adaptability is valued. Fields emphasizing prototyping, artistic expression, or exploratory work suit you well.",
    },
    'q3': {
      title: "Learning by Doing & Structured Path",
      desc: "You learn best through hands-on practice within a clear framework. You excel in environments offering experiential learning with guided instruction. Consider roles emphasizing practical skill development, apprenticeships, or technical training with structured support.",
    },
    'q4': {
      title: "Learning by Observing & Structured Path",
      desc: "You're comfortable learning through clear instruction, reading, or listening. You retain information well with structured lessons and logical explanations. You benefit from organized coursework, documented training programs, or environments with clear learning pathways.",
    },
  },
  "Motivation and Problem-Solving": {
    'q1': {
      title: "Big Picture & External Recognition",
      desc: "You're driven by recognition while applying creative problem-solving. You enjoy finding innovative approaches to challenges while working toward clear rewards. Environments balancing creativity with measurable achievements are most fulfilling.",
    },
    'q2': {
      title: "Step-by-Step & External Recognition",
      desc: "You're motivated by tangible outcomes like achievements and recognition. You excel in environments linking systematic problem-solving with measurable rewards. Goal-oriented roles with clearly defined success metrics support your motivation.",
    },
    'q3': {
      title: "Step-by-Step & Inner Drive",
      desc: "You're engaged when solving complex problems systematically. You're naturally curious and enjoy learning for its own sake. Roles allowing for detailed analysis, systems thinking, or research-based problem-solving are fulfilling for you.",
    },
    'q4': {
      title: "Big Picture & Inner Drive",
      desc: "You're fulfilled when exploring new ideas creatively with curiosity. You value personal growth, innovation, and meaning-making. Environments encouraging exploration, holistic thinking, and creative work best support your engagement.",
    },
  },
};

export default interpretations;