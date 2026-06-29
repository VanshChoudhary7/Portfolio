import { Github, Linkedin, Mail, Terminal, Heart } from "lucide-react";
import { Coffee } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
            <Terminal size={13} className="text-indigo-400" />
          </div>
          <span className="font-mono text-sm text-slate-500">
            vansh<span className="text-indigo-400">.</span>dev
          </span>
        </div>

        <p className="text-slate-600 text-xs flex items-center gap-1.5">
  ©       {new Date().getFullYear()} · Crafted with <Coffee size={11} className="text-indigo-500" /> by <span className="text-slate-800 font-medium">Vansh Choudhary</span>
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/VanshChoudhary7/", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/vansh-choudhary-3a1142334/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:workwith.vansh97@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 rounded-lg border border-slate-800 bg-slate-800/40 flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
