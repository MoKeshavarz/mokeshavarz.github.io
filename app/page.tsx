import Link from "next/link";
import { books, experiences, featuredProjects, profile, writing } from "./content";
import { BookCard, CapabilityList, ContactBand, Footer, Header, ProjectCard, SectionHeading, WritingCard } from "./components";
import { HeroShowcase } from "./client";

export default function Home() {
  const currentlyReading = books.filter((book) => book.readingStatus === "Reading").slice(0, 2);

  return <>
    <Header />
    <main id="main">
      <HeroShowcase introduction={profile.introduction} displayName={profile.displayName} location={profile.location} email={profile.email} github={profile.github} linkedin={profile.linkedin} />

      <section className="section container capabilities-section">
        <SectionHeading label="Professional snapshot" title="Engineering across application, data, and system boundaries." text="A practical range shaped by building, integrating, recovering, and improving real products." />
        <CapabilityList />
      </section>

      <section className="section section-tinted" id="experience">
        <div className="container experience-preview">
          <div><p className="eyebrow">Experience</p><h2>Five chapters. Different lessons about software and leadership.</h2><p>From building applications that were later abandoned to recovering legacy products, learning disciplined change, questioning what an MVP is for, and leading technical work today.</p><Link className="button button-secondary" href="/experience">View experience record</Link></div>
          <ol className="experience-preview-list">{experiences.map((experience, index) => <li key={experience.slug}><span>{String(index + 1).padStart(2, "0")}</span><div><Link href={`/experience/${experience.slug}`}>{experience.company}</Link><p>{experience.theme}</p></div><time dateTime={experience.startDate}>{experience.dateLabel}</time></li>)}</ol>
        </div>
      </section>

      <section className="section container" id="projects">
        <SectionHeading label="Selected work" title="The connections matter as much as the components." text="Case studies centered on the real problem, constraints, engineering decisions, outcome, and lessons." link={{ href: "/projects", label: "View all case studies" }} />
        <div className="project-grid">{featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
      </section>

      {writing.length > 0 && <section className="section section-tinted home-writing"><div className="container"><SectionHeading label="Recently published" title="Notes from building, reading, and reconsidering." text="Technical articles and learning notes extend the experience record without repeating it." link={{ href: "/writing", label: "Explore all writing" }} /><div className="writing-grid">{writing.slice(0, 3).map((item) => <WritingCard item={item} key={item.slug} />)}</div></div></section>}

      {currentlyReading.length > 0 && <section className="section container home-library"><SectionHeading label="Library / In progress" title="Curiosity that continues beyond the work." text="A quieter record of reading, questions, and ideas that inform how I think and build." link={{ href: "/library", label: "Visit the library" }} /><div className="book-feature-grid">{currentlyReading.map((book) => <BookCard book={book} key={book.slug} />)}</div></section>}

      <section className="principles-band" aria-labelledby="principles-title"><div className="container principles-inner"><div><p className="eyebrow">Engineering approach</p><h2 id="principles-title">A simple loop for thoughtful systems.</h2></div><ol><li><span>01</span>Understand</li><li><span>02</span>Connect</li><li><span>03</span>Build</li><li><span>04</span>Improve</li></ol></div></section>

      <ContactBand />
    </main>
    <Footer />
  </>;
}
