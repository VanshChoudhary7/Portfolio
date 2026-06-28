import { ArrowDown, Github, Linkedin, Mail, Code2, GitMerge, Globe } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        {/* Status chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs font-medium tracking-wide font-mono">
            Open to full-time roles & freelance
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 animate-slide-up">
          <span className="text-slate-100">Hi, I'm </span>
          <span className="gradient-text">Vansh Choudhary</span>
          <span className="block text-slate-100 mt-2">
            I build things
          </span>
          <span className="block gradient-text">for the web.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 animate-slide-up font-light">
  Passionate about{" "}
  <span className="text-slate-200 font-medium">Software Engineering</span>,{" "}
  <span className="text-slate-200 font-medium">Artificial Intelligence</span>, and crafting{" "}
  <span className="text-slate-200 font-medium">modern web applications</span>{" "}
  with clean, scalable solutions. Currently pursuing a{" "}
  <span className="text-slate-200 font-medium">Bachelor's degree in Computer Science Engineering</span>{" "}
  while strengthening problem-solving skills through{" "}
  <span className="text-slate-200 font-medium">DSA</span> and{" "}
  <span className="text-slate-200 font-medium">competitive programming</span>.
</p>

        {/* Stat pills */}
        <div className="flex flex-wrap gap-4 mb-10">
          {[
            { icon: Code2, label: "3 Projects", sub: "shipped" },
            { icon: GitMerge, label: "Open Source", sub: "contributor" },
            { icon: Globe, label: "Full-Stack", sub: "engineer" },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50"
            >
              <Icon size={15} className="text-indigo-400" />
              <div>
                <p className="text-slate-100 text-sm font-semibold leading-none">{label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14">
          <button
            onClick={() => scrollTo("#projects")}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-6 py-3 rounded-xl bg-slate-800/70 hover:bg-slate-700/70 text-slate-200 font-semibold text-sm transition-all duration-200 border border-slate-700/60 hover:border-slate-600"
          >
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <span className="text-slate-600 text-xs font-mono">find me on</span>
          <div className="h-px w-8 bg-slate-700" />
          {[
            { icon: Github, href: "https://github.com/VanshChoudhary7/VanshChoudhary7", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/vansh-choudhary-3a1142334/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:workwith.vansh97@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo("#skills")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
}
