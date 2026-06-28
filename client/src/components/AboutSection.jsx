import React from 'react';
import { Code, Globe, Cpu, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#060b18] text-slate-100 px-6 sm:px-12 md:px-24 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Right Column: Profile Image Container */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative group max-w-[320px] w-full aspect-square">
            
            {/* Ambient Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#85c0ff]/20 to-transparent rounded-2xl blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
            
            {/* The Image Wrapper Accent Box */}
            <div className="absolute inset-0 border border-slate-700 rounded-2xl translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:translate-y-1.5"></div>
            
            {/* Photo Container */}
            <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <img 
                src="../public/Vansh_pp.png" 
                alt="Vansh Profile" 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060b18]/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>


        {/* Left Column: Brief Introduction & Key Highlights */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-2">
            <p className="text-[#85c0ff] font-mono text-sm tracking-wider uppercase">// 01. About Me</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-[Inter] tracking-tight">
              Curious Creator & Problem Solver
            </h2>
          </div>

          <div className="space-y-4 text-slate-400 font-[Inter] leading-relaxed text-base sm:text-lg">
            <p>
              Hi, I'm <span className="text-slate-100 font-medium">Vansh</span>. I'm a full-stack engineer 
              deeply passionate about designing elegant web applications, scalable cloud infrastructure, 
              and robust open-source tools. 
            </p>
            <p>
              I thrive at the intersection of performance, design, and functionality, turning complex architectures into smooth user experiences. Whether collaborating with global communities or constructing tailored internal tools, I focus on writing clean, intentional code.
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start p-3 rounded-lg bg-slate-900/40 border border-slate-800/40">
              <Code className="text-[#85c0ff] w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Full-Stack Craftsmanship</h4>
                <p className="text-xs text-slate-400 mt-0.5">Specializing in modular architectures and dynamic SPAs.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 rounded-lg bg-slate-900/40 border border-slate-800/40">
              <Globe className="text-[#85c0ff] w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Open-Source Ecosystem</h4>
                <p className="text-xs text-slate-400 mt-0.5">Actively building and contributing to modern developer tooling.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 rounded-lg bg-slate-900/40 border border-slate-800/40">
              <Cpu className="text-[#85c0ff] w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">AI & Distributed Systems</h4>
                <p className="text-xs text-slate-400 mt-0.5">Integrating intelligence layers and optimizing workflows.</p>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
}