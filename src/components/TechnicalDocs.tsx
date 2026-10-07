import React from 'react';
import { TECHNICAL_SPECS } from '../data/mockData';

export const TechnicalDocs: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 lg:pb-8 border-b border-gray-300/80">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-blue-800 font-bold font-mono">
            ENGINEERING TOLERANCES
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#191919]">
            Technical Parameters & Ratios
          </h2>
        </div>

        <p className="mt-3 md:mt-0 text-xs sm:text-sm lg:text-[15px] text-[#191919]/80 max-w-md leading-relaxed">
          Application thresholds, temperature boundaries, and dilution specs verified for Asian Paints SmartCare Damp Proof.
        </p>
      </div>

      {/* High-Visibility Frosted Specs Table */}
      <div className="border border-gray-300/90 rounded-2xl overflow-hidden bg-white/95 backdrop-blur-md shadow-lg">
        <div className="divide-y divide-gray-200">
          {TECHNICAL_SPECS.map((spec, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 transition-colors gap-2 sm:gap-4 items-center ${
                idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
              } hover:bg-amber-50/40`}
            >
              <div className="sm:col-span-5 text-sm font-bold text-[#191919]">
                {spec.parameter}
              </div>
              <div className="sm:col-span-7 font-mono text-xs sm:text-sm text-[#191919]/90 font-medium">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
