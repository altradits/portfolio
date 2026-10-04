import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="bg-[#09090B] py-20 sm:py-28 relative overflow-hidden text-center text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Ready to step away from the screen?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-400">
            Join creators and founders who use Altradits to inspire, educate, and entertain their audience while actually living the life they post about.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#studio"
              className="w-full sm:w-auto rounded-lg bg-[#E55252] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#FF6E6E] transition-all"
            >
              LAUNCH LIVE STUDIO
            </a>
            <a 
              href="#how-it-works" 
              className="w-full sm:w-auto rounded-lg px-8 py-4 text-xs font-bold uppercase tracking-wider text-white border border-zinc-700 hover:bg-zinc-900 transition-all"
            >
              SEE HOW IT WORKS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
