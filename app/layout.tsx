import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mokeshavarz.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Mohamad Keshavarz · The Curious Orchestrator", template: "%s · Mohamad Keshavarz" },
  description: "Software engineer connecting technologies, solving meaningful problems, and sharing what I learn along the way.",
  alternates: { canonical: "/", types: { "application/rss+xml": [{ url: "/rss.xml", title: "All content" }, { url: "/rss/articles.xml", title: "Articles" }, { url: "/rss/notes.xml", title: "Learning notes" }] } },
  openGraph: { title: "Mohamad Keshavarz · The Curious Orchestrator", description: "Software engineer building connected systems—and documenting what I learn.", url: siteUrl, siteName: "Mohamad Keshavarz", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mohamad Keshavarz — The Curious Orchestrator" }] },
  twitter: { card: "summary_large_image", title: "Mohamad Keshavarz · The Curious Orchestrator", description: "Software engineer building connected systems—and documenting what I learn.", images: ["/og.png"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": `${siteUrl}/#person`, name: "Mohamad Keshavarz", alternateName: ["Mo", "Ario"], email: "mailto:mokeshavarz.programmer@gmail.com", url: siteUrl, jobTitle: "Software Engineer", sameAs: ["https://github.com/MoKeshavarz"] },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Mohamad Keshavarz · The Curious Orchestrator", description: "A connected record of software projects, engineering decisions, writing, books, and learning.", author: { "@id": `${siteUrl}/#person` } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><meta name="theme-color" content="#f5f2ea" /><script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('portfolio-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.dataset.theme='dark'}catch(e){}` }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></head><body>{children}</body></html>;
}
