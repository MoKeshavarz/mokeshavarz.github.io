"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type ContentType = "project" | "article" | "case_study" | "learning_note" | "book_summary" | "book" | "reading_note";

function sendAnalyticsEvent(eventName: string, parameters: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, parameters);
}

export function trackCopyEmail(location: string) {
  sendAnalyticsEvent("copy_email", { location });
}

export function trackSearch(searchTerm: string) {
  sendAnalyticsEvent("search", { search_term: searchTerm });
}

export function GoogleAnalyticsInteractions() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest<HTMLElement>("[data-analytics-event]");
      if (!element) return;

      if (element.dataset.analyticsEvent === "contact_click") {
        const location = element.dataset.analyticsLocation;
        if (location) sendAnalyticsEvent("contact_click", { contact_method: "email", location });
      }

      if (element.dataset.analyticsEvent === "select_content") {
        const contentType = element.dataset.analyticsContentType as ContentType | undefined;
        const contentId = element.dataset.analyticsContentId;
        if (contentType && contentId) sendAnalyticsEvent("select_content", { content_type: contentType, content_id: contentId });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
