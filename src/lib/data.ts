// ============================================================================
// Type Definitions
// ============================================================================

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  type: 'remote' | 'hybrid' | 'onsite';
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface FoodItem {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  category: 'biryani' | 'curry' | 'appetizer' | 'dessert' | 'other';
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  platform: 'instagram' | 'facebook' | 'youtube';
  date?: string;
}

export interface SocialLinks {
  linkedin: string;
  youtube: string;
  instagram: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
}

// ============================================================================
// Experience Data
// ============================================================================

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'People Science',
    role: 'HR Assistant / Candidate Experience Specialist',
    location: 'Remote',
    type: 'remote',
    startDate: 'Month Year',
    endDate: 'January 2026',
    description:
      'Managed the full candidate lifecycle including interview coordination, ATS administration, and stakeholder communication. Ensured efficient hiring processes while delivering a high-quality candidate experience from initial outreach through onboarding.',
    highlights: [
      'Coordinated interview scheduling and candidate communication across multiple concurrent roles',
      'Maintained comprehensive ATS records with 100% data accuracy and timely updates',
      'Delivered responsive, professional candidate support resulting in positive hiring outcomes',
    ],
    skills: [
      'Candidate Experience',
      'ATS Management',
      'Interview Coordination',
      'HR Operations',
      'Stakeholder Communication',
    ],
  },
];

// ============================================================================
// Food Gallery Data
// ============================================================================

export const foodItems: FoodItem[] = [
  {
    id: '1',
    title: 'Hyderabadi Biryani',
    description: 'Authentic South Indian biryani with aromatic basmati rice and tender meat',
    imagePath: '/images/placeholder/food-1.jpg',
    category: 'biryani',
  },
  {
    id: '2',
    title: 'Vegetable Biryani',
    description: 'Fragrant vegetarian biryani with seasonal vegetables and special spices',
    imagePath: '/images/placeholder/food-2.jpg',
    category: 'biryani',
  },
  {
    id: '3',
    title: 'Chicken Curry',
    description: 'Rich and flavorful South Indian chicken curry',
    imagePath: '/images/placeholder/food-3.jpg',
    category: 'curry',
  },
  {
    id: '4',
    title: 'Samosas',
    description: 'Crispy handmade samosas with spiced potato filling',
    imagePath: '/images/placeholder/food-4.jpg',
    category: 'appetizer',
  },
  {
    id: '5',
    title: 'Gulab Jamun',
    description: 'Sweet milk dumplings soaked in rose-flavored syrup',
    imagePath: '/images/placeholder/food-5.jpg',
    category: 'dessert',
  },
  {
    id: '6',
    title: 'Lamb Biryani',
    description: 'Premium lamb biryani cooked in traditional dum style',
    imagePath: '/images/placeholder/food-6.jpg',
    category: 'biryani',
  },
];

// ============================================================================
// Testimonials Data
// ============================================================================

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    comment: "The biryani was absolutely amazing! Best I've ever had outside of India.",
    platform: 'instagram',
    date: '2024-12-15',
  },
  {
    id: '2',
    name: 'Raj P.',
    comment:
      "Asha catered our wedding and everyone couldn't stop talking about the food. Authentic and delicious!",
    platform: 'facebook',
    date: '2024-11-20',
  },
  {
    id: '3',
    name: 'Jennifer L.',
    comment:
      'Your cooking videos are so helpful! Made your biryani recipe last night and my family loved it.',
    platform: 'youtube',
    date: '2025-01-10',
  },
];

// ============================================================================
// Social Links
// ============================================================================

export const socialLinks: SocialLinks = {
  linkedin: 'https://www.linkedin.com/in/asha-sreenivasan-1a810114b/',
  youtube: 'https://www.youtube.com/@ashasculinaryworld',
  instagram: 'https://www.instagram.com/ashasculinaryworld/',
  email: 'asreeniv3@gmail.com',
};

// ============================================================================
// Site Configuration
// ============================================================================

export const siteConfig: SiteConfig = {
  name: 'Asha Sreenivasan',
  title: 'Asha Sreenivasan | HR Professional & Culinary Artist',
  description:
    'HR/People Science professional with expertise in candidate experience, and South Indian culinary artist specializing in large-scale catering.',
  url: 'https://ashasreen.com',
};
