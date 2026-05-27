import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Globe, FileText } from "lucide-react";
import { cvData } from "./cv-data";

export const metadata: Metadata = {
  title: "CV — Riccardo Colombo",
  description: cvData.summary,
};

export default function CvPage() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <div className="py-8 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to portfolio
            </Link>
            <div className="flex gap-3">
              <a
                href="/cv/cv-en.pdf"
                download="Riccardo_Colombo_CV_EN.pdf"
                className="neo-button flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                <Download className="size-3.5" />
                EN
              </a>
              <a
                href="/cv/cv-it.pdf"
                download="Riccardo_Colombo_CV_IT.pdf"
                className="neo-button flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                <Download className="size-3.5" />
                IT
              </a>
            </div>
          </div>

          {/* CV Card */}
          <article className="neo-outset rounded-3xl p-8 lg:p-12 flex flex-col gap-10">
            {/* Header */}
            <header className="flex flex-col gap-3">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                {cvData.name}
              </h1>
              <p className="text-lg text-accent font-medium">
                {cvData.headline}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span>{cvData.location}</span>
                <a href={`mailto:${cvData.email}`} className="hover:text-foreground">
                  {cvData.email}
                </a>
                <a href={cvData.linkedin} className="hover:text-foreground">
                  LinkedIn
                </a>
                <a href={cvData.github} className="hover:text-foreground">
                  GitHub
                </a>
              </div>
            </header>

            {/* Summary */}
            <Section title="Summary">
              <p className="text-foreground/85 leading-relaxed">
                {cvData.summary}
              </p>
            </Section>

            {/* Skills */}
            <Section title="Core Stack">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {Object.entries(cvData.skills).map(([label, value]) => (
                  <div key={label}>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      {label}
                    </span>
                    <p className="text-sm text-foreground/80 mt-0.5">{value}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Projects */}
            <Section title="Selected Projects">
              <div className="flex flex-col gap-4">
                {cvData.projects.map((p) => (
                  <div key={p.name} className="neo-inset rounded-2xl p-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                      <h3 className="font-semibold text-foreground">{p.name}</h3>
                      <span className="text-xs text-muted-foreground">{p.stack}</span>
                    </div>
                    <p className="text-sm text-foreground/75 mt-1">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Experience */}
            <Section title="Experience">
              <div className="flex flex-col gap-8">
                {cvData.experience.map((exp) => (
                  <div key={`${exp.role}-${exp.org}`} className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <span className="font-semibold text-foreground">{exp.role}</span>
                        <span className="text-muted-foreground"> — {exp.org}</span>
                      </div>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {exp.dates}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-1.5 ml-4">
                      {exp.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="text-sm text-foreground/80 relative before:content-['•'] before:absolute before:-left-3.5 before:text-muted-foreground"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section title="Education">
              <div className="flex flex-col gap-3">
                {cvData.education.map((edu) => (
                  <div key={edu.title} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                    <div>
                      <span className="font-medium text-foreground">{edu.title}</span>
                      <span className="text-sm text-muted-foreground"> — {edu.detail}</span>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {edu.dates}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Languages */}
            <Section title="Languages">
              <div className="flex gap-6">
                {cvData.languages.map((l) => (
                  <div key={l.name} className="text-sm">
                    <span className="font-medium text-foreground">{l.name}</span>
                    <span className="text-muted-foreground"> — {l.level}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Availability */}
            <div className="flex items-center gap-3 neo-inset rounded-2xl p-5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-foreground">
                Available for contract and full-time remote roles from July 2026
              </span>
            </div>
          </article>

          {/* Download footer */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
            <a
              href="/cv/cv-en.pdf"
              download="Riccardo_Colombo_CV_EN.pdf"
              className="neo-button bg-accent text-accent-foreground px-6 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2"
            >
              <FileText className="size-4" />
              Download CV (English)
            </a>
            <a
              href="/cv/cv-it.pdf"
              download="Riccardo_Colombo_CV_IT.pdf"
              className="neo-button bg-surface text-foreground px-6 py-3 rounded-xl text-sm font-medium ring-1 ring-border flex items-center justify-center gap-2"
            >
              <Globe className="size-4" />
              Download CV (Italiano)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}
