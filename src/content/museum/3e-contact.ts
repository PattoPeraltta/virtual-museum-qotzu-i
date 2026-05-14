import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '3e',
  title: 'Contact Information',
  subtitle: 'Get in Touch',
  summary:
    'Reach out to the Qotzuñi project team for press inquiries, partnership opportunities, or general questions.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'For press inquiries, partnership opportunities, educational collaboration, or general questions about the Qotzuñi project, please reach out via the contact information below.',
    },
    {
      type: 'text',
      htmlContent:
        '<strong>Email:</strong> contact@qotzuni.org<br/><strong>Website:</strong> <a href="https://qotzunifilm.com" target="_blank" rel="noreferrer">qotzunifilm.com</a>',
    },
  ],
  media: [],
  links: [
    { title: 'Qotzuñi Film Website', url: 'https://qotzunifilm.com' },
  ],
  citations: [],
  relatedSections: ['3a', '3d'],
};

export default content;
