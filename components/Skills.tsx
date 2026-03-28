"use client";

import { motion, Variants } from "framer-motion";

const skillsData = [
  {
    category: "Design & Visual Communication",
    skills: ["Graphic Design", "Branding", "Poster Design", "Thumbnail Design", "Photo Editing & Retouching", "Layout Composition", "Visual Storytelling"]
  },
  {
    category: "Animation & Video Production",
    skills: ["2D Animation", "Motion Graphics", "Video Editing", "Short-form Content Editing", "Transitions & Effects"]
  },
  {
    category: "Technical & Product",
    skills: ["AI-Assisted Workflows", "Prompt Engineering", "Creative Automation", "UI Concept Design", "Rapid Prototyping"]
  },
  {
    category: "Tools",
    skills: ["CorelDRAW", "Adobe Photoshop", "Adobe Animate", "CapCut", "Canva", "Next.js", "React", "Canvas API", "ffmpeg.wasm"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-12"
      >
        <motion.span variants={blockVariants} className="font-mono text-accent text-sm tracking-widest uppercase">
          {`// skills`}
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 gap-y-12">
          {skillsData.map((group, i) => (
            <motion.div key={i} variants={blockVariants} className="flex flex-col gap-5">
              <h4 className="font-mono text-accent text-lg font-bold border-b border-accent/20 pb-2">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-surface text-text-muted font-mono text-sm border border-surface rounded-sm hover:-translate-y-1 hover:border-accent hover:text-accent hover:glow-amber transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
