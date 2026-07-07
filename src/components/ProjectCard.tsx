"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { categoryAccent } from "@/data/projects";
import { cinematicEase } from "@/lib/motion";

const accentClasses: Record<string, { text: string; ring: string }> = {
  cyan: { text: "text-cyan", ring: "group-hover:text-glow-cyan" },
  crimson: { text: "text-crimson", ring: "group-hover:text-glow-crimson" },
  amber: { text: "text-amber", ring: "group-hover:text-glow-cyan" },
};

export default function ProjectCard({
  project,
  tall = false,
}: {
  project: Project;
  tall?: boolean;
}) {
  const accent = accentClasses[categoryAccent[project.category]];

  return (
    <motion.a
      layout
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.35, ease: cinematicEase } }}
      transition={{ duration: 0.7, ease: cinematicEase }}
      href={project.href}
      data-cursor-hover
      className={`group border-beam glass relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-colors duration-300 hover:bg-concrete-light/60 ${
        tall ? "row-span-2 min-h-[22rem]" : "min-h-[16rem]"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`font-mono text-[11px] uppercase tracking-widest ${accent.text}`}
        >
          {project.category}
        </span>
        <ArrowUpRight
          size={18}
          className="text-fog transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper"
        />
      </div>

      <div>
        <h3 className="font-display text-2xl text-paper sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 font-sans text-sm leading-relaxed text-fog">
          {project.description}
        </p>
        <span className="mt-4 block font-mono text-xs text-fog/70">
          {project.year}
        </span>
      </div>
    </motion.a>
  );
}
