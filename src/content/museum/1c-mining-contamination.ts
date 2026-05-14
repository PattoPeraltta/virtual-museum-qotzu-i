import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '1c',
  title: 'Mining & Contamination',
  subtitle: 'The Bolivian Tin Belt',
  summary:
    'The Azanaques Mountains bordering Lake Poopó have been mined for metals since pre-Columbian times. Water-intensive refinement processes heavily divert and contaminate the streams flowing into the lake.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'The Azanaques Mountains that border Lake Poopó to the east, part of the Andean Cordillera Central, have been mined for metals since pre-Columbian times. Known as the "Bolivian Tin Belt," this region is home to large-scale mining operations that extract tin, silver, zinc, and <em>complejo</em> — a mixture of various rare earth metals — from the mountains. Operations take three forms: state-owned (like Huanuni Tin Mine), private (like Inti Raymi Corporation), and cooperative (collectively-owned and unregulated).',
    },
    {
      type: 'text',
      htmlContent:
        'The refinement of these metals involves water-intensive processes that heavily divert and contaminate the streams that flow from the Andes into the endorheic basin terminating at Lake Poopó. The water that is not redirected for these processes is often subject to chemical leaching and overflow from tailing pools; dangerously high concentrations of arsenic, for instance, have been found in these streams and in Lake Poopó\'s basin. Such chemicals have also increased the pH and salinity levels of the basin\'s catchment, not only making it toxic to ingest, but also making evaporation more intense during dry months. In this sense, <strong>contamination has both led to the decimation of Poopó\'s water quality and a reduction in the basin\'s levels.</strong> Even groundwater, once thought immune to these trace chemicals, has been contaminated.',
    },
    {
      type: 'text',
      htmlContent:
        'Sadly, with the loss of the lake\'s aquatic resources, mining is one of the only economic opportunities left for the Urus of Lake Poopó. As a result, many members of the community have no choice but to work in the many cooperative mines that dot the Cordillera Central, where labor, safety, and contamination regulation is all but entirely absent.',
    },
  ],
  media: [
    { src: '/images/mining/DJI_0169.jpg', alt: 'Aerial view of mining operations near Lake Poopó', type: 'image' },
    { src: '/images/mining/DJI_0111.jpg', alt: 'Mining landscape', type: 'image' },
    { src: '/images/mining/DJI_0117.jpg', alt: 'Mining tailings', type: 'image' },
    { src: '/images/mining/DJI_0123.jpg', alt: 'Contaminated waterway', type: 'image' },
    { src: '/images/mining/DJI_0128.jpg', alt: 'Mining infrastructure', type: 'image' },
    { src: '/images/mining/DJI_0133.jpg', alt: 'Mining operations', type: 'image' },
    { src: '/images/mining/DJI_0137.jpg', alt: 'Mining from above', type: 'image' },
    { src: '/images/mining/DJI_0140.jpg', alt: 'Tailings pools', type: 'image' },
    { src: '/images/mining/DJI_0141.jpg', alt: 'Mining terrain', type: 'image' },
    { src: '/images/mining/DJI_0144.jpg', alt: 'Mining area', type: 'image' },
    { src: '/images/mining/DJI_0151.jpg', alt: 'Mining runoff', type: 'image' },
    { src: '/images/mining/DJI_0156.jpg', alt: 'Mining site aerial', type: 'image' },
    { src: '/images/mining/DJI_0160.jpg', alt: 'Mining operations aerial', type: 'image' },
    { src: '/images/mining/DJI_0172.jpg', alt: 'Mining landscape aerial', type: 'image' },
  ],
  links: [],
  citations: [
    {
      text: 'Elevated arsenic exposure and efficient arsenic metabolism in indigenous women around Lake Poopó, Bolivia',
      url: 'https://doi.org/10.1016/j.scitotenv.2018.11.473',
      authors: 'Loma, Tirado Bustillos, Ascui, Levi, Vahter, Broberg & Gardon',
      year: '2018',
    },
  ],
  relatedSections: ['1a', '1b', '2d'],
};

export default content;
