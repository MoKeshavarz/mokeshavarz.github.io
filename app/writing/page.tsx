import type { Metadata } from "next";
import { WritingExplorer } from "../client";
import { writing } from "../content";
import { Footer, Header, PageIntro } from "../components";

export const metadata: Metadata = {
  title: "Writing",
  description: "Engineering reflections about product direction, requirements, reliability, testing, technical restraint, and MVP uncertainty.",
  alternates: { canonical: "/writing/" },
};

export default function WritingPage() {
  return <>
    <Header />
    <main id="main">
      <PageIntro
        label="Writing / Reflections"
        title="What I think about the lessons now."
        text="Experience explains what happened. Case studies explain how a particular problem was handled. Writing is where I return to those lessons after they have had time to settle."
        aside={<div className="page-stat"><strong>{writing.length}</strong><span>published reflections</span></div>}
      />
      <section className="page-section container"><WritingExplorer items={writing} /></section>
    </main>
    <Footer />
  </>;
}
