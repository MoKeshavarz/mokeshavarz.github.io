export type Writing = {
  slug: string;
  type: "Article" | "Learning Note" | "Book Summary";
  title: string;
  description: string;
  date: string;
  updated: string;
  readTime: number;
  category: string;
  tags: string[];
  technologies: string[];
  heroImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  introduction: WritingBlock[];
  sections: WritingSection[];
  relatedProject?: string;
  relatedExperience?: string;
  relatedBook?: string;
};

export type WritingBlock =
  | { type: "paragraph"; text: string; emphasis?: string[] }
  | { type: "quote"; text: string }
  | { type: "statement"; text: string }
  | { type: "list"; items: { label: string; text: string }[] }
  | { type: "sequence"; steps: { value: string; label: string }[]; total: string };

export type WritingSection = {
  id: string;
  heading: string;
  blocks: WritingBlock[];
};

export type WritingDraft = {
  slug: string;
  title: string;
  relatedExperience?: string;
  relatedProject?: string;
};

// Ideas are kept separate from public writing so unfinished pages are never exported.
export const writingDrafts: WritingDraft[] = [
  { slug: "the-graveyard-of-abandoned-applications", title: "The Graveyard of Abandoned Applications", relatedExperience: "c1station", relatedProject: "dynamic-cms-form-generator" },
  { slug: "tests-give-you-permission-to-change-software", title: "Tests Give You Permission to Change Software", relatedExperience: "geeks", relatedProject: "wordup-product-features" },
  { slug: "when-an-mvp-stops-being-an-mvp", title: "When an MVP Stops Being an MVP", relatedExperience: "supplysustain", relatedProject: "supplysustain-tender-draft-workflow" },
  { slug: "sometimes-the-right-decision-is-less-technology", title: "Sometimes the Right Technical Decision Is Not to Add the Technology", relatedExperience: "independent-consulting" },
  { slug: "reliability-is-part-of-ux", title: "Reliability Is Part of UX", relatedExperience: "independent-consulting", relatedProject: "mhelli-platform-recovery" },
  { slug: "code-is-replaceable-direction-is-harder", title: "Code Is Replaceable. Direction Is Harder to Replace.", relatedExperience: "independent-consulting", relatedProject: "mhelli-platform-recovery" },
];

export const writing: Writing[] = [
  {
    slug: "clarity-before-code-why-requirements-gathering-matters",
    type: "Article",
    title: "Clarity Before Code: Why Requirements Gathering Matters",
    description: "Requirements gathering reduces avoidable uncertainty by separating requested solutions from underlying needs before misunderstandings become architecture and code.",
    date: "2026-09-05",
    updated: "2026-09-05",
    readTime: 5,
    category: "Software Engineering",
    tags: ["Requirements Gathering", "System Design", "Product Discovery"],
    technologies: [],
    heroImage: {
      src: "/images/requirements-gathering-portfolio-final-v3.png",
      alt: "Concept map showing how requirements discovery creates shared understanding, how misunderstandings propagate, and how intentional change differs from accidental drift.",
      width: 3072,
      height: 2048,
    },
    introduction: [
      { type: "paragraph", text: "A software team can write clean code, choose a solid architecture, and still fail for a simple reason:" },
      { type: "statement", text: "It misunderstood the problem." },
      { type: "paragraph", text: "That is why requirements gathering matters." },
      { type: "paragraph", text: "Requirements gathering is not simply collecting a list of features. It is the process of understanding what users and customers want, what they actually need, and what the system is expected to achieve." },
      { type: "paragraph", text: "The goal is to create enough shared understanding that the team can start making good design decisions." },
    ],
    sections: [
      {
        id: "request-is-not-always-a-requirement",
        heading: "A request is not always a requirement",
        blocks: [
          { type: "paragraph", text: "Imagine someone says:" },
          { type: "quote", text: "We need a dashboard with five charts." },
          { type: "paragraph", text: "That sounds specific, but it still leaves an important question unanswered:" },
          { type: "statement", text: "Why?" },
          { type: "paragraph", text: "Maybe managers need to identify overdue orders quickly." },
          { type: "paragraph", text: "If that is the real problem, five charts might be the right solution—or a searchable table with alerts might work better." },
          { type: "paragraph", text: "Requirements gathering helps separate the requested solution from the underlying need.", emphasis: ["requested solution", "underlying need"] },
          { type: "paragraph", text: "Useful questions usually include:" },
          { type: "list", items: [
            { label: "Who", text: "will use the system?" },
            { label: "What", text: "are they trying to achieve?" },
            { label: "Why", text: "do they need it?" },
            { label: "When and where", text: "will they use it?" },
            { label: "How", text: "do they handle the process today?" },
          ] },
          { type: "paragraph", text: "The answers often reveal constraints and assumptions that were not obvious at the beginning." },
        ],
      },
      {
        id: "good-requirements-reduce-ambiguity",
        heading: "Good requirements reduce ambiguity",
        blocks: [
          { type: "paragraph", text: "A requirement such as:" },
          { type: "quote", text: "The system should be fast." },
          { type: "paragraph", text: "is difficult to design for and almost impossible to verify." },
          { type: "statement", text: "What does fast mean?" },
          { type: "paragraph", text: "A better requirement might define an expected response time, workload, or measurable threshold." },
          { type: "paragraph", text: "Good requirements should generally be:" },
          { type: "list", items: [
            { label: "Clear", text: "understandable by everyone involved." },
            { label: "Unambiguous", text: "not open to several reasonable interpretations." },
            { label: "Consistent", text: "not conflicting with other requirements." },
            { label: "Prioritized", text: "because not everything has equal importance." },
            { label: "Verifiable", text: "so we can eventually determine whether it was satisfied." },
          ] },
          { type: "paragraph", text: "The objective is not excessive documentation. It is reducing uncertainty where uncertainty can create different engineering decisions." },
        ],
      },
      {
        id: "small-misunderstandings-can-propagate",
        heading: "Small misunderstandings can propagate",
        blocks: [
          { type: "paragraph", text: "Consider a simplified example:" },
          { type: "sequence", steps: [
            { value: "1", label: "misunderstood requirement" },
            { value: "2", label: "potentially wrong high-level design decisions" },
            { value: "4", label: "potentially wrong low-level design decisions" },
            { value: "8", label: "potentially wrong implementation decisions" },
          ], total: "1 + 2 + 4 + 8 = 15 potentially affected decisions." },
          { type: "paragraph", text: "Real systems do not behave this neatly." },
          { type: "paragraph", text: "But the principle is useful:" },
          { type: "statement", text: "Mistakes propagate." },
          { type: "paragraph", text: "A misunderstanding found during requirements discussions may require changing a sentence and having another conversation." },
          { type: "paragraph", text: "The same misunderstanding discovered after APIs, database structures, business logic, tests, and user interfaces have been built around it can become much more expensive to correct." },
          { type: "paragraph", text: "The original mistake did not necessarily become worse." },
          { type: "statement", text: "Its impact became larger." },
        ],
      },
      {
        id: "requirements-are-allowed-to-change",
        heading: "Requirements are allowed to change",
        blocks: [
          { type: "paragraph", text: "Requirements gathering does not mean predicting everything before development starts." },
          { type: "statement", text: "Requirements will change." },
          { type: "paragraph", text: "Users understand their needs better after seeing software. Engineers discover technical constraints. Business priorities change." },
          { type: "paragraph", text: "The important distinction is between requirements that change intentionally and requirements that drift accidentally.", emphasis: ["change intentionally", "drift accidentally"] },
          { type: "paragraph", text: "Changes should be discussed, understood, recorded, and evaluated for their impact." },
        ],
      },
      {
        id: "clarity-before-code",
        heading: "Clarity before code",
        blocks: [
          { type: "paragraph", text: "Requirements gathering does not guarantee that a project will succeed." },
          { type: "paragraph", text: "Its purpose is simpler:" },
          { type: "statement", text: "Reduce avoidable uncertainty before that uncertainty becomes architecture and code." },
          { type: "paragraph", text: "The earlier a misunderstanding is discovered, the easier it usually is to correct." },
          { type: "paragraph", text: "Once we understand what problem the system needs to solve, the next question becomes:", emphasis: ["what problem the system needs to solve"] },
          { type: "statement", text: "How should we structure the solution?" },
          { type: "paragraph", text: "That is where High-Level Design begins.", emphasis: ["High-Level Design"] },
        ],
      },
    ],
  },
];

export function getWriting(slug: string) {
  return writing.find((item) => item.slug === slug);
}
