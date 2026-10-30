import React, { useState } from 'react';
import { Eye, X, ArrowRight, SlidersHorizontal, Check } from 'lucide-react';
import { BRIDAL_GALLERY_ITEMS, GalleryItem } from '../data/makeoverData';
import { LuxuryImage } from './LuxuryImage';

interface BridalGallerySectionProps {
  onSelectLookForBooking: (lookTitle: string) => void;
}

export const BridalGallerySection: React.FC<BridalGallerySectionProps> = ({
  onSelectLookForBooking
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [beforeAfterSlider, setBeforeAfterSlider] = useState<number>(50);

  const filterTabs = [
    { id: 'all', label: 'All Bridal Portfolio' },
    { id: 'traditional_red', label: 'After Transformation & Red' },
    { id: 'natural_hd', label: 'Natural Glow & HD' },
    { id: 'party', label: 'Festive & Celebration' },
    { id: 'pink_pastel', label: 'Pastel Pink' },
    { id: 'golden_glam', label: 'Golden & Glam' },
    { id: 'process', label: 'Process & Studio Rituals' },
  ];

  const filteredItems = activeFilter === 'all'
    ? BRIDAL_GALLERY_ITEMS
    : BRIDAL_GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="bridal" className="py-20 md:py-28 bg-[#FAF7F5] dark:bg-[#0D090B] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221315] dark:text-[#FDF1F3] tracking-tight">
            Bridal Makeup Gallery
          </h2>

          <p className="text-sm sm:text-base text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed">
            From timeless scarlet lehengas with royal kundan to romantic pastel pinks and soft HD glass skin, explore our handcrafted bridal signatures.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeFilter === tab.id
                  ? 'bg-[#B76E79] text-white shadow-xs'
                  : 'bg-white dark:bg-[#1A1215] text-[#523A3E] dark:text-[#C5B0B4] hover:bg-[#F5ECEE] dark:hover:bg-[#25181D] border border-[#E8D1D4] dark:border-[#382327]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Before-and-After Spotlight Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#151012] border border-[#EAC4C8]/80 dark:border-[#382327] shadow-md transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C4650] dark:text-[#E8BAC0] uppercase tracking-wider">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Interactive Transformation</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A181B] dark:text-[#FCEEF0]">
                Before & After Bridal Magic
              </h3>
              
              <p className="text-xs sm:text-sm text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed">
                See how our customized skin prep, tone correction, brow sculpting, and HD blending elevate skin while retaining your genuine smile and facial identity.
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#523A3E] dark:text-[#D1BFC2]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B76E79]" />
                  <span>No heavy caking or ashy undertones</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B76E79]" />
                  <span>Sweat-resistant 14-hour bridal hold</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B76E79]" />
                  <span>Matches actual bride skintone under flash & video</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectLookForBooking('Bridal HD Transformation (Before/After Look)')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#B76E79] hover:bg-[#9C4D58] rounded-xl transition-colors cursor-pointer"
                >
                  <span>Book This Transformation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive Slider Container */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E4BFC4] dark:border-[#40292E] shadow-inner select-none">
                
                {/* Background Image: After */}
                <img
                  src="/assets/aistudio/image_708986dc.png"
                  alt="After: Royal Indian Bridal Transformation"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />

                {/* Foreground Image: Before */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${beforeAfterSlider}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                    alt="Before: Natural Skin Prep Canvas"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    Bare Skin Prep
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-[#B76E79] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
                  Royal Bridal HD
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${beforeAfterSlider}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#B76E79] shadow-md flex items-center justify-center font-bold text-xs border border-[#C5838B]">
                    ↔
                  </div>
                </div>

                {/* Range Input for Slider */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={beforeAfterSlider}
                  onChange={(e) => setBeforeAfterSlider(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                  aria-label="Drag to compare before and after makeup"
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-[#7A5A5F] dark:text-[#A99396] mt-2 px-1">
                <span>◀ Slide left to reveal Finished Bridal HD</span>
                <span>Slide right to view Bare Canvas ▶</span>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-[#161113] border border-[#ECCECE] dark:border-[#382327] hover:border-[#B76E79] dark:hover:border-[#C5838B] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF2F3] dark:bg-[#1E171A]">
                <LuxuryImage
                  src={item.imageUrl}
                  alt={item.title}
                  fallbackText={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white font-medium bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/20">
                    <Eye className="w-3.5 h-3.5" /> View Bridal Details
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#2A181B] dark:text-[#FDEEF0] group-hover:text-[#B76E79] dark:group-hover:text-[#E8BAC0] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5F464A] dark:text-[#C5B0B4] mt-1 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F2DEE1] dark:border-[#2C191D] flex items-center justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectLookForBooking(item.title);
                    }}
                    className="text-xs font-semibold text-[#B76E79] hover:text-[#7E3741] dark:hover:text-[#F2D0D5] inline-flex items-center gap-1 cursor-pointer"
                  >
                    Book This Look <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-white dark:bg-[#161113] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#DFC3C7] dark:border-[#42292E]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 dark:bg-[#25181D] hover:bg-white text-[#2A181B] dark:text-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-[#221315]">
              <LuxuryImage
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B76E79]">
                  AK Signature Look
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2A181B] dark:text-[#FCEEF0] mt-1">
                  {selectedItem.title}
                </h3>
              </div>

              <p className="text-sm text-[#4E3539] dark:text-[#C5B0B4] leading-relaxed">
                {selectedItem.caption}
              </p>

              <div className="p-4 rounded-xl bg-[#FAF0F2] dark:bg-[#201519] border border-[#ECCECE] dark:border-[#3E272C] text-xs text-[#523A3E] dark:text-[#D1BFC2]">
                <strong className="block text-[#8C4650] dark:text-[#E8BAC0] mb-1 font-semibold">
                  Makeup Artistry Technique & Styling:
                </strong>
                {selectedItem.details}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2.5 text-xs font-medium text-[#644B50] dark:text-[#C5B0B4] hover:text-[#2A181B] dark:hover:text-white cursor-pointer"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onSelectLookForBooking(title);
                  }}
                  className="px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#B76E79] hover:bg-[#9C4D58] rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Book This Look for Your Big Day</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
