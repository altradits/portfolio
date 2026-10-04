import React, { useState, useEffect } from 'react';
import { Language, portfolioData } from '../data/portfolioData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  currentLanguage: Language;
  onToggleLanguage: () => void;
  onOpenLegal: (tab: 'impressum' | 'datenschutz') => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLanguage,
  onToggleLanguage,
  onOpenLegal,
  onNavigateSection,
}) => {
  const slides = portfolioData.heroSlides;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const t = portfolioData.navigation[currentLanguage];
  const activeSlide = slides[currentSlideIndex];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [currentSlideIndex]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Map slide ID to section
  const handleWordClick = () => {
    if (activeSlide.id === 'code') onNavigateSection('webdev');
    if (activeSlide.id === 'photo') onNavigateSection('photo');
    if (activeSlide.id === 'video') onNavigateSection('video');
  };

  return (
    <section
      id="intro"
      className="relative w-full h-screen min-h-[640px] max-h-[1100px] flex flex-col justify-between overflow-hidden select-none bg-[#080808]"
    >
      {/* 1. Dramatic Dark Vignette Studio Backdrop */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 50% 45%, rgba(48, 52, 60, 0.42) 0%, rgba(20, 22, 26, 0.75) 55%, #080808 100%)
          `,
        }}
      />

      {/* 2. Portrait with Artistic Double-Exposure / Motion Echo */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-[1280px] flex items-center justify-center">
          {/* Secondary Ghost Silhouette (Double Exposure Trail) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[52%] w-[420px] sm:w-[580px] md:w-[720px] h-[520px] sm:h-[680px] md:h-[840px] opacity-35 blur-[1px] mix-blend-screen scale-95 transition-all duration-700 ease-out"
            style={{
              backgroundImage: `url('/assets/hero-reference.png')`,
              backgroundPosition: 'center 38%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              filter: 'grayscale(100%) contrast(120%) brightness(85%)',
              maskImage: 'radial-gradient(circle at 50% 45%, black 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 45%, black 40%, transparent 75%)',
            }}
          />

          {/* Primary High-Contrast B&W Sharp Portrait */}
          <div
            className="relative w-[440px] sm:w-[620px] md:w-[780px] h-[540px] sm:h-[720px] md:h-[900px] opacity-95 transition-all duration-500 ease-out"
            style={{
              backgroundImage: `url('/assets/hero-reference.png')`,
              backgroundPosition: 'center 40%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              filter: 'grayscale(100%) contrast(115%) brightness(95%)',
              maskImage: 'radial-gradient(ellipse 55% 65% at 50% 42%, black 45%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 55% 65% at 50% 42%, black 45%, transparent 80%)',
            }}
          />
        </div>
      </div>

      {/* 3. Subtle Dark Bottom Gradient to guarantee text contrast */}
      <div
        className="absolute inset-x-0 bottom-0 h-80 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #080808 15%, rgba(8,8,8,0.8) 50%, transparent 100%)',
        }}
      />

      {/* Top Spacer for Header */}
      <div className="pt-20 sm:pt-24 z-30 pointer-events-none" />

      {/* 4. Center Typography Overlay */}
      <div className="relative z-30 flex flex-col items-center justify-end text-center px-4 mb-14 sm:mb-20">
        <div
          className={`flex flex-col items-center max-w-4xl mx-auto transition-all duration-400 ease-out ${
            isTransitioning ? 'opacity-0 scale-98 translate-y-3' : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          {/* Condensed Uppercase Name */}
          <h1 className="text-white font-extrabold tracking-[0.16em] text-xs sm:text-sm md:text-base uppercase mb-1.5 drop-shadow-md">
            {activeSlide.name}
          </h1>

          {/* Subtitle Statement */}
          <p className="text-zinc-300 text-xs sm:text-sm md:text-[15px] font-normal tracking-wide max-w-xl px-4 mb-2 sm:mb-4 text-balance drop-shadow">
            {activeSlide.subtitle[currentLanguage]}
          </p>

          {/* Giant Hero Word (Code. / Photo. / Film.) */}
          <button
            onClick={handleWordClick}
            className="group relative cursor-pointer focus:outline-none transition-transform duration-300 hover:scale-[1.02] active:scale-95"
            title={`Explore ${activeSlide.word}`}
            aria-label={`View ${activeSlide.word} section`}
          >
            <span
              className="block font-anton text-white tracking-[-0.015em] leading-[0.82] select-none text-[5.8rem] sm:text-[9.5rem] md:text-[13rem] lg:text-[15.5rem] drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:text-zinc-100"
            >
              {activeSlide.word}
            </span>
          </button>
        </div>
      </div>

      {/* 5. Bottom Controls & Legal Footer */}
      <div className="relative z-40 w-full px-5 sm:px-10 pb-5 sm:pb-8 flex items-center justify-between pointer-events-auto">
        {/* Bottom Left: Language Toggle & Legal Links */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs tracking-wide">
          {/* Interactive Flag Switcher */}
          <button
            onClick={onToggleLanguage}
            className="group flex items-center gap-1.5 py-1 px-2 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            title={`Switch to ${currentLanguage === 'en' ? 'German (DE)' : 'English (EN)'}`}
            aria-label="Toggle language"
          >
            {currentLanguage === 'en' ? (
              // UK Flag Icon
              <svg className="w-4 h-4 rounded-full overflow-hidden shadow-sm" viewBox="0 0 60 30">
                <clipPath id="s">
                  <path d="M0,0 v30 h60 v-30 z"/>
                </clipPath>
                <clipPath id="t">
                  <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                </clipPath>
                <g clipPath="url(#s)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                </g>
              </svg>
            ) : (
              // German Flag Icon
              <svg className="w-4 h-4 rounded-full overflow-hidden shadow-sm" viewBox="0 0 5 3">
                <rect width="5" height="1" y="0" fill="#000000"/>
                <rect width="5" height="1" y="1" fill="#DD0000"/>
                <rect width="5" height="1" y="2" fill="#FFCE00"/>
              </svg>
            )}
            <span className="text-[11px] font-semibold text-zinc-300 group-hover:text-white uppercase">
              {currentLanguage}
            </span>
          </button>

          {/* Legal Links */}
          <div className="flex items-center gap-1.5 text-zinc-400">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-zinc-200 underline-offset-4 hover:underline transition-colors"
            >
              {t.imprint}
            </button>
            <span className="text-zinc-600">·</span>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-zinc-200 underline-offset-4 hover:underline transition-colors"
            >
              {t.privacy}
            </button>
          </div>
        </div>

        {/* Bottom Right: Carousel Slider Navigation (< progress >) */}
        <div className="flex items-center gap-3 sm:gap-4" aria-label="Slide controls">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-white/15 bg-black/40 text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/10 active:scale-90 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Progress Indicator Bar */}
          <div className="w-16 sm:w-24 h-[2px] bg-white/15 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-white transition-all duration-400 ease-out"
              style={{
                width: `${((currentSlideIndex + 1) / slides.length) * 100}%`,
              }}
            />
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-white/15 bg-black/40 text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/10 active:scale-90 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
