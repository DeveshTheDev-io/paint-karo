import { PaintingPackage, BestProduct, SimpleStep, VideoTutorial } from '../types';

export const CHANNEL_INFO = {
  name: 'Paint Karo',
  tagline: 'Paint Karo, Leak Se Door Raho!',
  phone: '+91 9140902275',
  whatsappNumber: '919140902275',
  email: 'paintkarobusiness@gmail.com',
  youtubeUrl: 'https://www.youtube.com/@paintkaro',
  subscribers: '127K',
  videoCount: '134',
  views: '29,720,290',
  country: 'India',
  joinedDate: 'May 17, 2021',
  description: `Welcome to Paint Karo, your trusted source for simple, practical solutions to waterproofing, damp-proofing, and painting problems. We share easy tutorials, helpful tips, and real-life demonstrations to protect your home from leaks and damage.

🎯 Perfect for homeowners, DIYers, and contractors looking to:
• Fix water leakage & damp issues
• Learn step-by-step techniques
• Avoid common mistakes

🔧 Subscribe now — Paint Karo, Leak Se Door Raho!`
};

export const SIMPLE_5_STEPS: SimpleStep[] = [
  {
    stepNumber: 1,
    title: 'Surface Cleaning & High-Pressure Wash',
    hindiTitle: 'कठोर सफाई एवं हाई-प्रेशर वॉश',
    ratioAndSpecs: 'Dry Substrate (Moisture < 5%)',
    description: 'Scrub the entire concrete terrace slab with a stiff steel wire brush to remove moss, algae, dirt, and loose cement mortar. Follow with a 150-bar pressure jet wash to flush out pores.',
    tools: ['Steel Wire Brush', 'Pressure Jet Washer', 'Broom & Chisel'],
    keyWarning: 'Never coat over moss or loose dirt; uncleaned concrete causes debonding within 6 months.'
  },
  {
    stepNumber: 2,
    title: 'Crack Filling with Asian Paints Crack Seal',
    hindiTitle: '1-1.5mm दरारों को क्रैक सील से भरना',
    ratioAndSpecs: '1–1.5mm V-Grooves',
    description: 'Chisel hairline cracks into a 1–1.5mm V-groove. Clean dust and press Asian Paints SmartCare Crack Seal deep inside using a putty knife. Allow 4–6 hours to dry flush with the surface.',
    tools: ['SmartCare Crack Seal Paste', 'Putty Knife', 'Triangular Chisel'],
    keyWarning: 'Do not use standard white cement for dynamic terrace cracks—it shrinks and cracks again.'
  },
  {
    stepNumber: 3,
    title: 'Deep Penetrating Priming Coat (3:1 Ratio)',
    hindiTitle: 'प्राइमर कोट (3 भाग Damp Proof : 1 भाग पानी)',
    ratioAndSpecs: '3 Parts Damp Proof : 1 Part Clean Water',
    description: 'Mix 3 parts SmartCare Damp Proof with 1 part clean water. Apply aggressively with a stiff bristle brush so the elastomeric resin penetrates deep into concrete capillaries, anchoring the system.',
    tools: ['SmartCare Damp Proof', 'Measuring Bucket', 'Stiff Bristle Brush'],
    keyWarning: 'Work the primer into the pores with brush pressure; do not simply roll on top lightly.'
  },
  {
    stepNumber: 4,
    title: 'Second Coat (Undiluted, Horizontal Direction)',
    hindiTitle: 'दूसरा कोट (बिना पानी मिलाए - हॉरिजॉन्टल)',
    ratioAndSpecs: '100% Pure Undiluted',
    description: 'Apply pure undiluted Asian Paints SmartCare Damp Proof across the terrace in a horizontal direction. Maintain an even wet film thickness and allow 4–6 hours drying time under sunshine.',
    tools: ['Heavy Texture Roller', 'Corner Paintbrush'],
    keyWarning: 'Strictly zero water dilution! Adding water to Coat 2 weakens membrane thickness.'
  },
  {
    stepNumber: 5,
    title: 'Third Coat (Undiluted, Vertical Cross-Directional Lock)',
    hindiTitle: 'तीसरा कोट (वर्टिकल क्रॉस - 8°–10°C कूलिंग)',
    ratioAndSpecs: '100% Pure Undiluted Cross Coat',
    description: 'Apply the third and final undiluted coat vertically (at a 90° angle to Coat 2). This perpendicular cross-lock seals all micro-pinholes and creates a brilliant white solar reflective shield that lowers room temperature by 8°C–10°C.',
    tools: ['Long Handle Roller', 'Painter Soft Shoes'],
    keyWarning: 'Never add color tint to Damp Proof! Pure white reflects 90% solar heat and keeps rooms cool.'
  }
];

export const PAINT_KARO_VIDEOS: VideoTutorial[] = [
  {
    id: 'vid-1',
    videoCode: 'pyxa1wkvmkc',
    title: 'Permanent Roof Waterproofing with Asian Paints SmartCare Damp Proof',
    hindiTitle: 'छत से टपकता पानी और सीलन रोकने का असली तरीका',
    youtubeUrl: 'https://youtu.be/pyxa1wkvmkc?si=aoYuVvUt7ZKPeBQq',
    thumbnailUrl: 'https://img.youtube.com/vi/pyxa1wkvmkc/hqdefault.jpg',
    duration: '09:20',
    category: 'Roof Waterproofing',
    description: 'Complete hands-on demonstration of roof waterproofing: mechanical surface prep, 1–1.5mm crack sealing, exact 3:1 primer dilution ratio, and 2 undiluted cross coats for 10-year protection.',
    keyTimestamps: [
      { time: '0:19', label: 'Wire brush cleaning & pressure wash' },
      { time: '1:06', label: 'Crack sealing with SmartCare Crack Seal' },
      { time: '1:49', label: '3:1 Priming coat application' },
      { time: '4:13', label: 'Second undiluted horizontal coat' },
      { time: '6:30', label: 'Third vertical coat & 8-10°C heat drop' }
    ]
  },
  {
    id: 'vid-2',
    videoCode: '0pfcuwl0epk',
    title: 'Parapet Wall Leakage & 300mm Upturn Method Masterclass',
    hindiTitle: 'पैरापेट दीवार और कोनों से आने वाले पानी का पक्का समाधान',
    youtubeUrl: 'https://youtu.be/0pfcuwl0epk?si=wti4aRVzxei63AjG',
    thumbnailUrl: 'https://img.youtube.com/vi/0pfcuwl0epk/hqdefault.jpg',
    duration: '07:45',
    category: 'Parapet Seepage',
    description: 'Why 70% of terrace leakages enter through 90° parapet wall joints. Learn the mortar coving fillet and 300mm vertical Damp Proof upturn technique shown step-by-step.',
    keyTimestamps: [
      { time: '0:45', label: 'Why corner joints leak in heavy monsoons' },
      { time: '2:10', label: '45-degree mortar coving construction' },
      { time: '4:15', label: '300mm vertical membrane upturn' },
      { time: '6:00', label: 'Rainwater drain collar sealing' }
    ]
  },
  {
    id: 'vid-3',
    videoCode: 'gmiJXzWVnQw',
    title: 'Interior Wall Seelan & White Efflorescence (Shora) Permanent Solution',
    hindiTitle: 'कमरे की दीवारों पर पपड़ी और शोरा का 100% इलाज',
    youtubeUrl: 'https://youtu.be/gmiJXzWVnQw?si=cGw0uso1Mi4e4HFU',
    thumbnailUrl: 'https://img.youtube.com/vi/gmiJXzWVnQw/hqdefault.jpg',
    duration: '11:15',
    category: 'Interior Seelan',
    description: 'How to cure peeling wall paint flakes and white salt efflorescence from the plaster base using Asian Paints SmartCare Dampstop before applying putty and luxury emulsion.',
    keyTimestamps: [
      { time: '0:30', label: 'Scraping infected paint down to bare masonry' },
      { time: '2:40', label: 'Treating efflorescence salt deposits' },
      { time: '5:20', label: 'SmartCare Dampstop 2-coat application' },
      { time: '8:50', label: 'Waterproof acrylic putty smoothing' }
    ]
  },
  {
    id: 'vid-4',
    videoCode: 'MpkPfiINehI',
    title: 'Exterior Wall Weatherproofing & Apex Ultima Protek Application',
    hindiTitle: 'बाहरी दीवारों को बारिश, धूप और फफूंदी से कैसे बचाएं',
    youtubeUrl: 'https://youtu.be/MpkPfiINehI?si=WVzh-Ip9UMHI2jD3',
    thumbnailUrl: 'https://img.youtube.com/vi/MpkPfiINehI/hqdefault.jpg',
    duration: '10:05',
    category: 'Exterior Weatherproof',
    description: 'Professional exterior facade protection guide: cleaning algae, micro-crack sealing, SmartCare exterior primer, and dual coats of Apex Ultima Protek with lamination technology.',
    keyTimestamps: [
      { time: '1:00', label: 'Fungicidal exterior facade wash' },
      { time: '3:15', label: 'Exterior crack seal and window borders' },
      { time: '5:45', label: 'Primer application for high adhesion' },
      { time: '8:00', label: 'Apex Ultima Protek 10-year finish' }
    ]
  }
];

export const PAINTING_PACKAGES: PaintingPackage[] = [
  {
    id: 'pkg-rental',
    name: 'Economy Refresh Package',
    hindiTitle: 'इकोनॉमी फ्रेश पेंट पैकेज',
    tagline: 'Ideal for Rental Flats, Tenants, and Quick Budget Makeovers',
    recommendedFor: '1BHK & 2BHK Rental Apartments, Quick Turnover',
    pricePerSqFt: 14,
    sampleFlatCost: '₹14,000 – ₹22,000 (2BHK Flat)',
    warranty: '2 Years Workmanship Assurance',
    sheenLevel: 'Matt Finish',
    washability: 'Low',
    productsUsed: {
      putty: 'Asian Paints TruCare 1-Coat Touchup Putty',
      primer: 'TruCare Water Thinnable Wall Primer',
      topcoat: 'Asian Paints Tractor Emulsion'
    },
    features: [
      'Minor hairline patch putty & surface sanding',
      '1 coat primer over patchy areas',
      '2 rich coats of Asian Paints Tractor Emulsion',
      'Floor mask & drop-cloth furniture protection',
      'Quick 2–3 days completion timeline'
    ]
  },
  {
    id: 'pkg-premium',
    name: 'Premium Washable Sheen Package',
    hindiTitle: 'प्रीमियम वॉशेबल शीन पैकेज',
    tagline: 'Most Popular for Homeowners: Stain Resistant & Elegant Sheen',
    recommendedFor: '2BHK, 3BHK Homes, Living Rooms & Master Bedrooms',
    pricePerSqFt: 24,
    sampleFlatCost: '₹32,000 – ₹48,000 (3BHK Flat)',
    warranty: '5 Years Finish Warranty',
    sheenLevel: 'Soft Silk / Satin Sheen',
    washability: 'High',
    popular: true,
    productsUsed: {
      putty: 'TruCare 2X Acrylic Wall Putty (2 Full Coats)',
      primer: 'TruCare Penetrating Wall Primer',
      topcoat: 'Asian Paints Apcolite Premium Emulsion / Apcolite Satin'
    },
    features: [
      'Complete scraping of loose paint & 2 full coats acrylic putty',
      'Machine sanding for mirror-flat surface smoothness',
      '1 full coat TruCare acrylic primer',
      '2 generous coats of washable Apcolite Premium Emulsion',
      'Deep stain wipeability (tea, pencil marks, coffee stains easily cleanable)',
      'Free touch-up jar provided after work'
    ]
  },
  {
    id: 'pkg-luxury',
    name: 'Royal Luxury & Anti-Bacterial Package',
    hindiTitle: 'रॉयल लक्ज़री ग्लिट्ज़ एवं विला पैकेज',
    tagline: 'Teflon Surface Protector with Unmatched Glass-like Radiance',
    recommendedFor: 'Luxury Villas, 3BHK/4BHK Penthouses, High-End Residences',
    pricePerSqFt: 38,
    sampleFlatCost: '₹65,000 – ₹1,10,000 (4BHK / Villa)',
    warranty: '8–10 Years Asian Paints Royale Warranty',
    sheenLevel: 'High Radiance / Ultra Glitz Glow',
    washability: 'Supreme / Scrub Resistant',
    productsUsed: {
      putty: 'Asian Paints TruCare Super Acrylic Leveling Putty',
      primer: 'Royale Basecoat Primer (Anti-Alkali)',
      topcoat: 'Asian Paints Royale Glitz / Royale Aspira',
      waterproofBase: 'SmartCare Dampstop base barrier'
    },
    features: [
      'Festool dustless rotary machine sanding (99% dust-free painting)',
      'Moisture meter testing across all boundary walls',
      'Dampstop anti-efflorescence seal on all skirting & damp zones',
      '2 coats Asian Paints Royale Glitz with Teflon™ Surface Protector',
      'Designer feature accent wall (Stencil / Royale Play Texture option)',
      'PU clear coat polish for interior wooden doors & window frames',
      'Post-job professional deep floor & glass cleaning'
    ]
  },
  {
    id: 'pkg-turnkey-villa',
    name: 'Complete Villa 360° Waterproof + Paint Shield',
    hindiTitle: 'सम्पूर्ण विला 360° वाटरप्रूफिंग एवं पेंटिंग शील्ड',
    tagline: 'End-to-End Interior Luxury + Exterior Weatherproof + Roof Waterproofing',
    recommendedFor: 'Independent Houses, Kothis, Duplexes & Luxury Bungalows',
    pricePerSqFt: 52,
    sampleFlatCost: '₹1,40,000 – ₹2,80,000 (Independent Villa)',
    warranty: '10 Years Asian Paints Comprehensive Warranty',
    sheenLevel: 'Luxury Royale Inside + Apex Ultima Protek Outside',
    washability: 'Supreme / Scrub Resistant',
    productsUsed: {
      putty: 'TruCare 2X Acrylic Putty (Interior) + Exterior Waterproof Putty',
      primer: 'SmartCare Damp Proof Primer + SmartCare Exterior Primer',
      topcoat: 'Royale Glitz (Interior) + Apex Ultima Protek (Exterior)',
      waterproofBase: 'Asian Paints SmartCare Damp Proof 3-Coat Roof System'
    },
    features: [
      'Full terrace roof waterproofing with SmartCare Damp Proof (5-step process)',
      '300mm parapet wall coving & rainwater drain collar seals',
      'Exterior facade crack sealing & 2 coats Apex Ultima Protek (Lamination Tech)',
      'Interior 4-stage Royale painting with moisture-proof skirting barrier',
      'Zero monsoon leakage guarantee backed by on-site performance certificate',
      'Dedicated Paint Karo supervisor on-site every single day'
    ]
  }
];

export const BEST_PRODUCTS: BestProduct[] = [
  {
    id: 'prod-1',
    name: 'Asian Paints Royale Glitz',
    brand: 'Asian Paints Royale',
    category: 'Interior Luxury',
    description: 'Ultra-luxury interior emulsion with Teflon™ surface protector and ultra-sheen finish that repels toughest household stains.',
    idealFor: 'Living rooms, master bedrooms, dining halls and high-visibility areas.',
    keyFeature: 'Teflon Surface Protector + Anti-Bacterial + Washable with Scrub Sponge',
    durability: '8–10 Years'
  },
  {
    id: 'prod-2',
    name: 'Asian Paints Apex Ultima Protek',
    brand: 'Asian Paints Exterior',
    category: 'Exterior Weatherproof',
    description: 'Top-tier exterior emulsion with silicone additives and nanotech lamination that shields homes from torrential rains, algae, and harsh UV.',
    idealFor: 'Bungalow facades, building exteriors, boundary walls and parapets.',
    keyFeature: '10-Year Waterproofing Warranty + Structural Crack Bridging up to 2mm',
    durability: '10 Years'
  },
  {
    id: 'prod-3',
    name: 'Asian Paints SmartCare Damp Proof',
    brand: 'Asian Paints SmartCare',
    category: 'Waterproofing',
    description: 'Heavy-duty fiber-reinforced elastomeric waterproofing coating for terrace roofs and parapet walls. Pure brilliant white finish.',
    idealFor: 'Concrete terrace roofs, brick bat coba, china mosaic and balcony slabs.',
    keyFeature: '10–12 sq.ft/L coverage, 8°–10°C solar heat reduction, 10-Year Warranty',
    durability: '10 Years'
  },
  {
    id: 'prod-4',
    name: 'Asian Paints SmartCare Dampstop',
    brand: 'Asian Paints SmartCare',
    category: 'Waterproofing',
    description: 'High-performance crystalline waterproofing solution that penetrates deep into masonry to block internal wall efflorescence (shora) and rising dampness.',
    idealFor: 'Ground floor walls, basement walls, bathroom back walls, and damp skirting.',
    keyFeature: 'Permanent cure for white salt efflorescence and peeling paint blisters',
    durability: '5–8 Years'
  },
  {
    id: 'prod-5',
    name: 'Asian Paints TruCare 2X Acrylic Wall Putty',
    brand: 'Asian Paints TruCare',
    category: 'Base Prep & Putty',
    description: 'Premium white polymer-modified acrylic putty that fills concrete undulations and creates a marble-smooth, non-porous foundation for paint.',
    idealFor: 'New plastered masonry, drywall ceilings, and complete repaint leveling.',
    keyFeature: 'High whiteness index, buttery smooth sandability, prevents paint suction',
    durability: 'Base substrate life'
  },
  {
    id: 'prod-6',
    name: 'Asian Paints SmartCare Crack Seal',
    brand: 'Asian Paints SmartCare',
    category: 'Base Prep & Putty',
    description: 'Flexible acrylic micro-fiber paste formulated to seal static and dynamic cracks up to 1.5mm without shrinking or falling out.',
    idealFor: 'Terrace cracks, plaster fissures, window frame junctions, and parapet cracks.',
    keyFeature: 'Accommodates thermal expansion & contraction during Indian summers',
    durability: 'Permanent elastic seal'
  }
];

export const TECHNICAL_SPECS = [
  { parameter: 'Official Channel Helpline', value: '+91 9140902275 (Call / WhatsApp)' },
  { parameter: 'Official Channel Email', value: 'paintkarobusiness@gmail.com' },
  { parameter: 'Product Name', value: 'Asian Paints SmartCare Damp Proof' },
  { parameter: 'Polymer Type', value: 'Fiber-reinforced Elastomeric Acrylic Polymer' },
  { parameter: 'Combined Coverage (3 Coats)', value: '10 – 12 sq. ft. per liter (approx. 0.9 – 1.1 m²/L)' },
  { parameter: 'Priming Coat Dilution', value: '3 parts Damp Proof : 1 part clean tap water (3:1 by volume)' },
  { parameter: 'Coats 2 & 3 Dilution', value: 'Zero dilution (apply pure undiluted product)' },
  { parameter: 'Application Directions', value: 'Cross-directional (Coat 2 horizontal, Coat 3 vertical)' },
  { parameter: 'Inter-coat Drying Time', value: '4 – 6 hours at 30°C and 50% relative humidity' },
  { parameter: 'Substrate Temp Range', value: '5°C to 40°C (avoid direct application during noon peak heat >42°C)' },
  { parameter: 'Substrate Moisture Cap', value: '< 5% maximum measured with digital concrete moisture meter' },
  { parameter: 'Solar Reflectance & Cooling', value: 'Pure brilliant white finish reduces ceiling room temperature by 8°C – 10°C' },
  { parameter: 'Manufacturer Warranty', value: '10-Year Waterproofing Warranty from Asian Paints Ltd.' }
];

export const FAQS = [
  {
    q: 'How does the free site moisture inspection work?',
    a: 'Simply fill the form or message us on WhatsApp (+91 9140902275). Our technical team visits your property with an electronic digital moisture meter. We test your terrace, walls, and skirting, identify the root cause of leakage or efflorescence, and provide an exact material estimate with no obligation.'
  },
  {
    q: 'Why does Paint Karo emphasize 3:1 dilution for primer and NO water in coats 2 & 3?',
    a: 'Concrete has microscopic pores. When Damp Proof is diluted 3:1 with water, its viscosity drops so the elastomeric resin can soak 3–5mm deep into the concrete structure. But Coats 2 & 3 must be 100% undiluted to form a thick, rubber-like 400+ micron membrane that halts pooling monsoon water.'
  },
  {
    q: 'Can we add color tint into Asian Paints SmartCare Damp Proof?',
    a: 'No! As shown in our videos, Damp Proof is engineered pure brilliant white with high Solar Reflectance Index (SRI). It reflects 90% of solar radiation, lowering your indoor ceiling temperature by 8°C to 10°C. Adding color tint ruins this cooling property.'
  },
  {
    q: 'What house painting packages do you offer for apartments and villas?',
    a: 'We offer packages ranging from Economy Rental Refresh (Tractor Emulsion at ₹14/sq.ft) to Premium Washable Sheen (Apcolite at ₹24/sq.ft), Royal Luxury (Royale Glitz with Teflon at ₹38/sq.ft), and Complete 360° Villa Waterproofing + Painting at ₹52/sq.ft.'
  },
  {
    q: 'How can I contact Paint Karo for technical guidance or business inquiries?',
    a: 'You can directly WhatsApp or call us at +91 9140902275, or email paintkarobusiness@gmail.com. We also answer comments and queries on our YouTube channel @paintkaro.'
  }
];
