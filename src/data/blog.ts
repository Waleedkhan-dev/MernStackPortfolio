export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tag: string;
  comingSoon?: boolean;
};

/**
 * Blog is scaffolded for future integration (MDX/CMS).
 * These are upcoming-post placeholders.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: 'scaling-mern-apps',
    title: 'Architecting MERN Apps That Scale',
    excerpt:
      'Patterns I use to keep Express + MongoDB codebases maintainable as features and traffic grow.',
    date: 'Coming soon',
    readingTime: '8 min read',
    tag: 'Backend',
    comingSoon: true,
  },
  {
    slug: 'rag-chatbots-in-production',
    title: 'Building Grounded AI Chatbots with RAG',
    excerpt:
      'Lessons from shipping retrieval-augmented chatbots with OpenAI and LangChain to real users.',
    date: 'Coming soon',
    readingTime: '10 min read',
    tag: 'AI',
    comingSoon: true,
  },
  {
    slug: 'nextjs-performance',
    title: 'Squeezing Performance Out of Next.js',
    excerpt:
      'Practical techniques for great Core Web Vitals — images, fonts, code-splitting, and caching.',
    date: 'Coming soon',
    readingTime: '7 min read',
    tag: 'Frontend',
    comingSoon: true,
  },
];
