import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '2b-ii',
  title: 'Cosmology & Spirituality',
  subtitle: 'Qotamama — Mother Lake',
  summary:
    'Uru spiritual life is inseparable from the lake. As other Andean cultures speak of Pachamama — Mother Earth — the Urus of Lake Poopó honor Qotamama, Mother Lake, as the sacred center of their cosmological world.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'Uru spiritual life is inseparable from the lake. As other Andean cultures speak of <em>Pachamama</em> — Mother Earth — the Urus of Lake Poopó honor <em>Qotamama</em>, Mother Lake, as the sacred center of their cosmological world. The lake, its islands, and the surrounding ecosystem are considered sacred spaces, and the community\'s identity, rituals, and spiritual practices are all oriented around their relationship with water.',
    },
    {
      type: 'text',
      htmlContent:
        'Among the most venerated phenomena within the lake are the <em>jalsuris</em> — whirlpools that form on the surface of Lake Poopó. Before entering the lake, community members perform rituals that both seek permission to use the lake\'s resources and reaffirm their collective identity as Qotzuñi. Dedicated rituals accompany hunting and fishing, the community\'s primary means of survival, marking these acts not merely as subsistence but as sacred obligations.',
    },
    {
      type: 'text',
      htmlContent:
        'The Uru mythic tradition features zoomorphic imagery, with serpents and toads as prominent symbols. The serpent cult, which was common among peoples of the TDPS aquatic axis, was later absorbed into Aymara spiritual practice — a dynamic that reflects the broader pattern of Uru cultural influence on the Andean world, even as the Urus were marginalized within it. The Uru pantheon included deities of lightning, fertility, water, rain, fire, and cold — forces that defined life on the high, windswept altiplano.',
    },
  ],
  media: [
    {
      src: '/images/ritual.png',
      alt: 'An Uru elder performing a spiritual ritual',
      caption: 'An Uru elder performs a ritual with artisan crafts that represent the lost lacustrine culture.',
      type: 'image',
    },
  ],
  links: [],
  citations: [],
  relatedSections: ['2b', '2b-i', '1a'],
};

export default content;
