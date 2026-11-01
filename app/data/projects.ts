export interface Project {
  title: string;
  description: string;
  tools: string[];
  link: string;
  image: string;
  category: "frontend" | "fullstack";
  highlights?: string[];
  year: number;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Meetro",
    description:
      "An event management application handling creation, ticketing, and guest managing.",
    tools: ["React", "JavaScript", "Tailwind CSS", "Zustand"],
    link: "https://meetro.vercel.app/",
    image: "/meetro.svg",
    category: "fullstack",
    highlights: [
      "Event creation and management dashboard",
      "Ticketing & guest check-in system",
    ],
    year: 2025,
    featured: true,
  },
  {
    title: "Enyata Talent Board",
    description:
      "Global talent management system to discover Africa's top tech talent.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    link: "https://talents.enyata.com/",
    image: "/enyata.svg",
    category: "fullstack",
    highlights: [
      "Talent discovery & filtering engine",
      "Profile management for African tech professionals",
    ],
    year: 2025,
  },
  {
    title: "Caregiver Specialists Clinic",
    description: "Website for a Neurology and Endocrinology Clinic.",
    tools: ["Next.js", "Tailwind CSS"],
    link: "https://www.caregiverspecialistclinics.com.ng",
    image: "/caregiver.png",
    category: "frontend",
    highlights: [
      "Medical service booking interface",
      "Doctor profiles & specialization pages",
    ],
    year: 2024,
  },
  {
    title: "Lendsqr Dashboard",
    description: "Admin Dashboard for 500 customers.",
    tools: ["React", "SCSS"],
    link: "https://muhammad-nabeel-lendsqr-fe-test.vercel.app/",
    image: "/lendsqr.svg",
    category: "frontend",
    highlights: [
      "Customer data management for 500+ users",
      "Analytics & reporting dashboard",
    ],
    year: 2024,
  },
  {
    title: "Web Wing Agency",
    description: "Website for a Software Agency Company.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://web-wing-geekhive-team-project-one.netlify.app/",
    image: "/web-wing.svg",
    category: "frontend",
    year: 2023,
  },
  {
    title: "Rendezvous Event",
    description: "Website to scout for events and details.",
    tools: ["Vue.js", "Tailwind CSS"],
    link: "https://rendezvous-event.vercel.app/",
    image: "/rendezvous.svg",
    category: "frontend",
    year: 2023,
  },
];
