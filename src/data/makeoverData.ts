export interface ServiceItem {
  id: string;
  title: string;
  category: 'bridal' | 'party' | 'skincare' | 'hair_styling';
  shortDesc: string;
  fullDesc: string;
  image: string;
  defaultPrice?: string;
  duration: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'traditional_red' | 'pink_pastel' | 'golden_glam' | 'natural_hd' | 'process' | 'party';
  imageUrl: string;
  caption: string;
  details: string;
  isBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
}

export interface SkincareItem {
  id: string;
  title: string;
  type: string;
  duration: string;
  benefits: string[];
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  serviceUsed: string;
  eventDate: string;
  rating: number;
  comment: string;
}

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup',
    category: 'bridal',
    shortDesc: 'Complete royal Indian bridal transformation featuring HD/Airbrush makeup, jewellery placement, and dupatta draping.',
    fullDesc: 'Our signature bridal service designed for your most memorable day. Includes high-definition skin preparation, custom contoured eye artistry, water-resistant long-wearing foundation, lashes, and intricate dupatta setting.',
    image: '/assets/aistudio/image_708986dc.png',
    defaultPrice: '₹15,000 - ₹25,000 (Customizable)',
    duration: '3.5 - 4 Hours',
    highlights: ['International Luxury Brands (Huda, MAC, Dior)', 'Waterproof & Sweat-Resistant HD Base', 'Dupatta Draping & Jewellery Styling', 'Lashes & Customized Lip Sculpting']
  },
  {
    id: 'party-makeup',
    title: 'Party & Festive Makeup',
    category: 'party',
    shortDesc: 'Glamorous and long-lasting makeup for Diwali festivities, cocktail parties, sangeet nights, and weddings.',
    fullDesc: 'Elevate your festive and evening look with radiant skin, sculpted eyes, and chic hair styling suited for Diwali celebrations, cocktail nights, and festive gatherings.',
    image: '/assets/aistudio/image_637c0e78.png',
    defaultPrice: '₹3,500 - ₹6,000 (Customizable)',
    duration: '1.5 - 2 Hours',
    highlights: ['Festive & Diwali Glow Aesthetics', 'Smokey or Shimmer Eye Artistry', 'Complimentary Basic Hairdo', 'Precision Lashes Included']
  },
  {
    id: 'engagement-makeup',
    title: 'Engagement Makeup',
    category: 'bridal',
    shortDesc: 'Subtle yet striking engagement and ring ceremony makeup tailored to your gown or pastel lehenga.',
    fullDesc: 'Striking the perfect balance between soft glam and bridal allure. Ideal for ring ceremonies, rokas, and sangeet evenings with soft romantic tones.',
    image: '/assets/rose_pink_bridal_clean.jpg',
    defaultPrice: '₹8,000 - ₹12,000 (Customizable)',
    duration: '2.5 Hours',
    highlights: ['Soft Glam Pastel Aesthetics', 'Custom Floral Hair Bun or Curls', 'Dewy Glass Skin Finish', 'Jewellery Setting & Styling']
  },
  {
    id: 'reception-makeup',
    title: 'Reception Makeup',
    category: 'bridal',
    shortDesc: 'Regal and contemporary reception makeup with sleek hairstyles and bold, statement evening glam.',
    fullDesc: 'Create a lasting impression as newlyweds with sophisticated evening bridal glamour, spotlight eye makeup, and modern hairstyle draping.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    defaultPrice: '₹10,000 - ₹15,000 (Customizable)',
    duration: '2.5 - 3 Hours',
    highlights: ['Modern Contemporary Styling', 'Hollywood Waves or Textured Updos', 'High-Shine Highlighting Technique', 'Tear-Proof Long-Wear Formulation']
  },
  {
    id: 'facial-skincare',
    title: 'Facial & Natural Glow Skincare',
    category: 'skincare',
    shortDesc: 'Deep cleansing, fruit extracts, hydra-infusion, and customized natural glow bridal skin therapies.',
    fullDesc: 'Pamper your skin with medical-grade botanicals, sonic deep cleansing, and deep hydration treatments to reveal your natural inner radiance.',
    image: '/assets/aistudio/image_9b7b3408.png',
    defaultPrice: '₹1,800 - ₹4,500 (Customizable)',
    duration: '60 - 90 Mins',
    highlights: ['Natural Glow & Dewy Glass Skin', 'Pore Detox & Exfoliation', 'Herbal & Gold Glow Packs', 'Relaxing Facial & Neck Massage']
  },
  {
    id: 'pre-bridal-packages',
    title: 'Pre-Bridal Packages',
    category: 'skincare',
    shortDesc: 'Comprehensive head-to-toe beauty rituals including full-body cleanup, waxing, polishing, and manicure-pedicure.',
    fullDesc: 'Our all-inclusive pre-wedding rejuvenation package spread across 2 to 4 sessions to ensure smooth, luminous skin from head to toe.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    defaultPrice: '₹6,500 - ₹18,000 (Customizable)',
    duration: 'Multiple Sessions',
    highlights: ['Full-Body Polishing & Exfoliation', 'Luxury Manicure & Pedicure', 'Custom Glow Facials (2 Sittings)', 'Hair Spa & Scalp Revitalization']
  },
  {
    id: 'hairstyling',
    title: 'Hairstyling',
    category: 'hair_styling',
    shortDesc: 'Crown waterfall French braids, voluminous Hollywood curls, bridal floral buns, and customized hair extensions.',
    fullDesc: 'Professional hairstyling designed to withstand dance, ceremonies, and weather while complementing your facial profile and jewellery.',
    image: '/assets/hairstyling_waterfall_braid_clean.jpg',
    defaultPrice: '₹1,500 - ₹3,500 (Customizable)',
    duration: '45 - 60 Mins',
    highlights: ['Crown Waterfall & French Braiding', 'Voluminous Hollywood Soft Waves', 'Long-Lasting Hold Finishing Spray', 'Accessory & Floral Pinning']
  },
  {
    id: 'saree-draping',
    title: 'Bridal Dupatta & Jewellery Setting',
    category: 'hair_styling',
    shortDesc: 'Master placement of royal bridal jewellery, kundan matha patti, nath, and secure double-dupatta draping.',
    fullDesc: 'Walk with grace and comfort. Our bridal stylists ensure zero-slip, razor-sharp pleats, secure multi-point dupatta pinning, and symmetrical jewellery positioning.',
    image: '/assets/bridal_jewellery_dupatta_clean.jpg',
    defaultPrice: '₹1,500 - ₹3,500 (Customizable)',
    duration: '45 Mins',
    highlights: ['Multi-Point Dupatta Pinning', 'Matha Patti & Maang Tikka Centering', 'Heavy Choker & Jhumka Setting', 'Bridal Chooda & Ring Arrangement']
  }
];

export const BRIDAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-after-bridal',
    title: 'After Bridal Transformation (Royal Crimson HD)',
    category: 'traditional_red',
    imageUrl: '/assets/aistudio/image_708986dc.png',
    caption: 'Finished royal Indian bridal look featuring deep crimson lehenga, royal kundan choker, nath, and matha patti.',
    details: 'HD long-wear camera base, sculpted warm blush, bold royal crimson lips, and ornate double-dupatta draping.'
  },
  {
    id: 'gal-festive-diwali',
    title: 'Festive & Diwali Celebration Glamour',
    category: 'party',
    imageUrl: '/assets/aistudio/image_637c0e78.png',
    caption: 'Diwali and festive celebration look with champagne sharara attire, golden shimmer lids, and marigold aesthetic.',
    details: 'Long-lasting sweatproof festive glam, champagne shimmer eye artistry, radiant cheeks, and voluminous festive waves for Diwali, Karwa Chauth, and sangeet.'
  },
  {
    id: 'gal-natural-glow',
    title: 'Natural Glow & Dewy Glass Skin Finish',
    category: 'natural_hd',
    imageUrl: '/assets/aistudio/image_9b7b3408.png',
    caption: 'Dewy glass skin, delicate rosy blush, and peach glossy lips that let natural beauty radiate.',
    details: 'Ultra-sheer HD coverage with micro-concealing, soft peach lip sculpting, flutter lashes, and effortless brushed brows.'
  },
  {
    id: 'gal-traditional-red',
    title: 'Traditional Royal Red Bridal Look',
    category: 'traditional_red',
    imageUrl: '/assets/bridal_glamour_clean.jpg',
    caption: 'Classic Indian red bridal lehenga with royal kundan jewellery and intricate finishing touches.',
    details: 'Traditional vermilion lips, flawless matte HD foundation, gold-foil lid accents, and royal nath styling.'
  },
  {
    id: 'gal-pink-pastel',
    title: 'Elegant Rose Pink Bridal Glow',
    category: 'pink_pastel',
    imageUrl: '/assets/rose_pink_bridal_clean.jpg',
    caption: 'Dreamy blush pink bridal glow with sheer veil, floral crown, layered pearls, and radiant rosy cheeks.',
    details: 'Soft monochromatic pink tones, delicate flutter lashes, subtle glitter eyelids, and fresh floral crown styling.'
  },
  {
    id: 'gal-golden-glam',
    title: 'Imperial Golden Bridal Makeup',
    category: 'golden_glam',
    imageUrl: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80',
    caption: 'Champagne gold shimmer lid, sculpted cheeks, and statement antique jewellery.',
    details: 'Golden dual-tone glitter accents with warm caramel sculpting, velvet lips, and traditional matha patti.'
  },
  {
    id: 'gal-before-after',
    title: 'Before & After Bridal Transformation',
    category: 'natural_hd',
    imageUrl: '/assets/aistudio/image_708986dc.png',
    caption: 'From clean morning canvas to radiant royal bride in crimson lehenga and kundan jewellery.',
    details: 'Demonstrating tone correction, micro-concealing, regal crimson lip artistry, matha patti placement, and lit-from-within glow.',
    isBeforeAfter: true,
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    afterImage: '/assets/aistudio/image_708986dc.png'
  },
  {
    id: 'gal-detox-facial-process',
    title: 'Clinical Herbal Detox Facial Process',
    category: 'process',
    imageUrl: '/assets/aistudio/image_c19f73ff.png',
    caption: 'Live studio treatment: professional application of purifying herbal clay mask with specialized aesthetic brush.',
    details: 'Step-by-step detox ritual in our studio featuring sterile technique, steam opening, gentle botanical clay mask layering, and deep pore decongestion.'
  },
  {
    id: 'gal-process-eyes',
    title: 'Bridal Glamour in the Making: Artist in Action',
    category: 'process',
    imageUrl: '/assets/bridal_glamour_clean.jpg',
    caption: 'Professional brush precision: blending blush and foundation touches on the bride in our studio.',
    details: 'Live studio makeover capturing flawless bridal contouring, kundan jewellery arrangement, and radiant skin finish.'
  },
  {
    id: 'gal-jewellery-dupatta',
    title: 'Bridal Dupatta & Jewellery Setting',
    category: 'traditional_red',
    imageUrl: '/assets/bridal_jewellery_dupatta_clean.jpg',
    caption: 'Royal kundan & ruby choker set with matching matha patti, jhumkas, bridal chooda, and master dupatta draping.',
    details: 'Multi-point secure dupatta pinning for effortless bridal mobility, matha patti centering, and complete bridal jewellery placement.'
  },
  {
    id: 'gal-party-glam',
    title: 'Cocktail & Evening Party Glamour',
    category: 'party',
    imageUrl: '/assets/party_glamour_clean.jpg',
    caption: 'Soft rose-gold shimmer eyes, dewy glass-skin complexion, and elegant textured updo.',
    details: 'Tailored for cocktail soirées, sangeet parties, and engagement ceremonies with subtle sequin attire matching.'
  },
  {
    id: 'gal-waterfall-hairstyling',
    title: 'Crown Waterfall Braid & Romantic Waves',
    category: 'process',
    imageUrl: '/assets/hairstyling_waterfall_braid_clean.jpg',
    caption: 'Intricate crown waterfall French braiding with cascading Hollywood soft curls.',
    details: 'Anti-humidity texture setting, delicate volume crown lifting, and long-wear romantic curls tailored for sangeet, cocktail, and bridal receptions.'
  }
];

export const FACIAL_TREATMENTS: SkincareItem[] = [
  {
    id: 'hydrating-facial',
    title: 'Natural Glow & Hydrating Facial',
    type: 'Skin Quenching & Radiance',
    duration: '60 Mins',
    benefits: ['Intense cellular moisture & dewy glow', 'Soothes dryness and reveals glass skin', 'Restores natural supple bounce'],
    description: 'Infuses hyaluronic moisture serums, rose-water hydration masks, and cryogenic cold-globe lymphatic massage to reveal your natural dewy inner radiance.',
    image: '/assets/aistudio/image_9b7b3408.png'
  },
  {
    id: 'deep-cleansing-facial',
    title: 'Herbal Pore Detox Facial Process',
    type: 'Purifying Botanical Treatment',
    duration: '75 Mins',
    benefits: ['Gentle ultrasonic extraction & decongestion', 'Targeted herbal clay detox mask application', 'Controls excess sebum and purifies skin barrier'],
    description: 'Multi-step steam pore opening, clinical ultrasonic purification, custom herbal clay mask applied with aesthetic brush precision, and antibacterial high-frequency calming therapy.',
    image: '/assets/aistudio/image_c19f73ff.png'
  },
  {
    id: 'bridal-pre-facial',
    title: 'Bridal Pre-Facial Luminescence',
    type: 'Specialist Radiance Regimen',
    duration: '90 Mins',
    benefits: ['Zero-downtime camera radiance', 'Evens skin discoloration', 'Creates ultra-smooth canvas for makeup'],
    description: 'Designed specifically 3-5 days before the wedding ceremony. Uses gentle enzymatic peeling, 24k gold essence, and collagen sheet therapy.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'full-body-facial',
    title: 'Full-Body Skincare & Polishing',
    type: 'Total Body Treatment',
    duration: '120 Mins',
    benefits: ['Smooth velvety skin all over', 'Exfoliates dead cells & tan', 'Deeply hydrates back, arms & legs'],
    description: 'A luxurious full-body treatment featuring walnut and saffron micro-scrubbing, deeply hydrating massage oils, and botanical body wrap.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'body-cleanup-exfoliation',
    title: 'Full-Body Cleanup & Tan Removal',
    type: 'Body Cleanup Ritual',
    duration: '90 Mins',
    benefits: ['Eliminates sun pigmentation', 'Cleanses clogged pores on back & chest', 'Silky, even-toned skin'],
    description: 'Targeted exfoliation and brightening pack for arms, neck, back, and legs, ideal before backless bridal blouses and gowns.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'face-cleanup-glow',
    title: 'Face Cleanup & Instant Glow',
    type: 'Express Care',
    duration: '45 Mins',
    benefits: ['Quick refreshing glow', 'Removes daily surface grime', 'Instant bright look before events'],
    description: 'Fast-acting botanical cleanup including gentle cleansing, steam, blackhead clearing, and glow-boosting fruit pack.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Priyanka Sharma',
    serviceUsed: 'Bridal HD Makeup & Hairstyling',
    eventDate: 'Wedding — Nov 2025',
    rating: 5,
    comment: 'AK Makeover made my dream bridal look a reality! My makeup stayed completely intact through emotional moments and 6 hours of pheras. Everyone praised the natural glow.'
  },
  {
    id: 'test-2',
    clientName: 'Sunita Mehra',
    serviceUsed: 'Pre-Bridal Skincare & Facial',
    eventDate: 'Pre-Wedding Sessions — Dec 2025',
    rating: 5,
    comment: 'The bridal pre-facial and body polishing gave me such soft, clear skin. The salon hygiene is top-notch and the owner is so warm, patient, and knowledgeable.'
  },
  {
    id: 'test-3',
    clientName: 'Simran Kaur',
    serviceUsed: 'Engagement & Party Glam',
    eventDate: 'Engagement — Jan 2026',
    rating: 5,
    comment: 'I wanted a soft glam pastel look for my engagement gown, and AK Makeover delivered beyond expectations. The eye makeup was so detailed and elegant!'
  }
];

export interface StudioConfig {
  salonName: string;
  tagline: string;
  artistName: string;
  artistTitle: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  cityArea: string;
  instagramHandle: string;
  businessHours: string;
  logoUrl?: string;
  signboardBannerUrl?: string;
}

export const DEFAULT_STUDIO_CONFIG: StudioConfig = {
  salonName: 'The AK Makeover',
  tagline: 'Your Beauty, Our Passion',
  artistName: 'The AK Makeover Lead Artist',
  artistTitle: 'Founder & Professional Bridal Makeup Artist',
  phone: '9389850766',
  whatsappNumber: '9389850766',
  email: 'akmakeover.studio@gmail.com',
  address: 'Maliwada Chowk, House Number 34, Lakshmi Viha Colony',
  cityArea: 'Ghaziabad, Uttar Pradesh, India',
  instagramHandle: '@amita_rani2024',
  businessHours: 'Mon - Sun: 10:00 AM - 08:30 PM (Early bridal slots by appointment)',
  logoUrl: '/assets/aistudio/image_ad3cb76a.png',
  signboardBannerUrl: '/assets/aistudio/image_26c8ead1.png'
};
