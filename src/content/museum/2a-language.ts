import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '2a',
  title: 'Language',
  subtitle: 'Uchumataqu, Chholo, and the Revival of Pukina',
  summary:
    'The Uru nation developed various distinct languages of the family Uchumataqu. The Urus of Lake Poopó spoke Chholo until the mid-20th century — the language from which the word Qotzuñi originates.',
  blocks: [
    {
      type: 'text',
      htmlContent:
        'The Uru nation, having established numerous pockets of communities in different parts of the TDPS hydrological axis over the span of centuries, has developed various distinct languages and dialects of the family Uchumataqu. The Urus of Lake Poopó historically spoke a now-extinct language called Chholo until the mid-20th century. Like other Andean languages, it lacked gender, and much of what is known about the language revolves around culturally-specific uses, like its words relating to water and the lake. (The word Qotzuñi comes from this language.) European linguistic anthropologists in the early 20th century attempted to codify this language, but the transition away from isolated lacustrine lifestyles, and the subsequent adoption of the Aymara language, caused the language to become lost.',
    },
    {
      type: 'text',
      htmlContent:
        'As Uru-Muratos transitioned to life on dry land in Aymara territory, they began to learn Aymara in order to participate in the local economy. Modern Uru people often cite the discrimination and cultural oppression that accompanied this linguistic assimilation. Today, due to changing demographics in the Poopó region, many Urus grow up speaking Quechua along with Spanish and Aymara, and are trilingual.',
    },
    {
      type: 'heading',
      content: 'Revival',
      level: 2,
    },
    {
      type: 'text',
      htmlContent:
        'In the late 20th and early 21st century, an Uru authority named Daniel Mauricio Choque was determined to revive the traditional Uru language. Although Chholo had been entirely extinct, a related Uru language called Pukina was still continuing strongly in Chipaya, a large community of non-Qotzuñi Urus. Some scholars hypothesize that the relation between Chholo and Pukina is similar to that between Spanish and French, but others believe them to have been much closer.',
    },
    {
      type: 'text',
      htmlContent:
        'Choque, traveling frequently between Puñaca Tinta María and Chipaya, developed the educational cooperative that brings Uru language teachers from Chipaya to the Uru communities of Lake Poopó to teach Pukina to young students. To this day, students in the Uru communities of Lake Poopó continue to learn basic Pukina.',
    },
  ],
  media: [
    {
      src: '/images/language/one.png',
      alt: 'A folkloric Uru story in transliterated Uchumataqu',
      caption: 'A folkloric Uru story translated and written into transliterated Uchumataqu.',
      type: 'image',
    },
    { src: '/images/language/two.png', alt: 'Uchumataqu text page 2', caption: 'Page 2', type: 'image' },
    { src: '/images/language/three.png', alt: 'Uchumataqu text page 3', caption: 'Page 3', type: 'image' },
    { src: '/images/language/four.png', alt: 'Uchumataqu text page 4', caption: 'Page 4', type: 'image' },
  ],
  links: [
    {
      title: 'Uchumataqu: The Lost Language of the Urus of Bolivia',
      url: 'https://books.google.com.ar/books/about/Uchumataqu.html?id=gdrqAsIFrPwC&redir_esc=y',
    },
    {
      title: 'EndangeredLanguages.com (Uchumataqu Family)',
      url: 'https://www.endangeredlanguages.com/lang/1959/guide',
    },
    {
      title: 'Interview with Daniel Mauricio Choque (part 1)',
      url: 'https://www.youtube.com/watch?v=i0j6MgYqRWc',
    },
    {
      title: 'Interview with Daniel Mauricio Choque (part 2)',
      url: 'https://www.youtube.com/watch?v=8R2225mflX8',
    },
    {
      title: 'Interview with Daniel Mauricio Choque (part 3)',
      url: 'https://www.youtube.com/watch?v=AGvj5GvSiVA',
    },
  ],
  citations: [
    {
      text: 'Uchumataqu: The Lost Language of the Urus of Bolivia: a Grammatical Description of the Language as Documented Between 1894 and 1952',
      url: 'https://repository.ubn.ru.nl/handle/2066/68277',
    },
  ],
  relatedSections: ['2b', '4e'],
};

export default content;
