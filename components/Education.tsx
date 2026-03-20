"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-12"
      >
        <span className="font-mono text-accent text-sm tracking-widest uppercase">
          {`// education`}
        </span>

        <div className="p-8 md:p-10 bg-surface border-l-4 border-l-accent border border-y-accent/10 border-r-accent/10 rounded-r-sm hover:glow-amber transition-all duration-300">
          <h3 className="font-playfair font-bold text-2xl md:text-3xl text-text-primary mb-2">
            B.Tech — Artificial Intelligence & Data Science
          </h3>
          <p className="font-mono text-text-muted text-lg">
            Thakur College of Engineering and Technology
          </p>
        </div>
      </motion.div>
    </section>
  );
}
