"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowUpRight, IconLoader2, IconExternalLink } from "@tabler/icons-react";

const projects = [
  {
    id: "data-peel",
    name: "Data Peel",
    tagline: "Peel away hidden metadata before you share.",
    description: "Privacy-first browser tool that strips EXIF, GPS, and device metadata from images and videos using Canvas API and ffmpeg.wasm. Files never leave your device.",
    tags: ["Next.js", "React", "Canvas API", "ffmpeg.wasm", "Privacy"],
    liveUrl: "https://data-peel.vercel.app",
    githubUrl: "https://github.com/shuban2007/DataPeal",
    iframeSrc: "https://data-peel.vercel.app"
  },
  {
    id: "concom",
    name: "ConCom",
    tagline: "Convert and compress. No uploads, no worries.",
    description: "Privacy-centric file converter and compressor. All processing on the client's machine — zero server uploads. Designed for simplicity and trust-building UX.",
    tags: ["JavaScript", "Browser APIs", "Client-Side", "UI Design"],
    liveUrl: "https://concom.vercel.app",
    githubUrl: "https://github.com/shuban2007",
    iframeSrc: "https://concom.vercel.app"
  }
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-12"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-accent text-sm tracking-widest uppercase"
        >
          {`// projects`}
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} isMobile={isMobile} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, isMobile, index }: { project: typeof projects[0], isMobile: boolean, index: number }) {
  const [viewState, setViewState] = useState<"details" | "preview">("details");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const toggleView = () => setViewState(v => v === "details" ? "preview" : "details");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col bg-surface border border-[rgba(252,163,17,0.2)] rounded-sm overflow-hidden hover:-translate-y-1.5 hover:border-accent hover:glow-amber transition-all duration-300"
    >
      <div className="p-6 md:p-8 flex-grow flex flex-col min-h-[420px]">
        {/* Toggle / Headers */}
        <div className="flex justify-between items-start mb-6">
          <h3 className="font-playfair font-bold text-3xl text-white">{project.name}</h3>
          {!isMobile && (
            <button 
              onClick={toggleView}
              className={`px-4 py-1.5 border border-accent/50 font-mono text-xs rounded-sm transition-colors ${
                viewState === "preview" ? "bg-accent text-background" : "text-accent hover:bg-accent hover:text-background"
              }`}
            >
              {viewState === "details" ? "Live Preview" : "Details"}
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="relative flex-grow h-full mb-6">
          <AnimatePresence mode="wait">
            {viewState === "details" || isMobile ? (
              <motion.div 
                key="details"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full"
              >
                <p className="font-playfair italic text-white text-xl mb-4">&quot;{project.tagline}&quot;</p>
                <p className="font-mono font-light text-text-muted text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-background text-text-muted font-mono text-xs border border-accent/20 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="preview"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[320px] md:h-[420px] lg:h-[360px] bg-background border border-surface rounded-sm overflow-hidden"
              >
                {/* Loader */}
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center text-accent">
                    <IconLoader2 className="animate-spin" size={32} />
                  </div>
                )}
                
                {/* External Link Pin */}
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm text-accent hover:bg-accent hover:text-background transition-colors z-10 border border-accent/30 rounded-sm"
                  title="Open in new tab"
                >
                  <IconExternalLink size={18} />
                </a>

                {/* Iframe */}
                <iframe 
                  src={project.iframeSrc} 
                  onLoad={() => setIframeLoaded(true)}
                  className={`w-full h-full border-none transition-opacity duration-500 bg-white ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  title={`${project.name} live preview`}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer info/buttons */}
        {viewState === "preview" && !isMobile ? (
          <p className="text-xs font-mono text-text-muted/60 mt-auto pt-4 border-t border-accent/10">
            Preview loads the live site — all processing stays in your browser.
          </p>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-accent/10">
             {isMobile ? (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent text-background font-mono font-bold text-sm rounded-sm hover:bg-accent/90 transition-colors"
                >
                  Open Site <IconArrowUpRight size={16} />
                </a>
             ) : (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-accent/30 text-accent font-mono font-bold text-sm rounded-sm hover:bg-accent hover:text-background transition-colors"
                >
                  Live Site <IconArrowUpRight size={16} />
                </a>
             )}
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-transparent border border-surface text-text-muted font-mono text-sm rounded-sm hover:border-accent/50 hover:text-accent transition-colors"
            >
              GitHub <IconArrowUpRight size={16} />
            </a>
          </div>
        )}
        {isMobile && viewState === "details" && (
          <p className="text-xs font-mono text-text-muted/60 mt-4 text-center">
            Visit on desktop for full interactive preview.
          </p>
        )}
      </div>
    </motion.div>
  );
}
