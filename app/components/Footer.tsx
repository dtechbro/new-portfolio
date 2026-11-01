"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "X (Twitter)", href: "https://x.com/dtechbro" },
  { label: "LinkedIn", href: "https://linkedin.com/in/olaoye-md-nabeel" },
  { label: "GitHub", href: "https://github.com/dtechbro" },
  { label: "Instagram", href: "https://instagram.com/dtechbro" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="max-w-5xl mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <hr className="editorial-rule mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="font-mono text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors cursor-pointer"
            >
              ↑ Back to top
            </button>
            <span className="font-mono text-[11px] text-muted/60">
              © {new Date().getFullYear()} dtechbro
            </span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
