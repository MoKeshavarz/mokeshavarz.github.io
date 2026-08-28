import Image from "next/image";
import Link from "next/link";
import { Footer, Header, PlaceholderBanner } from "../../components";
import type { Book, BookPart } from "../../content";

export function BookDetailView({ book, part }: { book: Book; part?: BookPart }) {
  const parts = book.parts ?? [];
  const partIndex = part ? parts.findIndex((item) => item.slug === part.slug) : -1;
  const previousPart = partIndex > 0 ? parts[partIndex - 1] : undefined;
  const nextPart = partIndex >= 0 && partIndex < parts.length - 1 ? parts[partIndex + 1] : undefined;
  const bookUrl = `/library/${book.slug}`;

  return <><Header /><main id="main"><article className="book-detail container">
    {part ? <Link className="back-link" href={bookUrl} data-analytics-event="select_content" data-analytics-content-type="book" data-analytics-content-id={book.slug}>{`← ${book.title} overview`}</Link> : <Link className="back-link" href="/library">← Personal library</Link>}
    <div className="book-detail-hero">
      <div className={`book-detail-cover ${!book.cover ? "book-cover-placeholder" : ""}`}>{book.cover ? <Image src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} fill sizes="(max-width: 620px) 230px, 300px" priority /> : <span><small>PLACEHOLDER COVER</small>{book.title}</span>}</div>
      <div><p className="eyebrow">{book.bookType} / {book.readingStatus}{part ? ` / Part ${String(partIndex + 1).padStart(2, "0")}` : ""}</p><h1>{part ? part.title : book.title}</h1>{part && <p className="book-part-of">From {book.title}</p>}<p className="book-detail-author">by {book.author}</p><p className="article-deck">{part ? part.summary : book.shortDescription}</p><div className="tag-row">{book.categories.map((category) => <span key={category}>{category}</span>)}</div>{book.readingStatus === "Reading" && <div className="progress-wrap large"><div className="progress-label"><span>Reading progress</span><span>{book.progress ? `${book.progress}%` : "Not recorded"}</span></div><div className="progress"><span style={{ width: `${book.progress}%` }} /></div></div>}</div>
    </div>
    {book.placeholderNotes && <PlaceholderBanner>I have added this book to my library, but the complete summary is still being written. Placeholder prompts below are ready to replace.</PlaceholderBanner>}
    <div className="book-notes">
      <aside>
        <p className="eyebrow">{parts.length ? "Book parts" : "Book record"}</p>
        {parts.length ? <nav className="book-parts-list" aria-label="Book parts"><Link href={bookUrl} aria-current={!part ? "page" : undefined} data-analytics-event="select_content" data-analytics-content-type="book" data-analytics-content-id={book.slug}>Overview</Link>{parts.map((item, index) => <Link key={item.slug} href={`${bookUrl}/${item.slug}`} aria-current={part?.slug === item.slug ? "page" : undefined} data-analytics-event="select_content" data-analytics-content-type="reading_note" data-analytics-content-id={`${book.slug}/${item.slug}`}>{String(index + 1).padStart(2, "0")} · {item.title}</Link>)}</nav> : <BookRecord book={book} />}
      </aside>
      <div>{part ? <PartContent part={part} partIndex={partIndex} /> : <BookOverview book={book} />}</div>
    </div>
    {part && <nav className="part-navigation" aria-label="Previous and next book part">
      {previousPart ? <Link href={`${bookUrl}/${previousPart.slug}`} data-analytics-event="select_content" data-analytics-content-type="reading_note" data-analytics-content-id={`${book.slug}/${previousPart.slug}`}>← <span>Previous part</span><strong>{previousPart.title}</strong></Link> : <span className="part-navigation-disabled">← <span>Previous part</span></span>}
      <Link className="all-parts-link" href={bookUrl} data-analytics-event="select_content" data-analytics-content-type="book" data-analytics-content-id={book.slug}>All parts</Link>
      {nextPart ? <Link className="part-navigation-next" href={`${bookUrl}/${nextPart.slug}`} data-analytics-event="select_content" data-analytics-content-type="reading_note" data-analytics-content-id={`${book.slug}/${nextPart.slug}`}><span>Next part</span> →<strong>{nextPart.title}</strong></Link> : <span className="part-navigation-disabled part-navigation-next"><span>Next part</span> →</span>}
    </nav>}
  </article></main><Footer /></>;
}

function BookRecord({ book }: { book: Book }) {
  return <dl><div><dt>Status</dt><dd>{book.readingStatus}</dd></div><div><dt>Type</dt><dd>{book.bookType}</dd></div><div><dt>Progress</dt><dd>{book.progress ? `${book.progress}%` : "Not recorded"}</dd></div><div><dt>Rating</dt><dd>{book.rating ? `${book.rating}/5` : "Not rated"}</dd></div></dl>;
}

function BookOverview({ book }: { book: Book }) {
  return <>
    <section><p className="eyebrow">01 / Why this book</p><h2>Why I chose it</h2><p>{book.why}</p></section>
    {book.parts?.length ? <section><p className="eyebrow">02 / Reading path</p><h2>Explore the book in parts</h2><p>Each part has its own URL, focused explanation, and place in the reading sequence.</p><div className="book-part-index">{book.parts.map((part, index) => <Link key={part.slug} href={`/library/${book.slug}/${part.slug}`} data-analytics-event="select_content" data-analytics-content-type="reading_note" data-analytics-content-id={`${book.slug}/${part.slug}`}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{part.title}</strong><p>{part.summary}</p></div><b>→</b></Link>)}</div></section> : <><section><p className="eyebrow">02 / Interpretation</p><h2>Summary in my own words</h2><p>Add a personal summary that distinguishes the author&apos;s ideas from your own interpretation.</p></section><section><p className="eyebrow">03 / Reflection</p><h2>Ideas I agree with—and question</h2><p>Record what changed your thinking, what you questioned, and what you want to revisit.</p></section><section><p className="eyebrow">04 / Application</p><h2>Connections to work and life</h2><p>Connect a useful idea to a real project, article, decision, practice, or personal experience.</p></section></>}
  </>;
}

function PartContent({ part, partIndex }: { part: BookPart; partIndex: number }) {
  return <>{part.sections.map((section, index) => <section key={section.heading}><p className="eyebrow">Part {String(partIndex + 1).padStart(2, "0")} / Section {String(index + 1).padStart(2, "0")}</p><h2>{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</>;
}
