import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '3b',
  title: 'Local Impact Campaign',
  subtitle: 'Partners and Initiatives on the Ground',
  summary:
    'The Qotzuñi impact campaign partners with local organizations to build food security infrastructure and support the Uru communities directly.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'The Qotzuñi impact campaign partners with local and international organizations to transfer the film\'s global visibility into material change for the Uru communities of Lake Poopó.',
    },
    {
      type: 'heading',
      content: 'Partners',
      level: 2,
    },
    {
      type: 'text',
      htmlContent:
        '<strong>Fundación de Pueblos de Montaña y Derechos Ambientales</strong><br/>A foundation dedicated to environmental rights and the protection of mountain communities, working closely with indigenous peoples affected by environmental changes.',
    },
    {
      type: 'text',
      htmlContent:
        '<strong>Centro de Ecología y Pueblos Andinos (CEPA)</strong><br/>Based in Oruro, Bolivia, CEPA has been instrumental in protecting the Uru people from discrimination and advocating for their rights in the face of environmental disasters.',
    },
    {
      type: 'text',
      htmlContent:
        '<strong>Earth Alliance</strong><br/>Earth Alliance works at the intersection of climate and creativity to inspire action. They collaborate with diverse networks of people and organizations to accelerate solutions to the climate crisis.',
    },
    {
      type: 'text',
      htmlContent:
        '<strong>Re:Wild</strong><br/>Re:Wild is a global conservation organization dedicated to protecting and restoring biodiversity working with over 500 partners in more than 80 countries.',
    },
    {
      type: 'text',
      htmlContent:
        '<strong>11th Hour Project — a program of the Schmidt Family Foundation</strong><br/>A US-based project dedicated to bringing community-based environmental solutions to disenfranchised indigenous communities across the Americas.',
    },
  ],
  media: [],
  links: [
    { title: 'Fundación de Pueblos de Montaña', url: 'https://www.facebook.com/profile.php?id=61558746964987' },
    { title: 'Centro de Ecología y Pueblos Andinos (CEPA)', url: 'https://cepaoruro.org/' },
    { title: 'Earth Alliance', url: 'https://earthalliance.org/' },
    { title: 'Re:Wild', url: 'https://www.rewild.org/' },
    { title: '11th Hour Project', url: 'https://11thhourproject.org/' },
  ],
  citations: [],
  relatedSections: ['3a', '3c', '3d'],
};

export default content;
