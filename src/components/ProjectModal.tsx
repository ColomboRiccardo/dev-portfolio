"use client";

import { Fragment, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: {
    image: string;
    title: string;
    description: string;
    tags: string[];
  } | null;
}

export function ProjectModal({ open, onClose, project }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-surface-dark/60 backdrop-blur-sm animate-in fade-in duration-200" />

      {/* Modal panel */}
      <div className="relative neo-outset-lg bg-surface rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto animate-in zoom-in-95 fade-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 neo-button size-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>

        {/* Image */}
        <div className="p-6 pb-0">
          <div className="neo-inset p-2 rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="w-full aspect-[16/9] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-5 flex flex-col gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent mb-2">
              Case Study
            </p>
            <h2 className="text-2xl font-semibold text-foreground tracking-tight">
              {project.title}
            </h2>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2">
            {project.tags.map((t, i) => (
              <Fragment key={t}>
                {i > 0 && <span className="text-muted-foreground/40">·</span>}
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {t}
                </span>
              </Fragment>
            ))}
          </div>

          <div className="pt-4 border-t border-border mt-2">
            <p className="text-sm text-foreground/70 leading-relaxed">
              More details about this project coming soon. Stay tuned for the full case study with technical deep-dives, architecture diagrams, and performance benchmarks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
