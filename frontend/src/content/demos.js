// Shared demo data - single source of truth for all demo/portfolio displays
// Used by: FeaturedDemos.jsx, Work.jsx

export const liveProjects = [
  { 
    id: 1, 
    name: 'Lumière Hair Salon',
    descKey: 'work.desc_salon',
    tagsKey: 'demos.demo1.tags',
    location: 'Warsaw, Poland',
    image: 'https://customer-assets.emergentagent.com/job_mirai-design/artifacts/kvrqb0n4_hairsalon.webp',
    link: 'https://demo-website-hairsalon.pages.dev/'
  },
  { 
    id: 2, 
    name: 'VoltEV Auto Repair',
    descKey: 'work.desc_auto',
    tagsKey: 'demos.demo2.tags',
    location: 'Berlin, Germany',
    image: 'https://customer-assets.emergentagent.com/job_mirai-design/artifacts/p09h8ll1_autorepairshop.webp',
    link: 'https://demo-website-car-garage.pages.dev/'
  },
  { 
    id: 3, 
    name: 'SaaS Dashboard',
    descKey: 'work.desc_saas',
    tagsKey: 'demos.demo3.tags',
    location: 'Vienna, Austria',
    image: 'https://customer-assets.emergentagent.com/job_mirai-design/artifacts/zcca7idl_saas.webp',
    link: 'https://demo-website-saas1.pages.dev/'
  },
]

export const comingSoonProjects = [
  { id: 4, name: 'Tattoo Studio', descKey: 'work.desc_tattoo' },
  { id: 5, name: 'Fitness Center', descKey: 'work.desc_fitness' },
  { id: 6, name: 'Cleaning Service', descKey: 'work.desc_cleaning' },
]
