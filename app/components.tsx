import Link from "next/link";
import Image from "next/image";
import { books, formatDate, profile, projects, writing, type Book, type Project, type Writing } from "./content";
import { CopyEmail, GithubActivity, SiteHeader } from "./client";

export function Header() { return <SiteHeader name={profile.displayName} initials={profile.initials} github={profile.github} />; }

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><Link className="brand footer-brand" href="/"><span>{profile.initials}</span>{profile.name}</Link><p>Built as a connected record of what I create, study, and learn.</p></div>
        <nav aria-label="Footer navigation"><Link href="/experience">Experience</Link><Link href="/projects">Projects</Link><Link href="/writing">Writing</Link><Link href="/library">Library</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
        <div className="footer-meta"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={`mailto:${profile.email}`} data-analytics-event="contact_click" data-analytics-location="footer">{profile.email}</a><a href="/rss.xml">RSS</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 {profile.name}</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}

export function PageIntro({ label, title, text, aside }: { label: string; title: string; text: string; aside?: React.ReactNode }) {
  return <section className="page-intro container"><div><p className="eyebrow">{label}</p><h1>{title}</h1><p className="page-lede">{text}</p></div>{aside && <aside>{aside}</aside>}</section>;
}

export function SectionHeading({ label, title, text, link }: { label: string; title: string; text?: string; link?: { href: string; label: string } }) {
  return <div className="section-heading"><div><p className="eyebrow">{label}</p><h2>{title}</h2></div><div>{text && <p>{text}</p>}{link && <Link className="text-link" href={link.href}>{link.label} <span>↗</span></Link>}</div></div>;
}

function HeroSystemField() {
  return <div className="hero-system-field" aria-hidden="true">
    <span className="system-arc system-arc-outer" />
    <span className="system-arc system-arc-inner" />
    <span className="system-line system-line-primary" />
    <span className="system-line system-line-secondary" />
    <span className="system-line system-line-tertiary" />
    <i className="system-node system-node-one" />
    <i className="system-node system-node-two" />
    <i className="system-node system-node-three" />
  </div>;
}

export function HeroPortrait() {
  return <div className="hero-portrait-stage"><HeroSystemField /><picture className="hero-portrait-picture"><img src="/images/hero-editorial.webp" width="1400" height="1160" alt="Mohamad Keshavarz working at a desk with a laptop and system-design sketches" fetchPriority="high" decoding="async" /></picture><div className="hero-system-foreground" aria-hidden="true"><span /><i /></div></div>;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card project-card-${index + 1}`}>
    <div className="project-card-top"><p className="eyebrow">{project.eyebrow}</p><span className="status-label">{project.status}</span></div>
    <div className="project-system" aria-label={`System flow for ${project.title}`}>{project.systems.map((system, systemIndex) => <span key={system}>{system}{systemIndex < project.systems.length - 1 && <i aria-hidden="true">→</i>}</span>)}</div>
    <h3>{project.title}</h3><p>{project.context}</p>
    <dl><div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>Responsibility</dt><dd>{project.responsibility}</dd></div></dl>
    <div className="tag-row">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
    <Link className="card-link" href={`/projects/${project.slug}`} data-analytics-event="select_content" data-analytics-content-type="project" data-analytics-content-id={project.slug}>Read the case study <span>↗</span></Link>
  </article>;
}

export function WritingCard({ item }: { item: Writing }) {
  const contentType = item.type === "Learning Note" ? "learning_note" : item.type === "Book Summary" ? "book_summary" : "article";
  return <article className="writing-card"><div className="writing-meta"><span>{item.type}</span><time dateTime={item.date}>{formatDate(item.date)}</time></div><h3><Link href={`/writing/${item.slug}`} data-analytics-event="select_content" data-analytics-content-type={contentType} data-analytics-content-id={item.slug}>{item.title}</Link></h3><p>{item.description}</p><div className="writing-footer"><span>{item.readTime} min read</span><span>{item.category}</span><Link href={`/writing/${item.slug}`} aria-label={`Read ${item.title}`} data-analytics-event="select_content" data-analytics-content-type={contentType} data-analytics-content-id={item.slug}>↗</Link></div></article>;
}

export function BookCard({ book }: { book: Book }) {
  return <article className="book-card"><Link className={`book-cover ${!book.cover ? "book-cover-placeholder" : ""}`} href={`/library/${book.slug}`} data-analytics-event="select_content" data-analytics-content-type="book" data-analytics-content-id={book.slug}>{book.cover ? <Image src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} fill sizes="(max-width: 620px) 115px, 185px" /> : <span><small>PLACEHOLDER COVER</small>{book.title}</span>}<b>{book.readingStatus}</b></Link><div className="book-card-body"><p className="book-kind">{book.bookType} · {book.categories.join(" / ")}</p><h3><Link href={`/library/${book.slug}`} data-analytics-event="select_content" data-analytics-content-type="book" data-analytics-content-id={book.slug}>{book.title}</Link></h3><p className="book-author">{book.author}</p><p>{book.shortDescription}</p>{book.readingStatus === "Reading" && <div className="progress-wrap"><div className="progress-label"><span>Reading progress</span><span>{book.progress ? `${book.progress}%` : "Not recorded"}</span></div><div className="progress"><span style={{ width: `${book.progress}%` }} /></div></div>}<Link className="text-link" href={`/library/${book.slug}`} data-analytics-event="select_content" data-analytics-content-type="book" data-analytics-content-id={book.slug}>Open reading notes <span>↗</span></Link></div></article>;
}

export function ContactBand() {
  return <section className="contact-band"><div className="container"><p className="eyebrow">Start a conversation</p><h2>Have an interesting problem to solve? Let&apos;s build something thoughtful.</h2><div className="contact-actions"><a className="button button-light" href={`mailto:${profile.email}`} data-analytics-event="contact_click" data-analytics-location="home">Send an email <span>↗</span></a><CopyEmail email={profile.email} location="home" /></div></div></section>;
}

export function GithubSection() { return <GithubActivity username={profile.githubUsername} profileUrl={profile.github} />; }

export function PlaceholderBanner({ children = "Demonstration content — replace with verified personal information before publishing." }: { children?: React.ReactNode }) {
  return <div className="placeholder-banner" role="note"><span aria-hidden="true">!</span><p>{children}</p></div>;
}

export function RelatedLinks({ writingSlugs = [], bookSlugs = [] }: { writingSlugs?: string[]; bookSlugs?: string[] }) {
  const relatedWriting = writing.filter((item) => writingSlugs.includes(item.slug));
  const relatedBooks = books.filter((item) => bookSlugs.includes(item.slug));
  if (!relatedWriting.length && !relatedBooks.length) return null;
  return <section className="related"><p className="eyebrow">Connected records</p><h2>Keep following the thread.</h2><div>{relatedWriting.map((item) => { const contentType = item.type === "Learning Note" ? "learning_note" : item.type === "Book Summary" ? "book_summary" : "article"; return <Link key={item.slug} href={`/writing/${item.slug}`} data-analytics-event="select_content" data-analytics-content-type={contentType} data-analytics-content-id={item.slug}>Related writing <span>{item.title} ↗</span></Link>; })}{relatedBooks.map((book) => <Link key={book.slug} href={`/library/${book.slug}`} data-analytics-event="select_content" data-analytics-content-type="book" data-analytics-content-id={book.slug}>Related book <span>{book.title} ↗</span></Link>)}</div></section>;
}

export const selectedProjects = projects.slice(0, 2);
