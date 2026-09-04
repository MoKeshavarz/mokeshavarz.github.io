import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getWriting, writing, type WritingBlock } from "../../content";
import { Footer, Header } from "../../components";

export function generateStaticParams() {
  return writing.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getWriting(slug);
  if (!item) return {};
  const canonical = `/writing/${item.slug}/`;
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical },
    openGraph: {
      title: item.title,
      description: item.description,
      url: canonical,
      type: "article",
      publishedTime: item.date,
      modifiedTime: item.updated,
      tags: item.tags,
    },
  };
}

function EmphasizedText({ text, emphasis = [] }: { text: string; emphasis?: string[] }) {
  if (!emphasis.length) return text;
  const escaped = emphasis.map((value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));
  return <>{parts.map((part, index) => emphasis.includes(part) ? <strong key={`${part}-${index}`}>{part}</strong> : part)}</>;
}

function ArticleBlock({ block }: { block: WritingBlock }) {
  if (block.type === "paragraph") return <p><EmphasizedText text={block.text} emphasis={block.emphasis} /></p>;
  if (block.type === "quote") return <blockquote>{block.text}</blockquote>;
  if (block.type === "statement") return <p className="article-key-statement">{block.text}</p>;
  if (block.type === "list") return <ul className="article-definition-list">{block.items.map((item) => <li key={item.label}><strong>{item.label}</strong><span>{item.text}</span></li>)}</ul>;
  return <div className="article-sequence" aria-label={block.total}>
    <ol>{block.steps.map((step, index) => <li key={step.label}><span>{step.value}</span><p>{step.label}</p>{index < block.steps.length - 1 && <i aria-hidden="true">→</i>}</li>)}</ol>
    <strong>{block.total}</strong>
  </div>;
}

export default async function WritingDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWriting(slug);
  if (!item) notFound();

  const articleUrl = `https://mokeshavarz.github.io/writing/${item.slug}/`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.description,
    datePublished: item.date,
    dateModified: item.updated,
    mainEntityOfPage: articleUrl,
    author: { "@type": "Person", name: "Mohamad Keshavarz", url: "https://mokeshavarz.github.io" },
    ...(item.heroImage ? { image: `https://mokeshavarz.github.io${item.heroImage.src}` } : {}),
  };

  return <>
    <Header />
    <main id="main">
      <article className="reading-article writing-detail container">
        <Link className="back-link" href="/writing">← All writing</Link>
        <header>
          <p className="eyebrow">{item.category} / {item.type}</p>
          <h1>{item.title}</h1>
          <p className="article-deck">{item.description}</p>
          <div className="article-meta">
            <time dateTime={item.date}>{formatDate(item.date)}</time>
            <span>{item.readTime} min read</span>
            <span>{item.tags.join(" / ")}</span>
          </div>
        </header>

        {item.heroImage && <figure className="writing-hero-figure">
          <Image src={item.heroImage.src} alt={item.heroImage.alt} width={item.heroImage.width} height={item.heroImage.height} priority sizes="(max-width: 1160px) calc(100vw - 32px), 1120px" />
        </figure>}

        <div className="article-layout writing-layout">
          <aside aria-label="On this page">
            <p className="eyebrow">On this page</p>
            {item.sections.map((section, index) => <a key={section.id} href={`#${section.id}`}>{String(index + 1).padStart(2, "0")} · {section.heading}</a>)}
          </aside>
          <div className="article-body writing-body">
            <div className="article-introduction">{item.introduction.map((block, index) => <ArticleBlock key={index} block={block} />)}</div>
            {item.sections.map((section, index) => <section id={section.id} key={section.id}>
              <p className="eyebrow">Section {String(index + 1).padStart(2, "0")}</p>
              <h2>{section.heading}</h2>
              {section.blocks.map((block, blockIndex) => <ArticleBlock key={blockIndex} block={block} />)}
            </section>)}
            <div className="article-tags" aria-label="Article topics">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </article>
    </main>
    <Footer />
  </>;
}
