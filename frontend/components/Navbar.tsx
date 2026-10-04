import React, { useState } from 'react';
import { Language, portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentLanguage: Language;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
  onOpenSeoTest: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  activeSection,
  onNavigate,
  onOpenContact,
  onOpenSeoTest,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = portfolioData.navigation[currentLanguage];

  const navLinks = [
    { id: 'webdev', label: t.webDev },
    { id: 'photo', label: t.photo },
    { id: 'video', label: t.video },
    { id: 'about', label: t.about },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 sm:px-8 pt-4 sm:pt-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Left: Monogram Mark */}
        <div className="pointer-events-auto">
          <button
            onClick={() => handleLinkClick('intro')}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border border-white/20 bg-black/40 backdrop-blur-md text-white font-bold text-xs sm:text-sm tracking-widest transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10 active:scale-95 shadow-lg"
            aria-label="Christoph Nagel Home"
          >
            CN
          </button>
        </div>

        {/* Center: Floating Glass Pill Navbar (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 px-6 py-2.5 rounded-full border border-white/12 bg-black/45 backdrop-blur-xl shadow-2xl pointer-events-auto"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-200 capitalize ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full transition-all duration-300" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions (Desktop & Mobile) */}
        <div className="flex items-center gap-2.5 sm:gap-3 pointer-events-auto">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs sm:text-[13px] font-medium text-white/90 transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/10 active:scale-95 shadow-md capitalize"
          >
            {t.contact}
          </button>

          <button
            onClick={onOpenSeoTest}
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-[13px] transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/10 tracking-tight"
          >
            <span>{t.seoTest}</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-black/40 backdrop-blur-md text-white transition-all hover:bg-white/10 active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 p-5 rounded-3xl bg-zinc-950/95 border border-white/15 backdrop-blur-2xl shadow-2xl pointer-events-auto flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('intro')}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeSection === 'intro' ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl border border-white/20 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              {t.contact}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSeoTest();
              }}
              className="w-full py-3 rounded-xl bg-white text-zinc-950 text-sm font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg"
            >
              <span>{t.seoTest}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
