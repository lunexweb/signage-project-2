# SOLARQUENCH Website

A modern, professional website for SOLARQUENCH - POWERING TOMORROW, TODAY. A leading solar energy provider in South Africa.

## Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Professional Branding**: Clean, solar-themed design with custom color scheme
- **Multi-page Layout**: Home, About, Products, Gallery, Quote, and Contact pages
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter Card support

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm 7+

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Route pages
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Products.tsx    # Products page
│   ├── Gallery.tsx     # Gallery page
│   ├── Quote.tsx       # Quote request page
│   └── Contact.tsx     # Contact page
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and design tokens
```

## Customization

### Design System

The project uses a custom design system defined in `src/index.css` with:
- Solar-themed color palette (orange, blue, green)
- Custom CSS variables for consistent theming
- Responsive breakpoints and typography

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`

### Styling

- Use Tailwind CSS classes for styling
- Custom design tokens are available as CSS variables
- Component-specific styles can be added inline or in separate CSS files

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## License

© 2024 SOLARQUENCH. All rights reserved.