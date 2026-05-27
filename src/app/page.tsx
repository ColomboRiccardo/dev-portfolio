import { PortfolioSidebar } from "@/components/PortfolioSidebar";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { ContactForm } from "@/components/ContactForm";
import { Github, Linkedin, Twitter } from "lucide-react";

const projects = [
  {
    image: "/project-aether.jpg",
    title: "Aether Engine",
    description:
      "A real-time WebAssembly-powered visualizer for peer-to-peer mesh protocols.",
    tags: ["RUST", "WASM", "WEBGL"],
  },
  {
    image: "/project-synapse.jpg",
    title: "Synapse Framework",
    description:
      "A component library designed for high-density dashboard interfaces and hardware monitoring.",
    tags: ["TYPESCRIPT", "REACT", "TAILWIND"],
  },
  {
    image: "/project-nexus.jpg",
    title: "Nexus Admin",
    description:
      "Distributed database management console with visual sharding control and latency heatmaps.",
    tags: ["NODE", "POSTGRES", "D3"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <div className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <PortfolioSidebar />

            <main className="col-span-12 lg:col-span-9 flex flex-col gap-8">
              {/* Hero */}
              <section
                id="overview"
                className="neo-outset rounded-3xl p-10 flex flex-col gap-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                  Portfolio · 2026
                </p>
                <div className="max-w-[56ch]">
                  <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-foreground text-balance mb-4">
                    Building high-performance interfaces for complex technical
                    systems.
                  </h1>
                  <p className="text-lg text-muted-foreground text-pretty">
                    Focused on the intersection of systems engineering and digital
                    product design. Currently developing low-latency visualization
                    tools for distributed networks.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="#projects"
                    className="neo-button bg-accent text-accent-foreground px-6 py-2.5 rounded-xl text-sm font-medium ring-1 ring-accent/20"
                  >
                    View Case Studies
                  </a>
                  <div className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-muted-foreground">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    Available for Q3 contracts
                  </div>
                </div>
              </section>

              {/* Projects + Bio Grid */}
              <div id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectsGrid projects={projects} />

                {/* Bio panel */}
                <section
                  id="bio"
                  className="neo-inset rounded-3xl p-8 flex flex-col justify-center"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Bio_Log
                  </p>
                  <p className="text-base text-foreground/80 leading-relaxed text-pretty">
                    By day, I lead the core engineering team at Flux Media. By
                    night, I experiment with tactile UI metaphors and low-level
                    graphics programming. I believe the future of computing is
                    physical and deterministic.
                  </p>
                  <div className="mt-8 flex gap-3">
                    <a
                      aria-label="GitHub"
                      href="https://github.com"
                      className="size-10 rounded-full neo-button flex items-center justify-center text-muted-foreground hover:text-accent"
                    >
                      <Github className="size-4" />
                    </a>
                    <a
                      aria-label="LinkedIn"
                      href="https://linkedin.com"
                      className="size-10 rounded-full neo-button flex items-center justify-center text-muted-foreground hover:text-accent"
                    >
                      <Linkedin className="size-4" />
                    </a>
                    <a
                      aria-label="Twitter"
                      href="https://twitter.com"
                      className="size-10 rounded-full neo-button flex items-center justify-center text-muted-foreground hover:text-accent"
                    >
                      <Twitter className="size-4" />
                    </a>
                  </div>
                </section>
              </div>

              {/* Contact */}
              <section
                id="contact"
                className="neo-outset rounded-3xl p-8 lg:p-10 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2 max-w-[52ch]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                    Open_Channel
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">
                    Let&apos;s build something tactile together.
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Drop a note about your project. Every message lands directly
                    in my inbox queue.
                  </p>
                </div>
                <ContactForm />
              </section>

              {/* Stats footer */}
              <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
                {[
                  { value: "12.4k", label: "Github Stars" },
                  { value: "08", label: "Core Frameworks" },
                  { value: "99.9%", label: "Uptime Obsessed" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="neo-outset rounded-2xl p-6 text-center"
                  >
                    <span className="block text-2xl font-medium text-foreground">
                      {s.value}
                    </span>
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                      {s.label}
                    </span>
                  </div>
                ))}
              </footer>

              <p className="text-center text-[10px] font-medium text-muted-foreground/70 uppercase tracking-widest pb-4">
                © 2026 Riccardo Colombo — Designed for Depth
              </p>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
