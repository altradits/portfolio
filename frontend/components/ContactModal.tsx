import React, { useState } from 'react';
import { Language, portfolioData } from '../data/portfolioData';
import { X, Mail, MapPin, CheckCircle, Send, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  currentLanguage: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  currentLanguage,
  isOpen,
  onClose,
}) => {
  const data = portfolioData.contact;
  const [selectedService, setSelectedService] = useState(data.services[0].id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-zinc-950 p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest block mb-1">
            {currentLanguage === 'en' ? 'Direct Inquiry' : 'Direkte Anfrage'}
          </span>
          <h3 className="font-anton text-3xl sm:text-4xl text-white tracking-wide uppercase mb-2">
            {data.title[currentLanguage]}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm">
            {data.subtitle[currentLanguage]}
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              {currentLanguage === 'en' ? 'Message Sent Successfully' : 'Nachricht erfolgreich gesendet'}
            </h4>
            <p className="text-zinc-400 text-sm max-w-md mb-6">
              {data.form.success[currentLanguage]}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-200 transition-colors"
            >
              {currentLanguage === 'en' ? 'Close Window' : 'Fenster schließen'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Service Selection */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                {currentLanguage === 'en' ? 'Discipline / Subject' : 'Fachbereich / Anliegen'}
              </label>
              <div className="flex flex-wrap gap-2">
                {data.services.map((srv) => (
                  <button
                    type="button"
                    key={srv.id}
                    onClick={() => setSelectedService(srv.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedService === srv.id
                        ? 'bg-white text-zinc-950 font-semibold shadow-md'
                        : 'bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/25'
                    }`}
                  >
                    {srv.label[currentLanguage]}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-zinc-400 block mb-1.5">
                  {data.form.nameLabel[currentLanguage]}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Christoph Nagel"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-400 block mb-1.5">
                  {data.form.emailLabel[currentLanguage]}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. hello@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 transition-colors"
                />
              </div>
            </div>

            {/* Message input */}
            <div>
              <label className="text-xs font-mono text-zinc-400 block mb-1.5">
                {data.form.messageLabel[currentLanguage]}
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  currentLanguage === 'en'
                    ? 'Tell me briefly about your project, timeline, and requirements...'
                    : 'Erzähl mir kurz von deinem Vorhaben, Zeitrahmen und Wünschen...'
                }
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 transition-colors resize-none"
              />
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <a
                  href={`mailto:${data.email}`}
                  className="hover:text-white underline underline-offset-4"
                >
                  {data.email}
                </a>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-lg"
              >
                <span>{data.form.sendButton[currentLanguage]}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {/* Social channels footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-zinc-500 font-mono">
            <MapPin className="w-3 h-3" />
            <span>{data.location}</span>
          </div>

          <div className="flex items-center gap-3">
            {data.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
