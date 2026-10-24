import { Section } from "@/components/ui/section";
import { facts, languages, profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-2xl text-xl leading-relaxed sm:text-2xl sm:leading-relaxed">
        {profile.summary}
      </p>

      <dl className="mt-14 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label} className="border-rule border-t pt-3">
            <dt className="text-muted text-sm">{fact.label}</dt>
            <dd className="mt-1 text-lg font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <h3 className="text-muted text-sm">Languages</h3>
        <ul className="divide-rule border-rule mt-3 divide-y border-y">
          {languages.map((lang) => (
            <li key={lang.name} className="flex justify-between gap-4 py-3">
              <span className="font-medium">{lang.name}</span>
              <span className="text-muted">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
