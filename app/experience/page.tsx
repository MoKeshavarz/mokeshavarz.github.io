import { workExperiences } from "../content";

export default function ExperiencePage() {
  return <main className="listing-page">
    <header className="detail-header shell"><a className="brand" href="/"><span className="brand-mark">AK</span><span>Ario Keshavarz</span></a><nav aria-label="Section navigation"><a href="/experience">Experience</a><a href="/journal">Journal</a></nav><a className="detail-back" href="/">← Home</a></header>
    <section className="listing-hero shell"><p className="kicker">Experience</p><h1>The places where I learned by building.</h1><p>A closer look at my roles, responsibilities, contributions, and the outcomes created with each team.</p></section>
    <section className="experience-list shell">{workExperiences.map((item) => <a className="experience-list-item" href={`/experience/${item.slug}`} key={item.slug}>
      <div className="experience-list-image"><img src={item.image} alt="" /></div>
      <div><p className="project-type">{item.period} · {item.company}</p><h2>{item.role}</h2><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
      <span className="listing-arrow">↗</span>
    </a>)}</section>
    <footer className="detail-footer shell"><p>© 2026 Ario Keshavarz · <span className="ai-powered">AI Powered</span></p><a href="mailto:hello@ariokeshavarz.dev">Let&apos;s talk ↗</a></footer>
  </main>;
}
