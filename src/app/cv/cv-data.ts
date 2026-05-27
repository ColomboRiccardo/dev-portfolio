export const cvData = {
  name: "Riccardo Colombo",
  headline: "Full-stack Developer — React, Next.js, Node.js",
  location: "Sanremo, Italy",
  email: "riccardocolombopro@gmail.com",
  phone: "+39 347 674 9853",
  linkedin: "https://linkedin.com/in/riccardo-colombo-534460174",
  github: "https://github.com/ColomboRiccardo",

  summary:
    "Full-stack developer with 6+ years building production web apps in React, Next.js, TypeScript and Node.js. Background in digital lending (Compass / Publicis Group), enterprise e-commerce (YOOX Net-a-Porter) and B2B platforms, with a strong focus on performance, accessibility and code quality. Comfortable owning features end-to-end, leading small teams and shipping under tight timelines.",

  skills: {
    Frontend:
      "React, Next.js, TypeScript, JavaScript (ES202x), Tailwind CSS, Sass, Redux, Zustand",
    Backend:
      "Node.js, Express, REST and GraphQL, PostgreSQL, MongoDB, Prisma",
    Quality: "Cypress, Jest, React Testing Library, CI/CD",
    Tooling: "Git, Docker, Vercel, Netlify, AWS, Supabase",
    Also: "React Native, WordPress, Shopify, Figma",
  },

  projects: [
    {
      name: "Compass Digital Lending",
      stack: "Next.js, Node.js, Prisma, MySQL, Redis, Cypress",
      desc: "Multi-product loan application platform with full WCAG 2.1 AA compliance, E2E coverage and third-party integrations.",
    },
    {
      name: "Gastronom",
      stack: "Next.js, Vite, React, TypeScript, Tailwind, shadcn/ui, Python/Scrapy",
      desc: "Multi-app ecosystem for a food wholesale business: marketing website, product management tool, supplier scraper and Chrome extension.",
    },
  ],

  experience: [
    {
      role: "Full-stack Developer",
      org: "Publicis Group (client: Compass)",
      dates: "Jan 2026 – Jun 2026",
      bullets: [
        "Full-stack development on digital lending platforms in Next.js, Node.js, Prisma and MySQL.",
        "Led a WCAG 2.1 AA accessibility epic: audit, refactoring and full compliance across all critical flows.",
        "Designed and implemented Cypress E2E test suites covering the main loan application flows.",
        "Integrated third-party services: identity verification, document capture with client-side compression.",
        "Managed cross-product bug fixing across 3 parallel applications using a multi-worktree Git strategy.",
      ],
    },
    {
      role: "Lead Developer",
      org: "Moongy",
      dates: "Feb 2025 – Aug 2025",
      bullets: [
        "Defined architecture for management software on embedded: tech choices, data model, coding standards.",
        "Coordinated 2 developers in Agile Scrum: sprint planning, task breakdown, code review.",
        "Set up CI/CD pipeline that cut release times and reduced regressions on device builds.",
        "Optimized runtime performance and memory footprint on constrained hardware.",
      ],
    },
    {
      role: "Full-stack Tutor",
      org: "EPICODE",
      dates: "Jun 2024 – Jan 2025",
      bullets: [
        "Taught the MERN stack to cohorts of 40 students through lectures, coding labs and 1:1 mentoring.",
        "Designed exercises and capstone projects; cohort completion rate of 100%.",
        "Introduced testing, version control workflow and deployment practices into the curriculum.",
      ],
    },
    {
      role: "Front-end Tester",
      org: "Hays",
      dates: "Aug 2023 – Feb 2024",
      bullets: [
        "Built Cypress end-to-end suites covering 80% of critical flows for a web application.",
        "Integrated automated tests into the CI pipeline, surfacing regressions before release.",
        "Worked with developers and PMs on defect triage and pre-release hardening.",
      ],
    },
    {
      role: "Front-end Developer",
      org: "YOOX Net-a-Porter Group",
      dates: "Aug 2022 – Jul 2023",
      bullets: [
        "Built and maintained features on enterprise e-commerce in cross-functional teams.",
        "Improved Core Web Vitals (LCP, FID, CLS) with measurable impact on SEO and conversion.",
        "Raised Lighthouse accessibility score from baseline to 100 on key page templates.",
      ],
    },
    {
      role: "Full-stack Tutor",
      org: "Develhope",
      dates: "Feb 2022 – Sep 2022",
      bullets: [
        "1:1 tutoring on JavaScript, React and Node; support on data structures, algorithms and project architecture.",
        "Authored teaching materials (slides and reference repos) used by 20+ students.",
      ],
    },
    {
      role: "Front-end Developer",
      org: "F1 Consulting and Services",
      dates: "Mar 2020 – Jul 2022",
      bullets: [
        "Built React and Redux SPAs integrated with .NET Core backends running on Kubernetes for enterprise clients.",
        "Implemented code splitting and caching, reducing time-to-interactive on high-traffic modules.",
        "Collaborated with QA and DevOps on release pipelines and monitoring.",
      ],
    },
    {
      role: "Freelance Developer",
      org: "Self-employed, Sanremo",
      dates: "Jan 2020 – present",
      bullets: [
        "Designed and shipped custom websites and web apps in React, Next.js, WordPress and Shopify.",
        "End-to-end delivery: requirements, UX/UI, development, testing and deployment.",
      ],
    },
  ],

  education: [
    {
      title: "Zero To Mastery Academy",
      detail: "Front-end, React/Redux, Web Design, Data Structures and Algorithms",
      dates: "2020 – present",
    },
    {
      title: "Udemy",
      detail: "WordPress development (themes, plugins, CMS)",
      dates: "2019 – 2020",
    },
    {
      title: "Scientific High School Diploma (PNI)",
      detail: "Liceo E. Stein, Gavirate",
      dates: "2009",
    },
  ],

  languages: [
    { name: "Italian", level: "native" },
    { name: "English", level: "C1" },
    { name: "Russian", level: "basic" },
  ],
};
