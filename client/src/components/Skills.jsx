import { useEffect, useState } from "react";
import { Layers, Server, Code, Wrench, Database } from "lucide-react";

const CATEGORY_ICONS = {
  Frontend: Layers,
  Backend: Server,
  Languages: Code,
  Databases: Database,
  "Tools & DevOps": Wrench,
};

const CATEGORY_COLORS = {
  Frontend: "indigo",
  Backend: "violet",
  Languages: "emerald",
  Databases: "cyan",
  "Tools & DevOps": "amber",
};

const colorMap = {
  indigo: {
    border: "hover:border-indigo-500/50",
    icon: "text-indigo-400",
    bg: "bg-indigo-500/10",
    tag: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  },
  violet: {
    border: "hover:border-violet-500/50",
    icon: "text-violet-400",
    bg: "bg-violet-500/10",
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  emerald: {
    border: "hover:border-emerald-500/50",
    icon: "text-emerald-400",
    bg: "bg-emerald-500/10",
    tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  cyan: {
    border: "hover:border-cyan-500/50",
    icon: "text-cyan-400",
    bg: "bg-cyan-500/10",
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  amber: {
    border: "hover:border-amber-500/50",
    icon: "text-amber-400",
    bg: "bg-amber-500/10",
    tag: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  },
};

export default function Skills() {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/skills")
      .then((r) => r.json())
      .then((d) => setSkills(d.data))
      .catch(() =>
        setSkills({
          Frontend: ["React", "Next.js", "Tailwind CSS", "Redux", "Vite"],
          Backend: ["Node.js", "Express", "FastAPI", "Spring Boot", "REST APIs"],
          Languages: ["Java","JavaScript", "Python", "SQL", "C++"],
          Databases: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose"],
          "Tools & DevOps": ["Docker", "Git", "Linux", "AWS", "CI/CD",],
        })
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-3">
            02 // capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Tech Stack
          </h2>
          <p className="text-slate-500 mt-3 max-w-lg">
            Tools and technologies I work with daily to build full-stack products.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-48 rounded-2xl bg-slate-800/40 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(skills).map(([category, items]) => {
              const Icon = CATEGORY_ICONS[category] || Code;
              const color = CATEGORY_COLORS[category] || "indigo";
              const c = colorMap[color];

              return (
                <div
                  key={category}
                  className={`group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/40 ${c.border} transition-all duration-300 hover:bg-slate-800/50 card-glow`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center`}>
                      <Icon size={16} className={c.icon} />
                    </div>
                    <h3 className="text-slate-200 font-semibold text-sm">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${c.tag} transition-all duration-200 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
