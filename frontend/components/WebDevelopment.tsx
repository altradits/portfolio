import React, { useState } from 'react';
import { Language, portfolioData, ProjectItem } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, Cpu, Zap, Layout, Layers, X, ArrowUpRight } from 'lucide-react';

interface WebDevelopmentProps {
  currentLanguage: Language;
  onOpenContact: () => void;
}

export const WebDevelopment: React.FC<WebDevelopmentProps> = ({
  currentLanguage,
  onOpenContact,
}) => {
  const data = portfolioData.webDev;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="w-5 h-5 text-white/80" />;
      case 1:
        return <Zap className="w-5 h-5 text-white/80" />;
      case 2:
        return <Layers className="w-5 h-5 text-white/80" />;
      case 3:
        return <Cpu className="w-5 h-5 text-white/80" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-white/80" />;
    }
  };

  return (
    <section id="webdev" className="relative w-full py-28 sm:py-36 px-5 sm:px-10 bg-[#080808] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-zinc-500 font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase">
              {data.kicker[currentLanguage]}
            </span>
            <div className="h-[1px] w-12 bg-white/15" />
          </div>
          <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight max-w-4xl leading-[0.95]">
            {data.headline[currentLanguage]}
          </h2>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-start">
          {/* Main Manifesto */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-zinc-300 font-normal text-base sm:text-lg leading-relaxed">
            {data.paragraphs[currentLanguage].map((para, i) => (
              <p key={i} className="text-pretty">
                {para}
              </p>
            ))}

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-xl shadow-white/5"
              >
                <span>{currentLanguage === 'en' ? 'Discuss Your Project' : 'Projekt besprechen'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Pillars Card Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {data.capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/8 bg-zinc-900/40 backdrop-blur-md hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {getPillarIcon(i)}
                  </div>
                  <h3 className="text-white font-bold text-base tracking-wide">
                    {cap.title[currentLanguage]}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-normal">
                  {cap.desc[currentLanguage]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Case Studies Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div>
            <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase block mb-1">
              {currentLanguage === 'en' ? 'Selected Case Studies' : 'Ausgewählte Projekte'}
            </span>
            <h3 className="font-anton text-2xl sm:text-3xl text-white tracking-wide uppercase">
              {currentLanguage === 'en' ? 'Architecture in Action' : 'Architektur in der Praxis'}
            </h3>
          </div>
          <span className="text-zinc-400 text-xs sm:text-sm">
            {currentLanguage === 'en'
              ? 'Click any project to inspect full architecture'
              : 'Projekt anklicken für Architektur-Details'}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl border border-white/10 bg-zinc-950/60 overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-black"
            >
              {/* Image Preview with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300 tracking-wider">
                  {project.metrics}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-7">
                <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider block mb-2">
                  {project.category[currentLanguage]}
                </span>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h4>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/50 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {project.description[currentLanguage]}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/8"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-zinc-950 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-zinc-400 text-xs font-mono tracking-widest uppercase block mb-1">
              {selectedProject.category[currentLanguage]}
            </span>
            <h3 className="font-anton text-3xl sm:text-4xl text-white tracking-wide uppercase mb-3">
              {selectedProject.title}
            </h3>

            <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-zinc-200 mb-6">
              {selectedProject.metrics}
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 border border-white/10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-zinc-300 text-base leading-relaxed mb-6">
              {selectedProject.description[currentLanguage]}
            </p>

            <div className="mb-8">
              <h4 className="text-xs font-mono text-zinc-400 tracking-wider uppercase mb-3">
                {currentLanguage === 'en' ? 'Core Technology Stack' : 'Verwendete Technologien'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/10 text-white border border-white/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-200 transition-colors"
              >
                <span>{currentLanguage === 'en' ? 'Live Reference' : 'Live-Referenz öffnen'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenContact();
                }}
                className="px-5 py-2.5 rounded-full border border-white/20 text-xs text-white hover:bg-white/10 transition-colors"
              >
                {currentLanguage === 'en' ? 'Inquire Similar Solution' : 'Ähnliche Lösung anfragen'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
