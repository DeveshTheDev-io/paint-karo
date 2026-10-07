import React, { useState } from 'react';
import { CHANNEL_INFO } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    roofArea?: number;
    surfaceType?: string;
    estimatedAmount?: number;
    serviceName?: string;
  };
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  isOpen,
  onClose,
  prefillData
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Delhi NCR');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('Independent House');
  const [serviceNeeded, setServiceNeeded] = useState(
    prefillData?.serviceName || prefillData?.surfaceType || 'Roof Waterproofing (SmartCare Damp Proof)'
  );
  const [approxAreaSqFt, setApproxAreaSqFt] = useState<number>(prefillData?.roofArea || 1000);
  const [currentIssue, setCurrentIssue] = useState('Active Roof Leakage / Dampness');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [notes, setNotes] = useState('');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmitAndSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const formattedMessage = `*New Free Site Moisture Inspection Request - Paint Karo*

👤 *Client Name:* ${fullName}
📱 *Phone Number:* ${phone.startsWith('+91') ? phone : `+91 ${phone}`}
📍 *City:* ${city}
📮 *Pincode:* ${pincode || 'Not Specified'}
🏠 *Site Address:* ${address || 'Provided during call'}
🏢 *Property Type:* ${propertyType}
🛠 *Service Required:* ${serviceNeeded}
📏 *Approx Area:* ${approxAreaSqFt} sq. ft.
⚠️ *Current Problem:* ${currentIssue}
📅 *Preferred Inspection Date:* ${preferredDate || 'Earliest Available'}
⏰ *Preferred Time Slot:* ${preferredTimeSlot}
📝 *Client Notes:* ${notes || 'Looking for technical moisture inspection and turnkey estimate.'}

----------------------------------------
_Submitted via Paint Karo Platform (Contact: ${CHANNEL_INFO.phone})_`;

    const whatsappUrl = `https://wa.me/${CHANNEL_INFO.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    setGeneratedWhatsAppUrl(whatsappUrl);
    setIsSubmitted(true);

    window.open(whatsappUrl, '_blank');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="bg-white/95 backdrop-blur-2xl border border-gray-200/90 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 p-5 sm:p-6 flex items-center justify-between z-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-amber-800 font-bold font-mono">
              PAINT KARO OFFICIAL HELPLINE
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#191919] font-normal">
              Book Free Site Moisture Inspection
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-[#191919] transition-colors text-sm font-mono cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-2xl font-serif border border-emerald-300 shadow-md">
              ✓
            </div>

            <h4 className="text-2xl font-serif text-[#191919] font-normal">
              Details Formatted for WhatsApp!
            </h4>

            <p className="text-sm text-[#191919]/80 max-w-md mx-auto leading-relaxed">
              WhatsApp has been launched with your inspection request directed to Paint Karo team on <strong className="text-emerald-800 font-bold">{CHANNEL_INFO.phone}</strong>.
            </p>

            <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl max-w-md mx-auto text-left text-xs space-y-2.5 shadow-xs">
              <div className="flex justify-between items-center pb-2 border-b border-emerald-200">
                <span className="text-emerald-900/60 font-medium">Client:</span>
                <span className="text-emerald-950 font-bold text-sm">{fullName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-900/60 font-medium">Location:</span>
                <span className="text-emerald-950 font-medium">{city}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-900/60 font-medium">Service:</span>
                <span className="text-emerald-950 font-bold">{serviceNeeded}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-900/60 font-medium">Area:</span>
                <span className="font-mono text-emerald-950 font-bold">{approxAreaSqFt} sq. ft.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={generatedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2"
              >
                <span>Re-open WhatsApp Chat</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${CHANNEL_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-3 bg-white border border-gray-300 hover:border-gray-400 text-[#191919] text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                Direct Call: {CHANNEL_INFO.phone}
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="text-xs text-[#191919]/60 hover:text-[#191919] underline cursor-pointer"
              >
                Return to page
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitAndSendWhatsApp} className="p-6 sm:p-8 space-y-5">
            <div className="p-4 bg-amber-50/80 border border-amber-300 rounded-2xl text-xs text-amber-950 leading-relaxed shadow-xs">
              <span className="font-bold">100% Free Site Moisture Testing:</span> Submitting this form prepares your exact parameters and opens WhatsApp directly to <strong>{CHANNEL_INFO.phone}</strong> for instant confirmation.
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ankit Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-[#191919] font-medium focus:outline-none focus:border-[#191919]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-[#191919]/50 font-mono font-bold">+91</span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="91409 02275"
                    value={phone.replace('+91 ', '')}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-11 pr-3 py-2.5 text-xs text-[#191919] font-mono font-bold focus:outline-none focus:border-[#191919]"
                  />
                </div>
              </div>
            </div>

            {/* City, Pincode & Property Type */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                  City <span className="text-red-500">*</span>
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-[#191919] font-medium focus:outline-none focus:border-[#191919]"
                >
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Pune">Pune</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Kanpur">Kanpur</option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Other Indian City">Other Indian City</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                  Pincode
                </label>
                <input
                  type="text"
                  placeholder="e.g. 110017"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-[#191919] font-mono focus:outline-none focus:border-[#191919]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-[#191919] font-medium focus:outline-none focus:border-[#191919]"
                >
                  <option value="Independent House / Kothi">Independent House / Kothi</option>
                  <option value="Villa / Bungalow">Villa / Bungalow</option>
                  <option value="2BHK / 3BHK Apartment">2BHK / 3BHK Apartment</option>
                  <option value="Apartment Terrace / Penthouse">Apartment Terrace / Penthouse</option>
                  <option value="Housing Society (RWA)">Housing Society (RWA)</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                Site Address / Locality
              </label>
              <input
                type="text"
                placeholder="e.g. House 42, Sector 15, Near Community Center"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-[#191919] focus:outline-none focus:border-[#191919]"
              />
            </div>

            {/* Service & Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                  Service / Package Needed
                </label>
                <select
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-[#191919] font-medium focus:outline-none focus:border-[#191919]"
                >
                  <option value="Roof Waterproofing (SmartCare Damp Proof)">Roof Waterproofing (SmartCare Damp Proof)</option>
                  <option value="Parapet Wall & Sunshade Upturn">Parapet Wall & Sunshade Upturn</option>
                  <option value="Interior Seelan & Efflorescence Cure">Interior Seelan & Efflorescence Cure</option>
                  <option value="Complete Villa Waterproof + Painting Shield">Complete Villa Waterproof + Painting Shield</option>
                  <option value="Premium Washable Sheen Package (Apcolite)">Premium Washable Sheen Package (Apcolite)</option>
                  <option value="Royal Luxury & Anti-Bacterial Package (Royale)">Royal Luxury & Anti-Bacterial Package (Royale)</option>
                  <option value="Economy Refresh Package (Tractor Emulsion)">Economy Refresh Package (Tractor Emulsion)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                  Approx Area (sq. ft.)
                </label>
                <input
                  type="number"
                  value={approxAreaSqFt}
                  onChange={(e) => setApproxAreaSqFt(Number(e.target.value))}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs text-[#191919] font-mono font-bold focus:outline-none focus:border-[#191919]"
                />
              </div>
            </div>

            {/* Problem & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                  Current Issue
                </label>
                <select
                  value={currentIssue}
                  onChange={(e) => setCurrentIssue(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-[#191919] font-medium focus:outline-none focus:border-[#191919]"
                >
                  <option value="Active Roof Leakage / Dampness">Active Roof Leakage / Dampness</option>
                  <option value="Ceiling Peeling & Water Dripping">Ceiling Peeling & Water Dripping</option>
                  <option value="Internal Wall Seelan (Shora / White Salt)">Internal Wall Seelan (Shora / White Salt)</option>
                  <option value="Fresh House Painting / Repainting">Fresh House Painting / Repainting</option>
                  <option value="Pre-Monsoon Preventive Coating">Pre-Monsoon Preventive Coating</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                  Inspection Time Slot
                </label>
                <select
                  value={preferredTimeSlot}
                  onChange={(e) => setPreferredTimeSlot(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 text-xs text-[#191919] font-medium focus:outline-none focus:border-[#191919]"
                >
                  <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                  <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                  <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#191919] mb-1 uppercase tracking-wider">
                Additional Notes
              </label>
              <textarea
                rows={2}
                placeholder="Mention any specific concerns like balcony slope, damp patches, wall stains..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-3.5 py-2 text-xs text-[#191919] focus:outline-none focus:border-[#191919]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-emerald-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit & Send on WhatsApp (+91 9140902275)</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
