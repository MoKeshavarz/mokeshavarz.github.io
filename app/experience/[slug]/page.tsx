import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences, getExperience, getProject } from "../../content";
import { Footer, Header } from "../../components";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) return {};
  const canonical = `/experience/${experience.slug}/`;
  const title = `${experience.role} at ${experience.company}`;
  return {
    title,
    description: experience.summary,
    alternates: { canonical },
    openGraph: { title, description: experience.summary, url: canonical, type: "article" },
  };
}

export default async function ExperienceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();

  const index = experiences.indexOf(experience);
  const previous = index > 0 ? experiences[index - 1] : undefined;
  const next = index < experiences.length - 1 ? experiences[index + 1] : undefined;
  const selectedProjects = experience.selectedProjects.map(getProject).filter((project) => project !== undefined);

  return <>
    <Header />
    <main id="main">
      <article className="experience-article container">
        <Link className="back-link" href="/experience">← All experience</Link>
        <header className="experience-hero">
          <p className="eyebrow">Experience / {experience.dateLabel}</p>
          <h1>{experience.company}{experience.alternateName && <small> / {experience.alternateName}</small>}</h1>
          <p className="experience-role">{experience.role}</p>
          <p className="article-deck">{experience.summary}</p>
          <dl>
            <div><dt>Period</dt><dd>{experience.dateLabel}</dd></div>
            <div><dt>Location</dt><dd>{experience.location}</dd></div>
            {experience.employmentType && <div><dt>Type</dt><dd>{experience.employmentType}</dd></div>}
          </dl>
        </header>

        <div className="experience-theme"><span>Central lesson</span><p>{experience.theme}</p></div>

        <div className="article-layout experience-layout">
          <aside aria-label="On this page">
            <p className="eyebrow">Contents</p>
            {experience.sections.map((section, sectionIndex) => <a key={section.id} href={`#${section.id}`}>{String(sectionIndex + 1).padStart(2, "0")} · {section.heading}</a>)}
            {selectedProjects.length > 0 && <a href="#selected-work">{String(experience.sections.length + 1).padStart(2, "0")} · Selected work</a>}
          </aside>
          <div className="article-body experience-body">
            {experience.sections.map((section, sectionIndex) => <section id={section.id} key={section.id}>
              <p className="eyebrow">Chapter {String(sectionIndex + 1).padStart(2, "0")}</p>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.principle && <blockquote>{section.principle}</blockquote>}
            </section>)}

            {selectedProjects.length > 0 && <section id="selected-work" className="experience-selected-work">
              <p className="eyebrow">Selected work</p>
              <h2>A closer look at the engineering.</h2>
              {selectedProjects.map((project) => <Link key={project.slug} href={`/projects/${project.slug}`}>
                <span>Case study</span><strong>{project.title}</strong><p>{project.problem}</p><b>Read the case study ↗</b>
              </Link>)}
            </section>}

            <section className="experience-technologies" aria-labelledby="technologies-title">
              <p className="eyebrow">Technologies</p>
              <h2 id="technologies-title">Tools used during this period.</h2>
              <div className="tag-row">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </section>
          </div>
        </div>

        <nav className="experience-navigation" aria-label="Previous and next experience">
          {previous ? <Link href={`/experience/${previous.slug}`}><span>← Previous experience</span><strong>{previous.company}</strong></Link> : <span className="experience-navigation-disabled">Beginning of the record</span>}
          {next ? <Link className="experience-navigation-next" href={`/experience/${next.slug}`}><span>Next experience →</span><strong>{next.company}</strong></Link> : <span className="experience-navigation-disabled experience-navigation-next">Current end of the record</span>}
        </nav>
      </article>
    </main>
    <Footer />
  </>;
}
