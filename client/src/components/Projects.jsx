import { useEffect, useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";

const ALL_TAGS = ["All", "React", "Node.js", "Express", "MongoDB","Python", "FastAPI", "PostgreSQL", "Docker", "Java", "WebSockets"];

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col p-6 rounded-2xl bg-slate-800/30 border border-slate-700/40 hover:border-indigo-500/40 hover:bg-slate-800/50 transition-all duration-300 card-glow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
            <span className="text-indigo-400 text-xs font-mono font-bold">{project.title[0]}</span>
          </div>
          {project.featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
              <Star size={10} />
              Featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={project.github}
            target="https://github.com/VanshChoudhary7/PhishGuard"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 rounded-lg bg-slate-700/60 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-100 transition-colors"
          >
            <Github size={14} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
            className="w-8 h-8 rounded-lg bg-indigo-600/70 hover:bg-indigo-500 flex items-center justify-center text-indigo-200 hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <h3 className="text-slate-100 font-bold text-lg mb-2 group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-700/50 text-slate-400 border border-slate-600/40 hover:text-slate-200 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer links (always visible) */}
      <div className="mt-5 pt-4 border-t border-slate-700/40 flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          <Github size={12} />
          Source code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-indigo-500 hover:text-indigo-400 transition-colors"
        >
          <ExternalLink size={12} />
          Live demo
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeTag, setActiveTag] = useState("All");
  const [loading, setLoading] = useState(true);

  const fetchProjects = (tag) => {
    setLoading(true);
    const url = tag && tag !== "All" ? `/api/projects?tag=${encodeURIComponent(tag)}` : "/api/projects";
    fetch(`${import.meta.env.VITE_API_URL}${url}`)
      .then((r) => r.json())
      .then((d) => setProjects(d.data || []))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProjects("All");
  }, []);

  const handleFilter = (tag) => {
    setActiveTag(tag);
    fetchProjects(tag);
  };

  return (
    <section id="projects" className="py-24 relative">
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-3">
            03 // work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Projects</h2>
          <p className="text-slate-500 mt-3 max-w-lg">
            Things I've designed, architected, and shipped — from solo experiments to production systems.
          </p>
        </div>

        {/* Filter bar */}
        <div className="mb-10 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => handleFilter(tag)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all duration-200 whitespace-nowrap border ${
                  activeTag === tag
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-slate-800/50 border-slate-700/40 text-slate-400 hover:text-slate-200 hover:border-slate-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 rounded-2xl bg-slate-800/40 animate-pulse" />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 font-mono text-sm">No projects found for "{activeTag}"</p>
            <button
              onClick={() => handleFilter("All")}
              className="mt-4 text-indigo-400 text-sm hover:text-indigo-300 transition-colors"
            >
              Clear filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/VanshChoudhary7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700/60 bg-slate-800/40 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800 text-sm font-medium transition-all duration-200"
          >
            <Github size={16} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
