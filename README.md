# Asha Sreenivasan - Portfolio Website

A professional portfolio website showcasing HR/People Science expertise and South Indian culinary artistry.

**Live Site**: [ashasreen.com](https://ashasreen.com) *(Coming Soon)*

## Features

- **Home Page**: Hero section with professional introduction and dual-career overview
- **Experience Page**: Expandable job cards showcasing HR career journey
- **Culinary Page**: Food gallery with category filtering and social media integration
- **Contact Page**: Inquiry form with job/catering/general inquiry types
- **Mobile Responsive**: Optimized for all screen sizes
- **SEO Optimized**: Full metadata, Open Graph, and structured data

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel
- **Fonts**: Playfair Display (headings) + Inter (body)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── experience/        # Experience page
│   ├── culinary/          # Culinary/Food page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── navigation/        # Navbar, Footer
│   ├── home/              # Hero, Overview
│   ├── experience/        # ExperienceCard
│   ├── culinary/          # FoodGallery, SocialEmbed
│   └── contact/           # ContactForm
└── lib/
    └── data.ts            # Site data and configurations
```

## Content To Add

The following placeholder content needs to be replaced with real data:

### Experience Section
- [ ] Detailed job descriptions for each role
- [ ] Specific achievements with metrics
- [ ] Complete skills list
- [ ] Date ranges for each position

### Culinary Section
- [ ] Food photography (biryani, curries, appetizers, desserts)
- [ ] Cooking process photos/videos
- [ ] Updated social media follower counts

### Images
- [ ] Professional headshot for Hero section
- [ ] Food gallery images (6+ recommended)

### Contact Form
- [ ] Connect form to email service (Formspree/SendGrid/Resend)

## Deployment

### Vercel Deployment

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push to main

### Custom Domain Setup (Namecheap)

1. In Vercel: Add custom domain `ashasreen.com`
2. In Namecheap DNS settings, add:
   - Type: `CNAME`
   - Host: `@` or `www`
   - Value: `cname.vercel-dns.com`
3. Or use Vercel nameservers for full DNS control

## Design System

### Colors
- **Primary** (Gold): `#D4A853` - HR/Professional elements
- **Secondary** (Terracotta): `#C65D3B` - Culinary elements
- **Accent** (Sage): `#7D8471` - Subtle highlights
- **Neutral Dark**: `#2D2D2D`
- **Neutral Light**: `#FAF7F2`

## License

Private - All Rights Reserved

## Contact

For inquiries: asreeniv3@gmail.com
