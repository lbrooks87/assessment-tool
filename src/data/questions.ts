import categories from "./categories";

// Questions organized by category from the assessment document
export type Question =
  {
    id: number,
    category: typeof categories[number],
    text: string,
    axis: "x" | "y",
    invert?: boolean
  }

const questions: Question[] = [
  // Community and Support Networks
  { id: 1, category: "Community and Support Networks", text: "I thrive with structured support like mentors, guides, or organized programs.", axis: "y" },
  { id: 2, category: "Community and Support Networks", text: "I feel confident navigating learning and work with minimal guidance.", axis: "x", invert: true },
  { id: 3, category: "Community and Support Networks", text: "I benefit most from support through family, friends, and community.", axis: "y", invert: true },
  { id: 4, category: "Community and Support Networks", text: "I regularly use helpful tools (like text-to-speech or visual aids).", axis: "y" },
  { id: 5, category: "Community and Support Networks", text: "When facing challenges, I turn to trusted relationships for guidance.", axis: "y", invert: true },
  { id: 6, category: "Community and Support Networks", text: "I do well in environments where support tools and resources are easily available.", axis: "y" },
  { id: 7, category: "Community and Support Networks", text: "I prefer to seek support from organized systems rather than personal relationships.", axis: "y" },

  // Social and Cultural Learning
  { id: 8, category: "Social and Cultural Learning", text: "I prefer to work on my own rather than in groups.", axis: "x", invert: true },
  { id: 9, category: "Social and Cultural Learning", text: "I learn best when sharing ideas and knowledge with others.", axis: "x" },
  { id: 10, category: "Social and Cultural Learning", text: "I value learning through stories, lived experiences, and community discussions.", axis: "y", invert: true },
  { id: 11, category: "Social and Cultural Learning", text: "I learn best when information follows a clear, logical structure.", axis: "y" },
  { id: 12, category: "Social and Cultural Learning", text: "I find group projects more engaging than working alone.", axis: "x" },
  { id: 13, category: "Social and Cultural Learning", text: "I enjoy when knowledge is shared through stories and discussions.", axis: "y", invert: true },
  { id: 14, category: "Social and Cultural Learning", text: "I thrive in settings with clearly defined roles and expectations.", axis: "y" },

  // Learning Preferences
  { id: 15, category: "Learning Preferences", text: "I remember information best when I can practice and do things hands-on.", axis: "x", invert: true },
  { id: 16, category: "Learning Preferences", text: "I absorb knowledge best through watching, reading, or listening.", axis: "x" },
  { id: 17, category: "Learning Preferences", text: "I thrive when there's clear structure and I know what to expect.", axis: "y", invert: true },
  { id: 18, category: "Learning Preferences", text: "I prefer learning environments where I can explore freely.", axis: "y" },
  { id: 19, category: "Learning Preferences", text: "I feel engaged when I can experiment and adapt my approach.", axis: "y" },
  { id: 20, category: "Learning Preferences", text: "I prefer step-by-step guidance when learning something new.", axis: "y", invert: true },
  { id: 21, category: "Learning Preferences", text: "I thrive when I can explore topics at my own pace and in my own way.", axis: "y" },

  // Motivation and Problem-Solving
  { id: 22, category: "Motivation and Problem-Solving", text: "I'm motivated by curiosity and the joy of learning itself.", axis: "y", invert: true },
  { id: 23, category: "Motivation and Problem-Solving", text: "I'm motivated by recognition, achievements, or tangible rewards.", axis: "y" },
  { id: 24, category: "Motivation and Problem-Solving", text: "I solve problems by breaking them into smaller, logical steps.", axis: "x", invert: true },
  { id: 25, category: "Motivation and Problem-Solving", text: "I enjoy finding creative and intuitive solutions to challenges.", axis: "x" },
  { id: 26, category: "Motivation and Problem-Solving", text: "I set personal goals that guide my growth.", axis: "y", invert: true },
  { id: 27, category: "Motivation and Problem-Solving", text: "I work best with clear deadlines and external accountability.", axis: "y" },
  { id: 28, category: "Motivation and Problem-Solving", text: "I thrive when I have control over my learning or work process.", axis: "y", invert: true }
];

export default questions;