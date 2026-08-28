import Link from "next/link";
import { books, capabilities, experiences, featuredProjects, interests, profile, writing } from "./content";
import { BookCard, ContactBand, Footer, Header, ProjectCard, SectionHeading, WritingCard } from "./components";
import { HeroShowcase } from "./client";

export default function Home() {
  const currentlyReading = books.filter((book) => book.readingStatus === "Reading").slice(0, 2);
  return <>
    <Header />
    <main id="main">
      <HeroShowcase introduction={profile.introduction} displayName={profile.displayName} location={profile.location} />

      <div className="signal-strip"><div className="container"><span>SYSTEM RECORD / 2026</span><p>Understand</p><i /> <p>Connect</p><i /> <p>Build</p><i /> <p>Learn</p></div></div>

      <section className="section container" id="projects"><SectionHeading label="Selected work" title="The connections matter as much as the components." text="Case studies centered on the real problem, constraints, engineering decisions, outcome, and lessons." link={{ href: "/projects", label: "View all case studies" }} /><div className="project-grid">{featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div></section>

      {writing.length > 0 && <section className="section section-tinted"><div className="container"><SectionHeading label="Recently published" title="Notes from building, reading, and reconsidering." text="Technical articles and learning notes extend the experience record without repeating it." link={{ href: "/writing", label: "Explore all writing" }} /><div className="writing-grid">{writing.slice(0, 3).map((item) => <WritingCard item={item} key={item.slug} />)}</div></div></section>}

      <section className="section container"><SectionHeading label="Currently reading" title="Ideas in progress, not trophies on a shelf." text="A reading record that connects technical and non-technical books to work, questions, and practice." link={{ href: "/library", label: "Visit the library" }} /><div className="book-feature-grid">{currentlyReading.map((book) => <BookCard book={book} key={book.slug} />)}</div></section>

      <section className="section approach-section"><div className="container"><SectionHeading label="Engineering approach" title="Understand the problem. Map the relationships. Build the smallest coherent system." /><ol className="approach-list"><li><span>01</span><div><h3>Understand</h3><p>Clarify the problem, constraints, people, and evidence before choosing a solution.</p></div></li><li><span>02</span><div><h3>Connect</h3><p>Make boundaries, responsibilities, flows, and failure states visible.</p></div></li><li><span>03</span><div><h3>Build</h3><p>Deliver a useful slice, test assumptions, and keep the system understandable.</p></div></li><li><span>04</span><div><h3>Improve</h3><p>Measure what matters, document trade-offs, and carry the learning forward.</p></div></li></ol></div></section>

      <section className="section container"><SectionHeading label="Technical capabilities" title="Broad enough to see the system. Focused enough to care about the details." /><div className="capability-grid">{capabilities.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></section>

      <section className="section section-tinted"><div className="container experience-preview"><div><p className="eyebrow">Experience</p><h2>Five chapters. Different lessons about software and leadership.</h2><p>From building applications that were later abandoned to recovering legacy products, learning disciplined change, questioning what an MVP is for, and leading technical work today.</p><Link className="button button-secondary" href="/experience">View experience record</Link></div><ol className="experience-preview-list">{experiences.map((experience, index) => <li key={experience.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><Link href={`/experience/${experience.slug}`}>{experience.company}</Link><p>{experience.theme}</p></div><time dateTime={experience.startDate}>{experience.dateLabel}</time></li>)}</ol></div></section>

      <section className="section container"><SectionHeading label="Beyond engineering" title="Discipline, rhythm, and the practice of paying attention." text="Sports teach me consistency and resilience. Music reminds me that structure and creativity can work together." /><div className="interest-grid">{interests.map((item, index) => <article key={item.title}><span>0{index + 1} / {item.type}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

      <ContactBand />
    </main>
    <Footer />
  </>;
}
