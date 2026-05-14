import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '2c',
  title: 'Resilience',
  subtitle: 'Adaptation and Persistence',
  summary:
    'Despite centuries of marginalization, forced assimilation, and environmental devastation, the Uru communities of Lake Poopó continue to adapt and assert their identity as Qotzuñi — People of the Lake.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'The word Qotzuñi comes from Chholo, the now-extinct language once spoken by the Urus of Lake Poopó. <em>Qot</em> is the word meaning "lake" (bearing resemblance to <em>qocha</em> and <em>quta</em> in modern Quechua and Aymara), and <em>zuñ</em> means man, woman, or person. Together, <em>qotzuñi</em> — sometimes stylized <em>kot\'suñ</em> — means "people of the lake." In times of abundant water, Uru-qotzuñi communities spent weeks at a time on floating islands of totora, subsisting off of the lake\'s water, fish, aquatic plants, and fowl.',
    },
    {
      type: 'text',
      htmlContent:
        'Lake Poopó is at the center of qotzuñi culture. As other Andean cultures refer to <em>Pachamama</em>, or Mother Earth, Urus of Lake Poopó speak of <em>Qotamama</em>, or Mother Lake. Their water-based culture made them the target of pre-Columbian discrimination, as they did not contribute to Inca and pre-Inca tribute or corvée labor demands. Due to their self-subsistence, they were seen as "idle" by the pre-colonial empires. They were sometimes forcefully removed from the lake and coerced to work on agricultural lands and assimilate. This process, sometimes called <em>aymarization</em>, began in the pre-colonial period but intensified with the arrival of the Spanish.',
    },
    {
      type: 'text',
      htmlContent:
        'The pressures of the colonial government, and later the independent state of Bolivia, eventually mounted for the communities to pay taxes and integrate economically. The result was the Uru transition "<em>al seco</em>," or "to dry land," around the beginning of the 20th century. The qotzuñi Urus made arrangements to live on previously Aymara-owned land, but did not secure any land for agriculture or grazing. In turn, they formed fishing cooperatives, selling catches in regional markets. After a mass pejerrey die-off near the turn of the century, reliance on fishing waned, and with the drying of the lake and the contamination of its waters, fishing is now no longer viable at all. While two of the three Uru communities of Lake Poopó practice small-scale agriculture, there is still food insecurity and severe economic hardship within all three communities.',
    },
  ],
  media: [
    { src: '/images/family.png', alt: 'Uru family', type: 'image' },
    { src: '/images/3_in_boat.png', alt: 'Urus in a boat on Lake Poopó', type: 'image' },
    { src: '/images/abuelo.png', alt: 'Uru elder', type: 'image' },
  ],
  links: [
    { title: 'Puñaca Tinta María Facebook page', url: 'https://www.facebook.com/tintamariapunaca' },
    {
      title: 'Phuñaka Tinta María. Una comunidad ancestral de la Nación Uru en Bolivia (Funproeib Andes)',
      url: 'https://www.funproeibandes.org/?p=838',
    },
    {
      title: 'Vilañeque, comunidad uru entre las aguas y la tierra (Funproeib Andes)',
      url: 'https://www.funproeibandes.org/?p=886',
    },
  ],
  citations: [],
  relatedSections: ['2a', '2b', '2d'],
};

export default content;
