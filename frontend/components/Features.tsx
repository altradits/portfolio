import React from 'react';
import { workflowData } from '../data';

export const Features: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white border-t border-[#E4E4E7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#4A6FC3] mb-2">Automated Precision Engine</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09090B]">
            Your social presence, running smoothly.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B]">
            Share your journey to inspire, educate, and entertain without spending all day at your desk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowData.map((step) => (
            <div 
              key={step.id} 
              className="relative bg-white rounded-2xl p-8 border border-[#E4E4E7] shadow-sm hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-extrabold text-[#4A6FC3] mb-4">
                  {step.stepNumber}
                </div>
                
                <h3 className="text-xl font-bold text-[#09090B] mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm text-[#52525B] mb-6 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className="bg-[#F4F4F5] rounded-xl p-4 border border-[#E4E4E7] mt-auto">
                <ul className="space-y-2">
                  {step.highlights.map((highlight, index) => (
                    <li key={index} className="text-xs font-semibold text-[#09090B] flex items-center gap-2">
                      <span className="text-[#059669] font-bold">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
