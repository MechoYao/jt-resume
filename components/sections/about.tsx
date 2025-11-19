"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 bg-stone-100/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          <div className="md:col-span-4">
            <h2 className="text-3xl font-serif text-stone-900 mb-6">About</h2>
            <div className="h-[1px] w-12 bg-stone-400 mb-6" />
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <div className="prose prose-stone prose-lg text-stone-600 leading-relaxed whitespace-pre-line">
              {SITE_DATA.about.bio}
            </div>

            <div className="mt-12 pt-12 border-t border-stone-200">
              <h3 className="text-sm uppercase tracking-widest text-stone-500 mb-6">Education</h3>
              <div className="space-y-6">
                {SITE_DATA.about.education.map((edu, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                      <h4 className="text-lg font-serif text-stone-900">{edu.school}</h4>
                      <span className="text-sm font-mono text-stone-500">{edu.year}</span>
                    </div>
                    <p className="text-stone-600">{edu.degree}</p>
                    <p className="text-xs text-stone-400 mt-1">{edu.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
