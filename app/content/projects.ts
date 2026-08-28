export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  relatedExperience: string;
  context: string;
  responsibility: string;
  problem: string;
  constraints: string[];
  approach: string[];
  systems: string[];
  decisions: string[];
  outcome: string[];
  tradeoffs: string[];
  lessons: string[];
  technologies: string[];
  status: string;
  relatedWriting: string[];
  featuredOrder?: number;
};

export const projects: Project[] = [
  {
    slug: "dynamic-cms-form-generator",
    title: "Dynamic CMS Form Generator",
    eyebrow: "C1Station / Reusable systems",
    relatedExperience: "c1station",
    context:
      "During my first professional role, an ASP.NET Web Forms CMS needed many forms whose fields and validation could not be hard-coded one screen at a time.",
    responsibility:
      "I learned the JavaScript required for the work and designed the reusable client-side component, while fitting it into the CMS and its existing backend contract.",
    problem:
      "Repeated form implementations would have scattered similar rendering, validation, repeatable-row, and submission behavior throughout the product.",
    constraints: [
      "The backend, rather than the interface, defined each form and its validation rules.",
      "Some sections needed rows that users could clone and complete repeatedly.",
      "The existing submission contract expected XML rather than a new payload format.",
      "This work had to fit an established ASP.NET Web Forms CMS.",
    ],
    approach: [
      "The backend supplied a JSON definition for the fields and validation. The component interpreted that definition and built the corresponding interface.",
      "Repeatable sections were treated as part of the form model, so cloning a row did not require a separate page-specific implementation.",
      "On submission, the collected values were serialized to XML for the existing backend workflow.",
    ],
    systems: ["Backend JSON definition", "Form renderer", "Validation", "Repeatable rows", "XML submission"],
    decisions: [
      "Keep the form definition on the backend so the CMS could vary forms without duplicating client templates.",
      "Build repeatable rows into the reusable component rather than treating them as a special-case screen.",
      "Honor the established XML boundary instead of widening the task into a backend contract rewrite.",
    ],
    outcome: [
      "The result was a reusable form generator that supported backend-defined fields, validation, clonable sections, and the CMS’s XML submission flow.",
      "More importantly for my own development, it was a transition from junior patch work toward thinking in reusable behavior and system boundaries.",
    ],
    tradeoffs: [
      "A server-driven form is flexible, but the JSON contract becomes an API that both sides must understand and evolve carefully.",
      "Keeping XML submission preserved compatibility, although it also preserved an older boundary that a new system might design differently.",
    ],
    lessons: ["A practical need can be the fastest route into a new language.", "When the same behavior keeps returning, the useful unit of work may be a system rather than another screen."],
    technologies: ["JavaScript", "jQuery", "JSON", "XML", "ASP.NET Web Forms", "C#"],
    status: "Delivered during 2017–2019 role",
    relatedWriting: ["the-graveyard-of-abandoned-applications"],
  },
  {
    slug: "mhelli-platform-recovery",
    title: "Mhelli Platform Recovery",
    eyebrow: "Independent consulting / Legacy recovery",
    relatedExperience: "independent-consulting",
    context:
      "Mhelli was an educational platform with a difficult Python, React, and PostgreSQL codebase. At that stage, core learning flows were not dependable enough for students to use with confidence.",
    responsibility:
      "I learned an unfamiliar stack well enough to trace failures and repair the product. Later, I guided two junior developers through the codebase, explained its behavior, distributed tasks, and helped them avoid known problems.",
    problem:
      "The product needed to become usable again without the time or certainty required for an immediate rewrite, while important release days carried a real risk of losing user trust.",
    constraints: [
      "I had no previous professional Python or React experience.",
      "The existing application was poorly structured and difficult to reason about.",
      "Students needed working quizzes, exams, courses, online courses, and learning flows.",
      "Release-day reliability mattered even when every underlying architectural weakness could not be removed.",
    ],
    approach: [
      "I learned enough Python and React to follow requests through the existing application rather than attempting a speculative rewrite.",
      "We repaired the learning workflows in place and prepared fallback plans for important launches.",
      "When two junior developers joined, I shared the mental model I had built, divided work, and pointed out failure-prone areas before they rediscovered them independently.",
    ],
    systems: ["React interface", "Python application", "PostgreSQL", "Learning workflows", "Release fallbacks"],
    decisions: [
      "Recover useful behavior before pursuing architectural cleanliness.",
      "Treat launch fallbacks as part of the user experience, not merely an operational concern.",
      "Make the codebase understandable to new developers so recovery did not depend on one person.",
    ],
    outcome: [
      "Students could again use quizzes, exams, courses, online courses, and the platform’s learning functionality.",
      "The product later continued growing and was rewritten into a better platform. That rewrite did not erase the value of the recovered version; it carried the product to a point where a better foundation made sense.",
    ],
    tradeoffs: [
      "Repairing the existing application restored value sooner but left some structural problems in place.",
      "Fallback planning reduced release risk without pretending the underlying system had become perfectly reliable.",
    ],
    lessons: ["Reliability is part of UX.", "Code and architecture can be replaced; product direction and accumulated user understanding are harder to recreate."],
    technologies: ["Python", "React", "PostgreSQL"],
    status: "Recovered; product later rewritten",
    relatedWriting: ["reliability-is-part-of-ux", "code-is-replaceable-direction-is-harder"],
  },
  {
    slug: "wordup-product-features",
    title: "WordUp Product Features & Integrations",
    eyebrow: "Geeks Ltd / Cross-system product work",
    relatedExperience: "geeks",
    context:
      "During the period I worked on WordUp at Geeks, the language-learning product served millions of learners and used C#, React, DynamoDB, AWS services, OpenAI functionality, and Geeks’ Zebble framework.",
    responsibility:
      "I built and connected language, audio, image-processing, and certificate features across backend services, data, storage, and interface code.",
    problem:
      "User-facing features that looked compact in the interface required several systems to produce, store, reuse, and share consistent results.",
    constraints: [
      "Frequently requested generated audio should not be regenerated unnecessarily.",
      "The product combined proprietary framework code with C#, React, DynamoDB, and multiple external services.",
      "Certificate milestones needed consistent logic, data, rendering, and sharing behavior.",
      "Changes belonged to an established product serving millions of users, not a greenfield application.",
    ],
    approach: [
      "For language features, I worked with OpenAI integration, generated sentence audio, and a component that played the generated result.",
      "Frequently reused audio was stored and retrieved through Amazon S3 instead of being regenerated for every use.",
      "I also worked with AWS Rekognition-related image processing and cropping.",
      "For vocabulary milestones, the bronze, silver, and gold certificate feature connected C#, DynamoDB, React, certificate data and logic, and a LinkedIn sharing workflow.",
    ],
    systems: ["C# / Zebble", "OpenAI", "Generated audio", "Amazon S3", "React / DynamoDB", "Sharing workflow"],
    decisions: [
      "Reuse generated audio through object storage when the same result was requested again.",
      "Keep certificate eligibility, persisted data, presentation, and sharing behavior consistent across their system boundaries.",
      "Work within the product’s established frameworks while understanding enough of the underlying systems to handle custom requirements.",
    ],
    outcome: [
      "The work added language and media functionality and a certificate flow that recognized learner milestones across multiple application layers.",
      "The certificate system became one of my favorite features from the role because its simple user story depended on careful coordination behind the interface.",
    ],
    tradeoffs: [
      "Frequently requested generated audio was persisted in Amazon S3 so stored audio could be reused.",
      "Product frameworks accelerate common paths while making unusual integrations more dependent on understanding what they generate and hide.",
    ],
    lessons: ["Cross-system features succeed when each boundary has a clear responsibility.", "Automated testing and disciplined review make changes to an established product less fragile."],
    technologies: ["C#", "Zebble", "React", "DynamoDB", "Amazon S3", "AWS Rekognition", "OpenAI"],
    status: "Delivered during 2022–2023 role",
    relatedWriting: ["tests-give-you-permission-to-change-software"],
    featuredOrder: 1,
  },
  {
    slug: "supplysustain-tender-draft-workflow",
    title: "SupplySustain Tender & Draft Workflow",
    eyebrow: "SupplySustain / Backend workflow design",
    relatedExperience: "supplysustain",
    context:
      "In the early-stage MVP period of SupplySustain, we were building tender and procurement workflows for the UAE market. This describes that early version, not necessarily the company’s current platform.",
    responsibility:
      "As the backend engineer, I worked on tender creation and evaluation workflows, supplier qualification, file access boundaries, and persistence that let users stop and resume a long tender form.",
    problem:
      "Tender creation crossed many steps, documents, bidder rules, and evaluation criteria. Users needed to leave and return without losing work, while public and private files required different access behavior.",
    constraints: [
      "The product supported public, private, and alternative bidding styles, including Crystal Tender visibility into competing offers.",
      "Buyers could maintain private supplier lists and require qualification data such as certificates and other documents.",
      "File visibility was part of the security model, not merely a storage concern.",
      "The workflow belonged to an MVP whose scope and long-term architectural assumptions were still changing.",
    ],
    approach: [
      "Tender state was persisted as JSON together with relevant file references and data.",
      "When a user returned, the appropriate draft was fetched, the form was reconstructed, fields were populated, and work could continue from the interruption point.",
      "Azure Blob Storage used separate public and private containers to preserve different access expectations.",
      "After a tender closed, reporting supported comparisons involving price, distance or location, quality-related criteria, technical deviation, and other evaluation information.",
    ],
    systems: ["Tender API", "JSON draft state", "File references", "Public/private blobs", "Form reconstruction", "Evaluation reports"],
    decisions: [
      "Persist the user’s in-progress intent, not only completed tender records.",
      "Separate public and private storage containers as an explicit access boundary.",
      "Model the backend around multiple tender and qualification paths without assuming every workflow was identical.",
    ],
    outcome: [
      "Users could pause a multi-step tender and later resume with their prior state and relevant file data restored.",
      "The early product supported different tender visibility models, supplier qualification, document handling, and comparison information for buyer decisions.",
    ],
    tradeoffs: [
      "JSON snapshots made complex draft restoration practical, while requiring care as the form model evolved.",
      "MVP speed was important, but prototype assumptions needed deliberate review as requirements accumulated.",
    ],
    lessons: ["People get interrupted. Software should remember where they were.", "An MVP should reduce uncertainty; adding another feature is useful only when it serves that learning."],
    technologies: ["C#", ".NET", "Azure Blob Storage", "JSON", "SQL", "REST APIs"],
    status: "Early-stage MVP work · 2023–2024",
    relatedWriting: ["when-an-mvp-stops-being-an-mvp"],
    featuredOrder: 2,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects
  .filter((project) => project.featuredOrder !== undefined)
  .sort((first, second) => (first.featuredOrder ?? 0) - (second.featuredOrder ?? 0));
