import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '2b-i',
  title: 'Leadership Structure & Gender',
  subtitle: 'The Shifting Role of Women',
  summary:
    'The formation of the Cooperativa de Artesanías in 2017 centralized craftsmaking under female leadership. As women became the primary economic drivers, their authority within the community grew correspondingly.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'The formation of the Cooperativa de Artesanías in 2017, funded by a U.N. World Food Programme grant, centralized craftsmaking under female leadership. As women became the primary economic drivers of their households — attending weekly <em>ferias</em> in nearby towns and traveling to cities including Oruro, La Paz, Cochabamba, and Santa Cruz — their authority within the community grew correspondingly.',
    },
    {
      type: 'text',
      htmlContent:
        'In authority meetings, women now have equal say to that of the men, and some women now hold official liaison positions to the Bolivian government. This transformation illustrates how economic adaptation in the face of environmental crisis can reshape social structures in profound and positive ways.',
    },
  ],
  media: [
    {
      src: '/images/artesanas.png',
      alt: 'Members of the Cooperativa de Artesanías',
      caption: 'Members of the Cooperativa de Artesanías.',
      type: 'image',
    },
  ],
  links: [],
  citations: [],
  relatedSections: ['2b', '2b-ii', '2c'],
};

export default content;
