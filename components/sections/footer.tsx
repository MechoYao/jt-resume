import { SITE_DATA } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="py-12 px-6 border-t border-stone-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg text-stone-900">{SITE_DATA.personal.name}</p>
          <p className="text-sm text-stone-500">{SITE_DATA.personal.institution}</p>
        </div>

        <div className="flex items-center gap-6">
            {Object.entries(SITE_DATA.personal.socials).map(([key, value]) => (
                <a 
                    key={key}
                    href={value}
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors"
                >
                    {key}
                </a>
            ))}
        </div>

        <div className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
