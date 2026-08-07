"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Book, Writing } from "./content";

const navigation = [
  ["Home", "/"], ["Projects", "/projects"], ["Writing", "/writing"], ["Library", "/library"], ["Experience", "/experience"], ["About", "/about"], ["Contact", "/contact"],
];

export function SiteHeader({ name, initials, github }: { name: string; initials: string; github: string }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggleTheme = () => {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  };
  return <header className="site-header" id="top"><a className="skip-link" href="#main">Skip to content</a><div className="container header-inner"><Link className="brand" href="/" onClick={() => setOpen(false)}><span>{initials}</span>{name}</Link><nav className={open ? "nav-open" : ""} aria-label="Primary navigation" id="primary-navigation">{navigation.map(([label, href]) => { const active = href === "/" ? path === "/" : path.startsWith(href); return <Link key={href} href={href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>; })}<a className="github-link" href={github} target="_blank" rel="noreferrer">GitHub ↗</a></nav><div className="header-actions"><button className="icon-button theme-button" type="button" onClick={toggleTheme} aria-label="Toggle color theme" title="Change theme">◐</button><button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><span>{open ? "Close" : "Menu"}</span><i aria-hidden="true" /></button></div></div></header>;
}

export function HeroShowcase({ introduction, displayName, location }: { introduction: string; displayName: string; location: string }) {
  return <section className="hero container hero--full" aria-label="Introduction">
    <div className="hero-copy">
      <p className="eyebrow"><span className="signal-dot" /> The Curious Orchestrator</p>
      <h1>Software engineer building connected systems—and documenting what I learn.</h1>
      <p>{introduction}</p>
      <div className="hero-actions"><Link className="button button-primary" href="/projects">View projects <span>↗</span></Link><Link className="button button-secondary" href="/writing">Explore notes</Link><Link className="text-link" href="/library">Browse my library <span>→</span></Link></div>
      <p className="hero-location">Hi, I&apos;m {displayName}. · {location}</p>
    </div>
  </section>;
}

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy email");
  const copy = async () => { try { await navigator.clipboard.writeText(email); setLabel("Copied"); setTimeout(() => setLabel("Copy email"), 1800); } catch { setLabel("Copy unavailable"); } };
  return <button className="button button-ghost-light" type="button" onClick={copy} aria-live="polite">{label}</button>;
}

export function WritingExplorer({ items }: { items: Writing[] }) {
  const [query, setQuery] = useState(""); const [type, setType] = useState("All"); const [category, setCategory] = useState("All"); const [time, setTime] = useState("All");
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const types = ["All", ...Array.from(new Set(items.map((item) => item.type)))];
  const filtered = useMemo(() => items.filter((item) => {
    const haystack = [item.title, item.description, item.type, item.category, ...item.tags, ...item.technologies].join(" ").toLowerCase();
    return haystack.includes(query.toLowerCase()) && (type === "All" || item.type === type) && (category === "All" || item.category === category) && (time === "All" || (time === "Short" ? item.readTime <= 5 : item.readTime > 5));
  }), [items, query, type, category, time]);
  return <div className="explorer"><div className="filter-panel"><label className="search-field"><span>Search titles, topics, tags, or technologies</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the knowledge record…" /></label><div className="filter-row"><label><span>Content type</span><select value={type} onChange={(event) => setType(event.target.value)}>{types.map((value) => <option key={value}>{value}</option>)}</select></label><label><span>Category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((value) => <option key={value}>{value}</option>)}</select></label><label><span>Reading time</span><select value={time} onChange={(event) => setTime(event.target.value)}><option>All</option><option>Short</option><option>Long</option></select></label></div><p className="results-status" aria-live="polite">{filtered.length} {filtered.length === 1 ? "record" : "records"} found · filters updated</p></div>{filtered.length ? <div className="writing-grid">{filtered.map((item) => <article className="writing-card" key={item.slug}><div className="writing-meta"><span>{item.type}</span><time>{new Date(`${item.date}T00:00:00`).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" })}</time></div><h2><Link href={`/writing/${item.slug}`}>{item.title}</Link></h2><p>{item.description}</p><div className="writing-footer"><span>{item.readTime} min read</span><span>{item.category}</span><Link href={`/writing/${item.slug}`} aria-label={`Read ${item.title}`}>↗</Link></div></article>)}</div> : <div className="empty-state"><span>00</span><h2>No content matches these filters yet.</h2><p>Try another topic or explore all entries.</p><button type="button" onClick={() => { setQuery(""); setType("All"); setCategory("All"); setTime("All"); }}>Clear filters</button></div>}</div>;
}

export function LibraryExplorer({ items }: { items: Book[] }) {
  const [status, setStatus] = useState("All"); const [kind, setKind] = useState("All");
  const filtered = items.filter((item) => (status === "All" || item.readingStatus === status) && (kind === "All" || item.bookType === kind));
  return <div className="library-explorer"><div className="library-filter"><div><span>Reading status</span>{["All", "Reading", "Finished", "To Read", "Paused"].map((value) => <button key={value} className={status === value ? "selected" : ""} type="button" onClick={() => setStatus(value)} aria-pressed={status === value}>{value}</button>)}</div><div><span>Book type</span>{["All", "Technical", "Non-technical"].map((value) => <button key={value} className={kind === value ? "selected" : ""} type="button" onClick={() => setKind(value)} aria-pressed={kind === value}>{value}</button>)}</div><p aria-live="polite">Showing {filtered.length} books</p></div>{filtered.length ? <div className="library-grid">{filtered.map((book) => <article className="book-card" key={book.slug}><Link className={`book-cover ${!book.cover ? "book-cover-placeholder" : ""}`} href={`/library/${book.slug}`}>{book.cover ? <Image src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} fill sizes="(max-width: 620px) 115px, 165px" /> : <span><small>PLACEHOLDER COVER</small>{book.title}</span>}<b>{book.readingStatus}</b></Link><div className="book-card-body"><p className="book-kind">{book.bookType} · {book.categories.join(" / ")}</p><h2><Link href={`/library/${book.slug}`}>{book.title}</Link></h2><p className="book-author">{book.author}</p><p>{book.shortDescription}</p><Link className="text-link" href={`/library/${book.slug}`}>Open reading notes <span>↗</span></Link></div></article>)}</div> : <div className="empty-state"><span>00</span><h2>No books in this view yet.</h2><p>Try another reading status or book type.</p></div>}</div>;
}

type Repo = { id: number; name: string; html_url: string; description: string | null; language: string | null; updated_at: string; stargazers_count: number };
export function GithubActivity({ username, profileUrl }: { username: string; profileUrl: string }) {
  const [repos, setRepos] = useState<Repo[]>([]); const [state, setState] = useState<"loading" | "ready" | "error">("loading");
  useEffect(() => { const controller = new AbortController(); fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=8`, { signal: controller.signal }).then((response) => { if (!response.ok) throw new Error(); return response.json(); }).then((data: Repo[]) => { setRepos(data.filter((repo) => repo.description).slice(0, 3)); setState("ready"); }).catch((error) => { if (error.name !== "AbortError") setState("error"); }); return () => controller.abort(); }, [username]);
  return <section className="section github-section"><div className="container"><div className="section-heading"><div><p className="eyebrow">GitHub activity</p><h2>A curated window into the workbench.</h2></div><div><p>Recent public repositories are secondary evidence, not a measure of engineering ability.</p><a className="text-link" href={profileUrl} target="_blank" rel="noreferrer">View GitHub profile <span>↗</span></a></div></div><div className="github-grid" aria-live="polite">{state === "loading" && <div className="github-state"><span className="loading-dot" />Loading meaningful public activity…</div>}{state === "error" && <div className="github-state"><strong>GitHub activity is temporarily unavailable.</strong><span>Featured project structures remain available above.</span></div>}{state === "ready" && !repos.length && <div className="github-state"><strong>No described public repositories were returned.</strong><span>Browse the GitHub profile for the complete record.</span></div>}{state === "ready" && repos.map((repo) => <a className="repo-card" key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer"><div><span>{repo.language || "Language not listed"}</span><span>★ {repo.stargazers_count}</span></div><h3>{repo.name}</h3><p>{repo.description || "Description unavailable."}</p><small>Updated {new Date(repo.updated_at).toLocaleDateString("en", { year: "numeric", month: "short" })} ↗</small></a>)}</div></div></section>;
}
