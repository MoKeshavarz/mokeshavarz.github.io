export const profile = {
  name: "Ario Keshavarz",
  initials: "AK",
  role: "Software engineer",
  location: "Tehran, Iran · Available worldwide",
  email: "hello@ariokeshavarz.dev",
  github: "https://github.com/MoKeshavarz",
  githubUsername: "MoKeshavarz",
  linkedin: "",
  introduction:
    "I build web applications by bringing systems, services, and ideas together. I document my projects, engineering decisions, reading journey, and the lessons I discover through technology, books, sports, and music.",
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  role: string;
  challenge: string;
  approach: string;
  systems: string[];
  technologies: string[];
  outcome: string;
  learning: string;
  status: string;
  placeholder: boolean;
  repository?: string;
  liveUrl?: string;
  relatedWriting: string[];
  relatedBooks: string[];
};

export const projects: Project[] = [
  {
    slug: "connected-product-workflow",
    title: "Connected product workflow",
    eyebrow: "Placeholder project 01",
    description: "Replace this entry with a real project and the problem it addressed.",
    role: "Add your real role and responsibilities.",
    challenge: "Describe the main engineering constraint or difficult decision.",
    approach: "Explain how the system was designed, tested, and delivered.",
    systems: ["Interface", "Application", "Data", "External service"],
    technologies: ["Replace", "With", "Real technologies"],
    outcome: "Add a verified outcome, or remove this field.",
    learning: "Document one honest lesson, trade-off, or open question.",
    status: "Replace with real status",
    placeholder: true,
    relatedWriting: ["choosing-a-system-boundary"],
    relatedBooks: ["a-philosophy-of-software-design"],
  },
  {
    slug: "service-integration-case-study",
    title: "Service integration case study",
    eyebrow: "Placeholder project 02",
    description: "Replace this entry with a real application that connected multiple services.",
    role: "Add your real contribution and team context.",
    challenge: "Explain the constraints: time, scale, security, reliability, or maintainability.",
    approach: "Record the decision, alternatives considered, and why the chosen path fit.",
    systems: ["Authentication", "Database", "Notifications", "Deployment"],
    technologies: ["Replace", "With", "Real integrations"],
    outcome: "Use a verified result only—never a sample metric.",
    learning: "Describe what you would keep or change next time.",
    status: "Replace with real status",
    placeholder: true,
    relatedWriting: ["the-quiet-work-of-integration"],
    relatedBooks: [],
  },
];

export type Writing = {
  slug: string;
  type: "Article" | "Case Study" | "Learning Note" | "Book Summary";
  title: string;
  description: string;
  date: string;
  updated: string;
  readTime: number;
  category: string;
  tags: string[];
  technologies: string[];
  placeholder: boolean;
  note?: string;
  sections: { heading: string; body: string[] }[];
  relatedProject?: string;
  relatedBook?: string;
};

export const writing: Writing[] = [
  {
    slug: "choosing-a-system-boundary",
    type: "Article",
    title: "Choosing a system boundary",
    description: "A replaceable technical-article example about making responsibilities visible.",
    date: "2026-07-18",
    updated: "2026-07-18",
    readTime: 6,
    category: "System Design",
    tags: ["architecture", "decisions"],
    technologies: ["Replace with real technologies"],
    placeholder: true,
    note: "Placeholder article — replace this demonstration with your own verified experience.",
    relatedProject: "connected-product-workflow",
    relatedBook: "a-philosophy-of-software-design",
    sections: [
      { heading: "Context", body: ["Describe the real product context, the people involved, and why the boundary mattered."] },
      { heading: "The decision", body: ["Record the alternatives you considered, the evidence available, and the trade-off you accepted."] },
      { heading: "What I learned", body: ["Explain what the result changed in your understanding. Be clear about what remains uncertain."] },
    ],
  },
  {
    slug: "the-quiet-work-of-integration",
    type: "Case Study",
    title: "The quiet work of integration",
    description: "A placeholder case-study structure for documenting real engineering work.",
    date: "2026-06-02",
    updated: "2026-06-02",
    readTime: 8,
    category: "Engineering",
    tags: ["integration", "reliability"],
    technologies: ["Replace with real services"],
    placeholder: true,
    note: "Placeholder case study — add real constraints, decisions, and outcomes before publishing.",
    relatedProject: "service-integration-case-study",
    sections: [
      { heading: "Problem and constraints", body: ["Replace this with the real problem. Generalize confidential details where necessary."] },
      { heading: "Systems connected", body: ["Describe the request or data flow and the responsibility of each real system."] },
      { heading: "Outcome and trade-offs", body: ["Add only measured outcomes. Include limitations, mistakes, and future improvements."] },
    ],
  },
  {
    slug: "questions-before-adding-a-service",
    type: "Learning Note",
    title: "Questions before adding a service",
    description: "A short, evolving note format for a concept still being explored.",
    date: "2026-04-11",
    updated: "2026-04-11",
    readTime: 3,
    category: "Learning",
    tags: ["services", "trade-offs"],
    technologies: [],
    placeholder: true,
    note: "Learning Note — an evolving explanation based on my current understanding. Placeholder content.",
    sections: [
      { heading: "Current understanding", body: ["Today I learned that every new service adds an operational relationship, not only a capability."] },
      { heading: "Questions to investigate", body: ["What happens when it is slow? Who owns the fallback? Which data crosses the boundary? I still need to test these questions against a real implementation."] },
    ],
  },
];

export type Book = {
  slug: string;
  title: string;
  author: string;
  cover: string;
  bookType: "Technical" | "Non-technical";
  readingStatus: "Reading" | "Finished" | "To Read" | "Paused";
  progress: number;
  categories: string[];
  shortDescription: string;
  why: string;
  takeaways: string[];
  rating?: number;
  dateStarted?: string;
  dateFinished?: string;
  placeholderNotes?: boolean;
};

export const books: Book[] = [
  {
    slug: "the-fellowship-of-the-ring",
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    cover: "/books/the-fellowship-of-the-ring.jpg",
    bookType: "Non-technical",
    readingStatus: "Reading",
    progress: 0,
    categories: ["Fiction", "Creativity"],
    shortDescription: "Currently reading. Personal notes have not been added yet.",
    why: "Add a personal explanation for choosing this book.",
    takeaways: [],
    placeholderNotes: true,
  },
  {
    slug: "sword-of-destiny",
    title: "Sword of Destiny",
    author: "Andrzej Sapkowski",
    cover: "/books/sword-of-destiny.jpg",
    bookType: "Non-technical",
    readingStatus: "Reading",
    progress: 0,
    categories: ["Fiction"],
    shortDescription: "Currently reading. Progress and reflections have not been added yet.",
    why: "Add a personal explanation for choosing this book.",
    takeaways: [],
    placeholderNotes: true,
  },
  {
    slug: "the-hobbit",
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    cover: "/books/the-hobbit.jpg",
    bookType: "Non-technical",
    readingStatus: "Finished",
    progress: 100,
    categories: ["Fiction", "Creativity"],
    shortDescription: "Finished. A complete personal summary is still being written.",
    why: "Add the real reason you chose this book.",
    takeaways: [],
    placeholderNotes: true,
  },
  {
    slug: "the-last-wish",
    title: "The Last Wish",
    author: "Andrzej Sapkowski",
    cover: "/books/the-last-wish.jpg",
    bookType: "Non-technical",
    readingStatus: "Finished",
    progress: 100,
    categories: ["Fiction"],
    shortDescription: "Finished. A complete personal summary is still being written.",
    why: "Add the real reason you chose this book.",
    takeaways: [],
    placeholderNotes: true,
  },
  {
    slug: "a-philosophy-of-software-design",
    title: "Technical book title",
    author: "Replace with the real author",
    cover: "",
    bookType: "Technical",
    readingStatus: "To Read",
    progress: 0,
    categories: ["Software Engineering", "Architecture"],
    shortDescription: "Placeholder technical book used to demonstrate the library structure.",
    why: "Add a personal explanation.",
    takeaways: [],
    placeholderNotes: true,
  },
];

export const capabilities = [
  { number: "01", title: "System design", detail: "Finding useful boundaries and making relationships explicit." },
  { number: "02", title: "Product thinking", detail: "Connecting technical choices to the problem a product must solve." },
  { number: "03", title: "C# & Blazor", detail: "Building maintainable application flows across interface and domain logic." },
  { number: "04", title: "SQL Server", detail: "Designing data models and queries with clarity and reliability in mind." },
];

export const interests = [
  { type: "Sport", title: "Table tennis", text: "Fast feedback, precise control, and attention under pressure." },
  { type: "Sport", title: "Football & training", text: "Consistency, resilience, teamwork, and progressive practice." },
  { type: "Music", title: "Classical & Persian music", text: "Structure, timing, heritage, emotional range, and careful listening." },
  { type: "Music", title: "Film scores", text: "How rhythm and themes coordinate individual moments into a whole." },
];

export const experiencePlaceholder = {
  title: "Experience details are being documented",
  text: "Add verified roles, responsibilities, dates, and outcomes here. Until then, the portfolio avoids presenting sample history as fact.",
};

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" }).format(new Date(`${value}T00:00:00`));
}

export function getProject(slug: string) { return projects.find((item) => item.slug === slug); }
export function getWriting(slug: string) { return writing.find((item) => item.slug === slug); }
export function getBook(slug: string) { return books.find((item) => item.slug === slug); }
