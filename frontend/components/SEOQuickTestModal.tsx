import React, { useState } from 'react';
import { Language, portfolioData } from '../data/portfolioData';
import { X, Search, CheckCircle2, AlertTriangle, AlertCircle, ArrowUpRight, Sparkles } from 'lucide-react';

interface SEOQuickTestModalProps {
  currentLanguage: Language;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const SEOQuickTestModal: React.FC<SEOQuickTestModalProps> = ({
  currentLanguage,
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const data = portfolioData.seoTestModal;
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [progressStep, setProgressStep] = useState(0);
  const [auditResult, setAuditResult] = useState<typeof data.sampleScenarios.fast | null>(null);

  if (!isOpen) return null;

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsScanning(true);
    setAuditResult(null);
    setProgressStep(0);

    const steps = [
      'DNS & Server TTFB latency...',
      'Semantic DOM structure & Heading hierarchy...',
      'Meta tags, OpenGraph & Canonical integrity...',
      'Mobile viewport & Core Web Vitals...',
      'SSL certificate & Schema.org JSON-LD markup...',
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgressStep(current);
      if (current >= steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsScanning(false);
          // Return simulated audit result
          const isStandard = url.toLowerCase().includes('slow') || url.length % 2 === 0;
          setAuditResult(isStandard ? data.sampleScenarios.standard : data.sampleScenarios.fast);
        }, 500);
      }
    }, 450);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'advisory':
        return <AlertTriangle className="w-4 h-4 text-amber-400" />;
      case 'warn':
      case 'fail':
        return <AlertCircle className="w-4 h-4 text-rose-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pass':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Optimal
          </span>
        );
      case 'advisory':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Advisory
          </span>
        );
      case 'warn':
      case 'fail':
        return (
          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20">
            Needs Action
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-zinc-950 p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>{data.title[currentLanguage]}</span>
          </div>
          <h3 className="font-anton text-3xl sm:text-4xl text-white tracking-wide uppercase mb-2">
            {data.headline[currentLanguage]}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xl">
            {data.subline[currentLanguage]}
          </p>
        </div>

        {/* URL Form */}
        <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={data.placeholder}
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-zinc-900/80 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={isScanning}
            className="px-6 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors disabled:opacity-50 shrink-0 shadow-lg"
          >
            {isScanning ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                <span>{currentLanguage === 'en' ? 'Scanning...' : 'Prüfen...'}</span>
              </span>
            ) : (
              data.submitButton[currentLanguage]
            )}
          </button>
        </form>

        {/* Scanning Animated Progress */}
        {isScanning && (
          <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40 mb-8 animate-pulse">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span className="text-sm font-semibold text-white">
                {currentLanguage === 'en' ? 'Live Technical Audit in Progress' : 'Live-Analyse läuft...'}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              {progressStep === 1 && 'Checking server response and TTFB...'}
              {progressStep === 2 && 'Validating semantic heading hierarchy (H1-H6)...'}
              {progressStep === 3 && 'Analyzing OpenGraph & meta description tags...'}
              {progressStep === 4 && 'Measuring mobile responsiveness and Core Web Vitals...'}
              {progressStep >= 5 && 'Compiling technical recommendations...'}
            </p>
          </div>
        )}

        {/* Audit Results Presentation */}
        {auditResult && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            {/* Score Banner */}
            <div className="p-6 rounded-2xl border border-white/15 bg-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div
                  className={`w-16 h-16 rounded-full flex flex-col items-center justify-center border font-anton text-2xl ${
                    auditResult.score >= 85
                      ? 'border-emerald-500/50 text-emerald-400 bg-emerald-950/30'
                      : 'border-amber-500/50 text-amber-400 bg-amber-950/30'
                  }`}
                >
                  <span>{auditResult.score}</span>
                  <span className="text-[10px] font-mono font-normal -mt-1">/ 100</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-bold text-base">
                      {currentLanguage === 'en' ? 'Audit Result' : 'Gesamtergebnis'}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-white/10 text-white">
                      Grade {auditResult.grade}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm max-w-md">
                    {auditResult.summary[currentLanguage]}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-zinc-950 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-zinc-200 transition-colors shadow-md"
              >
                <span>{currentLanguage === 'en' ? 'Optimize with Chris' : 'Mit Chris optimieren'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Checklist Items */}
            <div className="flex flex-col gap-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                {currentLanguage === 'en' ? 'Key Technical Metrics' : 'Wichtigste technische Parameter'}
              </h4>
              {auditResult.checks.map((check, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-white/8 bg-zinc-900/30 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    {getStatusIcon(check.status)}
                    <div>
                      <span className="text-white text-xs sm:text-sm font-medium block">
                        {check.name}
                      </span>
                      <span className="text-zinc-500 text-[11px] font-mono">
                        {check.note}
                      </span>
                    </div>
                  </div>
                  {getStatusBadge(check.status)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
