export type BookPart = {
  slug: string;
  title: string;
  summary: string;
  sections: { heading: string; body: string[] }[];
};

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
  parts?: BookPart[];
};

export const books: Book[] = [
  {
    slug: "the-fellowship-of-the-ring",
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    cover: "/books/the-fellowship-of-the-ring.jpg",
    bookType: "Non-technical",
    readingStatus: "Reading",
    progress: 60,
    categories: ["Fiction"],
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
    progress: 50,
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
    parts: [
      {
        slug: "the-call-to-adventure",
        title: "The call to adventure",
        summary: "How an ordinary, comfortable life is interrupted by an invitation into uncertainty.",
        sections: [
          { heading: "Leaving comfort behind", body: ["Use this section to explain how the opening chapters establish comfort, reluctance, and the first step into a larger world."] },
          { heading: "Questions from this part", body: ["What makes change feel threatening? Which relationships help someone act before they feel completely ready?"] },
        ],
      },
      {
        slug: "tests-and-transformation",
        title: "Tests and transformation",
        summary: "A focused explanation of the challenges, choices, and discoveries that gradually reshape the protagonist.",
        sections: [
          { heading: "Learning through difficulty", body: ["Explain the important trials in this portion of the story and how they expose abilities the character did not recognize before."] },
          { heading: "A changing sense of self", body: ["Record the moments that reveal a growing difference between the person who began the journey and the person now facing its consequences."] },
        ],
      },
      {
        slug: "return-and-reflection",
        title: "Return and reflection",
        summary: "What the ending says about home, growth, loss, and returning with a changed perspective.",
        sections: [
          { heading: "The meaning of returning", body: ["Describe why returning to a familiar place does not necessarily restore the life that existed before the journey."] },
          { heading: "My final reflection", body: ["Add your interpretation of the book as a whole, including the ideas that stayed with you after finishing it."] },
        ],
      },
    ],
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
    parts: [
      {
        slug: "foundations",
        title: "Foundations and core ideas",
        summary: "A place to explain the book's foundational concepts before moving into detailed applications.",
        sections: [
          { heading: "Central argument", body: ["Replace this paragraph with your explanation of the central argument in this part of the book."] },
          { heading: "Important concepts", body: ["Document the concepts, examples, and questions that deserve a focused explanation."] },
        ],
      },
      {
        slug: "application-and-reflection",
        title: "Application and reflection",
        summary: "Connections between the ideas in the book, practical engineering work, and personal experience.",
        sections: [
          { heading: "Applying the ideas", body: ["Explain where these ideas apply, where they do not, and which trade-offs matter in practice."] },
          { heading: "My reflection", body: ["Record what changed your thinking, what you disagree with, and what you want to revisit."] },
        ],
      },
    ],
  },
];

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function getBookPart(bookSlug: string, partSlug: string) {
  return getBook(bookSlug)?.parts?.find((part) => part.slug === partSlug);
}
