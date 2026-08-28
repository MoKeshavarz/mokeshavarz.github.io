export type NarrativeSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  principle?: string;
};

export type Experience = {
  slug: string;
  company: string;
  alternateName?: string;
  role: string;
  employmentType?: string;
  startDate: string;
  endDate: string;
  dateLabel: string;
  location: string;
  remote: boolean;
  summary: string;
  theme: string;
  technologies: string[];
  sections: NarrativeSection[];
  selectedProjects: string[];
};

export const experiences: Experience[] = [
  {
    slug: "c1station",
    company: "Motahar Net Pars",
    alternateName: "C1Station",
    role: "Part-time Software Developer",
    employmentType: "Part-time",
    startDate: "2017-11-01",
    endDate: "2019-12-31",
    dateLabel: "Nov 2017 – Dec 2019",
    location: "Tehran",
    remote: false,
    summary:
      "My professional career started here while I was still at university. I moved from backend patches in an ASP.NET Web Forms CMS to client conversations and complete applications built from scratch.",
    theme: "I learned how to build software, and discovered that working software can still become an abandoned product.",
    technologies: ["C#", "ASP.NET Web Forms", "ASP.NET MVC", "ADO.NET", "Entity Framework", "SQL Server", "T-SQL", "JavaScript", "jQuery", "Firebase", "HTML", "CSS"],
    selectedProjects: ["dynamic-cms-form-generator"],
    sections: [
      {
        id: "starting-with-what-was-needed",
        heading: "Starting with what was needed",
        paragraphs: [
          "I joined as a university student and began with backend patches and bug fixes in an ASP.NET Web Forms CMS. When JavaScript work became necessary and nobody was available to handle it, I learned enough to take it on. That pattern—learn what the problem requires, then make it useful—became an important part of how I work.",
          "The work gradually expanded beyond isolated fixes. I learned ASP.NET MVC, attended client meetings, and began translating spoken requirements into software behavior. Eventually I was building complete applications from scratch rather than only changing an existing system.",
        ],
      },
      {
        id: "reusable-form-system",
        heading: "From patches to a reusable form system",
        paragraphs: [
          "One recurring CMS need became a reusable dynamic form generator. The backend supplied JSON describing the form and its validation rules. The interface could create repeatable rows, and the completed submission was serialized as XML for the existing backend workflow.",
          "I also created dynamic sitemap generation. These were early steps away from solving one screen at a time and toward designing components that could support many future screens.",
        ],
        principle: "The need taught me JavaScript; repetition taught me to design a system.",
      },
      {
        id: "applications-from-scratch",
        heading: "Applications from scratch",
        paragraphs: [
          "During this period I built a football application, a move-to-earn application, a watch auction marketplace, a gas bill payment application, and an application for Islamic Azad University students. They gave me broad experience across databases, interfaces, integrations, and the less tidy work of turning client expectations into something executable.",
          "Several of these applications worked technically and were still eventually abandoned. Shipping version one did not create ownership, ongoing content, users, operations, priorities, or a business model.",
        ],
      },
      {
        id: "the-graveyard",
        heading: "The graveyard of abandoned applications",
        paragraphs: [
          "I informally think of this period as the graveyard of abandoned applications. The name is blunt, but the lesson matters: building working software and building a sustainable product are two different problems.",
          "A familiar line—often attributed to Benjamin Franklin—says that failing to plan is planning to fail. What stayed with me was not the quote itself, but the missing question after delivery: who owns what happens next?",
        ],
        principle: "Working software is necessary. It is not a plan for keeping a product alive.",
      },
    ],
  },
  {
    slug: "independent-consulting",
    company: "Independent Software Engineering",
    alternateName: "Consulting",
    role: "Software Engineer / Consultant",
    startDate: "2020-01-01",
    endDate: "2022-07-31",
    dateLabel: "Jan 2020 – Jul 2022",
    location: "Independent",
    remote: false,
    summary:
      "I continued working with C1Station’s former tech lead and became interested in legacy applications, outdated stacks, and products without an active engineering team—the projects many developers preferred to avoid.",
    theme: "I learned that neglected software can often be brought back when there is real ownership and direction behind it.",
    technologies: ["C#", ".NET Core 3", ".NET", "Python", "React", "PostgreSQL", "SQL Server", "JavaScript", "jQuery", "SignalR", "Twilio", "Stripe", "Selenium", "Microsoft CRM", "WebEngage"],
    selectedProjects: ["mhelli-platform-recovery"],
    sections: [
      {
        id: "work-others-avoided",
        heading: "The work other developers avoided",
        paragraphs: [
          "This period began almost immediately after C1Station ended. We deliberately took an interest in messy codebases, half-maintained systems, and older technology. The aim was not to romanticize legacy software. It was to find out whether a product still had someone willing to own its direction.",
          "One product was a P2P cryptocurrency platform built from scratch with .NET Core 3, SQL Server, JavaScript, and jQuery. Users uploaded identity documents for administrator review; verified users could create buy and sell advertisements. We kept the interface deliberately simple. The client ultimately lacked a clear release and operations plan, reinforcing a lesson I had already started to learn.",
        ],
      },
      {
        id: "mhelli",
        heading: "Recovering Mhelli",
        paragraphs: [
          "Mhelli was an educational platform built with Python, React, and PostgreSQL. Its structure was difficult, and I had no previous professional experience with Python or React. I learned enough of both to trace the system, repair broken functionality, and restore quizzes, exams, courses, online courses, and other learning flows.",
          "Two junior developers later joined. I guided them through the codebase, explained its behavior, distributed work, and helped them avoid problems we had already found. For important release days we also prepared fallbacks in case something failed. A first visit to a broken learning platform can destroy trust before the course has a chance to help.",
          "The product continued to grow and was eventually rewritten into a better platform. I do not see that rewrite as proof that the recovered version failed. Code and architecture are replaceable; the direction, user understanding, and commitment that keep a product moving are harder to replace.",
        ],
        principle: "Reliability is part of UX.",
      },
      {
        id: "less-technology",
        heading: "Sometimes the recommendation is less technology",
        paragraphs: [
          "On Filmnab, a .NET project where I led two intermediate developers, the executive team considered a blockchain or cryptocurrency integration for a reward and discount mechanism. They asked for my recommendation. I advised against it because the business requirement could be met much more simply, without the additional technical and operational burden.",
          "The project also included marketing functionality and multilingual support through resource-file localization. The blockchain conversation remains the clearer engineering lesson: a technology can be interesting and still be the wrong answer.",
        ],
        principle: "Sometimes good engineering means recommending less technology.",
      },
      {
        id: "incremental-improvement",
        heading: "Improving what could safely change",
        paragraphs: [
          "An Austrian food-delivery platform allowed restaurants to deliver by bicycle, motorcycle, or car, and let students and other individuals apply as delivery partners. Its architecture was poor, but a full rewrite was unrealistic. I reorganized the parts we could change safely instead of proposing a clean replacement that might never ship.",
          "A separate Edinburgh ride-hailing application eventually stopped. I worked with SignalR, Twilio and Stripe, and built the administration panel using AdminLTE.",
        ],
        principle: "Pragmatic improvement can be more valuable than a perfect rewrite that never arrives.",
      },
      {
        id: "vitrinnet",
        heading: "VitrinNet, alongside the consulting work",
        paragraphs: [
          "From January to July 2022, I also worked part-time with VitrinNet, a B2B marketplace for industrial machinery. I improved profile and user flows and worked with JavaScript, jQuery, Microsoft CRM, marketing automation, Selenium, and WebEngage.",
          "The automation helped build and organize a large supplier and customer dataset spanning more than ten industries. It was useful supporting work, not a magical replacement for the commercial knowledge needed to make that dataset meaningful.",
        ],
      },
      {
        id: "direction",
        heading: "What survived the code",
        paragraphs: [
          "This period changed my view of old systems. Neglected software could be recovered when people still believed in the product and were prepared to make decisions about it. A rewrite could also be healthy when it carried forward what the earlier product had taught its team.",
        ],
        principle: "Code is replaceable. Direction is harder to replace.",
      },
    ],
  },
  {
    slug: "geeks",
    company: "Geeks Ltd",
    role: "Senior Software Engineer",
    startDate: "2022-07-01",
    endDate: "2023-06-30",
    dateLabel: "Jul 2022 – Jun 2023",
    location: "Remote · International team",
    remote: true,
    summary:
      "My first fully remote, international senior role introduced me to disciplined testing, code review, proprietary frameworks, large applications, and engineering communication in English.",
    theme: "I learned how mature engineering practices make complex software safer to change.",
    technologies: ["C#", "M#", "Zebble", "React", "DynamoDB", "Amazon S3", "AWS Rekognition", "OpenAI", "Azure Functions", "Selenium", "TDD", "Unit testing", "E2E testing"],
    selectedProjects: ["wordup-product-features"],
    sections: [
      {
        id: "a-different-engineering-culture",
        heading: "A different engineering culture",
        paragraphs: [
          "Daily stand-ups, English communication, distributed teams, test-driven development, unit tests, end-to-end tests, and code review changed the rhythm of my work. These practices were not ceremony around the software. They were how a large group made changes without relying on one person’s memory.",
          "Geeks also used proprietary development frameworks. M# let developers define models, entities, and properties through fluent-style definitions, then generated database structures, views, controllers, and standard application code. It made normal requirements fast. Custom requirements could become difficult, sometimes requiring C# logic inside the model definitions.",
        ],
        principle: "Abstractions save enormous amounts of work, but eventually an engineer still needs to understand what is underneath them.",
      },
      {
        id: "tests-as-permission",
        heading: "Tests as permission to change software",
        paragraphs: [
          "TDD was common for new features. For bugs, the workflow was equally deliberate: inspect the unit and end-to-end coverage, add a test that reproduced the missing behavior, watch it fail, fix the implementation, watch it pass, and refactor when appropriate.",
          "Pangolin, an internal Selenium-based framework, supported end-to-end testing. The important shift for me was that tests were not an item added after implementation. They created a controlled way to modify software whose full behavior could not fit in one person’s head.",
        ],
        principle: "Tests give you permission to change software.",
      },
      {
        id: "lineup-adpoint",
        heading: "Lineup / Adpoint",
        paragraphs: [
          "My first team worked on Adpoint, which supported advertising-related commercial workflows for media businesses. I handled customized requirements, a caching layer that combined database records with cached values and results from additional functions, and Azure Functions upgrades.",
          "The caching work pushed beyond M#’s easiest paths. After this project, product and technical leadership were satisfied with my contribution and I moved to a larger company project.",
        ],
      },
      {
        id: "search-acumen",
        heading: "Contributing without understanding everything first",
        paragraphs: [
          "Search Acumen was a large UK property and conveyancing platform used by solicitors, property professionals, and related organizations. Users could identify land through maps or postcode workflows and obtain drainage, environmental, mining, planning, and other property information.",
          "I worked across the backend, frontend, and bug fixing while learning an unfamiliar business domain. The scale taught me that contribution does not require understanding the entire codebase first. You can follow a requirement, trace its path, understand the components it touches, solve it, and widen your mental model over time.",
          "The project also materially improved my English communication in an engineering environment.",
        ],
      },
      {
        id: "wordup",
        heading: "The team move I did not expect to enjoy",
        paragraphs: [
          "I was not initially excited about the move, but WordUp became one of the most technically interesting parts of my time at Geeks. During that stage of the product, it used another internal framework called Zebble, conceptually somewhat like Xamarin-style development.",
          "I worked on OpenAI-powered language and translation functionality, generated sentence audio and a component for playing it, and storage and reuse of frequently requested audio through Amazon S3. Other work involved AWS Rekognition-related image processing and cropping, DynamoDB, React, and C#.",
          "One of my favorite features was a certificate system for vocabulary milestones. Bronze, silver, and gold certificates crossed C#, DynamoDB, React, certificate data and logic, and a LinkedIn sharing flow. It was a compact user feature that required several systems to agree.",
        ],
      },
      {
        id: "safe-to-change",
        heading: "Making important software safe to change",
        paragraphs: [
          "WordUp served millions of learners, and the other platforms supported professional work with real consequences. In systems like these, testing, review, communication, and engineering discipline are not bureaucracy. They are mechanisms that let a team keep changing complicated software with confidence.",
        ],
        principle: "Important software must be safe to change.",
      },
    ],
  },
  {
    slug: "supplysustain",
    company: "SupplySustain",
    role: "Senior Software Engineer",
    startDate: "2023-05-01",
    endDate: "2024-06-30",
    dateLabel: "May 2023 – Jun 2024",
    location: "Remote · UAE-focused startup",
    remote: true,
    summary:
      "I joined the early-stage team building an MVP for a UAE tender and procurement product. My main responsibility was backend engineering. This work belongs to that early version of the platform, not necessarily the product as it exists today.",
    theme: "I learned that an MVP is a mechanism for reducing uncertainty, not simply a smaller full product.",
    technologies: ["C#", ".NET", "Azure Blob Storage", "SQL", "JSON", "REST APIs"],
    selectedProjects: ["supplysustain-tender-draft-workflow"],
    sections: [
      {
        id: "early-stage-team",
        heading: "An early-stage procurement product",
        paragraphs: [
          "The initial team included a project manager, an experienced tech lead I respected and learned from, a frontend engineer, a UI/UX designer, and me as the backend engineer. We were building enough of a tender and procurement platform to demonstrate its concept in the UAE market.",
          "Buyers could create public, private, and alternative bidding styles, including a Crystal Tender where suppliers could see competing offers. Buyers maintained private supplier lists, required authorization or qualification, and requested documents such as certificates. After closing, tenders could be compared through price, distance, quality-related criteria, technical deviation, and other evaluation information.",
        ],
      },
      {
        id: "files-and-drafts",
        heading: "Access boundaries and interrupted work",
        paragraphs: [
          "Files were separated into public and private Azure Blob Storage containers. That choice was part of the access model: not every tender document should be reachable in the same way merely because it was uploaded through the same product.",
          "Tender creation could span many steps, so I built draft persistence around JSON state and the relevant file references. When a user returned, the application fetched the appropriate draft, reconstructed the form, populated its fields, and let the user continue where they had stopped.",
        ],
        principle: "People get interrupted. Software should remember where they were.",
      },
      {
        id: "moving-mvp",
        heading: "When the MVP target kept moving",
        paragraphs: [
          "The original objective was clear: build enough to demonstrate the idea and help attract investment. Over time, the loop became new feature, release, new feature, release. The amount of product kept growing while the definition of the MVP became harder to hold still.",
          "At some point the project reminded me of an analogy Rod Stephens uses in Beginning Software Engineering: chasing a bus in the rain while the driver keeps moving just a little faster every time you get close. That was increasingly how our MVP felt.",
          "The question I now wish teams asked more often is simple: what are we trying to learn before adding the next feature?",
        ],
      },
      {
        id: "alignment",
        heading: "Technical risk and business uncertainty",
        paragraphs: [
          "Engineering could see technical risks. Management also had business, market, and investor information that developers did not necessarily have. The problem was not that one side understood everything and the other understood nothing. It was the difficulty of keeping MVP scope, architectural assumptions, business hypotheses, and stakeholder expectations aligned.",
          "There were disagreements between technical leaders and management, and several technical leaders eventually left. I include that only because it affected continuity and made the alignment problem visible—not to assign blame.",
        ],
      },
      {
        id: "prototype-to-production",
        heading: "The architecture tension",
        paragraphs: [
          "An MVP should not be over-engineered. But prototype architecture should not quietly become long-term production architecture without anyone revisiting the assumptions that made it reasonable. Both statements are true, and the difficult work is knowing when the product has crossed from one condition into the other.",
          "I also used to joke that some projects needed ten sociologists beside the engineers. The more mature version of that thought is less theatrical: user research, product discovery, behavioral insight, market knowledge, product management, and engineering need to work together. Code alone cannot resolve uncertainty about people.",
        ],
        principle: "An MVP exists to reduce uncertainty, not simply to accumulate features.",
      },
      {
        id: "before-the-first-line",
        heading: "Before the first line of code",
        paragraphs: [
          "If I ever become an entrepreneur, this is one of the experiences I would revisit before writing the first line of code. It made the relationship between product discovery, architecture, funding expectations, and daily engineering decisions impossible to treat as separate topics.",
        ],
      },
    ],
  },
];

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}
