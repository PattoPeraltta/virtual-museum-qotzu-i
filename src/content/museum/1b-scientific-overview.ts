import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '1b',
  title: 'Scientific Overview',
  subtitle: 'Lake Poopó: Hydrology and Disappearance',
  summary:
    'Lake Poopó, covering up to 3,000 km², formed the southernmost basin of the TDPS system. Its shallow depth — averaging just 1.5 meters — made it highly sensitive to both seasonal precipitation and long-term climatic trends.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'Lake Poopó, a partially saline body of water in the Department of Oruro, was once the largest lake entirely contained within Bolivia. Covering up to 3,000 km², it formed the southernmost basin of the Titicaca-Desaguadero-Poopó-Salares (TDPS) system — an enclosed hydrological network that has shaped the Andean landscape for millennia. The lake\'s shallow depth, averaging just 1.5 meters, made it highly sensitive to both seasonal precipitation and long-term climatic trends, but was deep enough to support several species of fish, including the introduced pejerrey, and 35 species of birds, including Andean flamingos.',
    },
    {
      type: 'text',
      htmlContent:
        'Lake Poopó has always been prone to dramatic fluctuations in water level, and its tendency to evaporate during periods of drought was first written about in 1589 by Spanish colonizers. However, recent decades have seen an unprecedented decline. Strong El Niño events — such as in 1983, 1997–98, and 2014–16 — have drastically reduced water levels, culminating in the complete desiccation of the lake in 2015. Rising temperatures and shifting precipitation patterns, exacerbated by climate change, have accelerated this drying trend. Meanwhile, increasing global demand for quinoa and tin has led to unregulated upstream water diversion and pollution, further degrading the basin\'s fragile ecosystem.',
    },
    {
      type: 'heading',
      content: 'Agricultural Intensification & the Quinoa Boom',
      level: 2,
    },
    {
      type: 'text',
      htmlContent:
        'Beginning in the early 2000s, surging global demand for quinoa as a health food — particularly in North American and European markets — drove a dramatic expansion of quinoa cultivation across the Bolivian and Peruvian altiplano. The price of quinoa nearly quadrupled, and the area dedicated to its cultivation grew from 38,000 hectares in 1980 to 70,000 hectares by 2011. By 2013, Peru and Bolivia together accounted for more than 95% of global quinoa supply.',
    },
    {
      type: 'text',
      htmlContent:
        'This agricultural intensification brought with it significant hydrological consequences. The conversion of native vegetation to cultivated land — combined with mechanization, shorter fallow periods, and inefficient irrigation practices — increased evapotranspiration across the altiplano, drawing down the region\'s total water storage. Researchers have specifically identified agricultural activity as a contributing factor in the complete desiccation of Lake Poopó in December 2015, alongside climate variability and mining-related contamination and diversion.',
    },
    {
      type: 'heading',
      content: 'Lake Poopó\'s "Disappearance"',
      level: 2,
    },
    {
      type: 'text',
      htmlContent:
        'In December 2015, the city of Oruro declared that Lake Poopó had "disappeared," triggering a global flood of popular media stories about the region. Due to the extremity of El Niño that winter, as well as warmer average temperatures and higher evaporation, the disappearance was widely attributed to climate change — though additional factors were also at play.',
    },
    {
      type: 'text',
      htmlContent:
        '<strong>Contributing Factors:</strong><br/><strong>Mining contamination & water diversion</strong> — Mining of tin and other metals in the nearby Cordillera Central altered the chemical makeup of the water, raising its base temperature and increasing evaporation. Mining operations also diverted large amounts of water from Lake Poopó\'s intake streams.<br/><strong>Quinoa farming</strong> — Since the quinoa boom of the early 2000s, mid-size businesses and individual farmers in the Titicaca and Desaguadero regions dramatically increased water diversion from streams that would otherwise replenish Lake Poopó.',
    },
  ],
  media: [
    {
      src: '/images/cipriana.png',
      alt: 'The dried salt flat of Lake Poopó',
      caption: 'Once more than a meter of fresh-to-brackish water, now there is only a bed of coipa, or salt flat.',
      type: 'image',
    },
    {
      src: '/images/zabaleta.png',
      alt: 'Lake Poopó in 1992',
      caption: 'A 1992 photo by Victor Zabaleta from the town of Vilañeque.',
      credit: 'Victor Zabaleta',
      type: 'image',
    },
    {
      src: '/images/2023.png',
      alt: 'Lake Poopó in 2023',
      caption: 'A 2023 reproduction of the same photo by Michael Salama and Gastón Zilberman.',
      credit: 'Michael Salama & Gastón Zilberman',
      type: 'image',
    },
  ],
  links: [
    {
      title: 'Declaration of Poopó\'s disappearance (December 12, 2015)',
      url: 'https://impresa.lapatria.bo/noticia/241790/desaparecio-el-lago-poopo',
    },
  ],
  citations: [
    {
      text: 'Unraveling the Impacts of Droughts and Agricultural Intensification on the Altiplano Water Resources',
      url: 'https://doi.org/10.1016/j.agrformet.2019.107710',
      authors: 'Satgé et al.',
      year: '2019',
    },
    {
      text: 'Long-Term and Extreme Water Level Variations of the Shallow Lake Poopó, Bolivia',
      url: 'https://doi.org/10.1623/hysj.51.1.98',
      authors: 'Pillco Zolá & Bengtsson',
      year: '2006',
    },
  ],
  relatedSections: ['1a', '1c', '1d'],
};

export default content;
