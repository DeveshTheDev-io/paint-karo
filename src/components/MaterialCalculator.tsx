import React, { useState, useId } from 'react';
import { CHANNEL_INFO } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

interface MaterialCalculatorProps {
  onOpenQuoteModal: (prefill: { roofArea: number; surfaceType: string; estimatedAmount: number }) => void;
}

export const MaterialCalculator: React.FC<MaterialCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [areaSqFt, setAreaSqFt] = useState<number>(1000);
  const [surfaceType, setSurfaceType] = useState<string>('rcc_standard');
  const [crackSeverity, setCrackSeverity] = useState<string>('minor');

  const getCoverageRate = () => {
    switch (surfaceType) {
      case 'rcc_smooth':
        return 12;
      case 'brick_bat_coba':
        return 10;
      case 'china_mosaic':
        return 11.5;
      case 'rcc_standard':
      default:
        return 11;
    }
  };

  const coveragePerLiter = getCoverageRate();
  const totalDampProofLiters = Math.ceil(areaSqFt / coveragePerLiter);

  // Dilution breakdown
  const primerDampProofLiters = Math.ceil(totalDampProofLiters * 0.28);
  const primerWaterLiters = Number((primerDampProofLiters / 3).toFixed(1));
  const crackMultiplier = crackSeverity === 'severe' ? 3 : crackSeverity === 'moderate' ? 2 : 1;
  const crackSealCartridges = Math.max(1, Math.ceil((areaSqFt / 350) * crackMultiplier));

  // Costs
  const dampProofRatePerLiter = 410;
  const crackSealRatePerCartridge = 240;
  const laborRatePerSqFt = 20;

  const materialCostINR = (totalDampProofLiters * dampProofRatePerLiter) + (crackSealCartridges * crackSealRatePerCartridge);
  const laborCostINR = areaSqFt * laborRatePerSqFt;
  const totalCostINR = materialCostINR + laborCostINR;

  const handleShareOnWhatsApp = () => {
    const text = `*Paint Karo - Roof Waterproofing Calculation*
📏 *Terrace Area:* ${areaSqFt} sq. ft.
🧱 *Substrate:* ${surfaceType}
🧴 *Total Damp Proof:* ${totalDampProofLiters} Liters (3 coats)
💧 *Primer Water (3:1):* ${primerWaterLiters} Liters
🔧 *Crack Seal:* ${crackSealCartridges} Tubes
💰 *Est. Turnkey Cost:* ₹${totalCostINR.toLocaleString('en-IN')}
❄️ *Room Cooling:* 8°C – 10°C Drop

Please schedule a site moisture inspection.`;
    const url = `https://wa.me/${CHANNEL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleBookWithEstimate = () => {
    onOpenQuoteModal({
      roofArea: areaSqFt,
      surfaceType: 'Asian Paints SmartCare Damp Proof (Terrace)',
      estimatedAmount: totalCostINR
    });
  };

  const areaInputId = useId();
  const surfaceInputId = useId();
  const crackInputId = useId();

  return (
    <section id="calculator" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 lg:pb-8 border-b border-gray-300/80">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-emerald-800 font-bold font-mono">
            PRECISION ESTIMATION ENGINE
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#191919]">
            Terrace Material & Cost Calculator
          </h2>
        </div>

        <p className="mt-3 md:mt-0 text-xs sm:text-sm lg:text-[15px] text-[#191919]/80 max-w-md leading-relaxed">
          Based on Asian Paints 10–12 sq.ft/L combined coverage formula. Calculate exact Damp Proof liters, 3:1 primer water, and turnkey labor.
        </p>
      </div>

      {/* Modern High-Visibility Glass Container */}
      <div className="bg-gradient-to-br from-white/95 via-sky-50/40 to-amber-50/40 backdrop-blur-xl border border-gray-300/90 rounded-3xl p-5 sm:p-8 lg:p-10 xl:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Inputs (5 Cols) */}
        <div className="lg:col-span-5 bg-white/90 backdrop-blur-md p-5 sm:p-6 lg:p-7 rounded-2xl border border-gray-200/90 shadow-xs space-y-5">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label htmlFor={areaInputId} className="text-xs font-bold text-[#191919] uppercase tracking-wider">
                Terrace Roof Area
              </label>
              <div className="flex items-center gap-1 font-mono text-base font-bold text-[#191919]">
                <input
                  id={areaInputId}
                  type="number"
                  min="100"
                  max="15000"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Math.max(50, Number(e.target.value)))}
                  className="w-24 bg-gray-50 border border-gray-300 rounded-lg px-2 py-1 text-right text-xs font-bold focus:border-[#191919] focus:outline-none"
                />
                <span className="text-xs text-[#191919]/60 font-sans">sq. ft.</span>
              </div>
            </div>

            <input
              type="range"
              min="200"
              max="5000"
              step="50"
              value={areaSqFt}
              onChange={(e) => setAreaSqFt(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#191919]"
            />

            <div className="flex flex-wrap gap-1.5 pt-1">
              {[500, 800, 1000, 1500, 2500].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setAreaSqFt(preset)}
                  className={`px-2.5 py-1 text-xs rounded-lg border font-mono font-medium transition-all ${
                    areaSqFt === preset
                      ? 'bg-[#191919] text-white border-[#191919] shadow-xs'
                      : 'bg-white text-[#191919]/70 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {preset} sq.ft
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3.5 pt-3.5 border-t border-gray-200">
            <div>
              <label htmlFor={surfaceInputId} className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                Substrate Surface
              </label>
              <select
                id={surfaceInputId}
                value={surfaceType}
                onChange={(e) => setSurfaceType(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs font-medium text-[#191919] focus:border-[#191919] focus:outline-none"
              >
                <option value="rcc_standard">Standard Concrete RCC Slab</option>
                <option value="rcc_smooth">Smooth Finished Concrete</option>
                <option value="brick_bat_coba">Brick Bat Coba with Damp</option>
                <option value="china_mosaic">China Mosaic Tiles</option>
              </select>
            </div>

            <div>
              <label htmlFor={crackInputId} className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                Visible Crack Severity
              </label>
              <select
                id={crackInputId}
                value={crackSeverity}
                onChange={(e) => setCrackSeverity(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-xs font-medium text-[#191919] focus:border-[#191919] focus:outline-none"
              >
                <option value="minor">Hairline Cracks (1–1.5mm)</option>
                <option value="moderate">Moderate Expansion Joint Cracks</option>
                <option value="severe">Deep Settlement Cracks</option>
              </select>
            </div>
          </div>

          <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl text-xs text-[#191919]/80 leading-relaxed shadow-xs">
            <span className="font-bold text-blue-900">Official Paint Karo Dilution:</span> Primer is diluted 3:1 with water. Coats 2 & 3 are applied 100% undiluted for 400+ micron membrane and 8°C–10°C solar reflection.
          </div>
        </div>

        {/* Right Output Card (7 Cols) */}
        <div className="lg:col-span-7 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-5 sm:p-7 lg:p-8 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-gray-200 gap-2">
            <div>
              <span className="text-xs text-amber-800 font-bold uppercase tracking-wider font-mono">
                Bill of Materials
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#191919] font-normal">
                {areaSqFt.toLocaleString('en-IN')} sq. ft. Terrace Roof
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-3 py-1 rounded-full shrink-0">
              10-Yr Asian Paints Spec
            </span>
          </div>

          {/* 4 Colored Glass Stat Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            <div className="p-3.5 bg-sky-50/80 border border-sky-200 rounded-xl shadow-xs">
              <div className="text-[10px] text-sky-800 font-mono font-bold uppercase">Total Damp Proof</div>
              <div className="text-xl sm:text-2xl font-serif text-sky-950 mt-1 font-bold">
                {totalDampProofLiters}
              </div>
              <div className="text-[10px] text-sky-700 font-medium">Liters (3 Coats)</div>
            </div>

            <div className="p-3.5 bg-blue-50/80 border border-blue-200 rounded-xl shadow-xs">
              <div className="text-[10px] text-blue-800 font-mono font-bold uppercase">Primer Water</div>
              <div className="text-xl sm:text-2xl font-serif text-blue-950 mt-1 font-bold">
                {primerWaterLiters}
              </div>
              <div className="text-[10px] text-blue-700 font-medium">Liters (3:1 Ratio)</div>
            </div>

            <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl shadow-xs">
              <div className="text-[10px] text-amber-800 font-mono font-bold uppercase">Crack Seal</div>
              <div className="text-xl sm:text-2xl font-serif text-amber-950 mt-1 font-bold">
                {crackSealCartridges}
              </div>
              <div className="text-[10px] text-amber-700 font-medium">330ml Tubes</div>
            </div>

            <div className="p-3.5 bg-emerald-50/80 border border-emerald-200 rounded-xl shadow-xs">
              <div className="text-[10px] text-emerald-800 font-mono font-bold uppercase">Cooling Drop</div>
              <div className="text-xl sm:text-2xl font-serif text-emerald-950 mt-1 font-bold">
                8°–10°C
              </div>
              <div className="text-[10px] text-emerald-700 font-medium">Room Temp Drop</div>
            </div>
          </div>

          {/* Turnkey Investment Banner */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-gray-50 to-amber-50/60 border border-gray-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-xs">
            <div>
              <div className="text-xs text-[#191919]/70 font-medium">
                Estimated Turnkey Investment (Materials + Labor + GST)
              </div>
              <div className="text-2xl sm:text-3xl font-serif text-[#191919] mt-0.5 font-bold">
                ₹{totalCostINR.toLocaleString('en-IN')}
              </div>
            </div>
            <div className="text-xs font-mono font-bold text-gray-700 bg-white px-3 py-1 rounded-lg border border-gray-200 shrink-0">
              ~₹{(totalCostINR / areaSqFt).toFixed(0)}/sq.ft.
            </div>
          </div>

          {/* Unique Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
            <button
              onClick={handleShareOnWhatsApp}
              className="py-2.5 sm:py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleBookWithEstimate}
              className="py-2.5 sm:py-3 px-4 bg-[#191919] hover:bg-[#2c2c2c] text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Moisture Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
