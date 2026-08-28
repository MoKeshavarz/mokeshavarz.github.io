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
  sections: { heading: string; body: string[] }[];
  relatedProject?: string;
  relatedExperience?: string;
  relatedBook?: string;
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

export const writing: Writing[] = [];

export function getWriting(slug: string) {
  return writing.find((item) => item.slug === slug);
}
