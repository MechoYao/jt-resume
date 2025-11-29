"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Download } from "lucide-react";

export function CV() {
  return (
    <section id="cv" className="py-24 sm:py-32 px-6 bg-stone-900 text-stone-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-serif mb-2">Curriculum Vitae</h2>
            <p className="text-stone-400">Academic and artistic achievements.</p>
          </div>
          <a
            href={"resume.pdf"}
            className="flex items-center gap-2 px-6 py-3 border border-stone-700 hover:bg-stone-800 transition-colors rounded-sm text-sm tracking-wider uppercase"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        <div className="space-y-16">
            {/* Awards Section */}
            {/* <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-8 border-b border-stone-800 pb-4">Awards & Honors</h3>
                <div className="space-y-6">
                    {SITE_DATA.cv.awards.map((award, i) => (
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            key={i} 
                            className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 group"
                        >
                            <div className="sm:col-span-2 text-stone-500 font-mono text-sm">{award.year}</div>
                            <div className="sm:col-span-10">
                                <h4 className="text-lg font-serif text-stone-200 group-hover:text-white transition-colors">{award.title}</h4>
                                <p className="text-stone-400 text-sm">{award.organization}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div> */}
        </div>
      </div>
    </section>
  );
}
