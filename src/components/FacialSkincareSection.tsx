import React from 'react';
import { Sparkles, Clock, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { FACIAL_TREATMENTS } from '../data/makeoverData';
import { LuxuryImage } from './LuxuryImage';

interface FacialSkincareSectionProps {
  onSelectTreatment: (treatmentTitle: string) => void;
}

export const FacialSkincareSection: React.FC<FacialSkincareSectionProps> = ({
  onSelectTreatment
}) => {
  return (
    <section id="facial" className="py-20 md:py-28 bg-[#FAF7F5] dark:bg-[#0D090B] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221315] dark:text-[#FDF1F3] tracking-tight">
            Facial & Skin Care
          </h2>

          <p className="text-sm sm:text-base text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed">
            Professional skincare rituals conducted in our pristine, tranquil studio setting. Gentle botanical and dermatological treatments formulated for luminous, healthy skin.
          </p>
        </div>

        {/* Studio Hygiene & Quality Assurance Strip */}
        <div className="mb-12 p-5 rounded-2xl bg-[#FFF6F7] dark:bg-[#181114] border border-[#ECCECE] dark:border-[#382327] flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#24171B] flex items-center justify-center text-[#B76E79] shadow-xs shrink-0 border border-[#ECCECE] dark:border-[#42292E]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#2A181B] dark:text-[#FDEEF0]">
                Pure Salon Hygiene Guarantee
              </h4>
              <p className="text-xs text-[#6F4E53] dark:text-[#C5B0B4]">
                Steam-sterilized towels, single-use spatulas, and hypoallergenic botanical ingredients.
              </p>
            </div>
          </div>
          <div className="text-xs text-[#8C4650] dark:text-[#E8BAC0] font-semibold bg-white/80 dark:bg-[#25181D] px-3.5 py-1.5 rounded-lg border border-[#ECCECE] dark:border-[#42292E]">
            Complimentary Skin Consultation Included
          </div>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACIAL_TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white dark:bg-[#161113] rounded-3xl overflow-hidden border border-[#ECCECE] dark:border-[#382327] hover:border-[#B76E79] dark:hover:border-[#C5838B] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Photo of beauty treatment in clean salon setting */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF2F3] dark:bg-[#1E171A]">
                <LuxuryImage
                  src={treatment.image}
                  alt={treatment.title}
                  fallbackText={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                
                <div className="absolute top-3 left-3 bg-white/95 dark:bg-[#1A1215]/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#8C4650] dark:text-[#E8BAC0] border border-white/60 dark:border-[#42292E]">
                  {treatment.type}
                </div>

                {treatment.id === 'deep-cleansing-facial' && (
                  <div className="absolute top-3 right-3 bg-[#B76E79] text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Studio Process</span>
                  </div>
                )}

                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium text-white flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#F8D4D8]" />
                  <span>{treatment.duration}</span>
                </div>
              </div>

              {/* Treatment Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#2A181B] dark:text-[#FDEEF0] group-hover:text-[#B76E79] dark:group-hover:text-[#E8BAC0] transition-colors">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed">
                    {treatment.description}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2 pt-2 border-t border-[#F2DEE1] dark:border-[#2C191D]">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[#8C4650] dark:text-[#E8BAC0]">
                    Treatment Benefits:
                  </p>
                  <div className="space-y-1.5">
                    {treatment.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#523A3E] dark:text-[#D1BFC2]">
                        <Check className="w-3.5 h-3.5 text-[#B76E79] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-3">
                  <button
                    onClick={() => onSelectTreatment(treatment.title)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-[#663339] dark:text-[#E8BAC0] bg-[#FAF0F2] dark:bg-[#201519] hover:bg-[#F3DFE2] dark:hover:bg-[#2B1B21] border border-[#E4BFC4] dark:border-[#42292E] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Book Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B76E79]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
