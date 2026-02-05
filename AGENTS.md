# LifeVault Web - AI Agent Documentation

## Project Overview

**LifeVault** is a file-system-first organizer designed to transform existing cloud and local storage into a structured vault for important documents. The application helps users organize IDs, warranties, receipts, and other critical documents with smart naming conventions, automated presets, and expiry reminders.

**Website URL**: https://lifevault.sabrlabs.com (based on CNAME)

## Technology Stack

- **Framework**: Astro 5.17.1
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4.1.18 with DaisyUI 5.5.17
- **Icons**: Lucide React 0.563.0
- **Language**: TypeScript

## Project Structure

```
c:\Repos\LifeVault-Web/
├── astro.config.mjs          # Astro configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── README.md                 # Project documentation
├── public/
│   └── CNAME                 # Domain configuration
└── src/
    ├── assets/               # Static assets
    ├── components/           # React components
    │   ├── DownloadSection.tsx    # Download page platform cards
    │   ├── Features.tsx           # Features grid section
    │   ├── Footer.tsx             # Site footer
    │   ├── Hero.tsx               # Homepage hero section
    │   └── Navbar.tsx             # Navigation bar
    ├── layouts/
    │   └── Layout.astro      # Main layout wrapper
    ├── pages/
    │   ├── download.astro    # Download page
    │   └── index.astro       # Homepage
    └── styles/
        └── global.css        # Global styles
```

## Key Features

### 1. Smart Organization
- Automatically structures files with intelligent presets
- Supports IDs, warranties, receipts, and more
- File-system-first approach

### 2. Expiry Reminders
- Smart notification system for warranty expirations
- Document renewal reminders
- Proactive document management

### 3. Cloud Integration
- Works with existing cloud storage providers
- Supports local folders
- No vendor lock-in

### 4. Privacy-First
- 100% private - files stay on user devices
- No third-party uploads required
- Complete data ownership

### 5. Smart Naming
- Consistent file naming conventions
- Easy document discovery
- Structured organization system

### 6. Performance
- Fast and lightweight
- Quick launch times
- Low resource usage

## Components Documentation

### Hero.tsx
**Purpose**: Landing page hero section with call-to-action

**Key Elements**:
- Gradient background with purple/violet theme
- Product tagline and description
- Primary CTA button (Download Now)
- Secondary CTA (Learn More)
- Visual file structure preview
- Trust indicators (100% Private, Smart Reminders)

**Icons Used**: Shield, FolderOpen, Bell, Sparkles

### Features.tsx
**Purpose**: Display product features in a grid layout

**Features Array**:
1. Smart Organization (FolderTree icon)
2. Expiry Reminders (Bell icon)
3. Works Everywhere (Cloud icon)
4. Smart Naming (FileText icon)
5. 100% Private (Shield icon)
6. Fast & Lightweight (Zap icon)

**Layout**: Responsive grid (1 column mobile, 2 tablet, 3 desktop)

### DownloadSection.tsx
**Purpose**: Platform-specific download options

**Platforms Supported**:
- Windows (Windows 10/11, 64-bit)
- macOS (macOS 11+ Big Sur or later)
- Linux (Ubuntu 20.04+, Fedora 34+)

**Current Status**: All platforms marked as "Coming Soon"

**Design**: Card-based layout with platform icons and requirements

### Navbar.tsx
**Purpose**: Site navigation and theme switching

**Features**:
- Responsive design (desktop/mobile views)
- Theme toggle (light/dark mode with localStorage persistence)
- Logo and branding
- Navigation links (Home, Download)
- Mobile hamburger menu

**Theme Implementation**: 
- Syncs with system preferences
- Persists user choice in localStorage
- Prevents flash of wrong theme on load

### Footer.tsx
**Purpose**: Site footer with links and information

**Sections**:
- Logo and description
- Product links (Home, Download)
- Support links (Documentation, Contact - currently placeholders)
- Social media icons (GitHub, Twitter - currently placeholders)
- Copyright notice

### Layout.astro
**Purpose**: Main page layout wrapper

**Features**:
- SEO meta tags
- Favicon configuration
- Theme initialization script (prevents FOUC)
- Responsive structure
- Smooth scroll behavior

## Pages Documentation

### index.astro
**Route**: `/`

**Components**:
- Hero (client:load)
- Features (client:load)

**Purpose**: Main landing page

### download.astro
**Route**: `/download`

**Components**:
- DownloadSection (client:load)

**Purpose**: Platform-specific download page

## Styling & Theme

### Color Scheme
- **Primary**: Purple to violet gradient (#9333EA to #7C3AED range)
- **Base**: Uses DaisyUI base-100/200/300 tokens
- **Accent**: Purple/violet throughout

### Design System
- **Components**: DaisyUI component library
- **Utilities**: Tailwind CSS
- **Typography**: System fonts, responsive sizing
- **Spacing**: Consistent padding/margin system

### Theme Support
- Light and dark modes
- Automatic system preference detection
- Manual toggle with persistence
- Smooth transitions between themes

## Development Guide

### Available Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server at localhost:4321
npm run build            # Build production site to ./dist/
npm run preview          # Preview build locally
npm run astro ...        # Run Astro CLI commands
npm run astro -- --help  # Get Astro CLI help
```

### Development Server
- Default port: 4321
- Hot reload enabled
- TypeScript checking

### Build Process
- Output directory: `./dist/`
- Static site generation
- Optimized assets

## Content Strategy

### Value Proposition
"Turn your existing cloud and local storage into a structured vault for IDs, warranties, receipts, and important documents—complete with presets, smart naming, and reminders."

### Target Audience
- Individuals seeking digital organization
- Users with multiple cloud storage providers
- Privacy-conscious consumers
- Document-heavy professionals

### Key Messaging
1. **File-System-First**: Works with existing storage
2. **Privacy**: 100% private, no third-party uploads
3. **Smart**: Automated organization and reminders
4. **Accessible**: Free to download, cross-platform

## Future Enhancements

### Planned Features (Based on "Coming Soon" Status)
- Windows desktop application
- macOS desktop application
- Linux desktop application
- Newsletter signup
- Documentation section
- Contact/support system
- Active social media links
- GitHub repository link

## SEO & Marketing

### Current Meta Description
"LifeVault - A file-system-first organizer that turns your existing cloud/local storage into a structured vault for IDs, warranties, receipts, and important documents."

### Domain
- Primary: lifevault.sabrlabs.com
- Organization: Sabr Labs

### Branding
- Logo: logo_transparent256.png (256x256)
- Favicon: Available in SVG and ICO formats
- Color identity: Purple/violet gradient theme

## AI Agent Instructions

### When Working on This Project:

1. **Maintain Consistency**
   - Keep purple/violet gradient theme (#9333EA to #7C3AED)
   - Use DaisyUI components and tokens
   - Follow existing naming conventions
   - Maintain responsive design patterns

2. **Component Development**
   - Use TypeScript for all React components
   - Import icons from lucide-react
   - Apply Tailwind classes for styling
   - Use client:load directive in Astro pages for interactive components
   - Maintain accessibility (aria-labels, semantic HTML)

3. **Theme Support**
   - Always support both light and dark themes
   - Use DaisyUI theme tokens (base-100, base-content, etc.)
   - Test theme switching functionality
   - Prevent FOUC (Flash of Unstyled Content)

4. **Responsive Design**
   - Mobile-first approach
   - Test breakpoints: sm, md, lg
   - Ensure touch-friendly interactions
   - Optimize for various screen sizes

5. **Performance**
   - Minimize bundle size
   - Optimize images
   - Lazy load when appropriate
   - Keep core web vitals in mind

6. **Content Updates**
   - When product launches, update "Coming Soon" badges
   - Add actual download URLs when available
   - Update social media links when active
   - Keep year in footer current

7. **New Features**
   - Follow existing component patterns
   - Document new functionality
   - Maintain type safety
   - Test across themes and devices

8. **Documentation**
   - Do NOT create separate documentation files (e.g., IMPLEMENTATION.md, SUMMARY.md)
   - Update README.md only when necessary for user-facing instructions
   - Keep implementation details in code comments
   - Let the code be self-documenting

### Code Style Guidelines

**React Components**:
```tsx
// Use functional components with TypeScript
export default function ComponentName() {
  // Hooks at the top
  // Event handlers
  // Return JSX
}
```

**Styling**:
- Use Tailwind utility classes
- Leverage DaisyUI components
- Apply responsive modifiers (sm:, md:, lg:)
- Use theme tokens for colors

**Astro Pages**:
```astro
---
// Imports and frontmatter
import Layout from "../layouts/Layout.astro";
---

<Layout title="Page Title">
  <!-- Content -->
</Layout>
```

### Testing Considerations
- Test theme switching
- Verify responsive layouts
- Check mobile menu functionality
- Validate accessibility
- Test across browsers
- Verify link functionality

## Support & Maintenance

### Repository Information
- Owner: Sabr-Labs
- Project: LifeVault-Web
- Primary branch: main

### Contact
- Organization: Sabr Labs
- Website: lifevault.sabrlabs.com

---

*Last Updated: February 5, 2026*
*Documentation Version: 1.0*
