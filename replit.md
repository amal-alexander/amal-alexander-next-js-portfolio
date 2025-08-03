# Overview

This is a modern full-stack portfolio application showcasing expertise in automation, computer vision, and modern tech stacks. Built as a personal portfolio for Amal Alexander, the application features a futuristic design with glass morphism effects, particle animations, and showcases four main projects: AI Redirect Mapping, DOM vs Bot Diff Checker, Google NLP Clone, and Above-the-Fold Analyzer.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 19 with TypeScript and Vite for fast development
- **UI Framework**: Shadcn/ui components with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system featuring futuristic color palette (blue, purple, green, pink accents)
- **Animation**: Framer Motion for smooth animations and transitions
- **State Management**: React Hook Form with Zod validation for forms, TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Design System**: Glass morphism effects, holographic borders, and neon text animations

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Storage**: In-memory storage implementation with interface for easy migration to database
- **API Structure**: RESTful endpoints for contact form submissions and message retrieval
- **Validation**: Zod schemas shared between client and server for consistent validation
- **Development**: Hot reload with Vite integration and structured logging

## Database Schema
- **Users Table**: Basic user structure with UUID primary keys, username, and password fields
- **Contact Messages Table**: Stores contact form submissions with name, email, company, message, and timestamp
- **Schema Management**: Drizzle migrations with shared TypeScript types

## Form Handling
- **Contact Form**: Full-stack form with client-side validation, server-side processing, and success/error feedback
- **Validation**: Zod schemas ensure data integrity across client and server
- **UI Feedback**: Toast notifications and loading states for better user experience

## Design Patterns
- **Component Architecture**: Modular UI components with consistent prop interfaces
- **Glass Cards**: Reusable glass morphism card components with customizable animations
- **Animated Borders**: Holographic border effects with multiple color variants
- **Particle System**: Dynamic particle background with periodic regeneration

# External Dependencies

## Frontend Libraries
- **@radix-ui**: Complete set of headless UI components for accessibility
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management with validation
- **@hookform/resolvers**: Zod integration for form validation
- **class-variance-authority**: Type-safe component variants
- **clsx & tailwind-merge**: Utility for conditional CSS classes
- **lucide-react**: Icon library for consistent iconography
- **framer-motion**: Animation library for smooth transitions

## Backend Dependencies
- **express**: Web framework for REST API
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: PostgreSQL database adapter
- **drizzle-zod**: Schema validation integration
- **zod**: Runtime type validation
- **connect-pg-simple**: PostgreSQL session store

## Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety across the entire application
- **tailwindcss**: Utility-first CSS framework
- **esbuild**: Fast JavaScript bundler for production builds
- **drizzle-kit**: Database schema management and migrations