# Chef Jake - Michelin Inspired Student Food Delivery

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/brettchiate-3003s-projects/v0-chef-jake-frontend)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/cGxoQwA75cs)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.25-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🍽️ Overview

Chef Jake is a premium food delivery platform designed specifically for students, offering Michelin-inspired meals at accessible prices. The platform bridges the gap between fine dining quality and student-friendly convenience, bringing restaurant-quality meals to busy students who deserve better than instant ramen but don't have time to cook.

## ✨ Key Features

### 🏠 **Landing Page Experience**
- **Hero Section**: Compelling introduction with call-to-action buttons
- **Chef's Story**: Personal narrative from Chef Jake Bonz about his journey from Michelin kitchens to student-focused delivery
- **Featured Dishes**: Showcase of signature menu items with high-quality imagery
- **How It Works**: Clear explanation of the ordering and delivery process
- **Customer Testimonials**: Social proof from satisfied students
- **Contact Section**: Easy ways to get in touch

### 🍴 **Menu System**
- **Comprehensive Menu Page**: Grid layout showcasing all available dishes
- **Individual Dish Pages**: Detailed product pages with:
  - High-resolution food photography
  - Detailed ingredient lists
  - Allergen information
  - Nutritional information
  - Quantity selectors
  - Add to cart functionality
- **Category Organization**: Dishes organized by type (Bowls, Comfort, Seafood, Pasta, Italian)

### 🛒 **Shopping Cart & Checkout**
- **Slide-out Cart Drawer**: Modern cart interface with:
  - Item quantity controls
  - Remove item functionality
  - Real-time subtotal calculation
  - Quick checkout access
- **Complete Checkout Flow**: 
  - Delivery information form
  - Payment information collection
  - Order summary with itemized pricing
  - Delivery fee calculation
  - Terms and conditions acceptance

### 📦 **Order Tracking**
- **Order Status Tracking**: Real-time order progress monitoring
- **Timeline Visualization**: Visual progress indicators showing:
  - Order placed
  - Meal preparation
  - Out for delivery
  - Delivered
- **Order Details**: Complete order information including items and estimated delivery

### 🎨 **User Experience**
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Modern UI Components**: Built with Radix UI and shadcn/ui for accessibility
- **Dark/Light Theme Support**: Theme provider with system preference detection
- **Toast Notifications**: User feedback for actions and errors

## 🛠️ Technical Stack

### **Frontend Framework**
- **Next.js 14.2.25**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 5.0**: Type-safe development

### **Styling & UI**
- **Tailwind CSS 4.1.9**: Utility-first CSS framework
- **shadcn/ui**: Modern component library built on Radix UI
- **Radix UI**: Accessible, unstyled UI primitives
- **Framer Motion 12.23.22**: Animation library for smooth interactions
- **Lucide React**: Beautiful, customizable icons

### **Fonts & Typography**
- **Playfair Display**: Elegant serif font for headings and branding
- **Inter**: Clean sans-serif font for body text and UI elements

### **Development Tools**
- **PostCSS**: CSS processing with autoprefixer
- **ESLint**: Code linting and quality assurance
- **pnpm**: Fast, disk space efficient package manager

### **Analytics & Monitoring**
- **Vercel Analytics**: Performance and user behavior tracking

## 📁 Project Structure

```
v0-chef-jake-frontend/
├── app/                          # Next.js App Router
│   ├── checkout/                 # Checkout page
│   │   └── page.tsx
│   ├── menu/                     # Menu pages
│   │   ├── [slug]/              # Dynamic dish detail pages
│   │   │   └── page.tsx
│   │   └── page.tsx             # Main menu page
│   ├── track/                   # Order tracking
│   │   └── page.tsx
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── sections/                # Page sections
│   │   ├── chef-story-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── featured-dishes-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   └── testimonials-section.tsx
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── separator.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   └── toaster.tsx
│   ├── cart-drawer.tsx          # Shopping cart component
│   ├── footer.tsx               # Site footer
│   ├── navigation.tsx           # Main navigation
│   └── theme-provider.tsx       # Theme management
├── hooks/                       # Custom React hooks
│   └── use-toast.ts
├── lib/                         # Utility functions
│   ├── mock-data.ts             # Sample data
│   └── utils.ts                 # Helper functions
├── public/                      # Static assets
│   ├── *.jpg                    # Food photography
│   ├── *.png                    # Images and logos
│   └── *.svg                    # Icons and graphics
├── styles/                      # Additional styles
│   └── globals.css
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
└── tsconfig.json                # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RentaProfessor/v0-chef-jake-frontend.git
   cd v0-chef-jake-frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎯 Core Functionality

### **Menu Management**
The application features a comprehensive menu system with:
- **6 Signature Dishes**: Including Mediterranean bowls, truffle mac & cheese, miso-glazed salmon, Korean BBQ, pesto pasta, and chicken parmesan
- **Dynamic Pricing**: $13-$18 range for premium student-friendly pricing
- **Detailed Descriptions**: Rich, appetizing descriptions for each dish
- **High-Quality Imagery**: Professional food photography for visual appeal

### **Shopping Experience**
- **Intuitive Cart Management**: Easy add/remove functionality with quantity controls
- **Real-time Calculations**: Automatic subtotal and total calculations
- **Smooth Checkout Flow**: Streamlined process from cart to order confirmation
- **Order Tracking**: Complete visibility into order status and delivery timeline

### **User Interface**
- **Mobile-First Design**: Responsive layout optimized for all devices
- **Accessibility**: Built with Radix UI primitives for screen reader compatibility
- **Performance**: Optimized images and lazy loading for fast load times
- **Modern Aesthetics**: Clean, professional design that reflects the premium brand

## 🌐 Deployment

The application is automatically deployed on Vercel and stays in sync with v0.app deployments:

- **Live URL**: [https://vercel.com/brettchiate-3003s-projects/v0-chef-jake-frontend](https://vercel.com/brettchiate-3003s-projects/v0-chef-jake-frontend)
- **Development**: [https://v0.app/chat/projects/cGxoQwA75cs](https://v0.app/chat/projects/cGxoQwA75cs)

## 🔄 Development Workflow

This repository is automatically synced with v0.app deployments:

1. **Create and modify** your project using [v0.app](https://v0.app)
2. **Deploy your chats** from the v0 interface
3. **Changes are automatically pushed** to this repository
4. **Vercel deploys** the latest version from this repository

## 🎨 Design Philosophy

Chef Jake embodies the perfect balance between:
- **Premium Quality**: Michelin-inspired recipes and presentation
- **Student Accessibility**: Affordable pricing and convenient delivery
- **Modern Technology**: Cutting-edge web development practices
- **User Experience**: Intuitive, fast, and delightful interactions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This project is built with v0.app and automatically synced. For modifications:
1. Use the v0.app interface for development
2. Changes will be automatically pushed to this repository
3. Vercel will handle deployment automatically

## 📄 License

This project is private and proprietary to Chef Jake.

---

**Built with ❤️ for students who deserve better meals**