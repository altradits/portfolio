import React, { useState } from 'react';
import { Language, portfolioData, PhotoItem } from '../data/portfolioData';
import { Camera, MapPin, Maximize2 } from 'lucide-react';
import { LightboxModal } from './LightboxModal';

interface PhotographyProps {
  currentLanguage: Language;
}

export const Photography: React.FC<PhotographyProps> = ({ currentLanguage }) => {
  const data = portfolioData.photography;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos =
    activeCategory === 'all'
      ? data.items
      : data.items.filter((item) => item.category === activeCategory);

  return (
    <section id="photo" className="relative w-full py-28 sm:py-36 px-5 sm:px-10 bg-[#080808] border-t border-white/5">
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

        {/* Narrative Manifesto */}
        <div className="max-w-3xl flex flex-col gap-6 text-zinc-300 font-normal text-base sm:text-lg leading-relaxed mb-16">
          {data.paragraphs[currentLanguage].map((para, i) => (
            <p key={i} className="text-pretty">
              {para}
            </p>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {data.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-white text-zinc-950 border-white font-semibold shadow-lg shadow-white/10'
                  : 'bg-zinc-950/60 text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label[currentLanguage]}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-white/35 transition-all duration-500 flex flex-col shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={photo.imageUrl}
                  alt={photo.title[currentLanguage]}
                  className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-105 group-hover:contrast-125 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 flex flex-col justify-between flex-grow bg-zinc-950/90">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-white font-bold text-base group-hover:text-zinc-200 transition-colors">
                    {photo.title[currentLanguage]}
                  </h4>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    <span>{photo.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-500">
                    <Camera className="w-3 h-3" />
                    <span className="truncate">{photo.exif}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <LightboxModal
          currentPhoto={activePhoto}
          photos={filteredPhotos}
          currentLanguage={currentLanguage}
          onClose={() => setActivePhoto(null)}
          onNavigate={(photo) => setActivePhoto(photo)}
        />
      )}
    </section>
  );
};
