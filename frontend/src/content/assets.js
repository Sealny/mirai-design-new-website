// IMAGE MAP - Mirai Design
// All images from Unsplash - direct URLs, license-safe
// Consistent style: modern, premium, dark, high-contrast, appointment-based businesses
// NO: handshakes, corporate meetings, call centers, generic office teams
// Optimized with responsive sizing and WebP format support

// Default fallback images
const FALLBACK_IMAGES = {
  beauty: {
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    alt: 'Beauty salon interior',
  },
  physio: {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    alt: 'Physiotherapy clinic',
  },
  barber: {
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
    alt: 'Barber shop interior',
  },
};

export const assets = {
  // ============================================================
  // HERO SECTION - 3 rotating slides
  // ============================================================
  hero: {
    beautyDemo: {
      image: 'https://customer-assets.emergentagent.com/job_mirai-design/artifacts/kvrqb0n4_hairsalon.webp',
      alt: 'Modern hair salon website',
      niche: 'Hair Salon',
      city: 'Warsaw',
      aspectRatio: '16/10',
    },
    physioDemo: {
      image: 'https://customer-assets.emergentagent.com/job_mirai-design/artifacts/p09h8ll1_autorepairshop.webp',
      alt: 'Auto repair shop website',
      niche: 'Auto Repair Shop',
      city: 'Vienna',
      aspectRatio: '16/10',
    },
    barberDemo: {
      image: 'https://customer-assets.emergentagent.com/job_mirai-design/artifacts/zcca7idl_saas.webp',
      alt: 'SaaS company website',
      niche: 'SaaS Company',
      city: 'Berlin',
      aspectRatio: '16/10',
    },
  },

  // ============================================================
  // FEATURED DEMOS - business showcase cards
  // ============================================================
  demos: {
    beautyStudio: {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
      alt: 'Luxury beauty treatment room with ambient lighting',
      aspectRatio: '4/3',
    },
    physioClinic: {
      // Different physio image - treatment table/rehab equipment
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      alt: 'Modern physiotherapy treatment equipment',
      aspectRatio: '4/3',
    },
    barberShop: {
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80',
      alt: 'Vintage barber tools and leather chair',
      aspectRatio: '4/3',
    },
  },

  // ============================================================
  // WHAT WE BUILD - 3 service cards
  // ============================================================
  whatWeBuild: {
    onePage: {
      image: 'https://customer-assets.emergentagent.com/job_mirai-design/artifacts/vft4hlq0_1.jpeg',
      alt: 'One-page website design',
      aspectRatio: '4/3',
    },
    business: {
      image: 'https://customer-assets.emergentagent.com/job_mirai-design/artifacts/6mphkns1_2.jpeg',
      alt: 'Business website design',
      aspectRatio: '4/3',
    },
    landing: {
      image: 'https://customer-assets.emergentagent.com/job_mirai-design/artifacts/onf9qufe_3.jpeg',
      alt: 'Landing page design',
      aspectRatio: '4/3',
    },
  },

  // ============================================================
  // BEFORE/AFTER - transformation concept
  // ============================================================
  beforeAfter: {
    before: {
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&q=80',
      alt: 'Old outdated interface concept',
      aspectRatio: '16/9',
    },
    after: {
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
      alt: 'Modern clean web design on devices',
      aspectRatio: '16/9',
    },
  },

  // ============================================================
  // PROCESS/HOW IT WORKS - 4 steps
  // Step 1: Quick call - user's uploaded premium graphic
  // Step 2: We build a demo - user's uploaded graphic
  // Step 3: You send materials - user's uploaded graphic
  // Step 4: We launch - user's uploaded graphic
  // ============================================================
  process: {
    call: {
      // User's uploaded premium graphic for Quick Call
      image: 'https://customer-assets.emergentagent.com/job_mirai-design/artifacts/r3y3ni3q_clientcall.png',
      alt: 'Quick discovery call',
      aspectRatio: '3/2',
    },
    demo: {
      // User's uploaded graphic - We build a demo
      image: 'https://customer-assets.emergentagent.com/job_mirai-i18n/artifacts/zvmn4bt2_demobuilding.png',
      alt: 'We build a demo for you',
      aspectRatio: '3/2',
    },
    materials: {
      // User's uploaded graphic - You send materials
      image: 'https://customer-assets.emergentagent.com/job_mirai-i18n/artifacts/f2yrjqfe_uploadmaterials.png',
      alt: 'You send your materials',
      aspectRatio: '3/2',
    },
    launch: {
      // User's uploaded graphic - We launch
      image: 'https://customer-assets.emergentagent.com/job_mirai-i18n/artifacts/74wbscqu_launch.png',
      alt: 'We launch your site',
      aspectRatio: '3/2',
    },
  },

  // ============================================================
  // WORK/PORTFOLIO - 6 Demo Preview projects
  // Categories: Beauty, Barber, Physio, Tattoo, Fitness, Home services
  // Locations: Warsaw, Vienna, Berlin, Paris, Zurich, Amsterdam
  // ============================================================
  portfolio: [
    {
      // Beauty - salon interior
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
      alt: 'Modern beauty salon with styling stations',
      aspectRatio: '4/3',
    },
    {
      // Barber - barber chair/tools
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80',
      alt: 'Classic barber chair and tools',
      aspectRatio: '4/3',
    },
    {
      // Physio - treatment room
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      alt: 'Physiotherapy treatment room',
      aspectRatio: '4/3',
    },
    {
      // Tattoo - studio tools close-up
      image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80',
      alt: 'Tattoo studio workstation',
      aspectRatio: '4/3',
    },
    {
      // Fitness - small studio interior
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
      alt: 'Modern fitness studio interior',
      aspectRatio: '4/3',
    },
    {
      // Home services - clean modern interior (professional cleaning)
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      alt: 'Clean modern home interior',
      aspectRatio: '4/3',
    },
  ],

  // ============================================================
  // ABOUT PAGE
  // ============================================================
  about: {
    hero: {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      alt: 'Modern minimalist workspace',
      aspectRatio: '21/9',
    },
    workspace: {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
      alt: 'Developer working on code',
      aspectRatio: '4/3',
    },
    collaboration: {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
      alt: 'Creative brainstorming session',
      aspectRatio: '4/3',
    },
  },

  // ============================================================
  // CONTACT PAGE
  // ============================================================
  contact: {
    support: {
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
      alt: 'Ready to start conversation',
      aspectRatio: '4/3',
    },
  },

  // ============================================================
  // PACKAGES/PRICING
  // ============================================================
  pricing: {
    header: {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      alt: 'Simple transparent pricing',
      aspectRatio: '21/9',
    },
  },
};

// Helper function to get image with fallback
export const getImageWithFallback = (imageObj, fallbackKey = 'beauty') => {
  if (imageObj?.image) return imageObj;
  return FALLBACK_IMAGES[fallbackKey] || FALLBACK_IMAGES.beauty;
};

// Get hero slides with guaranteed data
export const getHeroSlides = () => {
  const slides = [
    assets.hero.beautyDemo,
    assets.hero.physioDemo,
    assets.hero.barberDemo,
  ];
  
  return slides.map((slide, index) => ({
    image: slide?.image || FALLBACK_IMAGES[Object.keys(FALLBACK_IMAGES)[index % 3]].image,
    alt: slide?.alt || 'Demo preview',
    niche: slide?.niche || ['Beauty Studio', 'Physio Clinic', 'Barber Shop'][index],
    city: slide?.city || ['Warsaw', 'Vienna', 'Berlin'][index],
    aspectRatio: slide?.aspectRatio || '16/10',
  }));
};

export default assets;
