import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { books, getBook } from "../../content";
import { BookDetailView } from "./book-detail";

export function generateStaticParams() { return books.map((book) => ({ slug: book.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const book = getBook(slug); return book ? { title: `${book.title} · Library`, description: book.shortDescription } : {}; }
export default async function BookDetail({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const book = getBook(slug); if (!book) notFound(); return <BookDetailView book={book} />; }
