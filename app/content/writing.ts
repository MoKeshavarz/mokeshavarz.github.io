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
  | { type: "bulletList"; items: string[] }
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
    slug: "high-level-design-giving-the-solution-its-shape",
    type: "Article",
    title: "High-Level Design: Giving the Solution Its Shape",
    description: "High-Level Design turns shared understanding of a problem into the major components, responsibilities, interfaces, and data flows that give a solution its overall shape.",
    date: "2026-09-18",
    updated: "2026-09-18",
    readTime: 6,
    category: "Software Engineering",
    tags: ["High-Level Design", "System Design", "Software Architecture"],
    technologies: [],
    heroImage: {
      src: "/images/high-level-design-concept-map-focused.png",
      alt: "High-Level Design concept map showing the major components and relationships in an order-management system, the responsibilities defined at a high level, and the distinction between HLD and LLD.",
      width: 1672,
      height: 941,
    },
    introduction: [
      { type: "paragraph", text: "Once the requirements are clear enough, the next question becomes:" },
      { type: "statement", text: "What should the solution look like at a high level?" },
      { type: "paragraph", text: "That is where High-Level Design (HLD) begins.", emphasis: ["High-Level Design (HLD)"] },
      { type: "paragraph", text: "High-Level Design describes a software system at an abstract level. It identifies the major pieces of the application, their responsibilities, the environment they will run in, and how they interact—without deciding every implementation detail." },
      { type: "paragraph", text: "In simple terms:" },
      { type: "statement", text: "Requirements create shared understanding of the problem." },
      { type: "statement", text: "High-Level Design gives the solution its overall shape." },
    ],
    sections: [
      {
        id: "start-with-the-big-picture",
        heading: "Start with the big picture",
        blocks: [
          { type: "paragraph", text: "Imagine we are building an order-management system." },
          { type: "paragraph", text: "Before deciding individual classes, methods, algorithms, or database columns, we need to answer larger questions:" },
          { type: "bulletList", items: [
            "What platform should the system run on?",
            "What architecture should it use?",
            "What are the major components?",
            "Where should the data live?",
            "Which external systems must it communicate with?",
            "What are the important interfaces?",
            "How should data move between major parts of the system?",
          ] },
          { type: "paragraph", text: "These are High-Level Design decisions." },
          { type: "paragraph", text: "The purpose is to break a large application into major pieces that are easier to understand and can later be refined into detailed designs. The source describes HLD as the first step in breaking an application into pieces small enough to implement." },
        ],
      },
      {
        id: "what-does-high-level-design-define",
        heading: "What does High-Level Design define?",
        blocks: [
          { type: "paragraph", text: "HLD can include several different concerns." },
          { type: "list", items: [
            { label: "Environment", text: "The operating system, hardware platform, network, devices, and other infrastructure." },
            { label: "Architecture", text: "The overall structure of the application, such as monolithic, client/server, component-based, service-oriented, event-driven, data-centric, rule-based, or distributed architectures." },
            { label: "Major components", text: "The main subsystems, modules, databases, reporting areas, and top-level responsibilities." },
            { label: "Interfaces", text: "How major internal parts interact and which external systems the application must communicate with." },
            { label: "Data", text: "The database platform, major entities and relationships, and important data flows." },
            { label: "User interaction and outputs", text: "The general UI direction, reports, messages, files, and other system outputs." },
          ] },
          { type: "paragraph", text: "Security, configuration information, training needs, and useful UML diagrams can also be part of the high-level picture." },
          { type: "paragraph", text: "The goal is not to document every possible detail." },
          { type: "paragraph", text: "It is to describe enough of the system that the team understands what the major pieces are, what they should do, and what relationships exist between them.", emphasis: ["what the major pieces are, what they should do, and what relationships exist between them"] },
        ],
      },
      {
        id: "responsibilities-before-implementation",
        heading: "Responsibilities before implementation",
        blocks: [
          { type: "paragraph", text: "Suppose one of the major components is an Order Service.", emphasis: ["Order Service"] },
          { type: "paragraph", text: "At the high level, we might decide that it:" },
          { type: "bulletList", items: [
            "receives orders,",
            "coordinates order processing,",
            "communicates with inventory,",
            "stores order information,",
            "and triggers billing.",
          ] },
          { type: "paragraph", text: "We do not necessarily need to decide yet:", emphasis: ["not"] },
          { type: "bulletList", items: [
            "which classes will implement it,",
            "what method signatures they will expose,",
            "what algorithms they will use,",
            "or exactly how the internal code will be structured.",
          ] },
          { type: "paragraph", text: "Those decisions belong later." },
          { type: "paragraph", text: "A High-Level Design should specify what the pieces do and how they interact while including as few details as possible about how they perform their work.", emphasis: ["what the pieces do and how they interact while including as few details as possible about how they perform their work"] },
          { type: "paragraph", text: "That distinction is important." },
        ],
      },
      {
        id: "why-decomposition-matters",
        heading: "Why decomposition matters",
        blocks: [
          { type: "paragraph", text: "Breaking a large system into understandable pieces is not just about creating a cleaner diagram." },
          { type: "paragraph", text: "Clear boundaries can reduce dependencies between different parts of the system." },
          { type: "paragraph", text: "If components are sufficiently decoupled, different teams may be able to work on them simultaneously without constantly interfering with each other." },
          { type: "paragraph", text: "That does not mean that more components or more services automatically produce a better architecture.", emphasis: ["does not"] },
          { type: "statement", text: "Architecture is a design decision, not a goal by itself." },
          { type: "paragraph", text: "The right structure depends on the problem being solved." },
        ],
      },
      {
        id: "high-level-design-vs-low-level-design",
        heading: "High-Level Design vs. Low-Level Design",
        blocks: [
          { type: "paragraph", text: "The distinction becomes clearer when we compare the two stages." },
          { type: "paragraph", text: "High-Level Design asks:", emphasis: ["High-Level Design"] },
          { type: "bulletList", items: [
            "What are the major pieces?",
            "What should they do?",
            "What relationships exist between them?",
          ] },
          { type: "paragraph", text: "Low-Level Design asks:", emphasis: ["Low-Level Design"] },
          { type: "bulletList", items: [
            "How should each of those pieces actually work?",
          ] },
          { type: "paragraph", text: "The source describes HLD as painting the system in broad strokes, while LLD adds the extra detail needed before developers begin implementation." },
        ],
      },
      {
        id: "big-picture-first",
        heading: "Big picture first",
        blocks: [
          { type: "paragraph", text: "High-Level Design does not try to predict every implementation decision before development begins." },
          { type: "paragraph", text: "Its purpose is to make the major structural decisions clear enough that the rest of the system can be designed coherently." },
          { type: "statement", text: "Shared Understanding → High-Level Design → Low-Level Design" },
          { type: "paragraph", text: "The principle is simple:" },
          { type: "statement", text: "Define what the major pieces are and how they relate before deciding how each one works." },
        ],
      },
    ],
  },
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
