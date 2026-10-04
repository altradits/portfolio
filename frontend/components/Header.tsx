import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Channels', href: '#channels' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Studio', href: '#studio' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E4E4E7] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Master Vector Logo Standard */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, '#')}
          className="flex items-center group transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Altradits Home"
        >
          <img
            src="/logo.svg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/logo.png';
            }}
            alt="Altradits"
            className="h-9 sm:h-10 w-auto object-contain block"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-semibold text-[#52525B] hover:text-[#09090B] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4 border-l border-[#E4E4E7] pl-4">
            <a
              href="https://wa.me/254707172370"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-[#52525B] hover:text-[#09090B] px-3 py-2 transition-colors"
            >
              CONNECT
            </a>
            <a
              href="#studio"
              onClick={(e) => handleLinkClick(e, '#studio')}
              className="inline-flex items-center justify-center rounded-lg bg-[#E55252] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#FF6E6E] transition-all shadow-sm"
            >
              LAUNCH STUDIO
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#52525B] hover:text-[#09090B]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#E4E4E7] bg-white px-4 py-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-[#52525B] hover:text-[#09090B]"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E4E4E7] flex flex-col gap-2">
              <a
                href="https://wa.me/254707172370"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg border border-[#E4E4E7] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#09090B] hover:bg-[#F4F4F5]"
              >
                CONNECT
              </a>
              <a
                href="#studio"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#E55252] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#FF6E6E] shadow-sm"
                onClick={(e) => handleLinkClick(e, '#studio')}
              >
                LAUNCH STUDIO
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
