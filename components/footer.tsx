import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-rule text-muted border-t py-8 text-sm">
      <Container className="flex flex-wrap justify-between gap-2">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js and TypeScript</p>
      </Container>
    </footer>
  );
}
