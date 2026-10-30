import React, { useState } from 'react';
import { Calendar, Clock, Edit3, Check } from 'lucide-react';
import { INITIAL_SERVICES, ServiceItem } from '../data/makeoverData';
import { LuxuryImage } from './LuxuryImage';

interface ServicesSectionProps {
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onBookService
}) => {
  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem('ak_makeover_services');
      if (saved) {
        const parsed: ServiceItem[] = JSON.parse(saved);
        return INITIAL_SERVICES.map((init) => {
          const matched = parsed.find((p) => p.id === init.id);
          return matched ? { ...init, defaultPrice: matched.defaultPrice } : init;
        });
      }
      return INITIAL_SERVICES;
    } catch {
      return INITIAL_SERVICES;
    }
  });

  const [editingPriceId, setEditingPriceId] = useState<string | null>(null);
  const [tempPrice, setTempPrice] = useState<string>('');

  const handleSavePrice = (id: string) => {
    const updated = services.map((s) =>
      s.id === id ? { ...s, defaultPrice: tempPrice.trim() || undefined } : s
    );
    setServices(updated);
    localStorage.setItem('ak_makeover_services', JSON.stringify(updated));
    setEditingPriceId(null);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFFDFD] dark:bg-[#110C0E] relative border-b border-[#EED7DA]/40 dark:border-[#332024] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221315] dark:text-[#FDF1F3] tracking-tight">
            Our Services
          </h2>

          <p className="text-sm sm:text-base text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed">
            Crafted for the modern bride and celebration guest. Choose from our 8 bespoke service specialties, all performed with utmost hygiene and luxury aesthetics.
          </p>
        </div>

        {/* 8 Distinct Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-[#161113] rounded-3xl overflow-hidden border border-[#ECCECE] dark:border-[#382327] hover:border-[#B76E79] dark:hover:border-[#C5838B] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF2F3] dark:bg-[#1E171A]">
                  <LuxuryImage
                    src={service.image}
                    alt={service.title}
                    fallbackText={service.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] font-medium text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#F8D4D8]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-serif text-lg font-bold text-[#2A181B] dark:text-[#FDEEF0] group-hover:text-[#B76E79] dark:group-hover:text-[#E8BAC0] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-[#F5E6E8] dark:border-[#2C191D] space-y-1">
                    {service.highlights.slice(0, 2).map((h, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#63484C] dark:text-[#D1BFC2]">
                        <Check className="w-3 h-3 text-[#B76E79] shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing / Custom Price Management for the Owner */}
                  <div className="pt-2 border-t border-[#F5E6E8] dark:border-[#2C191D]">
                    {editingPriceId === service.id ? (
                      <div className="flex items-center gap-1.5">
                        <input
                          type="text"
                          value={tempPrice}
                          onChange={(e) => setTempPrice(e.target.value)}
                          placeholder="e.g. ₹5,000 or Price on Call"
                          className="w-full text-xs px-2.5 py-1.5 rounded-lg border border-[#C5838B] dark:bg-[#1E1518] dark:border-[#42292E] dark:text-white focus:outline-none focus:ring-1 focus:ring-[#B76E79]"
                        />
                        <button
                          onClick={() => handleSavePrice(service.id)}
                          className="px-2.5 py-1.5 bg-[#B76E79] text-white rounded-lg text-xs font-semibold"
                          title="Save Price"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#7A5A5F] dark:text-[#A99396] font-medium">Price:</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-[#2A181B] dark:text-[#FDEEF0]">
                            {service.defaultPrice || 'Price on Consultation'}
                          </span>
                          <button
                            onClick={() => {
                              setEditingPriceId(service.id);
                              setTempPrice(service.defaultPrice || '');
                            }}
                            className="p-1 text-[#A16D75] hover:text-[#2A181B] dark:hover:text-white transition-colors rounded hover:bg-[#FAF0F2] dark:hover:bg-[#25171C]"
                            title="Edit or Add Studio Price"
                          >
                            <Edit3 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onBookService(service.title)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#B76E79] to-[#9C4D58] hover:from-[#A85F6B] hover:to-[#8E444F] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Prices */}
        <div className="mt-8 text-center text-xs text-[#7A5A5F] dark:text-[#A99396]">
          <span>✨ Studio Notice: Packages and bridal trials can be personalized based on outfit draping, jewellery weight, and destination location. Click the pencil icon on any card to update studio prices anytime.</span>
        </div>

      </div>
    </section>
  );
};
