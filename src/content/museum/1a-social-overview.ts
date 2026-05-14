import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '1a',
  title: 'Social Overview',
  subtitle: 'The Lifeblood of the Altiplano',
  summary:
    'For over 10,000 years, the Titicaca-Desaguadero-Poopó-Salares basin has sustained human life in the high Andes — from early agropastoralist communities to the Tiwanaku and Inca Empires.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'The Desaguadero River, which carries runoff from Lake Titicaca, has historically been the lake\'s primary water source. Additional inflows come from mountain streams like the Juchusuma, Pazña, and Huanuni Rivers, which originate in the mineral-rich Cordillera Central — an area heavily exploited for tin, silver, and other metals. These rivers are highly seasonal, flowing primarily between November and April.',
    },
    {
      type: 'text',
      htmlContent:
        'For over 10,000 years, the Titicaca-Desaguadero-Poopó-Salares (TSPS) basin has sustained human life in the high Andes. The waters of Lake Titicaca and the Desaguadero River supported early agropastoralist communities and later served as a foundation for complex societies such as the Tiwanaku and Inca Empires. These civilizations engineered sophisticated irrigation systems to control water distribution, ensuring agricultural productivity in the arid altiplano. Today, as Lake Poopó faces an uncertain future, its story serves as a warning of the delicate balance between human activity and environmental sustainability.',
    },
  ],
  media: [
    {
      src: '/images/cipriana.png',
      alt: 'The dried bed of Lake Poopó',
      caption: 'Once more than a meter of fresh-to-brackish water, now there is only a bed of coipa, or salt flat.',
      type: 'image',
    },
  ],
  links: [],
  citations: [],
  relatedSections: ['1b', '1c', '2a'],
};

export default content;
