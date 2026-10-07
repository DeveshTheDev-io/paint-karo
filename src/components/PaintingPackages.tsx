import React from 'react';
import { PAINTING_PACKAGES, CHANNEL_INFO } from '../data/mockData';
import { PaintingPackage } from '../types';
import { ArrowRight } from 'lucide-react';

interface PaintingPackagesProps {
  onSelectPackageForInspection: (packageName: string) => void;
}

export const PaintingPackages: React.FC<PaintingPackagesProps> = ({ onSelectPackageForInspection }) => {
  const handleWhatsAppBooking = (pkg: PaintingPackage) => {
    const text = `Hi Paint Karo! I am interested in the *${pkg.name}* (approx rate: ₹${pkg.pricePerSqFt}/sq.ft). Please share details and arrange a free site inspection for my home.`;
    const url = `https://wa.me/${CHANNEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const getPackageStyles = (id: string) => {
    switch (id) {
      case 'pkg-rental':
        return {
          glassBg: 'bg-gradient-to-b from-stone-50/95 via-white/90 to-amber-50/40 border-stone-300 hover:border-stone-400',
          swatchGradient: 'from-stone-200 via-amber-100 to-stone-300',
          accentColor: 'text-stone-800',
          btnPrimary: 'bg-[#191919] hover:bg-[#333333] text-white',
          washabilityBadge: 'bg-stone-100 text-stone-700 border-stone-200'
        };
      case 'pkg-premium':
        return {
          glassBg: 'bg-gradient-to-b from-sky-50/95 via-white/95 to-blue-50/60 border-blue-400 shadow-xl ring-2 ring-blue-400/40',
          swatchGradient: 'from-sky-300 via-blue-200 to-cyan-300',
          accentColor: 'text-blue-900',
          btnPrimary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20',
          washabilityBadge: 'bg-blue-100 text-blue-800 border-blue-200'
        };
      case 'pkg-luxury':
        return {
          glassBg: 'bg-gradient-to-b from-amber-50/95 via-white/90 to-yellow-50/50 border-amber-300 hover:border-amber-400 shadow-lg',
          swatchGradient: 'from-amber-300 via-yellow-200 to-orange-300',
          accentColor: 'text-amber-900',
          btnPrimary: 'bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 text-white shadow-md shadow-amber-700/20',
          washabilityBadge: 'bg-amber-100 text-amber-900 border-amber-300 font-semibold'
        };
      case 'pkg-turnkey-villa':
        return {
          glassBg: 'bg-gradient-to-b from-emerald-50/95 via-white/90 to-teal-50/60 border-emerald-400 hover:border-emerald-500 shadow-xl ring-1 ring-emerald-300',
          swatchGradient: 'from-emerald-400 via-teal-300 to-cyan-300',
          accentColor: 'text-emerald-900',
          btnPrimary: 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white shadow-md shadow-emerald-700/20',
          washabilityBadge: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold'
        };
      default:
        return {
          glassBg: 'bg-white/90 border-gray-200',
          swatchGradient: 'from-gray-200 to-gray-300',
          accentColor: 'text-[#191919]',
          btnPrimary: 'bg-[#191919] text-white',
          washabilityBadge: 'bg-gray-100 text-gray-700 border-gray-200'
        };
    }
  };

  return (
    <section id="packages" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 lg:pb-8 border-b border-gray-300/80">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-amber-800 font-bold font-mono">
            AUTHENTIC TURNKEY PACKAGES
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#191919]">
            House & Villa Painting Packages
          </h2>
        </div>

        <p className="mt-3 md:mt-0 text-xs sm:text-sm lg:text-[15px] text-[#191919]/80 max-w-md leading-relaxed">
          Standardized transparent per-sq.ft. packages engineered with certified Asian Paints materials, dustless sanding, and on-site moisture tests.
        </p>
      </div>

      {/* Grid of 4 High-Visibility Glass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 xl:gap-6 items-stretch">
        {PAINTING_PACKAGES.map((pkg) => {
          const style = getPackageStyles(pkg.id);
          return (
            <div
              key={pkg.id}
              className={`rounded-2xl p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-col justify-between backdrop-blur-md border ${style.glassBg} transition-all duration-300 hover:-translate-y-1 relative h-full`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  ★ Most Popular for Families
                </div>
              )}

              <div>
                {/* Paint Swatch Gradient Header */}
                <div className="mb-3.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#191919]/60 mb-1.5">
                    <span className="truncate">Sheen: {pkg.sheenLevel}</span>
                    <span className={`px-2 py-0.5 rounded border text-[10px] shrink-0 ${style.washabilityBadge}`}>
                      {pkg.washability}
                    </span>
                  </div>
                  <div
                    className={`h-2.5 w-full rounded-full bg-gradient-to-r ${style.swatchGradient} shadow-inner border border-black/10`}
                  />
                </div>

                <h3 className="text-lg xl:text-xl font-serif text-[#191919] font-normal leading-snug">
                  {pkg.name}
                </h3>
                <div className="text-xs text-[#191919]/60 font-medium mt-0.5">
                  {pkg.hindiName}
                </div>

                <p className="text-xs text-[#191919]/75 mt-2.5 leading-relaxed min-h-[34px]">
                  {pkg.tagline}
                </p>

                {/* Price Display */}
                <div className="my-4 p-3.5 rounded-xl bg-white/80 border border-gray-200/80 shadow-xs">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-serif text-[#191919]">
                      ₹{pkg.pricePerSqFt}
                    </span>
                    <span className="text-xs text-[#191919]/60 font-sans">/ sq. ft.</span>
                  </div>
                  <div className="text-[11px] text-[#191919]/70 mt-0.5">
                    {pkg.sampleFlatCost}
                  </div>
                  <div className="text-[11px] text-emerald-800 font-semibold mt-1 flex items-center gap-1">
                    <span>🛡️</span>
                    <span>{pkg.warranty}</span>
                  </div>
                </div>

                {/* Product Formulation Breakdown */}
                <div className="bg-white/90 border border-gray-200/90 rounded-xl p-3 text-[11px] space-y-1 mb-4 shadow-xs">
                  <div>
                    <span className="text-[#191919]/50 font-medium">Topcoat: </span>
                    <span className="font-bold text-[#191919] block truncate">{pkg.productsUsed.topcoat}</span>
                  </div>
                  <div>
                    <span className="text-[#191919]/50 font-medium">Base Putty: </span>
                    <span className="text-[#191919]/80 block truncate">{pkg.productsUsed.putty}</span>
                  </div>
                  {pkg.productsUsed.waterproofBase && (
                    <div className="text-emerald-800 font-medium pt-1 border-t border-gray-100 text-[10px]">
                      ★ {pkg.productsUsed.waterproofBase}
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-[10px] uppercase tracking-wider text-[#191919]/50 font-mono font-bold">
                    Included:
                  </div>
                  <ul className="space-y-1 text-xs text-[#191919]/85">
                    {pkg.features.slice(0, 4).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5 leading-snug">
                        <span className="text-emerald-700 font-bold shrink-0">✓</span>
                        <span className="line-clamp-2">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Unique Action Buttons */}
              <div className="space-y-2 pt-3 border-t border-gray-200/80">
                <button
                  onClick={() => handleWhatsAppBooking(pkg)}
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${style.btnPrimary}`}
                >
                  <span>Book on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>

                <button
                  onClick={() => onSelectPackageForInspection(pkg.name)}
                  className="w-full py-2 px-3 bg-white hover:bg-gray-50 border border-gray-300 text-xs font-medium text-[#191919] rounded-xl transition-colors cursor-pointer"
                >
                  Schedule Moisture Test
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
