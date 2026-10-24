import { Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" title="Contact" intro={`${profile.availability}.`}>
      <a
        href={`mailto:${profile.email}`}
        className="group decoration-rule hover:decoration-cobalt inline-flex items-center gap-3 text-2xl font-semibold tracking-tight break-all underline decoration-2 underline-offset-8 transition-colors sm:text-4xl"
      >
        <Mail aria-hidden className="text-cobalt size-6 shrink-0 sm:size-8" />
        {profile.email}
      </a>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </ButtonLink>
        <ButtonLink
          href={profile.github}
          variant="outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </ButtonLink>
      </div>
    </Section>
  );
}
