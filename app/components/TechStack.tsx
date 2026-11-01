"use client";

import { motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiExpress,
  SiVuedotjs,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiFigma,
  SiVercel,
} from "react-icons/si";

interface Tool {
  name: string;
  icon: IconType;
}

const tools: Tool[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "Express", icon: SiExpress },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "SCSS", icon: SiSass },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function TechStack() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Tools & Technologies
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
        >
          {tools.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center gap-2.5 py-4 px-3 rounded-xl bg-white/40 border border-transparent hover:border-black/5 hover:bg-white/70 transition-all duration-300 cursor-default"
            >
              {Icon && typeof Icon === "function" ? (
                <Icon className="w-6 h-6 text-foreground/50 group-hover:text-foreground transition-colors duration-300" />
              ) : null}
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted group-hover:text-foreground/70 transition-colors duration-300">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
