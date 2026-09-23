import type { automationWorkflows } from "@/lib/content";

type Workflow = (typeof automationWorkflows)[number];

export function AutomationWorkflow({ workflow }: { workflow: Workflow }) {
  const Icon = workflow.icon;
  return (
    <article className="border border-border bg-card p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="grid size-11 place-items-center bg-primary/10 text-primary"><Icon className="size-5" /></span>
        <span className="border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase text-primary">Demo / Concept</span>
      </div>
      <h3 className="mt-6 font-serif-display text-3xl">{workflow.title}</h3>
      <ol className="mt-6 space-y-0">
        {workflow.steps.map((step, index) => (
          <li key={step} className="relative flex gap-4 pb-5 last:pb-0">
            {index < workflow.steps.length - 1 && <span className="absolute left-[11px] top-6 h-full w-px bg-border" aria-hidden="true" />}
            <span className="relative z-10 mt-1 size-6 shrink-0 border border-primary bg-background text-center text-[10px] leading-[22px] text-primary">{index + 1}</span>
            <span className="text-sm leading-6 text-muted-foreground">{step}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}