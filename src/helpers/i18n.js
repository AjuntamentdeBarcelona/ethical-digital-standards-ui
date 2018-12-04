// Translations helper
'use strict'

const i18n = require('i18n-js')
const uiLocales = {
  en: {
    manifesto: 'Manifesto',
    editGit: 'Edit on GitHub',
    editGitTitle: 'Edit page on GitHub',
    landingTitle: 'Ethical Digital Standards: A Policy ToolKit',
    landingSubtitle:
      'An open source Policy Toolkit for cities to develop digital policies that put citizens at the center and make Governments more open, transparent, and collaborative.',
    landingIntroTitle: 'What are our Ethical Digital Standards?',
    landingManifestoText: 'Manifesto in favor of technological sovereignty and digital rights for cities',
    landingManifestoCta: 'View manifesto',
    landingIntroP1:
      'The Barcelona City Council Open Digitisation Plan defines a process of profound, progressive change in the way the city will develop and offer its services to its citizens. It aims for radical improvement in digital public services, based on our Ethical Digital Standards, including in particular the use of free software, open standards, data sovereignty, developing digital services in an agile manner, and ensuring privacy, ethics and security by design.',
    landingIntroP2:
      'This is a decisive change that puts people first in the design of government services and reinforces their digital rights. The City strives for technological sovereignty for full control of its ICT services and infrastructures, and the ethical use of data to be more open and transparent, while delving data sovereignty to citizens. Agile development methodologies will make the City’s digital services more effective and by transforming public contracting, the City will promote innovation in local industry, strengthening small and medium-sized technology companies.',
    landingIntroP3:
      'Through the open data and data commons strategies, and the use of free software tools, Barcelona aims to guarantee improvements in transparency and interoperability based on open data formats and a set of interoperable and reusable applications and services, while adopting privacy-enhancing and rights-preserving technologies that protects’ citizens  information-self-determination.This will lay the foundations for a people-centric digital future, so that cities can access a policy toolkit that will enable them to develop technologies and platforms based on citizens’ rights to bring long term societal innovation.',
    landingPdfUrl: 'http://ajuntament.barcelona.cat/digital/sites/default/files/LE_MesuradeGovern_EN_9en.pdf',
    landingCtaText: 'Government Measure for Open Digitisation (PDF)',
    landingCtaAction: 'Download',
    navigationMenuDownloadPdf: 'Download PDF',
    navigationMenuGlossary: 'Guides glossary',
    footerText1: 'This page was built using',
    footerText2:
      'All our content is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License, unless it says otherwise.We hope you find it useful.',
    CCLicenseAlt: 'Creative Commons License',
    footerLegalDisclaimer: 'Legal disclaimer',
    footerLegalDisclaimerUrl: 'https://ajuntament.barcelona.cat/digital/en/legal-disclaimer',
  },
  es: {
    manifesto: 'Manifesto',
    editGit: 'Editar en GitHub',
    editGitTitle: 'Editar esta página en GitHub',
    landingTitle: 'Estándares Éticos Digitales: Herramientas para establecer políticas',
    landingSubtitle:
      'Un conjunto de herramientas open-source dirigidas a ciudades para desarrollar políticas digitales que pongan a los ciudadanos en el centro y que promueva gobiernos más abiertos, transparentes y colaborativos.',
    landingManifestoText: 'Manifiesto a favor de la soberanía tecnológica y los derechos digitales para las ciudades',
    landingManifestoCta: 'Ver manifesto',
    landingIntroTitle: '¿Qué son nuestros Estándares Éticos Digitales?',
    landingIntroP1:
      'La Medida de Gobierno para la Digitalización Abierta define un proceso de cambio profundo, progresivo en la manera en que la ciudad desarrolla y ofrece sus servicios a sus ciudadanos. Busca una mejora radical en los servicios públicos digitales, basados en nuestros Estándares Éticos Digitales, en particular el uso de software libre, estándares abiertos, soberanía de datos, desarrollo de servicios digitales de manera ágil y asegurando privacidad, ética y seguridad por diseño.',
    landingIntroP2:
      'Se trata de un cambio decisivo que pone las personas en primer lugar en el diseño de servicios gubernamentales y refuerza sus derechos digitales. La ciudad busca la soberanía tecnológica para el control total de los servicios de las TIC y las infraestructuras, y el uso ético de los datos para ser más abierta y transparente, a la vez que profundiza en la soberanía de los datos por parte de los ciudadanos. Las metodologías de desarrollo ágiles harán los servicios digitales de la ciudad más efectivos, y con la transformación de la contratación pública, la ciudad fomentará la innovación en la industria local, fortaleciendo pequeñas y medianas empresas tecnológicas.',
    landingIntroP3:
      'A través de los datos abiertos y estrategias de datos para el bien común y el uso de herramientas de software libre, Barcelona tiene como objetivo garantizar mejoras en la transparencia y la interoperabilidad basadas en formatos de datos abiertos y un conjunto de servicios y aplicaciones interoperables y reutilizables, a la vez que adopta tecnologías de mejora de la privacidad y la preservación de los derechos que protegen la información auto-determinada de los ciudadanos. Esto sentará las bases para un futuro digital centrado en las personas, para que las ciudades puedan acceder a un conjunto de herramientas de políticas y directrices que permita desarrollar tecnologías y plataformas basadas en los derechos de los ciudadanos que conduzcan a la innovación social a largo plazo.',
    landingPdfUrl: 'http://ajuntament.barcelona.cat/digital/sites/default/files/LE_MesuradeGovern_ESP_9en.pdf',
    landingCtaText: 'Medida del Gobierno para la Digitalización Abierta (PDF)',
    landingCtaAction: 'Descargar',
    navigationMenuDownloadPdf: 'Descargar PDF',
    navigationMenuGlossary: 'Glosario de las guías',
    footerText1: 'Esta página fue creada usando',
    footerText2:
      'Todo nuestro contenido está licenciado bajo una licencia internacional Creative Commons Attribution-ShareAlike 4.0, a menos que se indique lo contrario. Esperamos que lo encuentre útil.',
    CCLicenseAlt: 'Llicència de Creative Commons',
    footerLegalDisclaimer: 'Aviso legal',
    footerLegalDisclaimerUrl: 'https://ajuntament.barcelona.cat/digital/es/aviso-legal',
  },
  ca: {
    manifesto: 'Manifest',
    editGit: 'Editar a GitHub',
    editGitTitle: 'Editar aquesta pàgina a GitHub',
    landingTitle: 'Estàndards Ètics Digitals: Eines per establir polítiques',
    landingSubtitle:
      'Un conjunt d’eines open-source dirigides a ciutats per a desenvolupar polítiques digitals que posin als ciutadans en el centre i que promogui governs més oberts, transparents i col·laboratius.',
    landingManifestoText: 'Manifest a favor de la sobirania tecnològica i els drets digitals per a les ciutats',
    landingManifestoCta: 'Veure manifest',
    landingIntroTitle: 'Què són els nostres Estàndards Ètics Digitals?',
    landingIntroP1:
      'La Mesura de Govern per a la Digitalització Oberta defineix un procés de canvi profund, progressiu en la manera en què la ciutat desenvolupa i ofereix els seus serveis als seus ciutadans. Busca una millora radical en els serveis públics digitals, basats en els nostres Estàndards Ètics Digitals, en particular l’ús de programari lliure, estàndards oberts, sobirania de dades, desenvolupament de serveis digitals de manera àgil i assegurant la privacitat, la ètica i la seguretat per disseny.',
    landingIntroP2:
      'Es tracta d’un canvi decisiu que posa les persones en primer lloc en el disseny de serveis governamentals i reforça els seus drets digitals. La ciutat busca la sobirania tecnològica pel control total dels serveis de les TIC i les infraestructures, i la utilització ètica de les dades per ser més oberta i transparent, a la vegada que profunditza en la sobirania de les dades per part dels ciutadans. Les metodologies de desenvolupament àgils faran que els serveis digitals de la ciutat siguin més efectius, i amb la transformació de la contractació pública, la ciutat fomentarà la innovació en la industria local, reforçant petites i mitjanes empreses tecnològiques.',
    landingIntroP3:
      'A través de les dades obertes i estratègies de dades pel bé comú i la utilització d’eines de programari lliure, Barcelona té com objectiu garantir millores en la transparència i la interoperabilitat basades en formats de dades obertes i un conjunt de serveis i aplicacions interoperables i reutilitzables, a la vegada que adopta tecnologies de millora de la privacitat i la preservació dels drets que protegeixen la informació auto-determinada dels ciutadans. Això posarà les bases per a un futur digital centrat en les persones, per a què les ciutats puguin accedir a un conjunt d’eines de polítiques i directrius que permeti desenvolupar tecnologies i plataformes basades en els drets dels ciutadans que porti a la innovació social a llarg termini.',
    landingPdfUrl: 'http://ajuntament.barcelona.cat/digital/sites/default/files/le_mesuradegovern_v2.pdf',
    landingCtaText: 'Mesura del Govern per a la Digitalització Oberta (PDF)',
    landingCtaAction: 'Descarregar',
    navigationMenuDownloadPdf: 'Descarregar PDF',
    navigationMenuGlossary: 'Glossari de les guies',
    footerText1: 'Aquesta pàgina va ser creada usant',
    footerText2:
      'Tot el nostre contingut està sota una llicència Creative Commons Attribution-ShareAlike 4.0, llevat que digui el contrari. Esperem que us sigui útil.',
    CCLicenseAlt: 'Llicència de Creative Commons',
    footerLegalDisclaimer: 'Avís legal',
    footerLegalDisclaimerUrl: 'https://ajuntament.barcelona.cat/digital/ca/avis-legal',
  },
}

i18n.translations = { ...uiLocales }

module.exports = (str, origin) => {
  let language
  if (origin.data.root.page.attributes !== undefined) {
    if (origin.data.root.page.attributes.lang !== undefined) {
      language = origin.data.root.page.attributes.lang
    } else {
      language = 'en'
    }
  } else {
    language = 'en'
  }
  i18n.locale = language
  return i18n !== undefined ? i18n.t(str) : str
}
