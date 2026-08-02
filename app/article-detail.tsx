import { posts } from "./content";

export function ArticleDetail({ slug }: { slug: string }) {
  const post = posts.find((item) => item.slug === slug);
  if (!post) return null;
  const currentIndex = posts.findIndex((item) => item.slug === slug);
  const next = posts[(currentIndex + 1) % posts.length];

  return <main className="article-page">
    <header className="detail-header shell"><a className="brand" href="/"><span className="brand-mark">AK</span><span>Ario Keshavarz</span></a><a className="detail-back" href="/#journal">← All notes</a></header>
    <article className="article-shell">
      <header className="article-hero"><p className="kicker">{post.category} · {post.date} · {post.read}</p><h1>{post.title}</h1><p>{post.excerpt}</p></header>
      <div className="article-rule"><span /></div>
      <div className="article-copy">{post.body.map((paragraph, index) => <p className={index === 0 ? "lead" : ""} key={paragraph}>{paragraph}</p>)}</div>
      <aside className="article-next"><p>Continue reading</p><a href={`/journal/${next.slug}`}>{next.title} <span>→</span></a></aside>
    </article>
    <footer className="detail-footer shell"><p>© 2026 Ario Keshavarz · <span className="ai-powered">AI Powered</span></p><a href="mailto:hello@ariokeshavarz.dev">Let&apos;s talk ↗</a></footer>
  </main>;
}
