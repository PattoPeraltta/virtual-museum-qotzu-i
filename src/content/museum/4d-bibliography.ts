import type { SectionContent } from '@/lib/museum/types';

const content: SectionContent = {
  id: '4d',
  title: 'Bibliography & Publications',
  subtitle: 'Academic Research, News, and Institutional Reports',
  summary:
    'A comprehensive collection of scientific, historical, and journalistic sources on the Uru communities, Lake Poopó, and the broader TDPS basin.',
  blocks: [
    {
      type: 'heading',
      content: 'Science',
      level: 2,
    },
    {
      type: 'links',
      items: [
        { title: 'El Niño and La Niña Years', url: 'https://psl.noaa.gov/enso/climaterisks/years/top24enso.html' },
        { title: 'Agroclimatic Constraints for Rainfed Agriculture in the Bolivian Altiplano', url: 'https://doi.org/10.1016/j.jaridenv.2007.02.005' },
        { title: 'Dynamics of Reference Evapotranspiration in the Bolivian Highlands', url: 'https://doi.org/10.1016/j.agrformet.2004.03.005' },
        { title: 'Unraveling the Impacts of Droughts and Agricultural Intensification on the Altiplano Water Resources', url: 'https://doi.org/10.1016/j.agrformet.2019.107710' },
        { title: 'Mechanisms of Summertime Precipitation Variability in the Bolivian Altiplano', url: 'https://doi.org/10.1002/joc.2424' },
        { title: 'Precipitation Trends over the Southern Andean Altiplano from 1981 to 2018', url: 'https://doi.org/10.1016/j.jhydrol.2020.125485' },
        { title: 'Long-Term and Extreme Water Level Variations of the Shallow Lake Poopó, Bolivia', url: 'https://doi.org/10.1623/hysj.51.1.98' },
        { title: 'Endorheic Basins', url: 'https://doi.org/10.1002/9781444347166.ch31' },
        { title: 'A Terminal Case? Shrinking Inland Seas Expose Salty Particulates and More', url: 'https://doi.org/10.1289/EHP12835' },
      ],
    },
    {
      type: 'heading',
      content: 'Uru',
      level: 2,
    },
    {
      type: 'links',
      items: [
        { title: 'Cuentos de los Urus del lago Poopó', url: 'https://www.funproeibandes.org/wp-content/uploads/2024/07/Cuentos-urus-del-Lago-Poopo.pdf' },
        { title: 'Presidente Entregará Título de Nación Originaria \'Uru\'', url: 'https://www.noticiasfides.com/nacional/sociedad/presidente-entregara-titulo-de-nacion-originaria-uru-226995/' },
        { title: 'Desaparición del Lago Poopó - Periódico La Patria', url: 'https://impresa.lapatria.bo/noticia/241829/desaparicion-del-lago-poopo' },
        { title: 'Climate Change Claims a Lake, and an Identity (New York Times)', url: 'https://www.nytimes.com/interactive/2016/07/07/world/americas/bolivia-climate-change-lake-poopo.html' },
        { title: 'COP27: A Dried up Lake and an Indigenous Community on the Precipice in Bolivia (WFP)', url: 'https://www.wfp.org/stories/cop27-dried-lake-and-indigenous-community-precipice-bolivia' },
        { title: 'Uchumataqu: The Lost Language of the Urus of Bolivia', url: 'https://repository.ubn.ru.nl/handle/2066/68277' },
        { title: 'Symbolic and Material Boundaries', url: 'http://urn.kb.se/resolve?urn=urn:nbn:se:uu:diva-7196' },
        { title: 'Hommes d\'eau : Le Problème Uru', url: 'https://doi.org/10.3406/ahess.1978.294005' },
      ],
    },
    {
      type: 'heading',
      content: 'Colonial History',
      level: 2,
    },
    {
      type: 'links',
      items: [
        { title: 'El peso del Archivo: Notables daños de no guardar a los indios sus fueros (1571)', url: 'https://doi.org/10.5195/CT/2017.225' },
        { title: 'Coronica moralizada del Orden de San Augustin en el Peru', url: 'http://archive.org/details/A050111' },
        { title: 'Natural and Moral History of the Indies, Book II', url: 'https://doi.org/10.2307/j.ctv11cw7z1.12' },
        { title: 'Encomienda, Hacienda and Corregimiento in Spanish America', url: 'https://doi.org/10.1215/00182168-51.3.431' },
        { title: 'Fields of Conflict', url: 'https://doi.org/10.1016/j.jas.2017.06.001' },
        { title: 'Political Ecology', url: 'https://doi.org/10.1016/B978-008044910-4.00580-0' },
      ],
    },
  ],
  media: [],
  links: [],
  citations: [],
  relatedSections: ['4c', '4e'],
};

export default content;
