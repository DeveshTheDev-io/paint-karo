import React from 'react';
import { CHANNEL_INFO } from '../data/mockData';
import { LogoIcon } from './Logo';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-[#191919] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
        {/* Brand & Mission (5 Cols) */}
        <div className="md:col-span-5 space-y-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#191919] text-white flex items-center justify-center p-1.5 shadow-xs">
              <LogoIcon className="w-full h-full text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-[#191919] font-display">
              Paint Karo
            </span>
          </div>

          <p className="text-sm font-serif text-amber-800 font-semibold italic">
            "{CHANNEL_INFO.tagline}"
          </p>

          <p className="text-xs sm:text-sm text-[#191919]/70 leading-relaxed max-w-sm">
            Simple, practical solutions to waterproofing, damp-proofing, and painting problems. Turnkey Asian Paints packages, real field tutorials, and free digital moisture inspections across India.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#191919]/55">
            <span className="font-semibold text-[#191919]">{CHANNEL_INFO.subscribers} Subscribers</span>
            <span>·</span>
            <span>{CHANNEL_INFO.videoCount} Videos</span>
            <span>·</span>
            <span>{CHANNEL_INFO.views} Views</span>
          </div>
        </div>

        {/* Quick Nav (3 Cols) */}
        <div className="md:col-span-3 space-y-3 text-xs">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-mono font-bold">
            Navigation
          </div>
          <ul className="space-y-2 text-[#191919]/75 font-medium">
            <li>
              <a href="#5-steps" className="hover:text-amber-800 transition-colors">
                5-Step Waterproofing Process
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-amber-800 transition-colors">
                House & Villa Painting Packages
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-amber-800 transition-colors">
                Best Products for Indian Homes
              </a>
            </li>
            <li>
              <a href="#videos" className="hover:text-amber-800 transition-colors">
                YouTube Video Masterclasses
              </a>
            </li>
            <li>
              <a href="#calculator" className="hover:text-amber-800 transition-colors">
                Material & Cost Calculator
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-amber-800 transition-colors">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info (4 Cols) */}
        <div className="md:col-span-4 space-y-3 text-xs">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-mono font-bold">
            Contact & Service
          </div>

          <div className="space-y-2.5 text-[#191919]/85">
            <div>
              <span className="text-[#191919]/50 block text-[11px]">Direct WhatsApp & Phone:</span>
              <a
                href={`https://wa.me/${CHANNEL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-800 hover:text-emerald-700 hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                <span>{CHANNEL_INFO.phone}</span>
                <ArrowRight className="w-3 h-3 text-emerald-700" />
              </a>
            </div>

            <div>
              <span className="text-[#191919]/50 block text-[11px]">Business Inquiries:</span>
              <a href={`mailto:${CHANNEL_INFO.email}`} className="font-medium hover:underline text-[#191919]">
                {CHANNEL_INFO.email}
              </a>
            </div>

            <div>
              <span className="text-[#191919]/50 block text-[11px]">YouTube Channel:</span>
              <a
                href={CHANNEL_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-rose-700 hover:text-rose-600 hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                <span>www.youtube.com/@paintkaro</span>
                <ArrowRight className="w-3 h-3 text-rose-700" />
              </a>
            </div>
          </div>

          <div className="pt-4 text-[11px] text-[#191919]/45 font-mono">
            © {new Date().getFullYear()} Paint Karo. All rights reserved. India.
          </div>
        </div>
      </div>
    </footer>
  );
};
