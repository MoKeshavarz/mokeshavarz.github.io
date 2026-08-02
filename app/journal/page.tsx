import { posts } from "../content";

export default function JournalPage() {
  return <main className="listing-page journal-index">
    <header className="detail-header shell"><a className="brand" href="/"><span className="brand-mark">AK</span><span>Ario Keshavarz</span></a><nav aria-label="Section navigation"><a href="/experience">Experience</a><a href="/journal">Journal</a></nav><a className="detail-back" href="/">← Home</a></header>
    <section className="listing-hero shell"><p className="kicker">Journal</p><h1>Notes from building, learning, and paying attention.</h1><p>Essays about software engineering, product craft, teamwork, and the lessons that only appear after doing the work.</p></section>
    <section className="journal-index-list shell">{posts.map((post, index) => <a href={`/journal/${post.slug}`} className="journal-index-item" key={post.slug}>
      <p className="post-number">0{index + 1}</p><div><p className="post-meta">{post.category} · {post.date} · {post.read}</p><h2>{post.title}</h2><p>{post.excerpt}</p></div><span>↗</span>
    </a>)}</section>
    <footer className="detail-footer shell"><p>© 2026 Ario Keshavarz · <span className="ai-powered">AI Powered</span></p><a href="mailto:hello@ariokeshavarz.dev">Let&apos;s talk ↗</a></footer>
  </main>;
}
