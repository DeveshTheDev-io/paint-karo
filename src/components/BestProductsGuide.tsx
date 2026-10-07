import React, { useState } from 'react';
import { BEST_PRODUCTS, CHANNEL_INFO } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

export const BestProductsGuide: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Interior Luxury', 'Exterior Weatherproof', 'Waterproofing', 'Base Prep & Putty'];

  const filteredProducts = filter === 'All'
    ? BEST_PRODUCTS
    : BEST_PRODUCTS.filter((p) => p.category === filter);

  const getProductCardStyle = (category: string) => {
    switch (category) {
      case 'Interior Luxury':
        return {
          bg: 'bg-gradient-to-br from-purple-50/90 via-white/95 to-amber-50/50',
          border: 'border-purple-200 hover:border-purple-300',
          badge: 'bg-purple-100 text-purple-900 border-purple-200',
          btn: 'bg-[#191919] hover:bg-[#2c2c2c] text-white'
        };
      case 'Exterior Weatherproof':
        return {
          bg: 'bg-gradient-to-br from-blue-50/90 via-white/95 to-sky-50/50',
          border: 'border-blue-200 hover:border-blue-300',
          badge: 'bg-blue-100 text-blue-900 border-blue-200',
          btn: 'bg-blue-900 hover:bg-blue-800 text-white'
        };
      case 'Waterproofing':
        return {
          bg: 'bg-gradient-to-br from-cyan-50/90 via-white/95 to-teal-50/50',
          border: 'border-cyan-300 hover:border-cyan-400',
          badge: 'bg-cyan-100 text-cyan-900 border-cyan-300 font-bold',
          btn: 'bg-teal-800 hover:bg-teal-700 text-white'
        };
      case 'Base Prep & Putty':
        return {
          bg: 'bg-gradient-to-br from-amber-50/90 via-white/95 to-orange-50/50',
          border: 'border-amber-200 hover:border-amber-300',
          badge: 'bg-amber-100 text-amber-900 border-amber-200',
          btn: 'bg-amber-900 hover:bg-amber-800 text-white'
        };
      default:
        return {
          bg: 'bg-white/90',
          border: 'border-gray-200',
          badge: 'bg-gray-100 text-gray-800 border-gray-200',
          btn: 'bg-[#191919] text-white'
        };
    }
  };

  return (
    <section id="products" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 lg:pb-8 border-b border-gray-300/80">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-amber-800 font-bold font-mono">
            CERTIFIED MATERIALS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#191919]">
            Best Products for Indian Homes
          </h2>
        </div>

        {/* Filter Pills with Glassmorphism */}
        <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-1.5 p-1.5 bg-white/80 backdrop-blur-md rounded-xl border border-gray-200 shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === cat
                  ? 'bg-[#191919] text-white shadow-xs font-semibold'
                  : 'text-[#191919]/70 hover:text-[#191919] hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid with Elevated Glassmorphic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {filteredProducts.map((prod) => {
          const style = getProductCardStyle(prod.category);
          return (
            <div
              key={prod.id}
              className={`rounded-2xl p-5 sm:p-6 lg:p-7 backdrop-blur-md border ${style.bg} ${style.border} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 h-full`}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-mono ${style.badge}`}>
                    {prod.category}
                  </span>
                  <span className="font-mono text-emerald-800 font-semibold">{prod.durability}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif text-[#191919] font-normal">
                  {prod.name}
                </h3>
                <div className="text-xs text-[#191919]/60 font-medium mt-0.5">
                  {prod.brand}
                </div>

                <p className="text-xs sm:text-sm text-[#191919]/80 mt-2.5 leading-relaxed">
                  {prod.description}
                </p>

                {/* Technical Box */}
                <div className="mt-4 p-3.5 bg-white/90 border border-gray-200/90 rounded-xl text-xs space-y-1.5 shadow-xs">
                  <div className="text-[11px] uppercase tracking-wider text-amber-800 font-mono font-bold">
                    Key Formulation Feature:
                  </div>
                  <div className="text-[#191919] font-medium leading-snug">
                    {prod.keyFeature}
                  </div>
                  <div className="text-[#191919]/70 text-[11px] pt-1 border-t border-gray-200">
                    <strong>Ideal for:</strong> {prod.idealFor}
                  </div>
                </div>
              </div>

              {/* Unique Action Button */}
              <div className="mt-5 pt-3.5 border-t border-gray-200/80 flex items-center justify-between">
                <span className="text-xs text-[#191919]/60 font-mono">100% Genuine</span>
                <a
                  href={`https://wa.me/${CHANNEL_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Paint Karo, please provide material guidance and best price for ${prod.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs ${style.btn}`}
                >
                  <span>Ask on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
