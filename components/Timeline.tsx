"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { IconPlus, IconMinus, IconArrowRight } from "@tabler/icons-react";

const phases = [
  {
    id: 1,
    date: "Early 2024",
    title: "Curiosity & First Exposure",
    desc: "Discovered AI tools for coding help, debugging, and learning concepts. AI acted like an advanced search and learning assistant.",
    tag: "Beginner",
    insight: "AI changes how you learn — not just what you learn."
  },
  {
    id: 2,
    date: "Mid 2024",
    title: "First Real Use in Projects",
    desc: "Started building small projects like CLI tools and simple applications. Learned effective prompting and began understanding code better.",
    tag: "Learner",
    insight: "Prompting is a skill. The better your input, the better your output."
  },
  {
    id: 3,
    date: "Late 2024",
    title: "Web Development + AI Integration",
    desc: "Built web-based tools using HTML, CSS, and JavaScript with AI assistance. Focus shifted to faster development and UI/UX improvements.",
    tag: "Builder",
    insight: "Building in the browser taught me to think in systems."
  },
  {
    id: 4,
    date: "Early 2025",
    title: "Building Real AI-Driven Ideas",
    desc: "Moved from small tools to product thinking. Built portfolio projects and automation systems using AI for planning and development.",
    tag: "Builder with AI",
    insight: "The shift from coder to product thinker changes everything."
  },
  {
    id: 5,
    date: "Mid 2025",
    title: "Advanced Projects & Systems Thinking",
    desc: "Worked on complex systems including game development and Raspberry Pi integrations. Began focusing on scalability and real-world use cases.",
    tag: "Engineer",
    insight: "Complexity is just simple things, compounded."
  },
  {
    id: 6,
    date: "Late 2025",
    title: "Product-Level Thinking",
    desc: "Developed practical solutions like logistics platforms and inventory systems. Focused on solving real-world business problems.",
    tag: "Engineer designing systems",
    insight: "Real problems need real solutions — not just demos."
  },
  {
    id: 7,
    date: "2026 – Present",
    title: "AI-Native Development",
    desc: "Using AI as a full collaborator for building complete applications. Capable of designing, developing, and scaling full-stack projects.",
    tag: "AI-powered product creator",
    insight: "AI isn't a tool anymore. It's a collaborator."
  }
];

const summaryStages = [
  "Beginner",
  "Learner",
  "Builder with AI",
  "Engineer",
  "AI-Native Product Creator"
];

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">
      <div className="flex flex-col gap-4 text-center mb-24 relative z-20">
        <span className="font-mono text-accent text-sm tracking-widest uppercase">
          {`// journey`}
        </span>
        <h2 className="font-playfair font-bold text-4xl md:text-6xl text-text-primary">
          My AI Dev Journey.
        </h2>
        <p className="font-mono text-[#9ca3af] text-base md:text-lg max-w-2xl mx-auto">
          From curiosity to AI-native development — every phase shaped how I build today.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full">
        {/* Timeline Line */}
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-accent/20 -translate-x-1/2" />
        <motion.div
           className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-accent -translate-x-1/2 origin-top"
           style={{ scaleY: pathLength }}
        />

        <div className="flex flex-col gap-12 md:gap-24 relative z-10 w-full">
          {phases.map((phase, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = phase.id === expandedId;

            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-center justify-between w-full flex-row ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Desktop Empty Space for alignment */}
                <div className="hidden md:block md:w-[45%]" />

                {/* Timeline Number / Dot */}
                <div className="absolute left-0 translate-x-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-accent bg-[#1A1E14] text-accent font-mono font-bold text-lg z-20">
                  {phase.id}
                </div>

                {/* Card */}
                <motion.div
                  className="w-[calc(100%-4rem)] ml-auto md:ml-0 md:w-[45%] bg-[#1A1E14] border border-accent/20 rounded-sm p-6 md:p-8 cursor-pointer relative"
                  whileHover={{ y: -4, boxShadow: "0 0 15px rgba(251,191,36,0.1)" }}
                  onClick={() => setExpandedId(isExpanded ? null : phase.id)}
                >
                  <div className="absolute top-6 right-6 text-accent">
                    {isExpanded ? <IconMinus size={20} /> : <IconPlus size={20} />}
                  </div>

                  <span className="font-mono text-accent text-xs uppercase tracking-widest block mb-2">
                    {phase.date}
                  </span>
                  
                  <h3 className="font-playfair font-bold text-2xl text-text-primary mb-4 pr-8">
                    {phase.title}
                  </h3>
                  
                  <p className="font-mono text-[#9ca3af] text-sm leading-relaxed mb-8">
                    {phase.desc}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden border-l-2 border-accent pl-4"
                      >
                        <p className="font-mono text-accent/90 italic text-sm">
                          "{phase.insight}"
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="absolute bottom-6 right-6 bg-black/30 border border-accent/30 rounded-full px-3 py-1">
                    <span className="font-mono text-text-primary text-[10px] uppercase tracking-wider">
                      {phase.tag}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Evolution Summary Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mt-32 max-w-5xl mx-auto pt-16 border-t border-accent/10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-[11px] left-8 right-8 h-[2px] bg-accent/20 -z-10" />
          
          {summaryStages.map((stage, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-4 text-center">
              {idx > 0 && (
                <IconArrowRight size={20} className="md:hidden text-accent/50" />
              )}
              <div className="flex flex-col items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0" />
                <span className="font-mono text-text-primary text-xs md:text-sm tracking-wide max-w-[150px]">
                  {stage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
