export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'AI / SaaS' | 'Frontend' | 'Dashboard';
  year: string;
  image: string;
  featured: boolean;
  tech: string[];
  description: string;
  features: string[];
  architecture: string;
  challenges: string[];
  lessons: string[];
  links: {
    live?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'orderflow',
    title: 'OrderFlow',
    tagline: 'Delivery & order management platform.',
    category: 'Full Stack',
    year: '2025',
    image: '/projects/orderflow.png',
    featured: true,
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Stripe'],
    description:
      'A full-stack delivery and order management platform that streamlines the flow from order placement to dispatch and fulfillment, with real-time tracking and an operations dashboard.',
    features: [
      'End-to-end order placement and management',
      'Real-time order tracking and status updates',
      'Operations dashboard for dispatch and fulfillment',
      'Secure payments and checkout',
      'Responsive UI optimized for speed',
    ],
    architecture:
      'Next.js frontend with a Node API layer, PostgreSQL for orders and logistics data, realtime updates for live tracking, and payment integration. Deployed on Vercel with a managed database.',
    challenges: [
      'Keeping order state in sync across customer, operator, and delivery views in real time',
      'Designing a fulfillment flow that stays reliable under concurrent updates',
    ],
    lessons: [
      'Event-driven state updates keep multi-actor workflows consistent',
      'Clear status modeling makes complex logistics flows easy to reason about',
    ],
    links: { live: 'https://orderflow.delivery/' },
  },
  {
    slug: 'keptcold',
    title: 'KeptCold',
    tagline: 'Cold-chain delivery & temperature-controlled logistics.',
    category: 'Full Stack',
    year: '2025',
    image: '/projects/keptcold.png',
    featured: true,
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    description:
      'A web platform for cold-chain delivery and temperature-controlled logistics, giving customers a clean way to book, manage, and track refrigerated shipments.',
    features: [
      'Booking and management of temperature-controlled deliveries',
      'Shipment tracking and status updates',
      'Clear, conversion-focused marketing site',
      'Responsive, accessible UI across devices',
      'Fast load times and SEO-friendly pages',
    ],
    architecture:
      'Next.js frontend with a Node API layer and PostgreSQL for bookings and shipment data. Server-rendered pages for SEO, with optimized assets. Deployed for reliability and speed.',
    challenges: [
      'Communicating a logistics service clearly and building trust through UX',
      'Modeling bookings and shipment states for a temperature-sensitive workflow',
    ],
    lessons: [
      'For service businesses, clarity and trust signals drive conversions',
      'Solid data modeling up front keeps logistics features maintainable',
    ],
    links: { live: 'https://www.keptcold.co.uk/' },
  },
  {
    slug: 'lms',
    title: 'Learning Management System',
    tagline: 'Full-featured LMS for courses & students.',
    category: 'Full Stack',
    year: '2025',
    image: '/projects/lms.png',
    featured: true,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    description:
      'A complete learning management system built as a final-year project — course creation, enrollment, content delivery, and progress tracking for students and instructors.',
    features: [
      'Course creation and content management for instructors',
      'Student enrollment and progress tracking',
      'Authentication with role-based dashboards',
      'Lesson delivery with structured modules',
      'Responsive across desktop and mobile',
    ],
    architecture:
      'Classic MERN architecture — React SPA, Express REST API, MongoDB with Mongoose models, JWT-based auth. Frontend on Vercel, API on a Node host.',
    challenges: [
      'Modeling the course → module → lesson hierarchy flexibly',
      'Keeping instructor and student experiences cohesive in one app',
    ],
    lessons: [
      'Good data modeling upfront simplifies every feature downstream',
      'Splitting dashboards by role keeps each experience focused',
    ],
    links: { live: 'https://fyp-lms-frontend.vercel.app' },
  },
  {
    slug: 'bevvybullet',
    title: 'BevvyBullet',
    tagline: 'A modern beverage e-commerce experience.',
    category: 'Full Stack',
    year: '2025',
    image: '/projects/bevvybullet.png',
    featured: true,
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Stripe', 'MongoDB'],
    description:
      'A production e-commerce platform for beverages with a polished storefront, cart, secure checkout, and an admin layer for catalog management.',
    features: [
      'Product catalog with search, filtering, and categories',
      'Persistent cart and streamlined checkout flow',
      'Secure payments and order management',
      'Responsive, conversion-focused storefront UI',
      'Admin tooling for products and orders',
    ],
    architecture:
      'Next.js frontend talking to a Node/Express API, MongoDB for catalog and orders, payment provider integration, and image/asset delivery via a CDN. Deployed on Vercel with serverless API routes.',
    challenges: [
      'Designing a cart and checkout that stay consistent across refreshes and devices',
      'Handling payment edge cases and order state transitions reliably',
    ],
    lessons: [
      'Server state and client state need clear boundaries to avoid sync bugs',
      'Investing early in reusable UI primitives paid off across the whole store',
    ],
    links: { live: 'https://www.bevvybullet.com' },
  },
  {
    slug: 'botbytesai',
    title: 'BotBytesAI',
    tagline: 'AI automation, full-stack web & GoHighLevel systems.',
    category: 'AI / SaaS',
    year: '2025',
    image: '/projects/botbytesai.png',
    featured: true,
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'OpenAI', 'LangChain', 'GoHighLevel'],
    description:
      'An agency platform for BotBytesAI — building AI agents, web apps, and GoHighLevel automations that take manual work off teams so businesses run and scale on autopilot. 26+ projects shipped, 250+ deployments, and 98% client retention.',
    features: [
      'AI automation — LLM orchestration & workflow automation that cuts operational overhead by up to 60%',
      'Custom RAG pipelines and automated agentic workflows',
      'Model fine-tuning & evaluation',
      'Full-stack web — resilient architectures built for global scale and security',
      'GoHighLevel (GHL) expert implementation and customization',
      'Mobile apps with native-feel performance from a single codebase',
      'Lead-gen: free Automation Readiness Assessment & discovery-call booking',
    ],
    architecture:
      'Marketing and service platform built with Next.js, React, and Tailwind CSS, backed by a Node.js layer that orchestrates LLM-powered automation (RAG pipelines, agentic workflows) and integrates with the GoHighLevel ecosystem. Conversion-focused pages for services, portfolio, blog, and lead capture.',
    challenges: [
      'Communicating a broad service offering (AI, web, GHL, mobile) clearly without overwhelming visitors',
      'Designing reliable LLM orchestration and agentic workflows for real client operations',
    ],
    lessons: [
      'A focused information hierarchy turns a wide service menu into clear, high-converting pages',
      'Grounded, well-evaluated AI workflows build the trust that wins long-term clients',
    ],
    links: { live: 'https://botbytesai.com' },
  },
  {
    slug: 'unifimed',
    title: 'Unifimed Insight Nexus',
    tagline: 'Healthcare consultation & insights platform.',
    category: 'Full Stack',
    year: '2025',
    image: '/projects/unifimed.png',
    featured: true,
    tech: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    description:
      'A healthcare platform enabling patient consultations and data-driven insights through a clean, accessible interface designed for clinical workflows.',
    features: [
      'Consultation booking and management',
      'Patient data visualization and insights',
      'Role-based access for clinicians and patients',
      'Accessible, responsive clinical UI',
    ],
    architecture:
      'Next.js frontend with a typed API layer, PostgreSQL for relational patient/consultation data, and secure authentication. Deployed on Vercel.',
    challenges: [
      'Presenting dense medical data clearly without overwhelming users',
      'Meeting accessibility expectations for a clinical audience',
    ],
    lessons: [
      'Information hierarchy is a feature in data-heavy products',
      'Accessibility constraints often lead to better UX for everyone',
    ],
    links: { live: 'https://unifimed-insight-nexus.vercel.app/consultation' },
  },
  {
    slug: 'system-demo',
    title: 'System Dashboard',
    tagline: 'Admin & analytics dashboard.',
    category: 'Dashboard',
    year: '2025',
    image: '/projects/system-demo.jpg',
    featured: false,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart libraries', 'Node.js'],
    description:
      'An admin dashboard showcasing analytics, profile overviews, and data management UI patterns — built to demonstrate reusable dashboard components.',
    features: [
      'Overview metrics and analytics widgets',
      'Profile and account management views',
      'Reusable table, card, and chart components',
      'Responsive layout with collapsible navigation',
    ],
    architecture:
      'Component-driven React app with a typed component library and mock/data API layer. Deployed on Vercel.',
    challenges: ['Building dashboard components flexible enough to reuse across views'],
    lessons: ['A small, well-designed component set scales further than many one-off components'],
    links: { live: 'https://system-demo-green.vercel.app/profile/overview' },
  },
  {
    slug: 'ecommerce-redux',
    title: 'E-Commerce Store',
    tagline: 'Redux-powered shopping experience.',
    category: 'Frontend',
    year: '2024',
    image: '/projects/ecommerce.png',
    featured: false,
    tech: ['React', 'Redux Toolkit', 'Redux Thunk', 'JavaScript', 'CSS'],
    description:
      'A frontend e-commerce store demonstrating robust client-state management with Redux Toolkit and async data flows with Thunk.',
    features: [
      'Product listing fetched from an API',
      'Cart management with Redux Toolkit',
      'Async data flows handled with Redux Thunk',
      'Responsive product grid and cart UI',
    ],
    architecture:
      'React SPA with Redux Toolkit store, Thunk middleware for async fetching, and a REST product API. Deployed on Netlify.',
    challenges: ['Structuring Redux slices to stay maintainable as features grew'],
    lessons: ['Redux Toolkit removes most boilerplate — embrace the conventions'],
    links: { live: 'https://redux-thunk-e-commerce.netlify.app/' },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
