"use client";

import { motion } from "framer-motion";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <span className="font-mono text-amber text-sm tracking-widest uppercase mb-4">
          {`// contact`}
        </span>

        <h2 className="font-playfair font-bold text-5xl md:text-7xl text-white">
          Let&apos;s build something.
        </h2>

        <p className="font-mono font-light text-grey text-lg max-w-xl mx-auto mb-12">
          Open to collaborations, freelance work, and interesting ideas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-2xl">
          <a
            href="mailto:shuban1227@gmail.com"
            className="group flex items-center justify-center gap-3 px-6 py-4 border border-amber text-amber rounded-sm hover:bg-amber hover:text-black transition-all duration-300 font-mono text-sm"
          >
            <IconMail
              size={20}
              className="text-amber group-hover:text-black transition-colors"
            />
            shuban1227@gmail.com
          </a>

          <a
            href="https://github.com/shuban2007"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-6 py-4 border border-amber text-amber rounded-sm hover:bg-amber hover:text-black transition-all duration-300 font-mono text-sm"
          >
            <IconBrandGithub
              size={20}
              className="text-amber group-hover:text-black transition-colors"
            />
            github.com/shuban2007
          </a>

          <a
            href="https://www.linkedin.com/in/shuban-shinde-58437838b"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-6 py-4 border border-amber text-amber rounded-sm hover:bg-amber hover:text-black transition-all duration-300 font-mono text-sm"
          >
            <IconBrandLinkedin
              size={20}
              className="text-amber group-hover:text-black transition-colors"
            />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
