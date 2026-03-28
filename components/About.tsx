"use client";

import { motion, Variants } from "framer-motion";

const tags = [
  "AI & Data Science",
  "Privacy-First",
  "Creative Automation",
  "Motion Graphics",
  "UI Design",
  "Prompt Engineering",
  "Open Source",
  "Hackathon Winner",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-8"
      >
        <motion.span
          variants={itemVariants}
          className="font-mono text-amber text-sm tracking-widest uppercase"
        >
          {`// about`}
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className="font-playfair font-bold text-5xl md:text-7xl mb-4 text-white"
        >
          Design. Code. Ship.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="font-mono font-light text-grey text-lg md:text-xl leading-relaxed"
        >
          I&apos;m Shuban Shinde — a B.Tech student in Artificial Intelligence
          &amp; Data Science at Thakur College of Engineering and Technology.
          I&apos;m a creative developer with expertise in visual design, motion
          graphics, and digital media production. Hackathon winner with a
          passion for AI application development and privacy-centric software
          solutions. I turn ideas into functional, visually compelling products.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap gap-3 mt-4"
        >
          {tags.map((tag) => (
            <motion.span
              key={tag}
              variants={itemVariants}
              className="px-4 py-2 bg-navy text-grey font-mono text-sm border border-amber/30 rounded-sm hover:-translate-y-1 hover:text-amber hover:border-amber hover:glow-amber transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
