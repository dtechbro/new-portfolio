"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useTextScramble } from "../hooks/useTextScramble";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/olaoye-md-nabeel", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/dtechbro", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/dtechbro", label: "X / Twitter" },
];

export default function Hero() {
  const { display: nameDisplay } = useTextScramble("MUHAMMAD-NABEEL", 35);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Availability badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200/60 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-green-700">
            Available for work
          </span>
        </motion.div>

        {/* Name — scramble effect */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-sans font-bold text-5xl md:text-7xl tracking-tight leading-[1.1] mb-4"
        >
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-muted block mb-3">
            Software Engineer
          </span>
          {nameDisplay}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-8"
        >
          I craft reliable, scalable digital products that combine clean
          architecture with exceptional user experiences — turning ideas into
          well-engineered solutions for a global audience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <a
            href="/Muhammad-Nabeel--Resume.pdf"
            download
            className="magnetic-btn group flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-full text-sm font-mono uppercase tracking-wider hover:bg-foreground/90 transition-colors"
          >
            <span>Resume</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
          <Link
            href="#projects"
            className="magnetic-btn flex items-center gap-2 border border-foreground/20 px-6 py-3 rounded-full text-sm font-mono uppercase tracking-wider text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all"
          >
            View My Work
          </Link>
        </motion.div>

        {/* Social icons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-5"
        >
          {socials.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <social.icon size={20} strokeWidth={1.5} />
            </Link>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-foreground/20 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1 h-1.5 bg-foreground/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
