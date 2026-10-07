import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CHANNEL_INFO } from '../data/mockData';
import { ShieldCheck, Youtube, Droplets } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="about"
      className="bg-black pt-32 md:pt-44 pb-16 md:pb-20 px-6 overflow-hidden relative"
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center md:text-left">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase mb-6 font-mono"
        >
          About Paint Karo
        </motion.div>

        {/* Heading in Instrument Serif */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight font-instrument"
        >
          Pioneering then <span className="italic text-white/60">leak-free solutions</span> for{' '}
          <br className="hidden md:block" />
          <span className="italic text-white/60">homes that then endure, protect, and inspire.</span>
        </motion.h2>

        {/* Description & Stats in liquid-glass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-7 text-white/70 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Welcome to <span className="text-white font-medium">Paint Karo</span>, your trusted source for simple, practical solutions to waterproofing, damp-proofing, and painting problems. We share easy tutorials, helpful tips, and real-life demonstrations to protect your home from leaks and damage.
            </p>
            <p className="text-sm text-white/50">
              Perfect for homeowners, DIYers, and contractors looking to fix water leakage & damp issues, master step-by-step techniques, and avoid common costly mistakes.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-3 gap-3">
            <div className="liquid-glass rounded-2xl p-4 text-center">
              <div className="font-instrument text-2xl sm:text-3xl font-bold text-white">
                {CHANNEL_INFO.subscribers}
              </div>
              <div className="text-[11px] text-white/40 tracking-wider uppercase mt-1">
                Subscribers
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-4 text-center">
              <div className="font-instrument text-2xl sm:text-3xl font-bold text-white">
                {CHANNEL_INFO.videoCount}
              </div>
              <div className="text-[11px] text-white/40 tracking-wider uppercase mt-1">
                Videos
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-4 text-center">
              <div className="font-instrument text-2xl sm:text-3xl font-bold text-white">
                29.7M
              </div>
              <div className="text-[11px] text-white/40 tracking-wider uppercase mt-1">
                Total Views
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
