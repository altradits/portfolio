import React, { useState } from 'react';
import { Language, portfolioData, VideoItem } from '../data/portfolioData';
import { Play, Clapperboard, Clock, Film, X } from 'lucide-react';

interface VideographyProps {
  currentLanguage: Language;
}

export const Videography: React.FC<VideographyProps> = ({ currentLanguage }) => {
  const data = portfolioData.videography;
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section id="video" className="relative w-full py-28 sm:py-36 px-5 sm:px-10 bg-[#080808] border-t border-white/5">
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

        {/* Narrative Copy */}
        <div className="max-w-3xl flex flex-col gap-6 text-zinc-300 font-normal text-base sm:text-lg leading-relaxed mb-20">
          {data.paragraphs[currentLanguage].map((para, i) => (
            <p key={i} className="text-pretty">
              {para}
            </p>
          ))}
        </div>

        {/* Video Production Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.productions.map((prod) => (
            <div
              key={prod.id}
              onClick={() => setActiveVideo(prod)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-zinc-950/70 border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col shadow-2xl"
            >
              {/* Thumbnail with Play Button Overlay */}
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                <img
                  src={prod.thumbnailUrl}
                  alt={prod.title[currentLanguage]}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:scale-105 group-hover:filter-none transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-zinc-400" />
                  <span>{prod.duration}</span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-zinc-950 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300 pl-0.5">
                    <Play className="w-6 h-6 fill-zinc-950" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    <Film className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{prod.category[currentLanguage]}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">
                    {prod.title[currentLanguage]}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {prod.description[currentLanguage]}
                  </p>
                </div>

                {/* Specs Footer */}
                <div className="pt-4 border-t border-white/8 flex flex-col gap-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="text-zinc-500">Role:</span>
                    <span>{prod.role[currentLanguage]}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span className="text-zinc-500">Format:</span>
                    <span>{prod.format}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Video Player Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-5 sm:p-6 flex items-center justify-between border-b border-white/10 bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <Clapperboard className="w-5 h-5 text-white/80" />
                <h4 className="text-white font-bold text-sm sm:text-base">
                  {activeVideo.title[currentLanguage]}
                </h4>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport Simulated Player */}
            <div className="relative aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeVideo.thumbnailUrl}
                alt={activeVideo.title[currentLanguage]}
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Cinematic Watermark overlay */}
              <div className="absolute top-6 left-6 font-mono text-[11px] text-white/60 tracking-widest uppercase">
                4K UHD · {activeVideo.format} · 24.00 FPS
              </div>

              <div className="absolute flex flex-col items-center gap-3 text-center px-4">
                <div className="w-20 h-20 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-2xl pl-1 animate-pulse">
                  <Play className="w-8 h-8 fill-zinc-950" />
                </div>
                <span className="font-mono text-xs text-zinc-300">
                  {currentLanguage === 'en' ? 'Click to preview reel sequence' : 'Klicken für Video-Vorschau'}
                </span>
              </div>
            </div>

            {/* Modal Info Bar */}
            <div className="p-6 bg-zinc-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-zinc-300 text-sm max-w-xl">
                  {activeVideo.description[currentLanguage]}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs font-mono text-zinc-300 border border-white/10">
                  {activeVideo.role[currentLanguage]}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
