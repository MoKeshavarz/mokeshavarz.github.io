import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getExperience, getProject, projects } from "../../content";
import { Footer, Header } from "../../components";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const canonical = `/projects/${project.slug}/`;
  return {
    title: `${project.title} · Case Study`,
    description: project.context,
    alternates: { canonical },
    openGraph: { title: project.title, description: project.context, url: canonical, type: "article" },
  };
}

function Paragraphs({ items }: { items: string[] }) {
  return <>{items.map((item) => <p key={item}>{item}</p>)}</>;
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const experience = getExperience(project.relatedExperience);

  const contents = [
    ["problem", "Problem"],
    ["constraints", "Constraints"],
    ["approach", "Approach"],
    ["decisions", "Decisions"],
    ["outcome", "Outcome"],
    ["tradeoffs", "Trade-offs"],
    ["lessons", "Lessons"],
  ];

  return <>
    <Header />
    <main id="main">
      <article className="detail-article container">
        <Link className="back-link" href="/projects">← All case studies</Link>
        <header className="detail-title">
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p>{project.context}</p>
          <div className="detail-labels"><span>{project.status}</span>{experience && <span>{experience.company}</span>}</div>
        </header>

        {experience && <div className="parent-record">
          <span>Part of the experience record</span>
          <Link href={`/experience/${experience.slug}`}>{experience.role} · {experience.company} <b>↗</b></Link>
        </div>}

        <section className="architecture-panel" aria-labelledby="system-flow-title">
          <div><p className="eyebrow">System flow</p><h2 id="system-flow-title">How the parts connected</h2></div>
          <div className="architecture-flow architecture-flow-wide">{project.systems.map((system, index) => <div key={system}><span>{String(index + 1).padStart(2, "0")}</span><strong>{system}</strong>{index < project.systems.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>
          <p className="diagram-caption">A simplified sequence for orientation; the case study below explains the actual responsibilities and trade-offs.</p>
        </section>

        <div className="case-grid">
          <aside aria-label="On this page"><p className="eyebrow">On this page</p>{contents.map(([id, label], index) => <a key={id} href={`#${id}`}>{String(index + 1).padStart(2, "0")} · {label}</a>)}</aside>
          <div className="case-content">
            <section id="problem"><span>01</span><h2>The problem</h2><p>{project.problem}</p><h3>My responsibility</h3><p>{project.responsibility}</p></section>
            <section id="constraints"><span>02</span><h2>Constraints</h2><ul>{project.constraints.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section id="approach"><span>03</span><h2>The approach</h2><Paragraphs items={project.approach} /></section>
            <section id="decisions"><span>04</span><h2>Important engineering decisions</h2><ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section id="outcome"><span>05</span><h2>The outcome</h2><Paragraphs items={project.outcome} /></section>
            <section id="tradeoffs"><span>06</span><h2>Trade-offs</h2><ul>{project.tradeoffs.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section id="lessons"><span>07</span><h2>What I learned</h2><ul>{project.lessons.map((item) => <li key={item}>{item}</li>)}</ul><div className="tag-row case-technologies">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div></section>
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </>;
}
