import type { Metadata } from "next";
import { projects } from "../content";
import { Footer, Header, PageIntro, PlaceholderBanner, ProjectCard } from "../components";

export const metadata: Metadata = { title: "Projects · Ario Keshavarz", description: "Engineering project and case-study records focused on decisions, integrations, outcomes, and lessons." };
export default function ProjectsPage() { return <><Header /><main id="main"><PageIntro label="Projects / Systems" title="Work explained through decisions and connections." text="Projects belong here as honest case studies: the problem, constraints, responsibility, decision, systems connected, result, and what I learned." aside={<div className="page-stat"><strong>{projects.length}</strong><span>replaceable project structures</span></div>} /><section className="page-section container"><PlaceholderBanner>These entries demonstrate the intended structure only. They do not claim real projects, technologies, or results.</PlaceholderBanner><div className="project-grid project-index-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div></section></main><Footer /></> }
