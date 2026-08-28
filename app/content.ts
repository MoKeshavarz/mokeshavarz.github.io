export { profile } from "./content/profile";
export { experiences, getExperience, type Experience, type NarrativeSection } from "./content/experience";
export { projects, featuredProjects, getProject, type Project } from "./content/projects";
export { writing, writingDrafts, getWriting, type Writing, type WritingDraft } from "./content/writing";
export { books, getBook, getBookPart, type Book, type BookPart } from "./content/books";
export { capabilities, interests } from "./content/misc";

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" }).format(new Date(`${value}T00:00:00`));
}
