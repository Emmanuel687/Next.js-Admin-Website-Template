# Next.js Admin + Website Template

# Overview
A modern, full-stack web application template built with Next.js 14, featuring a public-facing website and a secure admin dashboard. This template provides a robust foundation for building scalable web applications with user authentication, dynamic content management, and a responsive design.
Features


# Website Features

Modern, responsive landing page

Blog/News section

About page

Contact form

Dynamic product/service showcase

SEO optimization

Performance-optimized images and assets

# Admin Dashboard Features

Secure authentication system

Role-based access control

Dashboard analytics

User management

Content management system

File upload functionality

Real-time data updates

Activity logging

# Tech Stack

Framework: Next.js 14

Styling: Tailwind CSS

Database: PostgreSQL with Prisma

Authentication: NextAuth.js

State Management: Zustand

Form Handling: React Hook Form

Data Validation: Zod

UI Components: shadcn/ui

Icons: Lucide Icons

Charts: Recharts

# Getting Started
Prerequisites

Node.js 18+

npm

PostgreSQL database

 ├── app/
│   ├── admin/             # Admin dashboard routes
│   ├── api/              # API routes
│   └── (site)/           # Public website routes
├── components/
│   ├── admin/            # Admin-specific components
│   ├── shared/           # Shared components
│   └── ui/               # UI components
├── lib/
│   ├── prisma/           # Database configuration
│   └── utils/            # Utility functions
├── public/               # Static assets
└── styles/              # Global styles
