"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects -> headline 0.3x, subtext 0.5x
  const yHeadline = useTransform(scrollY, [0, 1000], [0, 300]);
  const ySubheading = useTransform(scrollY, [0, 1000], [0, 500]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20">

      <motion.div
        style={{ y: yHeadline, opacity }}
        className="z-10 text-center max-w-5xl mt-12"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-playfair font-black text-[clamp(3.5rem,8vw,9rem)] leading-[1.1] tracking-tight mb-6 text-white"
        >
          Creative <br className="sm:hidden" /> Technologist.
        </motion.h1>
      </motion.div>

      <motion.div 
        style={{ y: ySubheading, opacity }}
        className="z-10 text-center max-w-2xl px-4"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-mono font-light text-text-muted text-base md:text-xl leading-relaxed mb-10"
        >
          I build privacy-first web tools and AI-driven products — where clean design meets functional engineering.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
        >
          <button 
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto px-8 py-4 bg-accent text-background font-mono font-bold rounded-sm border border-accent hover:bg-accent/90 active:scale-95 transition-all duration-300 min-h-[56px]"
          >
            View My Work
          </button>
          <a 
            href="https://github.com/shuban2007" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-accent font-mono font-bold rounded-sm border border-accent hover:bg-accent/10 active:scale-95 transition-all duration-300 min-h-[56px]"
          >
            GitHub 
            <IconArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
