import React, { useState } from 'react';
import { Language, portfolioData } from '../data/portfolioData';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  currentLanguage: Language;
  initialTab?: 'impressum' | 'datenschutz';
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  currentLanguage,
  initialTab = 'impressum',
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'impressum' | 'datenschutz'>(initialTab);
  const data = portfolioData.legal;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/20 bg-zinc-950 p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 transition-colors"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('impressum')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'impressum'
                ? 'bg-white text-zinc-950'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{data.impressum.title[currentLanguage]}</span>
          </button>

          <button
            onClick={() => setActiveTab('datenschutz')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === 'datenschutz'
                ? 'bg-white text-zinc-950'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{data.datenschutz.title[currentLanguage]}</span>
          </button>
        </div>

        {/* Legal Text Content */}
        <div className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line font-mono bg-zinc-900/40 p-6 rounded-2xl border border-white/8">
          {activeTab === 'impressum'
            ? data.impressum.content[currentLanguage]
            : data.datenschutz.content[currentLanguage]}
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-zinc-950 text-xs font-bold hover:bg-zinc-200 transition-colors"
          >
            {currentLanguage === 'en' ? 'Close' : 'Schließen'}
          </button>
        </div>
      </div>
    </div>
  );
};
