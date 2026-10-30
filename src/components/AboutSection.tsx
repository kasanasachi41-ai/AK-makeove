import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  artistPhoto: string;
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  artistPhoto,
  onBookClick
}) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFDFD] dark:bg-[#110C0E] border-y border-[#EED7DA]/40 dark:border-[#332024] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Real Photo in an Elegant Luxury Frame beside the introduction */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Ornate layered rose gold accent border */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-[#D4A373]/30 via-[#C5838B]/20 to-[#E8BAC0]/30 dark:from-[#D4A373]/20 dark:via-[#C5838B]/10 dark:to-[#E8BAC0]/15 transform -rotate-1 blur-xs" />
              
              {/* Outer Framed Box */}
              <div className="relative rounded-[28px] p-3 sm:p-4 bg-gradient-to-b from-[#F5E2E4] via-white to-[#F2D7DB] dark:from-[#311E23] dark:via-[#1A1215] dark:to-[#311E23] border border-[#DFC3C7] dark:border-[#452B31] shadow-xl">
                
                {/* Photo Container maintaining exact real portrait without altering facial features */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#221315]">
                  <img
                    src={artistPhoto}
                    alt="Founder & Master Makeup Artist of The AK Makeover"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Subtle luxury vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>

            </div>
          </div>

          {/* Text Introduction Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221315] dark:text-[#FDF1F3] tracking-tight">
                Meet Your Makeup Artist
              </h2>
            </div>

            {/* Prescribed Exact Intro Description */}
            <blockquote className="text-base sm:text-lg text-[#4E3539] dark:text-[#E5B5BC] leading-relaxed border-l-2 border-[#C5838B] pl-4 italic">
              “Welcome to The AK Makeover, where beauty meets elegance. We aim to help every client feel confident and beautiful with makeup and beauty services tailored to their special occasions.”
            </blockquote>

            <p className="text-sm sm:text-base text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed">
              At The AK Makeover, every bride and client receives personalized attention. We believe makeup is not about masking who you are, but accentuating your best facial features and elevating your natural radiance. Whether it is an opulent traditional North Indian wedding, an intimate pastel engagement ceremony, or a rejuvenating pre-bridal facial therapy, each look is crafted with precision, sterile tools, and the highest grade international cosmetics.
            </p>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B76E79] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#4E3539] dark:text-[#D1BFC2]">
                  <strong>100% Authentic Vanity:</strong> MAC, Huda Beauty, NARS, Charlotte Tilbury
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B76E79] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#4E3539] dark:text-[#D1BFC2]">
                  <strong>Flawless HD & Airbrush:</strong> Sweat-resistant, camera-ready finish
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B76E79] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#4E3539] dark:text-[#D1BFC2]">
                  <strong>Medical-Grade Hygiene:</strong> Sanitized brushes and disposable applicators
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B76E79] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#4E3539] dark:text-[#D1BFC2]">
                  <strong>Studio & On-Venue:</strong> Destination and bridal suite travel available
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#B76E79] hover:bg-[#A55F6A] rounded-xl shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#7A5A5F] dark:text-[#B3999D] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#B76E79]" />
                <span>Custom skin prep included with every bridal package</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
