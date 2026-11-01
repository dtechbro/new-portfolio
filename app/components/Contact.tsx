"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative overflow-hidden rounded-2xl bg-foreground text-white p-8 md:p-14"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 block mb-4">
            Let&apos;s Connect
          </span>

          <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight mb-4 leading-tight">
            Got a project in mind?
            <br />
            <span className="text-white/60">Let&apos;s make it happen.</span>
          </h2>

          <p className="font-mono text-sm text-white/40 max-w-md mb-8">
            I&apos;m always interested in hearing about new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="mailto:princeakinola05@gmail.com"
              className="magnetic-btn group inline-flex items-center gap-2 bg-white text-foreground px-6 py-3 rounded-full text-sm font-mono uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              <span>Send a Mail</span>
              <GoArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="/Muhammad-Nabeel--Resume.pdf"
              download
              className="magnetic-btn inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full text-sm font-mono uppercase tracking-wider text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
