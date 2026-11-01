"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import { experiences, type Experience as ExperienceType } from "../data/experience";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

function ExperienceItem({ exp }: { exp: ExperienceType }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, {
    margin: "-20% 0px -35% 0px",
  });

  return (
    <motion.div
      ref={itemRef}
      variants={cardVariants}
      className="relative mb-12 last:mb-0"
    >
      {/* Node marker on the timeline line */}
      <div
        className={`absolute -left-8 md:-left-12 -translate-x-1/2 top-2 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 z-10 ${
          isInView
            ? "border-foreground bg-foreground scale-125 shadow-[0_0_8px_rgba(0,0,0,0.25)]"
            : "border-foreground/30 bg-white scale-100"
        }`}
      />

      <div
        className={`transition-all duration-300 ${
          isInView ? "opacity-100 translate-x-1" : "opacity-75 hover:opacity-100"
        }`}
      >
        {/* Date */}
        <span
          className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
            isInView ? "text-foreground font-semibold" : "text-muted"
          }`}
        >
          {exp.date}
        </span>

        {/* Title + Company */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-1.5 mb-2">
          <h3
            className={`font-sans font-semibold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
              isInView ? "text-foreground" : "text-foreground/90"
            }`}
          >
            {exp.title}
          </h3>
          {exp.companyUrl ? (
            <Link
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white w-fit py-1 px-3 rounded-lg transition-all duration-300 ${
                isInView
                  ? "bg-foreground shadow-sm scale-[1.02]"
                  : "bg-foreground/70 hover:bg-foreground"
              }`}
            >
              {exp.company}
            </Link>
          ) : (
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white w-fit py-1 px-3 rounded-lg transition-all duration-300 ${
                isInView ? "bg-foreground shadow-sm" : "bg-foreground/60"
              }`}
            >
              {exp.company}
            </span>
          )}
        </div>

        {/* Description bullets */}
        <ul className="space-y-1.5 mb-3">
          {exp.description.map((desc) => (
            <li
              key={desc}
              className={`flex items-start gap-2 text-sm transition-colors duration-300 ${
                isInView ? "text-foreground/80" : "text-gray-500"
              }`}
            >
              <span
                className={`w-1 h-1 mt-2 rounded-full shrink-0 transition-colors duration-300 ${
                  isInView ? "bg-foreground" : "bg-muted"
                }`}
              />
              <span className="font-mono text-[13px] leading-relaxed">
                {desc}
              </span>
            </li>
          ))}
        </ul>

        {/* Skills pills */}
        <div className="flex flex-wrap gap-1.5">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded transition-colors duration-300 ${
                isInView
                  ? "bg-foreground/10 text-foreground"
                  : "bg-foreground/5 text-foreground/50"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const trackerTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Section header */}
        <div className="mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted block mb-2">
            Career Journey
          </span>
          <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative pl-8 md:pl-12"
        >
          {/* Static background track line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-black/10 -translate-x-1/2" />

          {/* Dynamic progress fill line */}
          <motion.div
            style={{ scaleY: progress, transformOrigin: "top" }}
            className="absolute left-0 top-2 bottom-2 w-[2px] bg-foreground -translate-x-1/2 origin-top"
          />

          {/* Traveling active tracker dot */}
          <motion.div
            style={{ top: trackerTop }}
            className="absolute left-0 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-white shadow-md z-20 pointer-events-none"
          />

          {experiences.map((exp) => (
            <ExperienceItem key={exp.company} exp={exp} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
