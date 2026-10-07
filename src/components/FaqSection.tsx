import React, { useState } from 'react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section id="faqs" className="py-24 px-4 sm:px-8 md:px-14 max-w-4xl mx-auto">
      <div className="mb-14 pb-8 border-b border-gray-300/80">
        <span className="text-xs uppercase tracking-[0.2em] text-amber-800 font-bold font-mono">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#191919]">
          Common Questions Answered
        </h2>
      </div>

      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-white/95 border-amber-400 shadow-md ring-1 ring-amber-300/50'
                  : 'bg-white/80 backdrop-blur-md border-gray-200 hover:border-gray-300 hover:shadow-xs'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg sm:text-xl text-[#191919] font-normal leading-snug">
                  {faq.q}
                </span>
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-mono text-sm text-[#191919] shrink-0 font-bold">
                  {isOpen ? '—' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#191919]/85 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
