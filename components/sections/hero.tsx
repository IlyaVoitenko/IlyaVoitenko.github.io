import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { TestRun } from "@/components/ui/test-run";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="pt-14 pb-20 sm:pt-24 sm:pb-28"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <p className="text-muted text-lg">{profile.role}</p>
          <h1
            id="hero-title"
            className="mt-3 text-[clamp(3.5rem,11vw,8rem)] leading-[0.9] font-semibold tracking-[-0.045em]"
          >
            Illia
            <br />
            Voitenko
          </h1>
          <p className="text-ink mt-8 max-w-md text-xl leading-snug">{profile.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#contact">Get in touch</ButtonLink>
            <ButtonLink
              href={profile.linkedin}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ButtonLink>
          </div>
        </div>
        <TestRun />
      </Container>
    </section>
  );
}
