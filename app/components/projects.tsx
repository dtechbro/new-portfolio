"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { projects, Project } from "../data/projects";

const categories = ["All", "Frontend", "Fullstack"] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Filter projects by active category tab
  const matchingProjects = projects.filter(
    (p) =>
      activeFilter === "All" ||
      p.category.toLowerCase() === activeFilter.toLowerCase()
  );

  // Determine spotlight / featured project for this view:
  // 1. If a matching project is marked featured, spotlight it.
  // 2. Otherwise, if there is only 1 project in this category, spotlight it.
  const featured: Project | undefined =
    matchingProjects.find((p) => p.featured) ||
    (activeFilter !== "All" && matchingProjects.length === 1
      ? matchingProjects[0]
      : undefined);

  // Remaining projects for the grid
  const gridProjects = matchingProjects.filter(
    (p) => p.title !== featured?.title
  );

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-20">
      {/* Scroll reveal for the section container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted block mb-2">
              Selected Work
            </span>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight">
              Projects I&apos;ve Built
            </h2>
          </div>

          {/* Category filter tabs */}
          <div className="flex gap-1 p-1 rounded-full bg-white/40 border border-black/5 w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? "text-foreground font-medium"
                    : "text-muted hover:text-foreground/70"
                }`}
              >
                {activeFilter === cat && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Spotlight / Featured project card */}
            {featured && (
              <motion.div variants={itemVariants} className="mb-8">
                <Link
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="project-card relative overflow-hidden rounded-2xl bg-white/60 border border-black/5 p-6 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                      <div className="shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gray-50 flex items-center justify-center border border-black/5">
                          <Image
                            src={featured.image}
                            alt={featured.title}
                            width={50}
                            height={50}
                            className="w-10 h-10 md:w-12 md:h-12"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted bg-foreground/5 px-2 py-0.5 rounded">
                            {featured.featured ? "Featured" : featured.category}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                            {featured.year}
                          </span>
                        </div>
                        <h3 className="font-sans font-semibold text-2xl md:text-3xl mb-2 tracking-tight">
                          {featured.title}
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base mb-4 max-w-xl">
                          {featured.description}
                        </p>

                        {featured.highlights && (
                          <ul className="mb-4 space-y-1">
                            {featured.highlights.map((h) => (
                              <li
                                key={h}
                                className="text-xs font-mono text-muted flex items-center gap-2"
                              >
                                <span className="w-1 h-1 bg-muted rounded-full" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="flex flex-wrap gap-2 mb-4">
                          {featured.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-foreground/5 text-foreground/60 rounded-md"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-2 text-sm text-foreground/60 group-hover:text-foreground transition-colors font-mono">
                          View Project{" "}
                          <GoArrowRight className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Grid of remaining projects */}
            {gridProjects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {gridProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    variants={itemVariants}
                    className="h-full"
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full"
                    >
                      <div className="project-card flex flex-col justify-between p-6 rounded-xl bg-white/40 border border-transparent hover:border-black/5 hover:bg-white/60 min-h-[220px] h-full transition-colors duration-300">
                        <div>
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={44}
                            height={44}
                            className="w-11 h-11 mb-4"
                          />

                          <div className="flex items-center gap-3 mb-1.5">
                            <h3 className="font-sans font-semibold text-lg tracking-tight">
                              {project.title}
                            </h3>
                            <span className="font-mono text-[10px] text-muted">
                              {project.year}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm mb-4">
                            {project.description}
                          </p>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-foreground/5 text-foreground/50 rounded"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>

                          <span className="inline-flex items-center gap-1.5 text-sm text-foreground/40 group-hover:text-foreground transition-all duration-300 font-mono">
                            <span className="link-underline">View Project</span>
                            <GoArrowRight
                              size={14}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
