import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "../../components";
import { ComparisonHero } from "../comparison-hero";
import { orchestrationVariants, type OrchestrationVariant } from "../marks";

export function generateStaticParams() {
  return orchestrationVariants.map((variant) => ({ variant }));
}

export const metadata: Metadata = {
  title: "Orchestration mark comparison",
  robots: { index: false, follow: false },
};

export default async function OrchestrationComparison({ params }: { params: Promise<{ variant: string }> }) {
  const { variant } = await params;
  if (!orchestrationVariants.includes(variant as OrchestrationVariant)) notFound();
  return <><Header /><main id="main"><ComparisonHero variant={variant as OrchestrationVariant} /></main></>;
}
