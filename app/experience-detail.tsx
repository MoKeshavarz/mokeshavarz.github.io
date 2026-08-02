import { workExperiences } from "./content";

export function ExperienceDetail({ slug }: { slug: string }) {
  const item = workExperiences.find((experience) => experience.slug === slug);
  if (!item) return null;
  const currentIndex = workExperiences.findIndex((experience) => experience.slug === slug);
  const next = workExperiences[(currentIndex + 1) % workExperiences.length];

  return <main className="detail-page">
    <header className="detail-header shell">
      <a className="brand" href="/"><span className="brand-mark">AK</span><span>Ario Keshavarz</span></a>
      <nav aria-label="Section navigation"><a href="/experience">Experience</a><a href="/journal">Journal</a></nav>
      <a className="detail-back" href="/experience">← All experience</a>
    </header>

    <section className="detail-hero shell">
      <p className="kicker">Work experience · {item.period}</p>
      <h1>{item.role}</h1>
      <p>{item.description}</p>
      <div className="detail-meta"><span><b>Company</b>{item.company}</span><span><b>Period</b>{item.period}</span><span><b>Toolkit</b>{item.tags.join(" · ")}</span></div>
    </section>

    <div className={`detail-image shell ${item.tone}`}><img src={item.image} alt={`Visual representing the ${item.role} role at ${item.company}`} /></div>

    <section className="case-body shell">
      <article><p className="case-number">01</p><div><p className="kicker">Overview</p><h2>The role and its context.</h2><p>{item.overview}</p></div></article>
      <article><p className="case-number">02</p><div><p className="kicker">Contribution</p><h2>How I helped the team.</h2><p>{item.contribution}</p></div></article>
      <div className="metric-grid">{item.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
      <article><p className="case-number">03</p><div><p className="kicker">Impact</p><h2>What changed afterward.</h2><p>{item.impact}</p></div></article>
    </section>

    <section className="next-project shell"><p className="kicker">Next experience</p><a href={`/experience/${next.slug}`}><span>{next.role}</span><b>→</b></a></section>
    <footer className="detail-footer shell"><p>© 2026 Ario Keshavarz · <span className="ai-powered">AI Powered</span></p><a href="mailto:hello@ariokeshavarz.dev">Let&apos;s talk ↗</a></footer>
  </main>;
}
