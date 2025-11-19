"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Play, Music2 } from "lucide-react";

export function Works() {
  const categories = ["All", ...Array.from(new Set(SITE_DATA.works.map((w) => w.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks = SITE_DATA.works.filter(
    (work) => activeCategory === "All" || work.category === activeCategory
  );

  return (
    <section id="works" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-4">Selected Works</h2>
            <p className="text-stone-500 max-w-md">A curation of recent compositions and performances.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 text-sm tracking-wide transition-all border rounded-full",
                  activeCategory === cat
                    ? "bg-stone-900 text-stone-50 border-stone-900"
                    : "bg-transparent text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-900"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={work.id}
                className="group relative bg-white border border-stone-100 p-8 hover:border-stone-300 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-stone-400" />
                </div>

                <div className="mb-6 flex items-center gap-2 text-xs tracking-widest uppercase text-stone-400">
                  <Music2 className="w-3 h-3" />
                  <span>{work.category}</span>
                  <span className="text-stone-300">•</span>
                  <span>{work.year}</span>
                </div>

                <h3 className="text-2xl font-serif text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
                  {work.title}
                </h3>
                
                <p className="text-stone-500 text-sm mb-8 line-clamp-3">
                  {work.description}
                </p>

                <div className="flex items-center justify-between mt-auto border-t border-stone-100 pt-4">
                  <span className="text-xs font-mono text-stone-400">{work.duration}</span>
                  <a 
                    href={work.link}
                    className="flex items-center gap-2 text-sm font-medium text-stone-900 hover:underline underline-offset-4"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    Listen / Score
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
