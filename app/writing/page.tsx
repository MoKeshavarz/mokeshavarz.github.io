import type { Metadata } from "next";
import { WritingExplorer } from "../client";
import { writing } from "../content";
import { Footer, Header, PageIntro, PlaceholderBanner } from "../components";

export const metadata: Metadata = { title: "Writing · Ario Keshavarz", description: "Articles, engineering case studies, book summaries, and evolving learning notes." };
export default function WritingPage() { return <><Header /><main id="main"><PageIntro label="Writing / Knowledge" title="A working record of what I am learning." text="Technical articles, case studies, retrospectives, and shorter learning notes—written with room for trade-offs, mistakes, and unanswered questions." aside={<div className="page-stat"><strong>{writing.length}</strong><span>placeholder content formats</span></div>} /><section className="page-section container"><PlaceholderBanner>Sample entries are labeled placeholders and exist only to demonstrate search, filters, and article structure.</PlaceholderBanner><WritingExplorer items={writing} /></section></main><Footer /></>; }
