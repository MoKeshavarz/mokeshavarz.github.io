import Link from "next/link";
import Image from "next/image";
import { books, formatDate, profile, projects, type Book, type Project, type Writing } from "./content";
import { CopyEmail, GithubActivity, SiteHeader } from "./client";

export function Header() { return <SiteHeader name={profile.displayName} initials={profile.initials} github={profile.github} />; }

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><Link className="brand footer-brand" href="/"><span>{profile.initials}</span>{profile.name}</Link><p>Built as a connected record of what I create, study, and learn.</p></div>
        <nav aria-label="Footer navigation"><Link href="/projects">Projects</Link><Link href="/writing">Writing</Link><Link href="/library">Library</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav>
        <div className="footer-meta"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={`mailto:${profile.email}`}>{profile.email}</a><a href="/rss.xml">RSS</a></div>
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

function OrchestrationHalo() {
  return <svg className="orchestration-halo" viewBox="0 0 640 640" aria-hidden="true" focusable="false">
    <g className="halo-primary">
      <circle className="halo-ring halo-ring-inner" cx="320" cy="320" r="158" />
      <circle className="halo-ring halo-ring-middle" cx="320" cy="320" r="222" />
      <circle className="halo-ring halo-ring-outer" cx="320" cy="320" r="284" />
      <path className="halo-dependency" d="M320 162V104H410V48" />
      <path className="halo-dependency" d="M478 320H544V238H606" />
      <path className="halo-dependency" d="M432 432L500 500H588" />
      <path className="halo-dependency" d="M208 432L140 500H52" />
      <path className="halo-dependency" d="M162 320H94V230H36" />
      <path className="halo-dependency" d="M208 208L142 142H64" />
      <path className="halo-bridge halo-detail" d="M320 98H238V54M542 320V402H596M320 542H404V596M98 320V402H44" />
    </g>
    <g className="halo-modules">
      <rect x="307" y="89" width="26" height="18" />
      <rect x="398" y="39" width="24" height="18" />
      <rect x="533" y="307" width="20" height="26" />
      <rect x="594" y="226" width="22" height="24" />
      <rect x="488" y="488" width="24" height="24" />
      <rect x="576" y="488" width="25" height="24" />
      <rect x="128" y="488" width="24" height="24" />
      <rect x="39" y="488" width="25" height="24" />
      <rect x="83" y="307" width="22" height="26" />
      <rect x="24" y="218" width="24" height="24" />
      <rect x="130" y="130" width="24" height="24" />
      <rect x="50" y="130" width="26" height="24" />
      <rect className="halo-detail" x="226" y="43" width="24" height="22" />
      <rect className="halo-detail" x="584" y="390" width="24" height="22" />
      <rect className="halo-detail" x="392" y="584" width="24" height="22" />
      <rect className="halo-detail" x="32" y="390" width="24" height="22" />
    </g>
    <g className="halo-junctions">
      <circle cx="320" cy="162" r="5" /><circle cx="478" cy="320" r="5" /><circle cx="432" cy="432" r="5" /><circle cx="208" cy="432" r="5" /><circle cx="162" cy="320" r="5" /><circle cx="208" cy="208" r="5" />
    </g>
    <g className="halo-active">
      <path className="halo-signal" d="M478 320H544V238H606" />
      <path className="halo-signal halo-signal-delayed" d="M208 432L140 500H52" />
      <circle cx="544" cy="238" r="6" /><circle cx="140" cy="500" r="6" />
    </g>
  </svg>;
}

export function HeroPortrait() {
  return <div className="hero-portrait-stage"><OrchestrationHalo /><div className="portrait-labels" aria-hidden="true"><span className="portrait-label label-learn">01 / Learn</span><span className="portrait-label label-design">02 / Design</span><span className="portrait-label label-integrate">03 / Integrate</span><span className="portrait-label label-build">04 / Build</span></div><picture className="hero-portrait-picture"><source media="(max-width: 620px)" srcSet="/images/hero-portrait-mobile.webp" /><img src="/images/hero-portrait.webp" width="1122" height="1256" alt="Mohamad Keshavarz sketching a system design at his desk" fetchPriority="high" decoding="async" /></picture><p className="portrait-caption"><span>WORKFLOW / 01</span> Turning questions into connected, useful systems.</p></div>;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className={`project-card project-card-${index + 1}`}>
    <div className="project-card-top"><p className="eyebrow">{project.eyebrow}</p><span className="status-label">{project.status}</span></div>
    <div className="project-system" aria-label={`System flow for ${project.title}`}>{project.systems.map((system, systemIndex) => <span key={system}>{system}{systemIndex < project.systems.length - 1 && <i aria-hidden="true">→</i>}</span>)}</div>
    <h3>{project.title}</h3><p>{project.description}</p>
    <dl><div><dt>Challenge</dt><dd>{project.challenge}</dd></div><div><dt>Approach</dt><dd>{project.approach}</dd></div></dl>
    <div className="tag-row">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
    <Link className="card-link" href={`/projects/${project.slug}`}>Read the case-study structure <span>↗</span></Link>
  </article>;
}

export function WritingCard({ item }: { item: Writing }) {
  return <article className="writing-card"><div className="writing-meta"><span>{item.type}</span><time dateTime={item.date}>{formatDate(item.date)}</time></div><h3><Link href={`/writing/${item.slug}`}>{item.title}</Link></h3><p>{item.description}</p><div className="writing-footer"><span>{item.readTime} min read</span><span>{item.category}</span><Link href={`/writing/${item.slug}`} aria-label={`Read ${item.title}`}>↗</Link></div></article>;
}

export function BookCard({ book }: { book: Book }) {
  return <article className="book-card"><Link className={`book-cover ${!book.cover ? "book-cover-placeholder" : ""}`} href={`/library/${book.slug}`}>{book.cover ? <Image src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} fill sizes="(max-width: 620px) 115px, 185px" /> : <span><small>PLACEHOLDER COVER</small>{book.title}</span>}<b>{book.readingStatus}</b></Link><div className="book-card-body"><p className="book-kind">{book.bookType} · {book.categories.join(" / ")}</p><h3><Link href={`/library/${book.slug}`}>{book.title}</Link></h3><p className="book-author">{book.author}</p><p>{book.shortDescription}</p>{book.readingStatus === "Reading" && <div className="progress-wrap"><div className="progress-label"><span>Reading progress</span><span>{book.progress ? `${book.progress}%` : "Not recorded"}</span></div><div className="progress"><span style={{ width: `${book.progress}%` }} /></div></div>}<Link className="text-link" href={`/library/${book.slug}`}>Open reading notes <span>↗</span></Link></div></article>;
}

export function ContactBand() {
  return <section className="contact-band"><div className="container"><p className="eyebrow">Start a conversation</p><h2>Have an interesting problem to solve? Let&apos;s build something thoughtful.</h2><div className="contact-actions"><a className="button button-light" href={`mailto:${profile.email}`}>Send an email <span>↗</span></a><CopyEmail email={profile.email} /></div></div></section>;
}

export function GithubSection() { return <GithubActivity username={profile.githubUsername} profileUrl={profile.github} />; }

export function PlaceholderBanner({ children = "Demonstration content — replace with verified personal information before publishing." }: { children?: React.ReactNode }) {
  return <div className="placeholder-banner" role="note"><span aria-hidden="true">!</span><p>{children}</p></div>;
}

export function RelatedLinks({ writingSlugs = [], bookSlugs = [] }: { writingSlugs?: string[]; bookSlugs?: string[] }) {
  const relatedWriting = writingSlugs;
  const relatedBooks = books.filter((item) => bookSlugs.includes(item.slug));
  if (!relatedWriting.length && !relatedBooks.length) return null;
  return <section className="related"><p className="eyebrow">Connected records</p><h2>Keep following the thread.</h2><div>{relatedWriting.map((slug) => <Link key={slug} href={`/writing/${slug}`}>Related writing <span>{slug.replaceAll("-", " ")} ↗</span></Link>)}{relatedBooks.map((book) => <Link key={book.slug} href={`/library/${book.slug}`}>Related book <span>{book.title} ↗</span></Link>)}</div></section>;
}

export const selectedProjects = projects.slice(0, 2);
