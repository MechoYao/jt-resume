"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/lib/data";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
      {/* Abstract background element - subtle academic/musical lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
                d="M0,0 Q50,50 100,0 V100 H0 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
             <motion.path 
                d="M0,20 Q50,70 100,20" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
            />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-2"
        >
          {/* <h2 className="text-sm sm:text-base tracking-[0.2em] uppercase text-stone-500 pl-1">
            {SITE_DATA.personal.institution}
          </h2> */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal tracking-tight text-stone-900 leading-[0.9]">
            {SITE_DATA.personal.name}
          </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 max-w-xl"
        >
            {/* <p className="text-lg sm:text-xl md:text-2xl font-light text-stone-600 leading-relaxed italic font-serif">
                "{SITE_DATA.hero.quote}"
            </p> */}
            <div className="mt-8">
              <a 
                href={SITE_DATA.works[0].link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-stone-50 text-sm tracking-[0.2em] uppercase hover:bg-stone-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {SITE_DATA.works[0].title}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-12 left-6 sm:left-auto sm:right-6 flex flex-col items-start sm:items-end gap-2 text-xs tracking-widest text-stone-400 uppercase"
        >
            <span>Scroll to Explore</span>
            <div className="h-12 w-[1px] bg-stone-300 mx-auto sm:mx-0 sm:mr-4 origin-top animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
