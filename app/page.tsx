import { Fragment } from "react";
import { activities, currentFocus, fictionReading, posts, professionalReading, profile, skills, workExperiences } from "./content";

export default function Home() {
  const displayName = profile.name ?? profile.preferredName ?? profile.shortFirstName ?? profile.firstName ?? "Portfolio";
  const initials = profile.initials ?? displayName.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  const hasReading = professionalReading.length > 0 || fictionReading.length > 0;
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Back to top"><span className="brand-mark">{initials}</span><span>{displayName}</span></a>
        <nav aria-label="Main navigation">{workExperiences.length > 0 && <a href="/experience">Experience</a>}{posts.length > 0 && <a href="/journal">Journal</a>}{hasReading && <a href="#reading">Reading</a>}</nav>
        {profile.email && <a className="header-cta" href={`mailto:${profile.email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a>}
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <h1>I make complex things <code className="code-accent"><span className="code-keyword">return</span> <span className="code-string">&quot;simple&quot;</span><span className="code-punctuation">;</span></code></h1>
          {profile.intro && <p className="hero-intro">{profile.intro}</p>}
          {(workExperiences.length > 0 || profile.email) && <div className="hero-actions">{workExperiences.length > 0 && <a className="button primary" href="/experience">Explore my experience <span>→</span></a>}{profile.email && <a className="text-link" href={`mailto:${profile.email}`}>Send an email <span>↗</span></a>}</div>}
          {profile.location && <p className="location">{profile.location}</p>}
        </div>
        <div className="hero-visual cutout-hero">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <img src="/images/hero4-cutout.png" alt="Ario Keshavarz sketching technical plans at his desk" />
        </div>
      </section>

      {currentFocus.length > 0 && <section className="trust-strip"><div className="shell trust-inner"><p>// CURRENT_FOCUS</p>{currentFocus.map((focus, index) => <Fragment key={focus}><span>{focus}</span>{index < currentFocus.length - 1 && <i />}</Fragment>)}</div></section>}

      {workExperiences.length > 0 && <section className="section shell" id="work">
        <div className="section-heading"><div><p className="kicker">Selected experience</p><h2>Roles that shaped how I work.</h2></div><p>Each role has its own page with responsibilities, contributions, outcomes, and the tools I used.</p></div>
        <div className="project-grid">{workExperiences.map((item) => <article className={`project-card ${item.tone}`} key={item.slug}>
          <a className="project-art" href={`/experience/${item.slug}`} aria-label={`View ${item.role} experience`}><span className="project-index">{item.index}</span><img src={item.image} alt="" /></a>
          <div className="project-body"><p className="project-type">{item.period} · {item.company}</p><h3>{item.role}</h3><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={`/experience/${item.slug}`}>View experience <span>↗</span></a></div>
        </article>)}</div>
      </section>}

      {workExperiences.length > 0 && <section className="section experience-section" id="experience"><div className="shell experience-grid">
        <div className="experience-intro"><p className="kicker">Experience</p><h2>Building, learning, and helping teams move forward.</h2><p>I care about the whole product—not only the code. That means asking better questions, making sensible tradeoffs, and leaving systems clearer than I found them.</p>{profile.email && <a className="text-link" href={`mailto:${profile.email}?subject=Resume request`}>Request full résumé <span>↗</span></a>}</div>
        <div className="timeline">{workExperiences.map((item) => <article className="timeline-item" key={item.slug}><span className="timeline-dot" /><p className="period">{item.period}</p><h3><a href={`/experience/${item.slug}`}>{item.role}</a></h3><p className="company">{item.company}</p><p>{item.description}</p><a className="timeline-link" href={`/experience/${item.slug}`}>Read about this role →</a></article>)}</div>
      </div></section>}

      {skills.length > 0 && <section className="section shell skills-section"><div className="section-heading compact"><div><p className="kicker">Toolkit</p><h2>How I help.</h2></div><p>Broad enough to see the system, focused enough to sweat the details.</p></div><div className="skill-cloud">{skills.map((skill, index) => <span key={`${skill}-${index}`}><b>{String(index + 1).padStart(2, "0")}</b>{skill}</span>)}</div></section>}

      {posts.length > 0 && <section className="section journal-section" id="journal"><div className="shell">
        <div className="section-heading"><div><p className="kicker">Field notes</p><h2>Writing from the work.</h2></div><p>Ideas, lessons, and useful details collected while building software and working with people.</p></div>
        <div className="post-list">{posts.map((post, index) => <article className="post" key={post.title}><p className="post-number">0{index + 1}</p><div><p className="post-meta">{post.category} <span>·</span> {post.date}</p><h3>{post.title}</h3><p>{post.excerpt}</p></div><a href={`/journal/${post.slug}`} aria-label={`Read ${post.title}`}><span>{post.read}</span><b>↗</b></a></article>)}</div>
        <p className="content-note">New essays can be added by duplicating an item in the <code>posts</code> list at the top of this page.</p>
      </div></section>}

      {hasReading && <section className="section shell" id="reading">
        <div className="reading-layout">
          <div className="reading-copy"><p className="kicker">Reading shelf</p><h2>Technical ideas and imagined worlds.</h2><p>A public trail of what I&apos;m learning professionally and the fiction I read for curiosity, atmosphere, and story.</p><figure className="reading-portrait"><span aria-hidden="true">Notes become practice.</span><img src="/images/reading-cutout.png" alt="Ario reading Clean Code" /></figure></div>
          {professionalReading.length > 0 && <div><p className="shelf-label">Professional reading</p><div className="book-list">{professionalReading.map((book) => <article className="book" key={book.title}><div className="book-mark" aria-hidden="true">{book.title.charAt(0)}</div><div className="book-info"><h3>{book.title}</h3><p>{book.author}</p><div className="progress"><span style={{ width: book.progress }} /></div></div><span className={`book-status ${book.status === "Reading now" ? "active" : book.status === "Finished" ? "finished" : ""}`}>{book.status}</span></article>)}</div></div>}
        </div>
        {fictionReading.length > 0 && <div className="fiction-shelf">
          <div className="fiction-heading"><div><p className="shelf-label">Fiction · Non-technical</p><h3>Fantasy on my shelf</h3></div><p>Two journeys completed. Two currently underway.</p></div>
          <div className="fiction-grid">{fictionReading.map((book) => <article className="fiction-book" key={book.title}>
            <div className="cover-wrap"><img src={book.cover} alt={`Cover of ${book.title} by ${book.author}`} /><span className={`book-status ${book.status === "Reading now" ? "active" : "finished"}`}>{book.status}</span></div>
            <div>{book.series && <p className="book-series">{book.series}</p>}<h4>{book.title}</h4><p>{book.author}</p></div>
          </article>)}</div>
          <p className="cover-credit">Cover images via Open Library.</p>
        </div>}
      </section>}

      {activities.length > 0 && <section className="section shell beyond" id="activities">
        <div><div><p className="kicker">Activities & music</p><h2>Energy, discipline, and a good soundtrack.</h2></div><p className="activities-intro">What keeps me moving, focused, and connected beyond software.</p></div>
        <div className="interest-grid activities-grid">{activities.map((activity, index) => <article className={activity.category === "Music" ? `music-card ${activity.title === "Traditional Persian" ? "persian" : ""}` : "sport-card"} key={activity.title}><span>{String(index + 1).padStart(2, "0")} · {activity.category}</span><h3>{activity.title}</h3><p>{activity.summary}</p></article>)}</div>
      </section>}

      {profile.email && <section className="contact-section shell" id="contact"><p className="kicker">Have a thoughtful project?</p><h2>Let&apos;s make something<br /><em>worth using.</em></h2><a className="button primary light" href={`mailto:${profile.email}`}>Start a conversation <span>↗</span></a><p>{profile.email}</p></section>}

      <footer className="footer shell"><p>© 2026 {displayName}. Built with curiosity and care. <span className="ai-powered">AI Powered</span></p><div><a href="#top">Back to top ↑</a><a href="https://github.com/MoKeshavarz" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>
    </main>
  );
}
