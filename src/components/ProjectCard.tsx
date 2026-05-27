import { ArrowUpRight } from "lucide-react";
import { Fragment } from "react";

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  onClick?: () => void;
}

export function ProjectCard({ image, title, description, tags, onClick }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="neo-outset rounded-3xl p-6 flex flex-col gap-4 group cursor-pointer transition-transform duration-300 hover:-translate-y-1 text-left"
    >
      <div className="neo-inset p-2 rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-between items-start gap-4">
        <div className="max-w-[35ch]">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3">
            {tags.map((t, i) => (
              <Fragment key={t}>
                {i > 0 && <span className="text-muted-foreground/40">·</span>}
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {t}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="neo-inset p-2 rounded-lg shrink-0">
          <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-accent transition-colors" />
        </div>
      </div>
    </button>
  );
}
