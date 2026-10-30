import React from 'react';
import { Sparkles, Phone, MapPin, Instagram, Settings, Heart, Download } from 'lucide-react';
import { StudioConfig } from '../data/makeoverData';

interface FooterProps {
  config: StudioConfig;
  onOpenSettings: () => void;
  onBookClick: () => void;
  onOpenDownload?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onOpenSettings,
  onBookClick,
  onOpenDownload
}) => {
  return (
    <footer className="bg-[#181112] text-[#D4C3C5] border-t border-[#382326] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#301F22]">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={config.logoUrl || '/assets/aistudio/image_ad3cb76a.png'}
                alt="The AK Makeover Logo"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D4AF37]/80 shadow-md shrink-0"
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-tight block">
                  The AK Makeover
                </span>
                <span className="text-xs text-[#E8BAC0] italic font-serif">
                  Your Beauty, Our Passion
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A99396] leading-relaxed max-w-sm">
              Your Beauty, Our Passion. Dedicated to creating breathtaking bridal transformations, glowing skincare rituals, and celebration glam across North India.
            </p>

            <div className="pt-2 text-xs text-[#8C7578] space-y-1">
              <p>Certified Professional Makeup Artist & Hair Stylist</p>
              <p>Specializing in Traditional Indian Bridal & HD Glass Skin</p>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Studio Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#F3CDD2] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F3CDD2] transition-colors">
                  About Us & Makeup Artist
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-[#F3CDD2] transition-colors">
                  Bridal Makeup Gallery
                </a>
              </li>
              <li>
                <a href="#party" className="hover:text-[#F3CDD2] transition-colors">
                  Party & Occasion Makeup
                </a>
              </li>
              <li>
                <a href="#facial" className="hover:text-[#F3CDD2] transition-colors">
                  Facial & Skin Care
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F3CDD2] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F3CDD2] transition-colors">
                  Contact Us & Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Studio Location & Hours
            </h4>

            <div className="space-y-2.5 text-xs text-[#B8A3A5]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5838B] shrink-0 mt-0.5" />
                <span>{config.address}, {config.cityArea}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5838B] shrink-0" />
                <span className="tabular-nums">+91 {config.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#C5838B] shrink-0" />
                <a
                  href={`https://instagram.com/${config.instagramHandle.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {config.instagramHandle}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#8F797C]">
                <strong>Hours:</strong> {config.businessHours}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#B76E79] hover:bg-[#A55F6A] rounded-lg transition-colors cursor-pointer"
              >
                Schedule Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6669]">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} The AK Makeover. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-[11px]">
              Crafted with <Heart className="w-3 h-3 text-[#B76E79] fill-[#B76E79]" /> for Indian Brides
            </span>

            {onOpenDownload ? (
              <button
                onClick={onOpenDownload}
                className="px-3 py-1.5 rounded-lg bg-[#25171B] hover:bg-[#382228] border border-[#B76E79]/60 text-[#F5D5D8] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer font-semibold text-xs shadow-xs"
                title="Download full project code (.ZIP) to run on your local server"
              >
                <Download className="w-3.5 h-3.5 text-[#E8BAC0]" />
                <span>Download Local Server (.ZIP)</span>
              </button>
            ) : (
              <a
                href="/the-ak-makeover.zip"
                download="the-ak-makeover.zip"
                className="px-3 py-1.5 rounded-lg bg-[#25171B] hover:bg-[#382228] border border-[#B76E79]/60 text-[#F5D5D8] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer font-semibold text-xs shadow-xs"
                title="Download full project code (.ZIP) to run on your local server"
              >
                <Download className="w-3.5 h-3.5 text-[#E8BAC0]" />
                <span>Download Local Server (.ZIP)</span>
              </a>
            )}

            <button
              onClick={onOpenSettings}
              className="text-[#967C80] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Studio Owner Settings"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Studio Manager</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
