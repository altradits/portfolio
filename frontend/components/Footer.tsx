import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#09090B] text-white border-t border-zinc-800 py-16 px-4 sm:px-8">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-4">
              <img 
                src="/logo.svg" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/logo.png';
                }} 
                alt="Altradits" 
                className="h-8 w-auto brightness-0 invert" 
              />
            </a>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mb-4">
              Precision social media automation engine. Write once and publish perfectly tailored content across every network.
            </p>
            <div className="text-[11px] font-mono text-zinc-500">
              ALTRADITS // VER 4.0 // PRODUCTION
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Product</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#channels" className="hover:text-white transition-colors">Channels</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#studio" className="hover:text-white transition-colors">Studio</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Channels</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#channels" className="hover:text-white transition-colors">LinkedIn Rails</a></li>
              <li><a href="#channels" className="hover:text-white transition-colors">X / Twitter API</a></li>
              <li><a href="#channels" className="hover:text-white transition-colors">Instagram Engine</a></li>
              <li><a href="#channels" className="hover:text-white transition-colors">Bitcoin Sound Money</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Company</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="https://wa.me/254707172370" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Direct Connect</a></li>
              <li><a href="BRAND_IDENTITY_GUIDELINES.md" className="hover:text-white transition-colors">Brand Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Altradits Engineering Syndicate. Founded by Stanley Chege Thuita. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#studio" className="text-zinc-400 hover:text-white transition-colors">Launch Studio</a>
            <span>•</span>
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Lightning Billing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
