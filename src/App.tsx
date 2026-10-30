/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, ActiveSection } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { BridalGallerySection } from './components/BridalGallerySection';
import { PartyMakeupSection } from './components/PartyMakeupSection';
import { FacialSkincareSection } from './components/FacialSkincareSection';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingContactSection } from './components/BookingContactSection';
import { Footer } from './components/Footer';
import { StudioSettingsModal } from './components/StudioSettingsModal';
import { DownloadModal } from './components/DownloadModal';
import { DEFAULT_STUDIO_CONFIG, StudioConfig } from './data/makeoverData';
import { Phone, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState<boolean>(false);
  // Dark mode enabled by default as requested ("add the dark theme the fastly")
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('ak_makeover_dark_mode');
      return saved !== null ? saved === 'true' : true;
    } catch {
      return true;
    }
  });

  // Individual part navigation: 'all' or separated parts
  const [activeSection, setActiveSection] = useState<ActiveSection>('all');

  const [studioConfig, setStudioConfig] = useState<StudioConfig>(() => {
    try {
      const saved = localStorage.getItem('ak_makeover_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.instagramHandle === '@ak_makeover_official' || !parsed.instagramHandle) {
          parsed.instagramHandle = '@amita_rani2024';
        }
        if (
          parsed.address?.includes('Main Market Plaza') ||
          parsed.address?.includes('House No. 34') ||
          !parsed.address?.includes('House Number 34') ||
          parsed.cityArea?.includes('Near City Centre')
        ) {
          parsed.address = 'Maliwada Chowk, House Number 34, Lakshmi Viha Colony';
          parsed.cityArea = 'Ghaziabad, Uttar Pradesh, India';
        }
        parsed.logoUrl = '/assets/aistudio/image_ad3cb76a.png';
        parsed.signboardBannerUrl = '/assets/aistudio/image_26c8ead1.png';
        localStorage.setItem('ak_makeover_config', JSON.stringify(parsed));
        return parsed;
      }
      return DEFAULT_STUDIO_CONFIG;
    } catch {
      return DEFAULT_STUDIO_CONFIG;
    }
  });

  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('Bridal makeup');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Sync dark class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('ak_makeover_dark_mode', String(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Real uploaded studio founder photograph
  const artistPhoto = '/assets/aistudio/image_3806b0e3.png';

  const scrollToBooking = (service?: string) => {
    if (service) {
      setSelectedServiceForBooking(service);
    }
    if (activeSection !== 'all' && activeSection !== 'contact') {
      setActiveSection('contact');
    }
    setTimeout(() => {
      const el = document.getElementById('booking') || document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToServices = () => {
    if (activeSection !== 'all' && activeSection !== 'services') {
      setActiveSection('services');
    }
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleUpdateConfig = (newConfig: Partial<StudioConfig>) => {
    const merged = { ...studioConfig, ...newConfig };
    setStudioConfig(merged);
    localStorage.setItem('ak_makeover_config', JSON.stringify(merged));
  };

  const handleSelectSection = (section: ActiveSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F5] dark:bg-[#0C080A] text-[#1E1919] dark:text-[#FDF1F3] flex flex-col font-sans transition-colors duration-300 selection:bg-[#F2D0D5] selection:text-[#3B191E]">
      
      {/* Top Bar Navigation with Dark Theme & Section Tabs */}
      <Navbar
        onOpenBooking={() => scrollToBooking()}
        whatsappNumber={studioConfig.whatsappNumber}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        logoUrl={studioConfig.logoUrl}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      <main className={`flex-1 ${activeSection !== 'all' ? 'pt-20 md:pt-24' : ''}`}>
        
        {/* VIEW MODE: ALL SECTIONS (CONTINUOUS FULL STUDIO) */}
        {activeSection === 'all' && (
          <>
            {/* Front Page Hero Section */}
            <HeroSection
              onBookClick={() => scrollToBooking('Bridal makeup')}
              onExploreClick={scrollToServices}
              artistPhoto={artistPhoto}
            />

            {/* Meet Your Makeup Artist Section */}
            <AboutSection
              artistPhoto={artistPhoto}
              onBookClick={() => scrollToBooking('Bridal makeup')}
            />

            {/* Bridal Makeup Gallery */}
            <BridalGallerySection
              onSelectLookForBooking={(lookTitle) => scrollToBooking(`Bridal Look: ${lookTitle}`)}
            />

            {/* Party Makeup Section */}
            <PartyMakeupSection
              onSelectService={(serviceTitle) => scrollToBooking(serviceTitle)}
            />

            {/* Facial & Skin Care Section */}
            <FacialSkincareSection
              onSelectTreatment={(treatmentTitle) => scrollToBooking(`Skincare: ${treatmentTitle}`)}
            />

            {/* Our Services Menu */}
            <ServicesSection
              onBookService={(serviceTitle) => scrollToBooking(serviceTitle)}
            />

            {/* Customer Reviews */}
            <ReviewsSection />

            {/* Booking & Contact */}
            <BookingContactSection
              studioConfig={studioConfig}
              selectedServicePreload={selectedServiceForBooking}
              onUpdateConfig={handleUpdateConfig}
            />
          </>
        )}

        {/* VIEW MODE: INDIVIDUAL PART - ABOUT THE ARTIST */}
        {activeSection === 'about' && (
          <div>
            <div className="py-8 bg-[#FAF4F5] dark:bg-[#140E10] border-b border-[#ECCECE] dark:border-[#2C1A1E]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#8C4650] dark:text-[#E8BAC0] uppercase tracking-wider">
                    The AK Makeover · Dedicated Profile
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A181B] dark:text-[#FDEEF0] mt-1">
                    About The Makeup Artist & Studio
                  </h1>
                </div>
                <button
                  onClick={() => handleSelectSection('all')}
                  className="px-4 py-2 text-xs font-semibold text-[#663339] dark:text-[#E8BAC0] bg-white dark:bg-[#1E1518] border border-[#E4BFC4] dark:border-[#40292E] rounded-xl hover:bg-[#FAF0F2] transition-colors"
                >
                  ← View All Studio Sections
                </button>
              </div>
            </div>

            <AboutSection
              artistPhoto={artistPhoto}
              onBookClick={() => scrollToBooking('Bridal makeup')}
            />

            {/* Next Part Teaser */}
            <div className="p-8 max-w-7xl mx-auto flex items-center justify-between border-t border-[#ECCECE]/60 dark:border-[#2C1A1E]">
              <button
                onClick={() => handleSelectSection('all')}
                className="text-xs font-semibold text-[#7A5A5F] dark:text-[#A99396] hover:text-[#B76E79]"
              >
                ‹ Full Overview
              </button>
              <button
                onClick={() => handleSelectSection('bridal')}
                className="text-xs font-semibold text-[#B76E79] hover:text-[#8C4650] flex items-center gap-1.5"
              >
                <span>Explore Bridal Makeup Part</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE: INDIVIDUAL PART - BRIDAL MAKEUP */}
        {activeSection === 'bridal' && (
          <div>
            <div className="py-8 bg-[#FAF4F5] dark:bg-[#140E10] border-b border-[#ECCECE] dark:border-[#2C1A1E]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#8C4650] dark:text-[#E8BAC0] uppercase tracking-wider">
                    The AK Makeover · Bridal Studio
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A181B] dark:text-[#FDEEF0] mt-1">
                    Bridal Makeup Speciality & Portfolio
                  </h1>
                </div>
                <button
                  onClick={() => handleSelectSection('all')}
                  className="px-4 py-2 text-xs font-semibold text-[#663339] dark:text-[#E8BAC0] bg-white dark:bg-[#1E1518] border border-[#E4BFC4] dark:border-[#40292E] rounded-xl hover:bg-[#FAF0F2] transition-colors"
                >
                  ← View All Studio Sections
                </button>
              </div>
            </div>

            <BridalGallerySection
              onSelectLookForBooking={(lookTitle) => scrollToBooking(`Bridal Look: ${lookTitle}`)}
            />

            {/* Next Part Teaser */}
            <div className="p-8 max-w-7xl mx-auto flex items-center justify-between border-t border-[#ECCECE]/60 dark:border-[#2C1A1E]">
              <button
                onClick={() => handleSelectSection('about')}
                className="text-xs font-semibold text-[#7A5A5F] dark:text-[#A99396] hover:text-[#B76E79] flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> About The Artist
              </button>
              <button
                onClick={() => handleSelectSection('party')}
                className="text-xs font-semibold text-[#B76E79] hover:text-[#8C4650] flex items-center gap-1.5"
              >
                <span>Explore Party Makeup Part</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE: INDIVIDUAL PART - PARTY MAKEUP */}
        {activeSection === 'party' && (
          <div>
            <div className="py-8 bg-[#FAF4F5] dark:bg-[#140E10] border-b border-[#ECCECE] dark:border-[#2C1A1E]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#8C4650] dark:text-[#E8BAC0] uppercase tracking-wider">
                    The AK Makeover · Party & Glamour
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A181B] dark:text-[#FDEEF0] mt-1">
                    Party & Celebration Styling
                  </h1>
                </div>
                <button
                  onClick={() => handleSelectSection('all')}
                  className="px-4 py-2 text-xs font-semibold text-[#663339] dark:text-[#E8BAC0] bg-white dark:bg-[#1E1518] border border-[#E4BFC4] dark:border-[#40292E] rounded-xl hover:bg-[#FAF0F2] transition-colors"
                >
                  ← View All Studio Sections
                </button>
              </div>
            </div>

            <PartyMakeupSection
              onSelectService={(serviceTitle) => scrollToBooking(serviceTitle)}
            />

            {/* Next Part Teaser */}
            <div className="p-8 max-w-7xl mx-auto flex items-center justify-between border-t border-[#ECCECE]/60 dark:border-[#2C1A1E]">
              <button
                onClick={() => handleSelectSection('bridal')}
                className="text-xs font-semibold text-[#7A5A5F] dark:text-[#A99396] hover:text-[#B76E79] flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Bridal Makeup
              </button>
              <button
                onClick={() => handleSelectSection('facial')}
                className="text-xs font-semibold text-[#B76E79] hover:text-[#8C4650] flex items-center gap-1.5"
              >
                <span>Explore Facial & Skin Part</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE: INDIVIDUAL PART - FACIAL AND SKIN SERVICE */}
        {activeSection === 'facial' && (
          <div>
            <div className="py-8 bg-[#FAF4F5] dark:bg-[#140E10] border-b border-[#ECCECE] dark:border-[#2C1A1E]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#8C4650] dark:text-[#E8BAC0] uppercase tracking-wider">
                    The AK Makeover · Clinical & Herbal Skincare
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A181B] dark:text-[#FDEEF0] mt-1">
                    Facial & Skin Care Treatments
                  </h1>
                </div>
                <button
                  onClick={() => handleSelectSection('all')}
                  className="px-4 py-2 text-xs font-semibold text-[#663339] dark:text-[#E8BAC0] bg-white dark:bg-[#1E1518] border border-[#E4BFC4] dark:border-[#40292E] rounded-xl hover:bg-[#FAF0F2] transition-colors"
                >
                  ← View All Studio Sections
                </button>
              </div>
            </div>

            <FacialSkincareSection
              onSelectTreatment={(treatmentTitle) => scrollToBooking(`Skincare: ${treatmentTitle}`)}
            />

            {/* Next Part Teaser */}
            <div className="p-8 max-w-7xl mx-auto flex items-center justify-between border-t border-[#ECCECE]/60 dark:border-[#2C1A1E]">
              <button
                onClick={() => handleSelectSection('party')}
                className="text-xs font-semibold text-[#7A5A5F] dark:text-[#A99396] hover:text-[#B76E79] flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Party Makeup
              </button>
              <button
                onClick={() => handleSelectSection('services')}
                className="text-xs font-semibold text-[#B76E79] hover:text-[#8C4650] flex items-center gap-1.5"
              >
                <span>View Our Services Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE: INDIVIDUAL PART - SERVICES */}
        {activeSection === 'services' && (
          <div>
            <div className="py-8 bg-[#FAF4F5] dark:bg-[#140E10] border-b border-[#ECCECE] dark:border-[#2C1A1E]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#8C4650] dark:text-[#E8BAC0] uppercase tracking-wider">
                    The AK Makeover · Complete Offerings
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A181B] dark:text-[#FDEEF0] mt-1">
                    Our Services Menu & Pricing
                  </h1>
                </div>
                <button
                  onClick={() => handleSelectSection('all')}
                  className="px-4 py-2 text-xs font-semibold text-[#663339] dark:text-[#E8BAC0] bg-white dark:bg-[#1E1518] border border-[#E4BFC4] dark:border-[#40292E] rounded-xl hover:bg-[#FAF0F2] transition-colors"
                >
                  ← View All Studio Sections
                </button>
              </div>
            </div>

            <ServicesSection
              onBookService={(serviceTitle) => scrollToBooking(serviceTitle)}
            />

            {/* Next Part Teaser */}
            <div className="p-8 max-w-7xl mx-auto flex items-center justify-between border-t border-[#ECCECE]/60 dark:border-[#2C1A1E]">
              <button
                onClick={() => handleSelectSection('facial')}
                className="text-xs font-semibold text-[#7A5A5F] dark:text-[#A99396] hover:text-[#B76E79] flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Facial & Skin
              </button>
              <button
                onClick={() => handleSelectSection('gallery')}
                className="text-xs font-semibold text-[#B76E79] hover:text-[#8C4650] flex items-center gap-1.5"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE: INDIVIDUAL PART - GALLERY */}
        {activeSection === 'gallery' && (
          <div>
            <div className="py-8 bg-[#FAF4F5] dark:bg-[#140E10] border-b border-[#ECCECE] dark:border-[#2C1A1E]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#8C4650] dark:text-[#E8BAC0] uppercase tracking-wider">
                    The AK Makeover · Master Visuals
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A181B] dark:text-[#FDEEF0] mt-1">
                    Visual Portfolio & Look Book
                  </h1>
                </div>
                <button
                  onClick={() => handleSelectSection('all')}
                  className="px-4 py-2 text-xs font-semibold text-[#663339] dark:text-[#E8BAC0] bg-white dark:bg-[#1E1518] border border-[#E4BFC4] dark:border-[#40292E] rounded-xl hover:bg-[#FAF0F2] transition-colors"
                >
                  ← View All Studio Sections
                </button>
              </div>
            </div>

            <BridalGallerySection
              onSelectLookForBooking={(lookTitle) => scrollToBooking(`Look: ${lookTitle}`)}
            />

            <PartyMakeupSection
              onSelectService={(serviceTitle) => scrollToBooking(serviceTitle)}
            />

            {/* Next Part Teaser */}
            <div className="p-8 max-w-7xl mx-auto flex items-center justify-between border-t border-[#ECCECE]/60 dark:border-[#2C1A1E]">
              <button
                onClick={() => handleSelectSection('services')}
                className="text-xs font-semibold text-[#7A5A5F] dark:text-[#A99396] hover:text-[#B76E79] flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Services
              </button>
              <button
                onClick={() => handleSelectSection('contact')}
                className="text-xs font-semibold text-[#B76E79] hover:text-[#8C4650] flex items-center gap-1.5"
              >
                <span>Proceed to Book & Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW MODE: INDIVIDUAL PART - CONTACT US & BOOKING */}
        {activeSection === 'contact' && (
          <div>
            <div className="py-8 bg-[#FAF4F5] dark:bg-[#140E10] border-b border-[#ECCECE] dark:border-[#2C1A1E]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#8C4650] dark:text-[#E8BAC0] uppercase tracking-wider">
                    The AK Makeover · Inquiries & Studio Visits
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A181B] dark:text-[#FDEEF0] mt-1">
                    Contact Us & Reserve Appointment
                  </h1>
                </div>
                <button
                  onClick={() => handleSelectSection('all')}
                  className="px-4 py-2 text-xs font-semibold text-[#663339] dark:text-[#E8BAC0] bg-white dark:bg-[#1E1518] border border-[#E4BFC4] dark:border-[#40292E] rounded-xl hover:bg-[#FAF0F2] transition-colors"
                >
                  ← View All Studio Sections
                </button>
              </div>
            </div>

            <BookingContactSection
              studioConfig={studioConfig}
              selectedServicePreload={selectedServiceForBooking}
              onUpdateConfig={handleUpdateConfig}
            />

            <ReviewsSection />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        config={studioConfig}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onBookClick={() => scrollToBooking()}
        onOpenDownload={() => setIsDownloadOpen(true)}
      />

      {/* Local Server Download Modal */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />

      {/* Studio Settings & Booking Manager Modal */}
      <StudioSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={studioConfig}
        onSaveConfig={(updated) => {
          setStudioConfig(updated);
          localStorage.setItem('ak_makeover_config', JSON.stringify(updated));
        }}
      />

      {/* Floating Mobile Quick Action Pill */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden flex items-center gap-2">
        <a
          href={`https://wa.me/91${studioConfig.whatsappNumber}?text=Hello%20The%20AK%20Makeover,%20I%20would%20like%20to%20book%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center border-2 border-white dark:border-black"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
        <button
          onClick={() => scrollToBooking()}
          className="px-4 py-3 rounded-full bg-[#B76E79] text-white text-xs font-bold shadow-lg flex items-center gap-1.5 border-2 border-white dark:border-black"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>

    </div>
  );
}
