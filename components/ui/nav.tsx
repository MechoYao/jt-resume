"use client";

import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "CV", href: "#cv" },
  { name: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500",
        scrolled
          ? "bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="flex items-center gap-4">
        <a href="#" className="text-lg font-serif font-bold tracking-tight hover:opacity-70 transition-opacity">
          {SITE_DATA.personal.name}
        </a>
        <span className="hidden sm:inline-block h-4 w-[1px] bg-stone-300" />
        <span className="hidden sm:inline-block text-xs tracking-widest uppercase text-stone-500">
          {SITE_DATA.personal.title}
        </span>
      </div>

      <nav className="flex items-center gap-6 sm:gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-900 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
