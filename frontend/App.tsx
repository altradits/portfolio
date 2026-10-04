import React, { useState, useEffect } from 'react';
import { Language, portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WebDevelopment } from './components/WebDevelopment';
import { Photography } from './components/Photography';
import { Videography } from './components/Videography';
import { AboutPerson } from './components/AboutPerson';
import { SEOQuickTestModal } from './components/SEOQuickTestModal';
import { ContactModal } from './components/ContactModal';
import { LegalModal } from './components/LegalModal';
import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [seoTestOpen, setSeoTestOpen] = useState<boolean>(false);
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [legalTab, setLegalTab] = useState<'impressum' | 'datenschutz'>('impressum');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Toggle English / German
  const handleToggleLanguage = () => {
    setCurrentLanguage((prev) => (prev === 'en' ? 'de' : 'en'));
  };

  // Open Legal Modal with specific tab
  const handleOpenLegal = (tab: 'impressum' | 'datenschutz') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  // Smooth scroll to section
  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'intro') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ScrollSpy to update active nav link as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      setShowScrollTop(window.scrollY > 500);

      const sections = ['intro', 'webdev', 'photo', 'video', 'about'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-[#f4f4f1] font-sans selection:bg-[#ff4b3e] selection:text-white relative">
      {/* 1. Header & Navigation */}
      <Navbar
        currentLanguage={currentLanguage}
        activeSection={activeSection}
        onNavigate={handleNavigateSection}
        onOpenContact={() => setContactOpen(true)}
        onOpenSeoTest={() => setSeoTestOpen(true)}
      />

      {/* 2. Main Content Stream */}
      <main>
        {/* Hero Section Replicating the Screenshot */}
        <Hero
          currentLanguage={currentLanguage}
          onToggleLanguage={handleToggleLanguage}
          onOpenLegal={handleOpenLegal}
          onNavigateSection={handleNavigateSection}
        />

        {/* 01 Web Development Section */}
        <WebDevelopment
          currentLanguage={currentLanguage}
          onOpenContact={() => setContactOpen(true)}
        />

        {/* 02 Photography Section */}
        <Photography currentLanguage={currentLanguage} />

        {/* 03 Videography Section */}
        <Videography currentLanguage={currentLanguage} />

        {/* 04 The Person Behind It (About) Section */}
        <AboutPerson
          currentLanguage={currentLanguage}
          onOpenContact={() => setContactOpen(true)}
        />
      </main>

      {/* 3. Global Minimalist Dark Footer */}
      <footer className="w-full py-12 px-6 sm:px-10 border-t border-white/8 bg-[#060607] text-zinc-500 text-xs">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-bold text-zinc-300">CHRISTOPH NAGEL</span>
            <span>·</span>
            <span>Dorsten im Ruhrgebiet</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleOpenLegal('impressum')}
              className="hover:text-zinc-300 transition-colors"
            >
              {portfolioData.navigation[currentLanguage].imprint}
            </button>
            <button
              onClick={() => handleOpenLegal('datenschutz')}
              className="hover:text-zinc-300 transition-colors"
            >
              {portfolioData.navigation[currentLanguage].privacy}
            </button>
            <button
              onClick={handleToggleLanguage}
              className="hover:text-white uppercase font-mono transition-colors"
            >
              [{currentLanguage}]
            </button>
          </div>

          <div>
            © {new Date().getFullYear()} Christoph Nagel. {portfolioData.navigation[currentLanguage].rights}.
          </div>
        </div>
      </footer>

      {/* 4. Scroll To Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 hover:border-white/50 active:scale-95 transition-all shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* 5. Modals */}
      <SEOQuickTestModal
        currentLanguage={currentLanguage}
        isOpen={seoTestOpen}
        onClose={() => setSeoTestOpen(false)}
        onOpenContact={() => setContactOpen(true)}
      />

      <ContactModal
        currentLanguage={currentLanguage}
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <LegalModal
        currentLanguage={currentLanguage}
        initialTab={legalTab}
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
};

export default App;
