import React from 'react';
import { LogoIcon } from './Logo';
import { CHANNEL_INFO } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-gray-200/80 shadow-sm">
        {/* Zone 1: Logo Left */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#191919] text-white flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
            <LogoIcon className="w-full h-full text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-[#191919] leading-tight font-display">
              Paint Karo
            </span>
            <span className="text-[10px] text-amber-700 font-medium tracking-wide">
              Leak Se Door Raho
            </span>
          </div>
        </a>

        {/* Zone 2: Center Links (hidden below md) */}
        <div className="hidden md:flex items-center gap-7">
          <a
            href="#5-steps"
            className="text-xs uppercase tracking-wider font-medium text-[#191919]/70 hover:text-[#191919] transition-colors"
          >
            5-Step Guide
          </a>
          <a
            href="#packages"
            className="text-xs uppercase tracking-wider font-medium text-[#191919]/70 hover:text-[#191919] transition-colors"
          >
            Packages
          </a>
          <a
            href="#products"
            className="text-xs uppercase tracking-wider font-medium text-[#191919]/70 hover:text-[#191919] transition-colors"
          >
            Products
          </a>
          <a
            href="#videos"
            className="text-xs uppercase tracking-wider font-medium text-[#191919]/70 hover:text-[#191919] transition-colors"
          >
            Videos
          </a>
          <a
            href="#calculator"
            className="text-xs uppercase tracking-wider font-medium text-[#191919]/70 hover:text-[#191919] transition-colors"
          >
            Calculator
          </a>
        </div>

        {/* Zone 3: CTA Right with Unique Modern Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`https://wa.me/${CHANNEL_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Paint Karo, I want to book a free site moisture inspection.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <span>WhatsApp</span>
            <ArrowRight className="w-3 h-3 text-white" />
          </a>

          <button
            onClick={onOpenBooking}
            className="px-4 py-2 bg-[#191919] hover:bg-[#2c2c2c] text-white text-xs font-medium rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <span>Book Free Inspection</span>
            <ArrowRight className="w-3 h-3 text-gray-300" />
          </button>
        </div>
      </div>
    </nav>
  );
};
