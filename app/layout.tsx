import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mokeshavarz.github.io"),
  title: "Ario Keshavarz — Software Engineer & Thoughtful Builder",
  description: "Work experience, writing, and reading notes from Ario Keshavarz.",
  openGraph: { title: "Ario Keshavarz — Software Engineer", description: "I make complex things feel simple.", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ario Keshavarz — Software engineer and thoughtful builder" }] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
