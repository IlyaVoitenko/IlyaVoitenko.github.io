import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/profile";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro="Tools and methods I have used on real projects."
    >
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <article
            key={group.id}
            aria-labelledby={`skill-${group.id}`}
            className={i === 0 ? "md:col-span-2" : undefined}
          >
            <header className="border-rule flex items-baseline justify-between gap-4 border-b pb-3">
              <h3
                id={`skill-${group.id}`}
                className="text-lg font-semibold tracking-tight"
              >
                {group.title}
              </h3>
              <span className="text-muted font-mono text-sm tabular-nums">
                {group.items.length}
              </span>
            </header>
            <p className="text-muted mt-3 max-w-sm text-sm">{group.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border-rule bg-surface rounded-md border px-3 py-1.5 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
