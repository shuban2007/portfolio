"use client";

import { motion } from "framer-motion";
import { IconTrophy } from "@tabler/icons-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-12"
      >
        <span className="font-mono text-accent text-sm tracking-widest uppercase">
          {`// achievements`}
        </span>

        <div className="relative group p-8 md:p-12 bg-surface border border-accent rounded-sm overflow-hidden glow-amber hover:glow-amber-strong transition-all duration-500">
          
          {/* Looping Shimmer Sweep Animation */}
          <div className="absolute inset-0 -translate-x-[150%] animate-shimmer bg-accent/20 shimmer-mask pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="p-4 bg-background border border-accent/30 rounded-full flex-shrink-0">
              <IconTrophy size={48} className="text-accent" />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="font-playfair font-bold text-3xl md:text-4xl text-text-primary mb-3">
                Winner — <br className="md:hidden" />ML-2 Web-A-Thon Hackathon
              </h3>
              <p className="font-mono text-text-muted text-base md:text-lg">
                at VISTA 2026 — Recognized for creative implementation and project presentation
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
