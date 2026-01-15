// Experience data structure
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

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'People Science',
    role: 'HR Assistant / Candidate Experience Specialist',
    location: 'Remote',
    type: 'remote',
    startDate: 'Month Year',
    endDate: 'January 2026',
    description: 'Supported the full candidate lifecycle with a focus on clear communication and organization. Coordinated interviews, managed candidate correspondence, and maintained accurate ATS records. Served as a reliable point of contact for both candidates and internal teams.',
    highlights: [
      'Supported recruiters by managing scheduling and candidate communication across multiple roles',
      'Maintained organized and up-to-date ATS records with strong attention to detail',
      'Helped create a smooth, respectful experience for candidates throughout the hiring process',
    ],
    skills: ['Candidate Experience', 'ATS Management', 'Interview Coordination', 'HR Operations', 'Communication'],
  },
];

// Food gallery item structure
export interface FoodItem {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  category: 'biryani' | 'curry' | 'appetizer' | 'dessert' | 'other';
}

// Placeholder food items - to be replaced with real images
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

// Social media links
export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/asha-sreenivasan-1a810114b/',
  youtube: 'https://www.youtube.com/@ashasculinaryworld',
  instagram: 'https://www.instagram.com/ashasculinaryworld/',
  email: 'asreeniv3@gmail.com',
};

// Site metadata
export const siteConfig = {
  name: 'Asha Sreenivasan',
  title: 'Asha Sreenivasan | HR Professional & Culinary Artist',
  description: 'HR/People Science professional with expertise in candidate experience, and South Indian culinary artist specializing in large-scale catering.',
  url: 'https://ashasreen.com',
};
