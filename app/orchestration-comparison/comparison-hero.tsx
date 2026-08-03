import Link from "next/link";
import { profile } from "../content";
import { LayeredOrchestrationMark, type OrchestrationVariant } from "./marks";

export function ComparisonHero({ variant }: { variant: OrchestrationVariant }) {
  return <section className="hero container orchestration-comparison-hero">
    <div className="hero-copy">
      <p className="eyebrow"><span className="signal-dot" /> The Curious Orchestrator</p>
      <h1>Software engineer building connected systems—and documenting what I learn.</h1>
      <p>{profile.introduction}</p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/projects">View projects <span>↗</span></Link>
        <Link className="button button-secondary" href="/writing">Explore notes</Link>
        <Link className="text-link" href="/library">Browse my library <span>→</span></Link>
      </div>
      <p className="hero-location">Hi, I&apos;m {profile.displayName}. · {profile.location}</p>
    </div>
    <div className="comparison-portrait-stage">
      <LayeredOrchestrationMark variant={variant} />
      <picture className="comparison-portrait-picture">
        <source media="(max-width: 620px)" srcSet="/images/hero-portrait-mobile.webp" />
        <img src="/images/hero-portrait.webp" width="1122" height="1256" alt="Mohamad Keshavarz sketching a system design at his desk" />
      </picture>
    </div>
  </section>;
}
