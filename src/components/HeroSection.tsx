import React from 'react';
import { Calendar, Star, Award, ArrowRight } from 'lucide-react';
import { LuxuryImage } from './LuxuryImage';

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreClick: () => void;
  artistPhoto: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookClick,
  onExploreClick,
  artistPhoto
}) => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF4F2] via-[#FAF7F5] to-[#FAF7F5] dark:from-[#140D10] dark:via-[#0E0A0C] dark:to-[#0E0A0C] transition-colors duration-300">
      {/* Subtle luxury ambient glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F7D8DC]/40 dark:from-[#4A1E27]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-column split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column (Editorial Typography & Introduction) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Studio Brand Crest */}
            <div className="flex items-center gap-3.5">
              <img
                src="/assets/aistudio/image_ad3cb76a.png"
                alt="The AK Makeover Official Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-[#D4AF37]/80 shadow-md shrink-0"
              />
              <div>
                <p className="font-serif text-base sm:text-lg font-bold text-[#221315] dark:text-[#FDF1F3] leading-tight">
                  The AK Makeover
                </p>
                <p className="text-[11px] sm:text-xs text-[#8C4650] dark:text-[#E8BAC0] font-medium italic">
                  Luxury Bridal Studio & Skin Care
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#221315] dark:text-[#FDF1F3] leading-[1.12] [text-wrap:balance]">
              The AK Makeover — <br className="hidden sm:inline" />
              <span className="text-rose-gold-gradient italic font-normal">
                Your Beauty, Our Passion
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#553E42] dark:text-[#C5B0B4] max-w-xl leading-relaxed [text-wrap:balance]">
              Premium Bridal, Party Glamour & Clinical Skincare Rituals.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#B76E79] via-[#C5838B] to-[#9C4D58] hover:from-[#A85F6B] hover:to-[#8E444F] rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Appointment</span>
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#482A2E] dark:text-[#E8BAC0] bg-white dark:bg-[#1A1215] hover:bg-[#F9ECEE] dark:hover:bg-[#25181D] border border-[#DFC3C7] dark:border-[#3D252A] rounded-xl transition-all hover:border-[#B76E79] cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#B76E79]" />
              </button>
            </div>

            {/* Homepage Artist Spotlight Card beside the introduction */}
            <div className="pt-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#161013]/95 border border-[#ECCECE] dark:border-[#382327] shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-4">
                {/* Real Owner Photo */}
                <div className="relative shrink-0">
                  <div className="w-20 h-24 sm:w-22 sm:h-26 rounded-xl overflow-hidden p-1 bg-gradient-to-tr from-[#C5838B] via-[#E2B7A0] to-[#B76E79] shadow-sm">
                    <img
                      src={artistPhoto}
                      alt="The AK Makeover Founder & Lead Artist"
                      className="w-full h-full object-cover object-top rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-1 bg-white dark:bg-[#1F1619] text-[#B76E79] p-1 rounded-full border border-[#ECCECE] dark:border-[#42292E] shadow-xs">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Artist Intro Details */}
                <div className="flex-1 text-center sm:text-left space-y-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="font-serif text-base sm:text-lg font-bold text-[#2A181B] dark:text-[#FCEEF0]">
                      Meet Your Makeup Artist
                    </span>
                    <span className="text-[11px] font-semibold text-[#8C4650] dark:text-[#E8BAC0] bg-[#FDF0F2] dark:bg-[#26171B] px-2 py-0.5 rounded-full border border-[#F3CDD2] dark:border-[#4A2D34]">
                      Studio Founder
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed line-clamp-2">
                    Welcome to The AK Makeover, where beauty meets elegance. Crafting personalized royal bridal transformations and flawless skincare therapies.
                  </p>
                  <div className="pt-1">
                    <a
                      href="#about"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#B76E79] hover:text-[#E8BAC0] transition-colors"
                    >
                      Read Artist Story & Bio <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Large High-Quality Indian Bridal Makeup Photograph */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[440px] sm:min-h-[520px] rounded-3xl overflow-hidden p-2.5 bg-gradient-to-b from-[#ECCECE] via-[#FAF3F4] to-[#ECCECE] dark:from-[#362125] dark:via-[#1A1215] dark:to-[#362125] shadow-xl border border-[#DFC3C7] dark:border-[#40292E]">
              
              {/* Inner Bridal Showcase Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <LuxuryImage
                  src="/assets/bridal_glamour_clean.jpg"
                  alt="Bridal Glamour in the Making - Indian bride with royal kundan jewellery and makeup artist applying finishing touches"
                  fallbackText="The AK Makeover Signature Bridal Glamour in the Making"
                  className="w-full h-full object-cover min-h-[430px] sm:min-h-[500px]"
                />

                {/* Subtle scrim for typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-[#171114]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 dark:border-[#42292E] shadow-sm flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#D4A373] fill-[#D4A373]" />
                  <span className="text-xs font-semibold text-[#2C181A] dark:text-[#FCEEF0]">
                    Bridal Glamour in the Making
                  </span>
                </div>

                {/* Bottom Card Annotation */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#F8D4D8] font-medium mb-1">
                    The AK Makeover Bridal Studio
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-white">
                    Royal Kundan, Winged Eyes & Radiant Glow
                  </h3>
                  <p className="text-xs text-white/80 mt-1 line-clamp-1">
                    Professional bridal finishing touches in our studio
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
