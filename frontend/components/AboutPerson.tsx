import React, { useState } from 'react';
import { Language, portfolioData } from '../data/portfolioData';
import { Terminal, Bot, Camera, Sparkles, Award } from 'lucide-react';

interface AboutPersonProps {
  currentLanguage: Language;
  onOpenContact: () => void;
}

export const AboutPerson: React.FC<AboutPersonProps> = ({
  currentLanguage,
  onOpenContact,
}) => {
  const data = portfolioData.about;
  const [activeTab, setActiveTab] = useState(0);

  const getTabIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4" />;
      case 1:
        return <Bot className="w-4 h-4" />;
      case 2:
        return <Camera className="w-4 h-4" />;
      case 3:
        return <Sparkles className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section id="about" className="relative w-full py-28 sm:py-36 px-5 sm:px-10 bg-[#080808] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 sm:mb-20">
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

        {/* Story & Visual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-zinc-300 font-normal text-base sm:text-lg leading-relaxed">
            {data.paragraphs[currentLanguage].map((para, i) => (
              <p key={i} className="text-pretty">
                {para}
              </p>
            ))}

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-colors shadow-lg"
              >
                {currentLanguage === 'en' ? 'Get In Touch' : 'Kontakt aufnehmen'}
              </button>
            </div>
          </div>

          {/* Right Column: Key Stats & Ruhrgebiet Badge */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-md flex flex-col justify-center"
                >
                  <span className="font-anton text-3xl sm:text-4xl text-white tracking-tight mb-1">
                    {stat.value}
                  </span>
                  <span className="text-zinc-400 text-xs sm:text-sm leading-snug">
                    {stat.label[currentLanguage]}
                  </span>
                </div>
              ))}
            </div>

            {/* Recognition & Heritage Card */}
            <div className="p-7 rounded-3xl border border-white/12 bg-gradient-to-br from-zinc-900/60 to-zinc-950/80 backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-white/10 text-white">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-base">
                  {currentLanguage === 'en' ? 'Honors & Standards' : 'Auszeichnungen & Anspruch'}
                </h4>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                {currentLanguage === 'en'
                  ? 'Recognized by Awwwards and CSS Winner. Rooted in Dorsten in the Ruhr area – driven by curiosity, honest craftsmanship, and technical longevity.'
                  : 'Ausgezeichnet von Awwwards und CSS Winner. Verwurzelt in Dorsten im Ruhrgebiet – angetrieben von Neugier, ehrlichem Handwerk und technischer Nachhaltigkeit.'}
              </p>
              <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                <span>Dorsten (NRW)</span>
                <span>·</span>
                <span>51.6603° N, 6.9643° E</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Gear & Tech Inspector */}
        <div className="rounded-3xl border border-white/10 bg-zinc-950/50 p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/8">
            <div>
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider block mb-1">
                {currentLanguage === 'en' ? 'Tooling & Instruments' : 'Werkzeuge & Ausrüstung'}
              </span>
              <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide">
                {currentLanguage === 'en' ? 'The Production Setup' : 'Das Produktions-Setup'}
              </h3>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {data.gearAndStack.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeTab === idx
                      ? 'bg-white text-zinc-950 shadow-md'
                      : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {getTabIcon(idx)}
                  <span>{tab.category[currentLanguage]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {data.gearAndStack[activeTab].items.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-white/8 bg-zinc-900/30 text-zinc-200 text-sm font-mono flex items-center gap-3 hover:border-white/20 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
