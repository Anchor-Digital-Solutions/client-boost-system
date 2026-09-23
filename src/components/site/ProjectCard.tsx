import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card p-6 transition duration-200 hover:border-primary/60 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="border border-primary/25 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase text-primary">{project.isDemo ? "Demo Project" : "Client Project"}</span>
        <span className="text-xs text-muted-foreground">0{index + 1}</span>
      </div>
      <p className="mt-8 text-xs font-semibold uppercase text-muted-foreground">{project.category}</p>
      <h3 className="mt-2 font-serif-display text-3xl">{project.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.services.map((service) => <span key={service} className="border border-border px-2.5 py-1 text-xs text-muted-foreground">{service}</span>)}
      </div>
      <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-primary">
        <Link to={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">View project <ArrowUpRight className="size-4" /></Link>
        {project.projectUrl && <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Live demo <ExternalLink className="size-4" /></a>}
      </div>
    </article>
  );
}