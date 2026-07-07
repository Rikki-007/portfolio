export type Category = "Web" | "Software" | "App" | "Design";

export type Project = {
  title: string;
  category: Category;
  description: string;
  year: string;
  href: string;
};

export const categoryAccent: Record<Category, string> = {
  Web: "cyan",
  Software: "amber",
  App: "cyan",
  Design: "crimson",
};

export const projects: Project[] = [
  {
    title: "Aspect Plumbing",
    category: "Web",
    description:
      "Next.js marketing site for a Dublin-area plumbing business — booking funnel, service area pages, and a Lighthouse-tuned build.",
    year: "2026",
    href: "#",
  },
  {
    title: "Electricians 24/7",
    category: "Web",
    description:
      "Static, zero-dependency site for a Dublin 24-hour electrician, built for sub-second loads on mobile connections.",
    year: "2026",
    href: "#",
  },
  {
    title: "Transit Pulse",
    category: "App",
    description:
      "A commute companion app with live delay predictions, offline route caching, and a widget for at-a-glance departures.",
    year: "2025",
    href: "#",
  },
  {
    title: "Forge CLI",
    category: "Software",
    description:
      "A project-scaffolding CLI that generates typed API clients from an OpenAPI spec, cutting new-service setup from hours to minutes.",
    year: "2025",
    href: "#",
  },
  {
    title: "Nocturne Type System",
    category: "Design",
    description:
      "A variable-font brand identity and poster series exploring high-contrast editorial layouts for a fictional night-market client.",
    year: "2025",
    href: "#",
  },
  {
    title: "Aperture Dashboard",
    category: "Software",
    description:
      "A real-time analytics dashboard with streaming charts and role-based access, built to stay responsive at 10k+ events/sec.",
    year: "2024",
    href: "#",
  },
];
