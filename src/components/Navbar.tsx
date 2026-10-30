import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, PhoneCall, Download } from 'lucide-react';

export type ActiveSection = 'all' | 'about' | 'bridal' | 'party' | 'facial' | 'services' | 'gallery' | 'contact';

interface NavbarProps {
  onOpenBooking: () => void;
  whatsappNumber: string;
  activeSection: ActiveSection;
  onSelectSection: (section: ActiveSection) => void;
  isDarkMode: boolean;
  onToggleDarkMode?: () => void;
  logoUrl?: string;
  onOpenDownload?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  whatsappNumber,
  activeSection,
  onSelectSection,
  isDarkMode,
  onToggleDarkMode,
  logoUrl = '/assets/aistudio/image_ad3cb76a.png',
  onOpenDownload
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: ActiveSection }[] = [
    { label: 'All Overview', id: 'all' },
    { label: 'About Us', id: 'about' },
    { label: 'Bridal Makeup', id: 'bridal' },
    { label: 'Party Makeup', id: 'party' },
    { label: 'Facial & Skin', id: 'facial' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact Us', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkMode
          ? isScrolled
            ? 'bg-[#0E0A0C]/95 backdrop-blur-md shadow-md border-b border-[#362226] py-3'
            : 'bg-[#0E0A0C]/85 backdrop-blur-xs border-b border-[#2C1A1E] py-4'
          : isScrolled
            ? 'bg-[#FAF7F5]/95 backdrop-blur-md shadow-sm border-b border-[#EAC4C8]/50 py-3'
            : 'bg-[#FAF7F5]/85 backdrop-blur-xs border-b border-[#EAC4C8]/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar: 3 Zones strictly compliant */}
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          
          {/* Zone 1: Single Wordmark */}
          <button
            onClick={() => {
              onSelectSection('all');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            <div className="relative shrink-0">
              <img
                src={logoUrl}
                alt="The AK Makeover Logo"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-[#D4AF37]/80 shadow-md group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <span
              className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors whitespace-nowrap ${
                isDarkMode
                  ? 'text-white group-hover:text-[#E8BAC0]'
                  : 'text-[#2B171A] group-hover:text-[#B76E79]'
              }`}
            >
              The AK Makeover
            </span>
          </button>

          {/* Zone 2: Navigation Links for Individual Parts */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectSection(item.id)}
                  className={`whitespace-nowrap shrink-0 py-1 px-2.5 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? isDarkMode
                        ? 'bg-[#2E1D22] text-[#E8BAC0] font-bold shadow-xs border border-[#4A2D34]'
                        : 'bg-[#FCEBED] text-[#B76E79] font-bold shadow-xs border border-[#F2D0D5]'
                      : isDarkMode
                        ? 'text-[#C9B3B7] hover:text-white hover:bg-[#1D1417]'
                        : 'text-[#4A383B] hover:text-[#B76E79] hover:bg-[#F8EDEF]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: WhatsApp + Primary Action */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* WhatsApp Quick Chat */}
            <a
              href={`https://wa.me/91${whatsappNumber}?text=Hello%20The%20AK%20Makeover,%20I%20would%20like%20to%20inquire%20about%20bridal%20or%20party%20makeup.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition-colors whitespace-nowrap shrink-0 ${
                isDarkMode
                  ? 'bg-[#1A1215] text-[#E8BAC0] border-[#3D262B] hover:bg-[#25171C]'
                  : 'bg-[#F7EBEB] text-[#663339] border-[#E4BFC4] hover:bg-[#F2DFE1]'
              }`}
              title="Chat on WhatsApp"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B76E79]" />
              <span className="tabular-nums">+91 {whatsappNumber}</span>
            </a>

            {/* Download Project ZIP Button */}
            {onOpenDownload && (
              <button
                onClick={onOpenDownload}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-[#D4AF37]/50 bg-[#FFFDF9] dark:bg-[#1E1712] text-[#8A581D] dark:text-[#F3D7A4] hover:bg-[#FDF3E3] dark:hover:bg-[#2A1F18] transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
                title="Download complete project source (.ZIP) for local server"
              >
                <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Download ZIP</span>
              </button>
            )}

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenBooking}
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#B76E79] via-[#C5838B] to-[#9C4D58] hover:from-[#A85F6B] hover:to-[#8E444F] rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-98"
            >
              Book Appointment
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2 rounded-xl transition-colors ${
                isDarkMode
                  ? 'text-white hover:bg-[#20161A]'
                  : 'text-[#3D2528] hover:bg-[#F0E4E6]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className={`xl:hidden border-b px-4 pt-3 pb-5 space-y-2.5 shadow-xl ${
            isDarkMode
              ? 'bg-[#120D0F] border-[#362226] text-white'
              : 'bg-[#FAF7F5] border-[#EAC4C8]/60 text-[#1E1919]'
          }`}
        >
          <div className="flex items-center justify-between pb-2 border-b border-inherit/40 text-xs text-[#A99396]">
            <div className="flex items-center gap-2">
              <img
                src={logoUrl}
                alt="The AK Makeover Logo"
                className="w-6 h-6 rounded-full object-cover ring-1 ring-[#D4AF37]/70"
              />
              <span className="text-xs font-semibold text-[#B76E79] dark:text-[#E8BAC0]">The AK Makeover</span>
            </div>
            <span className="text-[11px] text-[#A99396]">Navigate Sections</span>
          </div>

          <nav className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onSelectSection(item.id);
                  }}
                  className={`text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? isDarkMode
                        ? 'bg-[#311E23] text-[#E8BAC0] border border-[#523139]'
                        : 'bg-[#FCEBED] text-[#B76E79] border border-[#F2D0D5]'
                      : isDarkMode
                        ? 'text-[#C9B3B7] hover:bg-[#1E1518]'
                        : 'text-[#4A383B] hover:bg-[#F5E6E8]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-inherit/40 flex flex-col gap-2">
            <a
              href={`https://wa.me/91${whatsappNumber}?text=Hello%20The%20AK%20Makeover,%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-semibold text-[#663339] bg-[#F7EBEB] border border-[#E4BFC4] rounded-xl flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B76E79]" />
              <span>WhatsApp: +91 {whatsappNumber}</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs font-bold text-center text-white bg-gradient-to-r from-[#B76E79] to-[#9C4D58] rounded-xl shadow-xs cursor-pointer"
            >
              Book Appointment
            </button>

            {onOpenDownload && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full py-2.5 text-xs font-semibold text-center border border-[#D4AF37]/50 bg-[#FFFDF9] dark:bg-[#1E1712] text-[#8A581D] dark:text-[#F3D7A4] rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Download Local Project (.ZIP)</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
