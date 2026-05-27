#import "cv-template.typ": *

#show: doc => cv(
  name: "Riccardo Colombo",
  headline: "Sviluppatore Full-stack - React, Next.js, Node.js",
  location: "Sanremo (IM), Italia",
  email: "riccardocolombopro@gmail.com",
  phone: "+39 347 674 9853",
  linkedin: "linkedin.com/in/riccardo-colombo-534460174",
  github: "github.com/ColomboRiccardo",
  // portfolio: "tuo-portfolio.com",
  doc,
)

#section("Profilo")

Sviluppatore full-stack con oltre 6 anni di esperienza nella realizzazione
di applicazioni web in produzione con React, Next.js, TypeScript e Node.js.
Background su lending digitale (Compass / Publicis Group), e-commerce
enterprise (YOOX Net-a-Porter) e piattaforme B2B, con forte attenzione a
performance, accessibilità e qualità del codice. Abituato a gestire feature
end-to-end, coordinare piccoli team e rilasciare con scadenze stringenti.
Disponibile per collaborazioni in P.IVA o contratto full-time da remoto.

#section("Stack principale")

#skill-line("Frontend", "React, Next.js, TypeScript, JavaScript (ES202x), Tailwind CSS, Sass, Redux, Zustand")
#skill-line("Backend", "Node.js, Express, REST e GraphQL, PostgreSQL, MongoDB, Prisma")
#skill-line("Qualità", "Cypress, Jest, React Testing Library, CI/CD")
#skill-line("Tooling", "Git, Docker, Vercel, Netlify, AWS, Supabase")
#skill-line("Altro", "React Native, WordPress, Shopify, Figma")

#section("Progetti selezionati")

#project(
  name: "Compass Digital Lending",
  stack: "Next.js, Node.js, Prisma, MySQL, Redis, Cypress",
  desc: "Piattaforma multi-prodotto per richieste di prestito con compliance WCAG 2.1 AA, copertura E2E e integrazioni terze parti.",
)

#project(
  name: "Gastronom",
  stack: "Next.js, Vite, React, TypeScript, Tailwind, shadcn/ui, Python/Scrapy",
  desc: "Ecosistema multi-app per un'attività food wholesale: sito marketing, tool di gestione prodotti, scraper fornitori e estensione Chrome.",
  // url: "github.com/ColomboRiccardo/gastronom",
)

#section("Esperienza")

#entry(
  role: "Full-stack Developer",
  org: "Publicis Group",
  dates: "01/2026 - 06/2026",
  bullets: (
    [Sviluppo full-stack su piattaforme di lending digitale, ambito finanziario.],
    [Guidato un epic di accessibilità: audit, refactoring e raggiungimento compliance sui flussi critici.],
    [Progettazione e implementazione di suite E2E con Cypress, coprendo i flussi principali di richiesta prestito.],
    [Integrazione di servizi terzi: verifica Onfido, acquisizione documenti OCR con compressione lato client.],
    [Gestione di bug fixing cross-prodotto su 3 applicazioni parallele con strategia multi-worktree Git.],
  ),
)

#entry(
  role: "Lead Developer",
  org: "Moongy",
  dates: "02/2025 - 08/2025",
  bullets: (
    [Decisioni architetturali per un gestionale embedded: stack, modello dati, standard di codice.],
    [Coordinamento di 2 sviluppatori in contesto Agile Scrum: sprint planning, suddivisione dei task, code review.],
    [Implementazione di una pipeline CI/CD che ha ridotto i tempi di rilascio e le regressioni sulle build.],
    [Ottimizzazione di performance e footprint di memoria su hardware con risorse limitate.],
  ),
)

#entry(
  role: "Tutor Full-stack",
  org: "EPICODE",
  dates: "06/2024 - 01/2025",
  bullets: (
    [Insegnamento dello stack MERN a classi da 40 studenti tra lezioni, coding lab e mentoring 1:1.],
    [Progettazione di esercizi e capstone project; tasso di completamento del corso del 100%.],
    [Introduzione di testing, workflow di versionamento e pratiche di deploy nel programma.],
  ),
)

#entry(
  role: "Tester Front-end",
  org: "Hays",
  dates: "08/2023 - 02/2024",
  bullets: (
    [Sviluppo di suite end-to-end in Cypress con copertura dell'80% sui flussi critici di una web app.],
    [Integrazione dei test automatici nella pipeline di CI per intercettare le regressioni prima del rilascio.],
    [Collaborazione con sviluppatori e PM su triage dei difetti e hardening pre-rilascio.],
  ),
)

#entry(
  role: "Sviluppatore Front-end",
  org: "YOOX Net-a-Porter Group",
  dates: "08/2022 - 07/2023",
  bullets: (
    [Sviluppo e manutenzione di feature su e-commerce enterprise in team cross-funzionali.],
    [Miglioramento dei Core Web Vitals (LCP, FID, CLS) con impatto misurabile su SEO e conversione.],
    [Punteggio Lighthouse di accessibilità portato a 100 sui template di pagina principali.],
  ),
)

#entry(
  role: "Tutor Full-stack",
  org: "Develhope",
  dates: "02/2022 - 09/2022",
  bullets: (
    [Tutoring 1:1 su JavaScript, React e Node; supporto su strutture dati, algoritmi e architettura di progetto.],
    [Realizzazione di materiali didattici (slide e repo di riferimento) usati da oltre 20 studenti.],
  ),
)

#entry(
  role: "Sviluppatore Front-end",
  org: "F1 Consulting and Services",
  dates: "03/2020 - 07/2022",
  bullets: (
    [Sviluppo di SPA in React e Redux integrate con backend .NET Core su Kubernetes per clienti enterprise.],
    [Implementazione di code splitting e caching con riduzione del time-to-interactive sui moduli ad alto traffico.],
    [Collaborazione con QA e DevOps su pipeline di rilascio e monitoraggio.],
  ),
)

#entry(
  role: "Sviluppatore Freelance",
  org: "Sanremo",
  dates: "01/2020 - presente",
  bullets: (
    [Progettazione e realizzazione di siti e web app custom in React, Next.js, WordPress e Shopify.],
    [Consegna end-to-end: analisi requisiti, UX/UI, sviluppo, testing e deploy.],
  ),
)

#entry(
  role: "Social Media Manager",
  org: "SEO e Digital Marketing",
  dates: "11/2017 - 01/2020",
  bullets: (
    [Gestione social e campagne SEO per PMI; collaborazione tra marketing e product.],
  ),
)

#section("Istruzione")

#entry(
  role: "Zero To Mastery Academy",
  org: "Front-end, React/Redux, Web Design, Strutture Dati e Algoritmi",
  dates: "2020 - presente",
  bullets: (),
)

#entry(
  role: "Udemy",
  org: "Corsi su WordPress (temi, plugin, CMS)",
  dates: "2019 - 2020",
  bullets: (),
)

#entry(
  role: "Diploma di Maturità Scientifica (PNI)",
  org: "Liceo E. Stein, Gavirate",
  dates: "2009",
  bullets: (),
)

#section("Lingue")

#skill-line("Italiano", "madrelingua")
#skill-line("Inglese", "C1")
#skill-line("Russo", "base")

#section("Disponibilità")

Aperto a collaborazioni in P.IVA o full-time da remoto. Disponibile da luglio 2026.

#v(0.6em)
#text(size: 8pt, fill: muted)[
  Autorizzo il trattamento dei dati personali ai sensi del D.Lgs. 196/2003 e del Regolamento UE 2016/679 (GDPR).
]
