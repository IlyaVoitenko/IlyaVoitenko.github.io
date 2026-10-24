import { Container } from "@/components/ui/container";
import { nav, profile } from "@/data/profile";

export function Header() {
  return (
    <header className="border-rule bg-paper/85 sticky top-0 z-40 border-b backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Main">
          <ul className="text-muted flex items-center gap-5 text-sm sm:gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-ink transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
