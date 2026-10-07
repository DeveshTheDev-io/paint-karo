import React from 'react';
import { BoomerangVideoBg } from './BoomerangVideoBg';
import { CHANNEL_INFO } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onNavigateSection }) => {
  return (
    <section className="relative flex flex-col items-center justify-between overflow-hidden min-h-screen lg:h-screen lg:max-h-[1080px] bg-slate-900">
      {/* Background Boomerang Video with Architectural Buildings */}
      <BoomerangVideoBg />

      {/* Subtle Transparent Scrim allowing buildings to shine through clearly on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/60 pointer-events-none z-0" />

      {/* Hero Copy Block (at z-10) with Optimized Desktop Viewport Math */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl pt-24 sm:pt-26 lg:pt-24 xl:pt-28 px-4 sm:px-6">
        {/* Floating Trust Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/90 shadow-xs text-xs font-mono text-[#191919]/80 mb-4 sm:mb-5">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-semibold text-[#191919]">Official Channel Hub</span>
          <span className="text-gray-400">·</span>
          <span>127K Subscribers</span>
          <span className="text-gray-400">·</span>
          <span className="text-emerald-700 font-semibold">+91 9140902275</span>
        </div>

        {/* H1 Scaled Responsively to fit within 100vh on Desktop */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl leading-[1.08] tracking-tighter text-[#191919] font-normal drop-shadow-xs">
          Paint Karo,<br />
          <span className="text-amber-800">Leak Se Door Raho.</span>
        </h1>

        {/* Subcopy with high legibility */}
        <p className="max-w-xl mt-3 sm:mt-4 lg:mt-3 xl:mt-4 text-xs sm:text-sm md:text-base text-[#191919]/85 leading-relaxed font-normal bg-white/70 backdrop-blur-xs px-4 py-1.5 rounded-xl border border-white/70 shadow-xs">
          Simple, practical solutions to waterproofing, damp-proofing, and painting problems for Indian homes — roof coatings, crack sealing, and turnkey villa painting.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5 sm:mt-6 lg:mt-4 xl:mt-6">
          <button
            onClick={onOpenBooking}
            className="px-5 sm:px-7 py-3 bg-[#191919] hover:bg-[#2c2c2c] text-white text-xs sm:text-sm font-medium rounded-xl transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
          >
            <span>Book Free Site Inspection</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>

          <a
            href={`https://wa.me/${CHANNEL_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Paint Karo, I want a free site moisture inspection for my house.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-medium rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>WhatsApp (+91 9140902275)</span>
            <ArrowRight className="w-4 h-4 text-emerald-200" />
          </a>
        </div>
      </div>

      {/* Bottom Info Panel anchored to viewport bottom with Glassmorphism */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 mt-6 sm:mt-8 lg:mt-auto">
        <div className="bg-white/95 backdrop-blur-xl border border-gray-200/90 border-b-0 pt-6 sm:pt-7 lg:pt-6 xl:pt-8 px-5 sm:px-8 md:px-10 pb-0 rounded-t-3xl shadow-xl">
          {/* Row 1 — 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-end">
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-amber-700 font-semibold font-mono">
                WATERPROOFING & PAINTING SERVICES
              </span>
              <h2 className="mt-1 sm:mt-1.5 text-xl sm:text-2xl md:text-3xl font-serif font-normal leading-tight tracking-tight text-[#191919]">
                Services that<br className="hidden sm:inline" /> protect your home
              </h2>
            </div>

            <div className="text-xs sm:text-sm text-[#191919]/75 leading-relaxed md:pb-1">
              Precision terrace waterproofing and luxury dustless painting engineered for Indian weather. Certified Asian Paints SmartCare Damp Proofing, crack sealing, and 8°–10°C solar heat reflection.
            </div>
          </div>

          {/* Hairline Divider */}
          <div className="mt-4 sm:mt-5 h-px bg-gray-200 w-full" />

          {/* Row 2 — 3 Interactive Cards with Distinct Glassmorphism */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 py-4 sm:py-5">
            <div
              onClick={() => onNavigateSection('5-steps')}
              className="group bg-gradient-to-b from-sky-50/70 to-blue-50/40 hover:from-sky-100/80 hover:to-blue-100/60 border border-sky-200/70 hover:border-sky-300 transition-all duration-200 cursor-pointer px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between rounded-xl shadow-xs"
            >
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-sky-700 font-mono text-xs font-bold">01</span>
                <span className="mx-2 text-sky-300">/</span>
                <span className="font-medium text-[#191919]">Roof Waterproofing</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
            </div>

            <div
              onClick={() => onNavigateSection('packages')}
              className="group bg-gradient-to-b from-amber-50/70 to-orange-50/40 hover:from-amber-100/80 hover:to-orange-100/60 border border-amber-200/70 hover:border-amber-300 transition-all duration-200 cursor-pointer px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between rounded-xl shadow-xs"
            >
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-amber-700 font-mono text-xs font-bold">02</span>
                <span className="mx-2 text-amber-300">/</span>
                <span className="font-medium text-[#191919]">Painting Packages</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-amber-700 group-hover:translate-x-1 transition-transform" />
            </div>

            <div
              onClick={() => onNavigateSection('products')}
              className="group bg-gradient-to-b from-emerald-50/70 to-teal-50/40 hover:from-emerald-100/80 hover:to-teal-100/60 border border-emerald-200/70 hover:border-emerald-300 transition-all duration-200 cursor-pointer px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between rounded-xl shadow-xs"
            >
              <div className="flex items-center text-xs sm:text-sm">
                <span className="text-emerald-700 font-mono text-xs font-bold">03</span>
                <span className="mx-2 text-emerald-300">/</span>
                <span className="font-medium text-[#191919]">SmartCare Dampstop</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-700 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
