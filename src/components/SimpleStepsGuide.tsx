import React from 'react';
import { SIMPLE_5_STEPS } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

export const SimpleStepsGuide: React.FC = () => {
  const getStepVisual = (stepNum: number) => {
    switch (stepNum) {
      case 1:
        return {
          bg: 'bg-gradient-to-br from-sky-50/95 via-white/90 to-blue-50/70',
          border: 'border-sky-300/80 hover:border-sky-400',
          badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
          numColor: 'text-sky-700 bg-sky-100/80 border-sky-300',
          warningBorder: 'border-sky-200 bg-sky-50/70'
        };
      case 2:
        return {
          bg: 'bg-gradient-to-br from-amber-50/95 via-white/90 to-orange-50/70',
          border: 'border-amber-300/80 hover:border-amber-400',
          badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
          numColor: 'text-amber-800 bg-amber-100/80 border-amber-300',
          warningBorder: 'border-amber-200 bg-amber-50/70'
        };
      case 3:
        return {
          bg: 'bg-gradient-to-br from-indigo-50/95 via-white/90 to-blue-50/70',
          border: 'border-indigo-300/80 hover:border-indigo-400',
          badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-300',
          numColor: 'text-indigo-800 bg-indigo-100/80 border-indigo-300',
          warningBorder: 'border-indigo-200 bg-indigo-50/70'
        };
      case 4:
        return {
          bg: 'bg-gradient-to-br from-slate-100/90 via-white/95 to-slate-50/80',
          border: 'border-slate-300/90 hover:border-slate-400',
          badgeBg: 'bg-slate-200 text-slate-800 border-slate-300',
          numColor: 'text-slate-800 bg-slate-200/80 border-slate-300',
          warningBorder: 'border-slate-200 bg-slate-50/70'
        };
      case 5:
        return {
          bg: 'bg-gradient-to-br from-amber-100/70 via-white/95 to-yellow-100/60',
          border: 'border-amber-400 hover:border-amber-500 shadow-md',
          badgeBg: 'bg-amber-200 text-amber-950 border-amber-400 font-bold',
          numColor: 'text-amber-900 bg-amber-200/90 border-amber-400',
          warningBorder: 'border-amber-300 bg-amber-100/60'
        };
      default:
        return {
          bg: 'bg-white/90',
          border: 'border-gray-200',
          badgeBg: 'bg-gray-100 text-gray-800 border-gray-200',
          numColor: 'text-gray-700 bg-gray-100 border-gray-200',
          warningBorder: 'border-gray-200 bg-gray-50'
        };
    }
  };

  return (
    <section id="5-steps" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 lg:pb-8 border-b border-gray-300/80">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-amber-800 font-bold font-mono">
            APPLICATION PROTOCOL
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#191919]">
            The 5 Simple Steps to<br className="hidden sm:inline" /> Leak-Free Roofs
          </h2>
        </div>
        <p className="mt-3 md:mt-0 text-xs sm:text-sm lg:text-[15px] text-[#191919]/80 max-w-md leading-relaxed font-normal">
          The verified Asian Paints SmartCare Damp Proof standard taught by Paint Karo. Delivers 10-year waterproofing and natural 8°C–10°C solar cooling.
        </p>
      </div>

      {/* 5 Distinct Glassmorphic Cards */}
      <div className="space-y-4 sm:space-y-5">
        {SIMPLE_5_STEPS.map((step) => {
          const visual = getStepVisual(step.stepNumber);
          return (
            <div
              key={step.stepNumber}
              className={`p-5 sm:p-7 lg:p-8 rounded-2xl backdrop-blur-md border ${visual.bg} ${visual.border} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-8`}
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Step Number Badge */}
                <div
                  className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center font-mono font-bold text-base sm:text-lg border shadow-xs shrink-0 ${visual.numColor}`}
                >
                  0{step.stepNumber}
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-serif text-[#191919] font-normal">
                      {step.title}
                    </h3>
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded-full border shadow-xs ${visual.badgeBg}`}
                    >
                      {step.ratioAndSpecs}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-[#191919]/70 font-semibold">
                    {step.hindiTitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#191919]/85 max-w-3xl leading-relaxed">
                    {step.description}
                  </p>

                  {/* Tools Strip */}
                  <div className="pt-1.5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#191919]/70">
                    <span className="font-semibold text-[#191919]">Tools:</span>
                    {step.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-white/90 border border-gray-300/80 px-2 py-0.5 rounded-md text-[11px] font-medium text-[#191919] shadow-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* High-Visibility Pro Warning Card */}
              <div
                className={`lg:w-80 shrink-0 p-3.5 sm:p-4 rounded-xl border shadow-xs text-xs text-[#191919]/80 space-y-1 ${visual.warningBorder}`}
              >
                <div className="font-bold text-[#191919] text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  <span>Paint Karo Golden Rule:</span>
                </div>
                <p className="leading-relaxed font-normal">
                  {step.keyWarning}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
