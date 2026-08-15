import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { books, getBook, getBookPart } from "../../../content";
import { BookDetailView } from "../book-detail";

export function generateStaticParams() { return books.flatMap((book) => (book.parts ?? []).map((part) => ({ slug: book.slug, part: part.slug }))); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string; part: string }> }): Promise<Metadata> { const { slug, part: partSlug } = await params; const book = getBook(slug); const part = getBookPart(slug, partSlug); return book && part ? { title: `${part.title} · ${book.title}`, description: part.summary } : {}; }
export default async function BookPartDetail({ params }: { params: Promise<{ slug: string; part: string }> }) { const { slug, part: partSlug } = await params; const book = getBook(slug); const part = getBookPart(slug, partSlug); if (!book || !part) notFound(); return <BookDetailView book={book} part={part} />; }
