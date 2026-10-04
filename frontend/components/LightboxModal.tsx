import React, { useEffect } from 'react';
import { PhotoItem, Language } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react';

interface LightboxModalProps {
  currentPhoto: PhotoItem;
  photos: PhotoItem[];
  currentLanguage: Language;
  onClose: () => void;
  onNavigate: (photo: PhotoItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  currentPhoto,
  photos,
  currentLanguage,
  onClose,
  onNavigate,
}) => {
  const currentIndex = photos.findIndex((p) => p.id === currentPhoto.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onNavigate(photos[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(photos[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, photos]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Top Controls */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-3">
          <span className="text-zinc-400 font-mono text-xs">
            {currentIndex + 1} / {photos.length}
          </span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">
            {currentPhoto.title[currentLanguage]}
          </span>
        </div>

        <button
          onClick={onClose}
          className="pointer-events-auto w-10 h-10 rounded-full border border-white/20 bg-black/50 text-white flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-black/60 text-white flex items-center justify-center hover:bg-white/20 hover:border-white/50 active:scale-95 transition-all shadow-xl"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-black/60 text-white flex items-center justify-center hover:bg-white/20 hover:border-white/50 active:scale-95 transition-all shadow-xl"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentPhoto.imageUrl}
          alt={currentPhoto.title[currentLanguage]}
          className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl filter grayscale contrast-110"
        />

        {/* Caption & EXIF bar */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-xs">
          <div className="flex items-center gap-2 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>{currentPhoto.location}</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <Camera className="w-3.5 h-3.5 text-zinc-400" />
            <span>{currentPhoto.exif}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
