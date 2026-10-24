import { cn } from "@/lib/cn";
import { Container } from "./container";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, intro, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("py-20 sm:py-28", className)}
    >
      <Container>
        <div className="border-ink grid gap-10 border-t pt-6 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <div>
            <h2
              id={`${id}-title`}
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {title}
            </h2>
            {intro ? <p className="text-muted mt-3 max-w-xs">{intro}</p> : null}
          </div>
          <div>{children}</div>
        </div>
      </Container>
    </section>
  );
}
