import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '4b',
  title: 'Photography',
  subtitle: 'Photographic Series by Gastón Zilberman',
  summary:
    'An internationally-exhibited photographic series documenting the Uru communities of Lake Poopó and their landscape. All photos by Gastón Zilberman unless otherwise noted.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'The Qotzuñi photographic series accompanies the documentary film, capturing the landscapes, people, and daily life of the Uru communities of Lake Poopó. The series has been exhibited internationally as part of the project\'s global awareness campaign.',
    },
    {
      type: 'text',
      htmlContent:
        'All media, unless otherwise noted, was produced by the filmmakers. Photos were taken by Gastón Zilberman.',
    },
  ],
  media: [
    { src: '/images/ritual.png', alt: 'Ritual', type: 'image', credit: 'Gastón Zilberman' },
    { src: '/images/telador.png', alt: 'Telador', type: 'image', credit: 'Gastón Zilberman' },
    { src: '/images/homes.png', alt: 'Uru homes', type: 'image', credit: 'Gastón Zilberman' },
    { src: '/images/family.png', alt: 'Uru family', type: 'image', credit: 'Gastón Zilberman' },
    { src: '/images/3_in_boat.png', alt: 'Urus in a boat', type: 'image', credit: 'Gastón Zilberman' },
    { src: '/images/artesanas.png', alt: 'Artesanas', type: 'image', credit: 'Gastón Zilberman' },
    { src: '/images/chica.png', alt: 'Uru child', type: 'image', credit: 'Gastón Zilberman' },
    { src: '/images/cipriana.png', alt: 'Cipriana', type: 'image', credit: 'Gastón Zilberman' },
    { src: '/images/abuelo.png', alt: 'Ricardo', type: 'image', credit: 'Gastón Zilberman' },
  ],
  links: [],
  citations: [],
  relatedSections: ['4a', '4c'],
};

export default content;
