export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  companyUrl?: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    title: "Frontend Engineer",
    company: "Princeps Credit Systems Limited",
    location: "Remote",
    date: "Jul 2025 — Dec 2025",
    description: [
      "Built and maintained credit management interfaces for financial products",
      "Developed responsive dashboards for loan tracking and repayment systems",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Frontend Engineer",
    company: "Meetro",
    location: "Remote",
    date: "May 2025 — Sep 2025",
    description: [
      "Developed event management platform handling ticketing and guest management",
      "Implemented state management with Zustand for complex event workflows",
    ],
    companyUrl: "https://meetro.vercel.app/",
    skills: ["React", "JavaScript", "Zustand"],
  },
  {
    title: "Software Engineer",
    company: "Apexbyte Technologies",
    location: "Remote",
    date: "Sep 2024 — Feb 2025",
    description: [
      "Built scalable web applications for diverse client projects",
      "Collaborated with cross-functional teams on product delivery",
    ],
    skills: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    title: "Frontend Engineer",
    company: "Animation Hub",
    location: "Remote",
    date: "Jul 2024 — Aug 2024",
    description: [
      "Created interactive animation-driven web experiences",
      "Focused on performance-optimized motion design implementations",
    ],
    skills: ["React", "CSS Animations", "JavaScript"],
  },
  {
    title: "Web Developer",
    company: "Flip to Tech",
    location: "Remote",
    date: "Oct 2022 — Dec 2023",
    description: [
      "Developed responsive websites and web applications for clients",
      "Worked across the full frontend stack from design to deployment",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];
