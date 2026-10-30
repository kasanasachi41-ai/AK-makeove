import React, { useState } from 'react';
import { Calendar, Clock, Phone, MapPin, Instagram, MessageSquare, CheckCircle2 } from 'lucide-react';
import { StudioConfig } from '../data/makeoverData';

interface BookingContactSectionProps {
  studioConfig: StudioConfig;
  selectedServicePreload?: string;
  onUpdateConfig: (newConfig: Partial<StudioConfig>) => void;
}

export const BookingContactSection: React.FC<BookingContactSectionProps> = ({
  studioConfig,
  selectedServicePreload,
  onUpdateConfig
}) => {
  const [customerName, setCustomerName] = useState('Rina Arya');
  const [contactNumber, setContactNumber] = useState('9389850766');
  const [selectedService, setSelectedService] = useState(
    selectedServicePreload || 'Bridal makeup'
  );
  const [appointmentDate, setAppointmentDate] = useState('2026-10-28');
  const [appointmentTime, setAppointmentTime] = useState('10:00 PM');
  const [additionalMessage, setAdditionalMessage] = useState('i need bridal makeup for my wedding');

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmedRef, setConfirmedRef] = useState('');

  React.useEffect(() => {
    if (selectedServicePreload) {
      setSelectedService(selectedServicePreload);
    }
  }, [selectedServicePreload]);

  const serviceOptions = [
    'Bridal makeup',
    'Facial and skincare',
    'Engagement makeup',
    'Pre-bridal package',
    'Full body beauty treatment',
    'Hairstyling',
    'Reception makeup',
    'Saree draping',
  ];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '02:00 PM',
    '04:00 PM',
    '06:00 PM',
    '08:00 PM',
    '10:00 PM'
  ];

  const generateWhatsAppUrl = () => {
    const rawNumber = studioConfig.whatsappNumber.replace(/[^0-9]/g, '');
    const text = `*New Appointment Inquiry - ${studioConfig.salonName}*%0A%0A` +
      `*Client Name:* ${encodeURIComponent(customerName)}%0A` +
      `*Contact Phone:* ${encodeURIComponent(contactNumber)}%0A` +
      `*Service Requested:* ${encodeURIComponent(selectedService)}%0A` +
      `*Preferred Date:* ${encodeURIComponent(appointmentDate)}%0A` +
      `*Preferred Time:* ${encodeURIComponent(appointmentTime)}%0A` +
      `*Notes:* ${encodeURIComponent(additionalMessage || 'None')}%0A%0A` +
      `Please confirm availability for my session.`;

    return `https://wa.me/91${rawNumber}?text=${text}`;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `AK-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedRef(refCode);

    try {
      const existing = JSON.parse(localStorage.getItem('ak_makeover_bookings') || '[]');
      const newBooking = {
        refCode,
        customerName,
        contactNumber,
        selectedService,
        appointmentDate,
        appointmentTime,
        additionalMessage,
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('ak_makeover_bookings', JSON.stringify([newBooking, ...existing]));
    } catch {
      // ignore
    }

    setBookingConfirmed(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFDFD] dark:bg-[#110C0E] relative transition-colors duration-300">
      <div id="booking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221315] dark:text-[#FDF1F3] tracking-tight">
            Book Your Appointment
          </h2>

          <p className="text-sm sm:text-base text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed">
            Reserve your bridal consultation, celebration makeup slot, or skincare therapy with The AK Makeover. Direct booking and instant WhatsApp confirmations available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Booking Form (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#161113] p-7 sm:p-10 rounded-3xl border border-[#ECCECE] dark:border-[#382327] shadow-lg relative">
            
            {bookingConfirmed ? (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#FAF0F2] dark:bg-[#25171B] text-[#B76E79] mx-auto flex items-center justify-center border border-[#ECCECE] dark:border-[#42292E] shadow-xs">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#8C4650] dark:text-[#E8BAC0] uppercase tracking-wider">
                    Booking Request Registered
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A181B] dark:text-[#FDEEF0]">
                    Thank You, {customerName}!
                  </h3>
                  <p className="text-sm text-[#5F464A] dark:text-[#C5B0B4] max-w-md mx-auto">
                    Your appointment request for <strong>{selectedService}</strong> on <strong>{appointmentDate}</strong> at <strong>{appointmentTime}</strong> has been logged.
                  </p>
                  <p className="text-xs text-[#7A5A5F] dark:text-[#B3999D]">
                    Reference ID: <span className="font-mono font-bold text-[#2A181B] dark:text-[#FCEEF0]">{confirmedRef}</span>
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF0F2] dark:bg-[#201519] border border-[#ECCECE] dark:border-[#382327] text-left max-w-md mx-auto space-y-2 text-xs text-[#523A3E] dark:text-[#D1BFC2]">
                  <div className="flex justify-between">
                    <span className="font-medium text-[#7A5A5F] dark:text-[#B3999D]">Phone:</span>
                    <span className="font-semibold text-[#2A181B] dark:text-[#FCEEF0]">+91 {contactNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[#7A5A5F] dark:text-[#B3999D]">Service:</span>
                    <span className="font-semibold text-[#2A181B] dark:text-[#FCEEF0]">{selectedService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-[#7A5A5F] dark:text-[#B3999D]">Date & Time:</span>
                    <span className="font-semibold text-[#2A181B] dark:text-[#FCEEF0]">{appointmentDate} · {appointmentTime}</span>
                  </div>
                  {additionalMessage && (
                    <div className="pt-1 border-t border-[#ECCECE] dark:border-[#382327]">
                      <span className="font-medium text-[#7A5A5F] dark:text-[#B3999D]">Notes:</span> "{additionalMessage}"
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-xl shadow-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => setBookingConfirmed(false)}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-[#663339] dark:text-[#E8BAC0] bg-[#FAF0F2] dark:bg-[#201519] hover:bg-[#F2DFE2] dark:hover:bg-[#2B1B21] rounded-xl transition-colors cursor-pointer"
                  >
                    Edit / New Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Customer Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3D2528] dark:text-[#E8BAC0] mb-1.5">
                      Customer Name <span className="text-[#B76E79]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rina Arya"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1F171A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B76E79]/50"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3D2528] dark:text-[#E8BAC0] mb-1.5">
                      Contact Number <span className="text-[#B76E79]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="e.g. 9389850766"
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1F171A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B76E79]/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Select Service */}
                <div>
                  <label className="block text-xs font-semibold text-[#3D2528] dark:text-[#E8BAC0] mb-1.5">
                    Select Service <span className="text-[#B76E79]">*</span>
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1F171A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B76E79]/50 cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="dark:bg-[#1F171A]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3D2528] dark:text-[#E8BAC0] mb-1.5">
                      Preferred Appointment Date <span className="text-[#B76E79]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1F171A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B76E79]/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3D2528] dark:text-[#E8BAC0] mb-1.5">
                      Preferred Time <span className="text-[#B76E79]">*</span>
                    </label>
                    <select
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1F171A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B76E79]/50 cursor-pointer"
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="dark:bg-[#1F171A]">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#3D2528] dark:text-[#E8BAC0] mb-1.5">
                    Additional Message / Special Request
                  </label>
                  <textarea
                    rows={3}
                    value={additionalMessage}
                    onChange={(e) => setAdditionalMessage(e.target.value)}
                    placeholder="e.g. i need bridal makeup for my wedding"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#DFC3C7] dark:border-[#3E272C] bg-white dark:bg-[#1F171A] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#B76E79]/50"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 text-sm font-semibold text-white bg-gradient-to-r from-[#B76E79] via-[#C5838B] to-[#9C4D58] hover:from-[#A85F6B] hover:to-[#8E444F] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Appointment</span>
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    title="Book directly via WhatsApp with pre-filled message"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Booking</span>
                  </a>
                </div>

                <div className="pt-2 text-center text-xs text-[#7A5A5F] dark:text-[#B3999D]">
                  <p>✨ No advance charge required for general inquiries. Bridal trials scheduled on mutual confirmation.</p>
                </div>
              </form>
            )}

          </div>

          {/* Contact Details & Studio Info (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#FAF4F5] dark:bg-[#161113] p-7 sm:p-8 rounded-3xl border border-[#ECCECE] dark:border-[#382327] shadow-xs space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#ECCECE] dark:border-[#382327]">
                <img
                  src={studioConfig.logoUrl || '/assets/aistudio/image_ad3cb76a.png'}
                  alt="The AK Makeover Logo"
                  className="w-13 h-13 rounded-full object-cover ring-2 ring-[#D4AF37]/80 shadow-md shrink-0"
                />
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A181B] dark:text-[#FDEEF0] leading-tight">
                    The AK Makeover
                  </h3>
                  <p className="text-xs text-[#8C4650] dark:text-[#E8BAC0] font-medium italic">
                    Your Beauty, Our Passion
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-[#2A181B] dark:text-[#FDEEF0]">
                  Studio Contact Information
                </h4>
                <p className="text-xs text-[#7A5A5F] dark:text-[#C5B0B4] mt-1">
                  Visit our studio for personalized look trials and skin consultations.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#221519] flex items-center justify-center text-[#B76E79] shadow-xs shrink-0 border border-[#ECCECE] dark:border-[#42292E]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7A5A5F] dark:text-[#B3999D] font-semibold uppercase tracking-wider">
                      Direct Call & WhatsApp
                    </p>
                    <a
                      href={`tel:${studioConfig.phone}`}
                      className="text-sm font-bold text-[#2A181B] dark:text-[#FDEEF0] hover:text-[#B76E79] tabular-nums block"
                    >
                      +91 {studioConfig.phone}
                    </a>
                    <span className="text-[11px] text-[#8C4650] dark:text-[#E8BAC0]">
                      Available for voice calls & WhatsApp queries
                    </span>
                  </div>
                </div>

                {/* Studio Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#221519] flex items-center justify-center text-[#B76E79] shadow-xs shrink-0 border border-[#ECCECE] dark:border-[#42292E]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7A5A5F] dark:text-[#B3999D] font-semibold uppercase tracking-wider">
                      Salon Address
                    </p>
                    <p className="text-sm font-bold text-[#2A181B] dark:text-[#FDEEF0]">
                      {studioConfig.address}
                    </p>
                    <p className="text-xs text-[#5F464A] dark:text-[#C5B0B4]">
                      {studioConfig.cityArea}
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${studioConfig.address}, ${studioConfig.cityArea}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8C4650] dark:text-[#E8BAC0] hover:underline mt-1"
                    >
                      <span>📍 Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Instagram Handle */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#221519] flex items-center justify-center text-[#B76E79] shadow-xs shrink-0 border border-[#ECCECE] dark:border-[#42292E]">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7A5A5F] dark:text-[#B3999D] font-semibold uppercase tracking-wider">
                      Instagram Portfolio
                    </p>
                    <a
                      href={`https://instagram.com/${studioConfig.instagramHandle.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#2A181B] dark:text-[#FDEEF0] hover:text-[#B76E79] block"
                    >
                      {studioConfig.instagramHandle}
                    </a>
                    <span className="text-[11px] text-[#8C4650] dark:text-[#E8BAC0]">
                      Daily bridal reels, real brides & client stories
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#221519] flex items-center justify-center text-[#B76E79] shadow-xs shrink-0 border border-[#ECCECE] dark:border-[#42292E]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#7A5A5F] dark:text-[#B3999D] font-semibold uppercase tracking-wider">
                      Business Hours
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-[#2A181B] dark:text-[#FDEEF0]">
                      {studioConfig.businessHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Banner */}
              <div className="pt-4 border-t border-[#ECCECE] dark:border-[#382327]">
                <a
                  href={`https://wa.me/91${studioConfig.whatsappNumber}?text=Hello%20The%20AK%20Makeover,%20I%20would%20like%20to%20book%20a%20bridal%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs hover:shadow transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp: +91 {studioConfig.whatsappNumber}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
