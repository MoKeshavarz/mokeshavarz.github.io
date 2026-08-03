import Link from "next/link";
import { Header } from "../components";
import { orchestrationVariants } from "./marks";

export const metadata = { title: "Orchestration mark comparison", robots: { index: false, follow: false } };

export default function OrchestrationComparisonIndex() {
  return <><Header /><main className="comparison-index container" id="main"><p className="eyebrow">Local design study</p><h1>Layered Orchestration Mark</h1><nav aria-label="Orchestration mark variations">{orchestrationVariants.map((variant) => <Link className="button button-secondary" href={`/orchestration-comparison/${variant}`} key={variant}>{variant.replaceAll("-", " ")}</Link>)}</nav></main></>;
}
