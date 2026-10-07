/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SimpleStepsGuide } from './components/SimpleStepsGuide';
import { PaintingPackages } from './components/PaintingPackages';
import { BestProductsGuide } from './components/BestProductsGuide';
import { VideoTutorials } from './components/VideoTutorials';
import { MaterialCalculator } from './components/MaterialCalculator';
import { TechnicalDocs } from './components/TechnicalDocs';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuoteRequestModal } from './components/QuoteRequestModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePrefill, setQuotePrefill] = useState<{
    roofArea?: number;
    surfaceType?: string;
    estimatedAmount?: number;
    serviceName?: string;
  }>({});

  const handleOpenQuoteModal = (prefill?: {
    roofArea?: number;
    surfaceType?: string;
    estimatedAmount?: number;
    serviceName?: string;
  }) => {
    setQuotePrefill(prefill || {});
    setIsQuoteModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#191919] font-sans antialiased overflow-x-hidden selection:bg-[#191919] selection:text-white">
      {/* 1. Fixed Transparent Navbar with Boomerang SVG Logo Mark */}
      <Navbar onOpenBooking={() => handleOpenQuoteModal()} />

      {/* 2. Full-Viewport Hero with CloudFront Boomerang Canvas Video & Bottom Info Panel */}
      <HeroSection
        onOpenBooking={() => handleOpenQuoteModal()}
        onNavigateSection={handleNavigateSection}
      />

      {/* 3. The 5 Simple Steps to Leak-Free Roofs */}
      <SimpleStepsGuide />

      {/* 4. Turnkey House & Villa Painting Packages */}
      <PaintingPackages
        onSelectPackageForInspection={(pkgName) =>
          handleOpenQuoteModal({ serviceName: `Package: ${pkgName}` })
        }
      />

      {/* 5. Best Products Used for Indian Homes */}
      <BestProductsGuide />

      {/* 6. Official Paint Karo YouTube Video Masterclasses */}
      <VideoTutorials />

      {/* 7. Precision Material & Cost Calculator */}
      <MaterialCalculator onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 8. Technical Parameters Matrix */}
      <TechnicalDocs />

      {/* 9. Frequently Asked Questions */}
      <FaqSection />

      {/* 10. Quiet Minimalist Footer */}
      <Footer />

      {/* Free Site Moisture Inspection Modal with Direct WhatsApp Submission to +91 9140902275 */}
      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefillData={quotePrefill}
      />
    </div>
  );
}
