import Link from "next/link";
import { FolderGit2, Mail } from "lucide-react";

const navItems = [
  { label: "Projects", icon: FolderGit2, href: "#projects" },
  { label: "Contact", icon: Mail, href: "#contact" },
];

const stack = ["TYPESCRIPT", "RUST", "WASM", "REACT", "NODE", "POSTGRES"];

export function PortfolioSidebar() {
  return (
    <aside className="col-span-12 lg:col-span-3 flex flex-col gap-8">
      <div className="neo-outset rounded-3xl p-8 flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-2xl neo-inset flex items-center justify-center">
            <div className="size-6 rounded-full bg-accent" />
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-tight text-foreground">
              Riccardo Colombo
            </h2>
            <p className="text-xs text-muted-foreground font-medium">
              Systems Architect
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 py-2 pr-3 pl-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <item.icon className="size-4 shrink-0" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-4">
          <div className="neo-inset rounded-2xl p-4">
            <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-md bg-surface-dark/40 text-[10px] font-semibold text-foreground/70 ring-1 ring-black/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link
        href="/cv"
        className="neo-button rounded-2xl py-3 text-center text-[10px] font-semibold uppercase tracking-widest text-muted-foreground"
      >
        View Résumé →
      </Link>
    </aside>
  );
}
