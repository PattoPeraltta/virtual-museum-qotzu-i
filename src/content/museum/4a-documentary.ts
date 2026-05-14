import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '4a',
  title: 'Documentary',
  subtitle: 'Qotzuñi: People of the Lake',
  summary:
    'An Oscar-qualified documentary short film produced in collaboration with the Uru Indigenous Nation of Bolivia, portraying the community\'s struggles and the challenge of retaining their identity when the lake ceases to exist.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'Qotzuñi: People of the Lake is an Oscar-qualified documentary short film produced in collaboration with the Uru Indigenous Nation of Bolivia. The community lived off the waters of Lake Poopó — the country\'s second-largest lake — for centuries, until mining operations diverted and contaminated its headwaters and intense drought struck the region, causing the lake to disappear completely.',
    },
    {
      type: 'text',
      htmlContent:
        'As a fishing and hunting community, the Urus have lost their sole source of food and livelihood. The film portrays the community\'s struggles to adapt to this loss, as well as the cultural challenge of retaining the identity of "Qotzuñi," or "People of the Lake," when the lake itself ceases to exist.',
    },
  ],
  media: [],
  links: [
    { title: 'Watch the Film', url: 'https://qotzunifilm.com/watch' },
  ],
  citations: [],
  relatedSections: ['3a', '4b', '4c'],
};

export default content;
