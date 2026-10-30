import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LuxuryImage } from './LuxuryImage';

interface PartyMakeupSectionProps {
  onSelectService: (serviceName: string) => void;
}

interface PartyLook {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  stylingNotes: string[];
  bestFor: string;
}

const PARTY_LOOKS: PartyLook[] = [
  {
    id: 'look-party-glam',
    title: 'Cocktail & Evening Party Makeup',
    category: 'Party Glam',
    image: '/assets/party_glamour_clean.jpg',
    description: 'Sleek, high-fashion makeup featuring smoldering eyes, soft metallic rose-gold hues, sculpted cheekbones, and delicate tendril updo for evening celebrations.',
    stylingNotes: ['Soft shimmer rose-gold lids with flutter lashes', 'Velvet mauve-pink matte lips', 'Luminous skin with defined cheekbones'],
    bestFor: 'Cocktail Evenings, Sangeet Nights, Reception'
  },
  {
    id: 'look-engagement',
    title: 'Engagement & Rose Pink Bridal Look',
    category: 'Engagement',
    image: '/assets/rose_pink_bridal_clean.jpg',
    description: 'Romantic pastels with sheer pink veil, floral crown, and dewy blush. Accentuates soft feminine charm with radiant rosy cheeks and layered pearls.',
    stylingNotes: ['Rosy blush glow & delicate glitter lid accents', 'Fresh floral crown & sheer veil integration', 'Layered pearl necklace coordination'],
    bestFor: 'Ring Ceremonies, Roka, Pastel Daytime Weddings'
  },
  {
    id: 'look-reception',
    title: 'Regal Reception Glamour',
    category: 'Reception',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    description: 'Dramatic and sophisticated makeup balancing bold features and regal poise. Designed to look breathtaking under 4K video lenses.',
    stylingNotes: ['Defined winged cat eye', 'Velvet bold berry or crimson lip', 'Hollywood waves or sculpted updo'],
    bestFor: 'Grand Receptions & Post-Wedding Dinners'
  },
  {
    id: 'look-festive',
    title: 'Festive & Diwali / Celebration Look',
    category: 'Festive',
    image: '/assets/aistudio/image_637c0e78.png',
    description: 'Joyous celebration styling featuring warm golden shimmer eyes, luminous base, and champagne festive sharara twirl aesthetic with marigolds.',
    stylingNotes: ['Luminous champagne glow & flutter lashes', 'Festive gold shimmer eyelids with soft kajal', 'Voluminous open festive waves & marigold aesthetic'],
    bestFor: 'Diwali Soirées, Karwa Chauth, Sangeet & Festive Parties'
  },
  {
    id: 'look-birthday',
    title: 'Birthday & Special Event Makeup',
    category: 'Special Occasion',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    description: 'Fresh, youthful, and photo-ready glam for milestone birthdays, anniversaries, graduations, and private celebratory dinners.',
    stylingNotes: ['Pop of peach or coral blush', 'Glossy plumping lip finish', 'Bouncy blowout styling'],
    bestFor: 'Birthdays, Anniversaries, Kitty Parties'
  },
  {
    id: 'look-soft-glam',
    title: 'Natural Glow & Dewy Glass Skin Look',
    category: 'Soft Glam',
    image: '/assets/aistudio/image_9b7b3408.png',
    description: 'Effortless lit-from-within natural glow with skin-first hydration, soft peach cream blush, brushed brows, and fresh glossy nude lips.',
    stylingNotes: ['Ultra-dewy glass skin preparation', 'Micro-concealing & soft peach cream blush', 'Natural flutter lash & juicy high-shine gloss'],
    bestFor: 'Day Functions, Mehendi, Haldi, Roka & Natural Elegance'
  },
  {
    id: 'look-waterfall-braid',
    title: 'Waterfall Braid & Hollywood Waves',
    category: 'Styling & Draping',
    image: '/assets/hairstyling_waterfall_braid_clean.jpg',
    description: 'Intricate crown waterfall French braiding cascading into glossy, voluminous waves. Ideal for modern sangeet, cocktail, and wedding guest styling.',
    stylingNotes: ['Precision crown waterfall braiding', 'Long-wear bouncy heat-set curls', 'Anti-humidity lightweight finishing hold'],
    bestFor: 'Sangeet Nights, Cocktails, Receptions, Bridesmaids'
  },
  {
    id: 'look-hair-saree',
    title: 'Bridal Dupatta & Jewellery Setting',
    category: 'Styling & Draping',
    image: '/assets/bridal_jewellery_dupatta_clean.jpg',
    description: 'Expert styling and anchoring for royal bridal dupattas, kundan choker necklaces, matha patti, jhumkas, and chooda sets.',
    stylingNotes: ['Multi-point secure pin placement', 'Symmetrical matha patti alignment', 'Comfortable long-duration weight distribution'],
    bestFor: 'Bridal Ceremonies, Wedding Day, Sangeet'
  }
];

export const PartyMakeupSection: React.FC<PartyMakeupSectionProps> = ({
  onSelectService
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Party Glam', 'Engagement', 'Reception', 'Festive', 'Soft Glam', 'Styling & Draping'];

  const filteredLooks = selectedCategory === 'All'
    ? PARTY_LOOKS
    : PARTY_LOOKS.filter(l => l.category === selectedCategory);

  return (
    <section id="party" className="py-20 md:py-28 bg-[#FFFDFD] dark:bg-[#110C0E] border-b border-[#EED7DA]/40 dark:border-[#332024] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#221315] dark:text-[#FDF1F3] tracking-tight">
            Party Makeup & Occasion Styling
          </h2>

          <p className="text-sm sm:text-base text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed">
            Turn heads at every festive celebration, sangeet night, engagement, and special dinner with curated hair and makeup looks tailored to your outfit.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#B76E79] text-white shadow-xs'
                  : 'bg-[#FAF5F6] dark:bg-[#1A1215] text-[#553E42] dark:text-[#C5B0B4] hover:bg-[#F3E2E5] dark:hover:bg-[#25181D] border border-[#E8D1D4] dark:border-[#382327]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Looks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              className="bg-white dark:bg-[#161113] rounded-3xl overflow-hidden border border-[#ECCECE] dark:border-[#382327] hover:border-[#B76E79] dark:hover:border-[#C5838B] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-[#FBF3F4] dark:bg-[#1E171A]">
                <LuxuryImage
                  src={look.image}
                  alt={look.title}
                  fallbackText={look.title}
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 dark:bg-[#1A1215]/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#8C4650] dark:text-[#E8BAC0] border border-white/60 dark:border-[#42292E] shadow-xs flex items-center gap-1.5">
                  {look.id === 'look-party-glam' && <Sparkles className="w-3 h-3 text-[#B76E79]" />}
                  <span>{look.category}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#2A181B] dark:text-[#FDEEF0] group-hover:text-[#B76E79] dark:group-hover:text-[#E8BAC0] transition-colors">
                    {look.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#5F464A] dark:text-[#C5B0B4] leading-relaxed">
                    {look.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#F2DEE1] dark:border-[#2C191D]">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[#8C4650] dark:text-[#E8BAC0]">
                    Styling Highlights:
                  </p>
                  <div className="space-y-1">
                    {look.stylingNotes.map((note, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#523A3E] dark:text-[#D1BFC2]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B76E79] shrink-0" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-1 text-[11px] text-[#7A5A5F] dark:text-[#B3999D]">
                    <span className="font-semibold text-[#2A181B] dark:text-[#FDEEF0]">Best For:</span> {look.bestFor}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onSelectService(look.title)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#B76E79] to-[#9C4D58] hover:from-[#A85F6B] hover:to-[#8E444F] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book This Style</span>
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
