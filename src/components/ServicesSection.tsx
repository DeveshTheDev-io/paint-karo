import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="services" className="bg-black py-28 md:py-40 px-6 overflow-hidden relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12 md:mb-16 border-b border-white/10 pb-6"
        >
          <h2 className="text-3xl md:text-5xl font-instrument text-white tracking-tight">
            What We Do
          </h2>
          <span className="text-white/40 text-sm tracking-widest uppercase font-mono hidden md:block">
            Our Core Disciplines
          </span>
        </motion.div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onClick={() => onSelectService('Terrace Roof Waterproofing')}
            className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer border border-white/5 shadow-2xl transition-all"
          >
            {/* Card video area */}
            <div className="aspect-video relative overflow-hidden bg-black">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Card body */}
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="uppercase tracking-widest text-white/40 text-xs font-mono">
                  Waterproofing
                </span>
                <div className="liquid-glass rounded-full p-2 text-white/70 group-hover:text-white group-hover:rotate-45 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-instrument">
                Terrace & Parapet 360° Shield
              </h3>

              <p className="text-white/50 text-sm leading-relaxed">
                We dig deep into substrate moisture, crack dynamics, and capillary action to build seamless 400-micron elastomeric membranes that reflect 90% solar heat and never leak.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            onClick={() => onSelectService('Villa & Interior Royal Finishes')}
            className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer border border-white/5 shadow-2xl transition-all"
          >
            {/* Card video area */}
            <div className="aspect-video relative overflow-hidden bg-black">
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Card body */}
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="uppercase tracking-widest text-white/40 text-xs font-mono">
                  Craft & Luxury
                </span>
                <div className="liquid-glass rounded-full p-2 text-white/70 group-hover:text-white group-hover:rotate-45 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight font-instrument">
                Villa & Interior Royal Finishes
              </h3>

              <p className="text-white/50 text-sm leading-relaxed">
                From dust-free machine sanding to Teflon-shielded Royale Glitz and 10-year weatherproof Apex Ultima Protek exterior facades, we obsess over every millimeter to deliver perfection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
