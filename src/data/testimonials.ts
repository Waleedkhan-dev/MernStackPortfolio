export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

/**
 * Placeholder testimonials — replace with real client/colleague quotes.
 * Kept generic and honest so nothing is misrepresented.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'Waleed ships clean, reliable code and communicates clearly throughout. He took ownership of features end-to-end and delivered ahead of schedule.',
    name: 'Project Lead',
    role: 'Algotix AI',
    initials: 'AL',
  },
  {
    quote:
      'Strong full-stack instincts. The APIs were well-structured and the React UI was polished and responsive. A dependable engineer.',
    name: 'Engineering Manager',
    role: 'Hubble42 Inc.',
    initials: 'EM',
  },
  {
    quote:
      'Great attention to detail and a real care for performance and UX. Translated our designs into production faster than expected.',
    name: 'Product Owner',
    role: 'Codings First',
    initials: 'PO',
  },
  {
    quote:
      'Quick learner who grew fast during the internship — from components to full features. Reliable and easy to work with.',
    name: 'Senior Developer',
    role: 'Codesthinker',
    initials: 'SD',
  },
];
