# Helping Hands Web - Futuristic Marketing Website

A modern, high-performance marketing website built with Next.js 14, TypeScript, and Tailwind CSS v4. Features a futuristic design with glassy surfaces, smooth animations, and optimized for 95+ Lighthouse scores.

## ✨ Features

- **Next.js 14 App Router** with TypeScript
- **Tailwind CSS v4** with custom design system
- **shadcn/ui** components for consistent UI
- **Framer Motion** for smooth animations
- **Lucide React** icons
- **next-seo** for SEO optimization
- **Vercel Analytics** integration
- Fully responsive design
- Accessibility compliant (WCAG 2.1)
- Dark theme with neon accents
- Animated background effects
- Performance optimized

## 🚀 Quick Start

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

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router pages
│   ├── layout.tsx         # Root layout with fonts and providers
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── why-us/            # Why choose us page
│   ├── packages/          # Packages overview and detail pages
│   ├── contact/           # Contact page with form
│   ├── api/contact/       # Contact form API endpoint
│   ├── robots.ts          # SEO robots configuration
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── Background.tsx    # Animated gradient mesh and grid
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Homepage hero section
│   ├── Services.tsx      # Services grid
│   ├── WhyUs.tsx         # Value propositions
│   ├── Packages.tsx      # Pricing packages
│   ├── VideoBlock.tsx    # Video player component
│   ├── FormEmbed.tsx     # Form embedding component
│   └── ...
├── content/              # Content management
│   └── pricing.ts        # Package pricing and features
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   ├── hero.mp4          # Hero video (placeholder)
│   ├── og-image.png      # Social share image
│   └── packages/         # Package demo videos
└── site.config.ts        # Site configuration and content
```

## 🎨 Customization

### Colors

Update the color palette in `src/app/globals.css`:

```css
:root {
  --bg: #070A12;      /* Background */
  --card: #0D1321;    /* Cards */
  --muted: #0F172A;   /* Muted backgrounds */
  --text: #E6EAF2;    /* Text */
  --primary: #5AE3FF; /* Primary neon cyan */
  --accent: #9B8CFF;  /* Accent neon violet */
  --success: #22C55E; /* Success green */
}
```

### Content

Edit site content in `site.config.ts`:

- Site name and description
- Navigation links
- Hero section copy
- Services descriptions
- Why choose us content
- Social media links

### Pricing

Update package pricing in `content/pricing.ts`:

- Package names and prices
- Features lists
- Setup fees
- Form embed configurations

## 🎥 Adding Videos

### Hero Video

Replace `public/hero.mp4` with your hero video:

1. Video should be in MP4 format
2. Recommended: 1920x1080 resolution
3. Keep file size under 10MB for performance
4. Video will autoplay muted on loop

### Package Videos

Add demo videos for each package in `public/packages/`:

- `starter.mp4` - Starter package demo
- `standard.mp4` - Standard package demo  
- `professional.mp4` - Professional package demo
- `custom.mp4` - Custom package demo

Videos will show in a 16:9 aspect ratio player on package detail pages.

## 📝 Form Integrations

### Contact Form

The contact form at `/contact` posts to `/api/contact/route.ts`. Update this file to integrate with your preferred service:

- **Email**: SendGrid, Resend, Nodemailer
- **Database**: Supabase, MongoDB, PlanetScale
- **CRM**: HubSpot, Salesforce, Pipedrive
- **Notifications**: Slack, Discord, email

### Package Forms

Add custom forms to package detail pages by updating the `formEmbed` property in `content/pricing.ts`:

```typescript
{
  slug: 'professional',
  // ... other properties
  formEmbed: {
    type: 'iframe', // or 'script'
    src: 'https://your-form-provider.com/embed/form-id'
  }
}
```

Supported form types:
- **iframe**: Typeform, Google Forms, JotForm
- **script**: Custom JavaScript embeds

## 🔧 Configuration

### SEO

Update SEO settings in `next-seo.config.ts`:

- Meta titles and descriptions
- Open Graph images
- Twitter card settings
- Canonical URLs

### Analytics

The site includes Vercel Analytics by default. To use other analytics:

1. Remove `<Analytics />` from `app/layout.tsx`
2. Add your preferred analytics script
3. Configure in your analytics dashboard

### Performance

The site is optimized for Lighthouse scores of 95+:

- **Performance**: Code splitting, image optimization, minimal JavaScript
- **Accessibility**: ARIA labels, keyboard navigation, color contrast
- **Best Practices**: HTTPS, CSP headers, modern JavaScript
- **SEO**: Meta tags, structured data, sitemaps

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
npx vercel

# Or connect your GitHub repo to Vercel dashboard
```

### Other Platforms

The site can be deployed to any Node.js hosting platform:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Google Cloud Run

Build command: `npm run build`
Start command: `npm start`
Node version: 18+

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- 📧 Email: hello@helpinghandsweb.com
- 💬 GitHub Issues: Create an issue
- 📖 Documentation: Check this README

---

Built with ❤️ by Helping Hands Web
