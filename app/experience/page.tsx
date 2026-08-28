import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "../content";
import { Footer, Header, PageIntro } from "../components";

export const metadata: Metadata = {
  title: "Experience",
  description: "Mohamad Keshavarz’s engineering career, documented through the work, difficult parts, decisions, and lessons that changed his thinking.",
  alternates: { canonical: "/experience/" },
  openGraph: { title: "Experience · Mohamad Keshavarz", description: "An engineering career record about what happened and what it taught me.", url: "/experience/", type: "website" },
};

export default function ExperiencePage() {
  return <>
    <Header />
    <main id="main">
      <PageIntro
        label="Experience / Career record"
        title="A career shaped by software that shipped, stalled, recovered, and changed."
        text="This is not a list of perfect outcomes. It is a chronological record of the systems I worked on, the conditions around them, and the ideas I carried into the next role."
        aside={<div className="page-stat"><strong>{experiences.length}</strong><span>career chapters</span></div>}
      />
      <section className="page-section container experience-timeline" aria-label="Career timeline">
        {experiences.map((experience, index) => <article className="experience-card" key={experience.slug}>
          <div className="experience-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
          <div className="experience-card-meta">
            <p>{experience.dateLabel}</p>
            <span>{experience.location}</span>
          </div>
          <div className="experience-card-body">
            <div className="experience-card-brand">
              <p className="eyebrow">{experience.employmentType ?? (experience.remote ? "Remote" : "Experience")}</p>
              {experience.logo && experience.website && <a className={`experience-company-logo experience-company-logo-${experience.slug}`} href={experience.website} target="_blank" rel="noreferrer" aria-label={`Visit ${experience.company} website`}>
                <Image src={experience.logo} alt={`${experience.company} logo`} width={440} height={152} />
              </a>}
            </div>
            <h2>{experience.company}{experience.alternateName && <small> / {experience.alternateName}</small>}</h2>
            <h3>{experience.role}</h3>
            <p>{experience.summary}</p>
            <blockquote>{experience.theme}</blockquote>
            <div className="tag-row">{experience.technologies.slice(0, 8).map((technology) => <span key={technology}>{technology}</span>)}</div>
            <Link className="card-link" href={`/experience/${experience.slug}`} data-analytics-event="select_content" data-analytics-content-type="experience" data-analytics-content-id={experience.slug}>Read the story <span>↗</span></Link>
          </div>
        </article>)}
      </section>
    </main>
    <Footer />
  </>;
}
