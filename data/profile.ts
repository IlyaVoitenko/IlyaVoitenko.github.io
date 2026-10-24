export const profile = {
  name: "Illia Voitenko",
  role: "QA Engineer",
  tagline: "I test web applications, APIs and the data behind them.",
  summary:
    "QA engineer with a developer's background. I design test cases, write bug reports that developers can reproduce on the first try, and automate regression checks so each release is safer than the last.",
  location: "Brandenburg, Germany",
  availability: "Open to remote work in Europe",
  email: "voitenkoillya@gmail.com",
  linkedin: "https://www.linkedin.com/in/illiavoitenko",
  github: "https://github.com/IlyaVoitenko",
} as const;

export const facts = [
  { label: "Location", value: profile.location },
  { label: "Availability", value: profile.availability },
] as const;

export const languages = [
  { name: "English", level: "C1" },
  { name: "German", level: "A2, learning toward B1" },
  { name: "Russian", level: "Native" },
  { name: "Ukrainian", level: "Native" },
] as const;

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "testing",
    title: "Testing",
    description: "How I find problems before users do.",
    items: [
      "Test automation",
      "Functional testing",
      "Exploratory testing",
      "Regression testing",
      "UI testing",
      "API testing",
      "Security testing",
      "Input validation",
      "Authentication flows",
      "Performance (Lighthouse)",
      "Test design",
      "Test documentation",
      "Bug reporting",
      "Defect analysis",
      "Data validation",
    ],
  },
  {
    id: "automation",
    title: "Test automation",
    description: "Checks that run without me.",
    items: [
      "Cypress",
      "Jest",
      "Playwright",
      "React Testing Library",
      "Postman",
      "TypeScript",
    ],
  },
  {
    id: "data",
    title: "Data and backend",
    description: "Where I look when the UI says one thing and the data says another.",
    items: [
      "SQL",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "REST APIs",
      "GraphQL",
      "Node.js",
      "NestJS",
      "Express",
      "Python (Base)",
      "Go (Base)",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "The layer I know best from the inside.",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS and SCSS"],
  },
  {
    id: "process",
    title: "Tools and process",
    description: "How the work fits into a team.",
    items: [
      "Git and GitHub",
      "GitHub Actions",
      "Git",
      "Docker",
      "CI/CD",
      "CLI",
      "Command line",
      "Chrome DevTools",
      "Lighthouse",
      "Agile and Scrum",
      "SDLC",
    ],
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

/** Lines shown in the hero test run. `defect` marks the one check that fails. */
export const heroRun = [
  { name: "Login accepts valid credentials", status: "pass" },
  { name: "Login rejects malicious input", status: "pass" },
  { name: "Transfer form validates amounts", status: "defect" },
  { name: "API returns correct error codes", status: "pass" },
  { name: "Data in PostgreSQL matches the UI", status: "pass" },
  { name: "Layout holds on mobile and desktop", status: "pass" },
  { name: "Lighthouse score stays above 90", status: "pass" },
] as const;
