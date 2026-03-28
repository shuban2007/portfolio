"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const phases = [
  {
    id: 1,
    date: "Early 2024",
    title: "Curiosity & First Exposure",
    desc: "Discovered AI tools for coding help, debugging, and learning concepts. AI acted like an advanced search and learning assistant.",
    tag: "Beginner",
    insight: "AI changes how you learn — not just what you learn.",
  },
  {
    id: 2,
    date: "Mid 2024",
    title: "First Real Use in Projects",
    desc: "Started building small projects like CLI tools and simple applications. Learned effective prompting and began understanding code better.",
    tag: "Learner",
    insight: "Prompting is a skill. The better your input, the better your output.",
  },
  {
    id: 3,
    date: "Late 2024",
    title: "Web Development + AI Integration",
    desc: "Built web-based tools using HTML, CSS, and JavaScript with AI assistance. Focus shifted to faster development and UI/UX improvements.",
    tag: "Builder",
    insight: "Building in the browser taught me to think in systems.",
  },
  {
    id: 4,
    date: "Early 2025",
    title: "Building Real AI-Driven Ideas",
    desc: "Moved from small tools to product thinking. Built portfolio projects and automation systems using AI for planning and development.",
    tag: "Builder with AI",
    insight: "The shift from coder to product thinker changes everything.",
  },
  {
    id: 5,
    date: "Mid 2025",
    title: "Advanced Projects & Systems Thinking",
    desc: "Worked on complex systems including game development and Raspberry Pi integrations. Began focusing on scalability and real-world use cases.",
    tag: "Engineer",
    insight: "Complexity is just simple things, compounded.",
  },
  {
    id: 6,
    date: "Late 2025",
    title: "Product-Level Thinking",
    desc: "Developed practical solutions like logistics platforms and inventory systems. Focused on solving real-world business problems.",
    tag: "Engineer designing systems",
    insight: "Real problems need real solutions — not just demos.",
  },
  {
    id: 7,
    date: "2026 – Present",
    title: "AI-Native Development",
    desc: "Using AI as a full collaborator for building complete applications. Capable of designing, developing, and scaling full-stack projects.",
    tag: "AI-powered product creator",
    insight: "AI isn't a tool anymore. It's a collaborator.",
  },
];

const summaryStages = [
  { label: "Beginner", targetId: 1 },
  { label: "Learner", targetId: 2 },
  { label: "Builder with AI", targetId: 4 },
  { label: "Engineer", targetId: 5 },
  { label: "AI-Native Product Creator", targetId: 7 },
];

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const isSummaryInView = useInView(summaryRef, { once: true, margin: "-100px" });
  const [flashingId, setFlashingId] = useState<number | null>(null);

  const handleScrollToPhase = (id: number) => {
    const el = document.getElementById(`phase-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setFlashingId(id);
      setTimeout(() => setFlashingId(null), 1500);
    }
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="timeline"
      className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-4 text-center mb-24 relative z-20">
        <span className="font-mono text-amber text-sm tracking-widest uppercase">
          {`// journey`}
        </span>
        <h2 className="font-playfair font-bold text-4xl md:text-6xl text-white">
          My AI Dev Journey.
        </h2>
        <p className="font-mono text-grey text-base md:text-lg max-w-2xl mx-auto">
          From curiosity to AI-native development — every phase shaped how I
          build today.
        </p>
      </div>

      {/* Timeline Cards */}
      <div ref={containerRef} className="relative w-full">
        {/* Vertical amber line */}
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-amber/20 -translate-x-1/2" />
        <motion.div
          className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-amber -translate-x-1/2 origin-top"
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
                {/* Desktop Empty Space */}
                <div className="hidden md:block md:w-[45%]" />

                {/* Phase Number Circle */}
                <div className="absolute left-0 translate-x-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-amber bg-black text-amber font-mono font-bold text-lg z-20">
                  {phase.id}
                </div>

                {/* Card */}
                <motion.div
                  id={`phase-${phase.id}`}
                  className={`w-[calc(100%-4rem)] ml-auto md:ml-0 md:w-[45%] bg-navy border rounded-sm cursor-pointer transition-colors duration-500 ${
                    flashingId === phase.id
                      ? "border-amber shadow-[0_0_30px_rgba(252,163,17,0.4)]"
                      : "border-amber/25"
                  }`}
                  whileHover={{
                    y: -4,
                    boxShadow:
                      flashingId === phase.id
                        ? "0 0 30px rgba(252,163,17,0.4)"
                        : "0 0 15px rgba(252,163,17,0.15)",
                  }}
                  onClick={() => setExpandedId(isExpanded ? null : phase.id)}
                >
                  <div className="flex flex-col gap-3 p-6 md:p-8 min-h-[280px]">
                    {/* Date + Toggle */}
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-amber text-xs uppercase tracking-widest">
                        {phase.date}
                      </span>
                      <div className="text-amber">
                        {isExpanded ? (
                          <IconMinus size={20} />
                        ) : (
                          <IconPlus size={20} />
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-playfair font-bold text-2xl text-white pr-4">
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="font-mono text-grey text-sm leading-relaxed">
                      {phase.desc}
                    </p>

                    {/* Insight Quote */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden border-l-2 border-amber pl-4 mb-4"
                        >
                          <p className="font-mono text-grey italic text-sm">
                            &ldquo;{phase.insight}&rdquo;
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tag Pill */}
                    <div className="mt-auto pt-2">
                      <span className="inline-block bg-black border border-amber/30 rounded-full px-3 py-1 font-mono text-grey text-[10px] uppercase tracking-wider">
                        {phase.tag}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Evolution Summary Bar */}
      <div
        ref={summaryRef}
        className="mt-32 max-w-5xl mx-auto pt-16 border-t border-amber/10 pb-8"
      >
        {/* Desktop Layout */}
        <div
          className="hidden md:grid grid-cols-5 relative"
          style={{ paddingTop: "12px", paddingBottom: "40px" }}
        >
          {/* Connecting line — background track */}
          <div
            className="absolute h-[2px] bg-amber/20"
            style={{ top: "23px", left: "10%", right: "10%" }}
          />
          {/* Connecting line — animated amber fill */}
          <motion.div
            className="absolute h-[2px] bg-amber origin-left"
            style={{ top: "23px", left: "10%", right: "10%" }}
            initial={{ scaleX: 0 }}
            animate={isSummaryInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {summaryStages.map((stage, idx) => {
            const isLast = idx === summaryStages.length - 1;
            const delay = (idx / (summaryStages.length - 1)) * 1.5;
            const dotSize = isLast ? "w-7 h-7" : "w-5 h-5";

            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 relative z-10 group cursor-pointer"
                onClick={() => handleScrollToPhase(stage.targetId)}
              >
                <motion.div
                  initial={{
                    backgroundColor: "rgba(252,163,17,0.3)",
                    borderColor: "rgba(252,163,17,0.5)",
                    boxShadow: "0px 0px 0px rgba(252,163,17,0)",
                  }}
                  animate={
                    isSummaryInView
                      ? {
                          backgroundColor: isLast
                            ? "rgba(252,163,17,1)"
                            : "rgba(252,163,17,0.8)",
                          borderColor: "rgba(252,163,17,1)",
                          boxShadow: isLast
                            ? [
                                "0px 0px 0px rgba(252,163,17,0)",
                                "0px 0px 25px rgba(252,163,17,0.9)",
                                "0px 0px 18px rgba(252,163,17,0.6)",
                              ]
                            : [
                                "0px 0px 0px rgba(252,163,17,0)",
                                "0px 0px 15px rgba(252,163,17,0.8)",
                                "0px 0px 0px rgba(252,163,17,0)",
                              ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.8,
                    delay: isSummaryInView ? delay : 0,
                  }}
                  className={`${dotSize} rounded-full flex-shrink-0 border-2 transition-transform group-hover:scale-125`}
                />
                <span className="font-mono text-grey text-[11px] uppercase tracking-widest text-center leading-tight group-hover:text-amber transition-colors">
                  {stage.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative pl-6">
          {/* Vertical line track */}
          <div
            className="absolute w-[2px] bg-amber/20"
            style={{ left: "10px", top: "10px", bottom: "10px" }}
          />
          {/* Vertical line animated fill */}
          <motion.div
            className="absolute w-[2px] bg-amber origin-top"
            style={{ left: "10px", top: "10px", bottom: "10px" }}
            initial={{ scaleY: 0 }}
            animate={isSummaryInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-10">
            {summaryStages.map((stage, idx) => {
              const isLast = idx === summaryStages.length - 1;
              const delay = (idx / (summaryStages.length - 1)) * 1.5;
              const dotSize = isLast ? "w-7 h-7" : "w-5 h-5";

              return (
                <div
                  key={idx}
                  className="flex flex-row items-center gap-4 relative z-10 group cursor-pointer"
                  style={{ marginLeft: isLast ? "-3px" : "0" }}
                  onClick={() => handleScrollToPhase(stage.targetId)}
                >
                  <motion.div
                    initial={{
                      backgroundColor: "rgba(252,163,17,0.3)",
                      borderColor: "rgba(252,163,17,0.5)",
                      boxShadow: "0px 0px 0px rgba(252,163,17,0)",
                    }}
                    animate={
                      isSummaryInView
                        ? {
                            backgroundColor: isLast
                              ? "rgba(252,163,17,1)"
                              : "rgba(252,163,17,0.8)",
                            borderColor: "rgba(252,163,17,1)",
                            boxShadow: isLast
                              ? [
                                  "0px 0px 0px rgba(252,163,17,0)",
                                  "0px 0px 25px rgba(252,163,17,0.9)",
                                  "0px 0px 18px rgba(252,163,17,0.6)",
                                ]
                              : [
                                  "0px 0px 0px rgba(252,163,17,0)",
                                  "0px 0px 15px rgba(252,163,17,0.8)",
                                  "0px 0px 0px rgba(252,163,17,0)",
                                ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.8,
                      delay: isSummaryInView ? delay : 0,
                    }}
                    className={`${dotSize} rounded-full flex-shrink-0 border-2 transition-transform group-hover:scale-125`}
                  />
                  <span className="font-mono text-grey text-xs uppercase tracking-widest group-hover:text-amber transition-colors">
                    {stage.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
