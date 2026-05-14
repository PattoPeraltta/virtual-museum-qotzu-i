import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '2b',
  title: 'Ways of Life',
  subtitle: 'Artisanship and Adaptation',
  summary:
    'The Urus of Lake Poopó have practiced craftsmanship for as long as they have had their lacustrine way of life. In times of drought, Uru families have turned to selling artisan goods for income.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'The Urus of Lake Poopó have practiced craftsmanship for as long as they have had their lacustrine way of life, as the weaving of <em>totora</em> reeds and other aquatic straw-like flora was necessary for the building of the rafts on which they lived and traveled. Generations of Urus have created artisan clothing, accessories, tools, structures, and spiritual items by hand.',
    },
    {
      type: 'text',
      htmlContent:
        'As a result, in times of serious drought (like the one faced for the past decade), Uru families have turned to selling their artisan goods to neighboring communities for sources of income. Female heads of household generally attend <em>ferias</em>, or street fairs, in nearby towns once a week, and occasionally visit larger cities like Oruro, La Paz, Cochabamba, and Santa Cruz to sell their crafts. Since 2017, with a grant from the U.N. World Food Programme, the Uru women have formed an artisan cooperative to centralize craftsmaking.',
    },
    {
      type: 'text',
      htmlContent:
        'The increasing importance of artisan sales — an effort led chiefly by women — has explicitly elevated the position of women more broadly in Uru society. In authority meetings, women now have equal say to that of the men, and some women now hold official liaison positions to the Bolivian government.',
    },
  ],
  media: [
    {
      src: '/images/artesanas.png',
      alt: 'Members of the Cooperativa de Artesanías',
      caption: 'Members of the Cooperativa de Artesanías.',
      type: 'image',
    },
    {
      src: '/images/telador.png',
      alt: 'A wooden spindle for an Uru loom',
      caption: 'A wooden spindle for an Uru loom is shaped to signify a boat.',
      type: 'image',
    },
    {
      src: '/images/ritual.png',
      alt: 'An Uru elder performs a ritual',
      caption: 'An Uru elder performs a ritual with artisan crafts that represent the lost lacustrine culture, with hopes for the water to return.',
      type: 'image',
    },
  ],
  links: [],
  citations: [],
  relatedSections: ['2b-i', '2b-ii', '2c'],
};

export default content;
