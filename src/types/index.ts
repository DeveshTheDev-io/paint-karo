export interface PaintingPackage {
  id: string;
  name: string;
  hindiName?: string;
  hindiTitle?: string;
  tagline: string;
  recommendedFor: string;
  pricePerSqFt: number;
  sampleFlatCost: string;
  warranty: string;
  sheenLevel: string;
  washability: 'Low' | 'Moderate' | 'High' | 'Supreme / Scrub Resistant';
  productsUsed: {
    putty: string;
    primer: string;
    topcoat: string;
    waterproofBase?: string;
  };
  features: string[];
  popular?: boolean;
}

export interface BestProduct {
  id: string;
  name: string;
  brand: string;
  category: 'Interior Luxury' | 'Exterior Weatherproof' | 'Waterproofing' | 'Base Prep & Putty' | 'Wood & Metal';
  description: string;
  idealFor: string;
  keyFeature: string;
  durability: string;
}

export interface SimpleStep {
  stepNumber: number;
  title: string;
  hindiTitle: string;
  ratioAndSpecs: string;
  description: string;
  tools: string[];
  keyWarning: string;
}

export interface VideoTutorial {
  id: string;
  videoCode: string;
  title: string;
  hindiTitle: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  duration: string;
  category: string;
  description: string;
  keyTimestamps: { time: string; label: string }[];
}

export interface InspectionFormData {
  fullName: string;
  phone: string;
  city: string;
  pincode: string;
  address: string;
  propertyType: string;
  serviceNeeded: string;
  approxAreaSqFt: number;
  currentIssue: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes: string;
}
