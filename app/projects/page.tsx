import type { Metadata } from "next";
import { projects } from "../content";
import { Footer, Header, PageIntro, ProjectCard } from "../components";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Engineering case studies about real constraints, decisions, outcomes, trade-offs, and lessons.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return <>
    <Header />
    <main id="main">
      <PageIntro
        label="Selected work / Case studies"
        title="The engineering is in the decisions between the components."
        text="Four substantial pieces of work, documented through context, responsibility, constraints, choices, outcomes, and what I would carry forward."
        aside={<div className="page-stat"><strong>{projects.length}</strong><span>verified case studies</span></div>}
      />
      <section className="page-section container"><div className="project-grid project-index-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div></section>
    </main>
    <Footer />
  </>;
}
