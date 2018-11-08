// Translations helper
'use strict'

const i18n = require('i18n-js')
const uiLocales = {
  en: {
    manifesto: 'Manifesto',
    editGit: 'Edit on GitHub',
    editGitTitle: 'Edit page on GitHub',
    landingTitle: 'Open & Agile Digital Transformation Toolkit',
    landingSubtitle: 'The Ethical Digital Standards of Barcelona City Council shared in a open and collaborative way.',
    landingIntroTitle: 'What is Ethical Digital Standards?',
    landingManifestoText: 'Manifesto in favor of technological sovereignty and digital rights for cities',
    landingManifestoCta: 'View manifesto',
    landingIntroP1:
      'Open-digitalisation programme: free software and agile implementation of Barcelona City Council services that defines the process of profound, progressive change in the way the city will offer its services to the general public in coming years.',
    landingIntroP2:
      "A decided change that puts the general public at the centre of designing “digital by default” government services focused on technological sovereignty, free software and open code, and the ethical use of data, in order to be more open and transparent. Using agile methodologies and open technologies in order to be more effective. And transforming public contracting in order to promote innovation in the local talent industry, strengthening the country's small and medium-sized companies. A change that eventually leads to a more open, simple and enriching relationship with the general public as a whole.",
    landingPdfUrl: 'http://ajuntament.barcelona.cat/digital/sites/default/files/LE_MesuradeGovern_EN_9en.pdf',
    landingCtaText: 'Government measure for open digitisation (PDF)',
    landingCtaAction: 'Download',
    navigationMenuDownloadPdf: 'Download PDF',
    navigationMenuGlossary: 'Guides glossary',
    footerText1: 'This page was built using',
    footerText2:
      'All our work is licensed under a Creative Commons Attribution-NonCommercial - ShareAlike 4.0 International License, unless it says otherwise.We hope you find it useful.',
    CCLicenseAlt: 'Creative Commons License',
    footerLegalDisclaimer: 'Legal disclaimer',
    footerLegalDisclaimerUrl: 'https://ajuntament.barcelona.cat/digital/en/legal-disclaimer',
  },
  es: {
    manifesto: 'Manifesto',
    editGit: 'Editar en GitHub',
    editGitTitle: 'Editar esta página en GitHub',
    landingTitle: 'Herramientas para una transformación digital abierta y ágil',
    landingSubtitle:
      'Los Estándares Digitales Éticos del Ayuntamiento de Barcelona compartidos de una forma abierta y colaborativa.',
    landingManifestoText: 'Manifiesto a favor de la soberanía tecnológica y los derechos digitales para las ciudades',
    landingManifestoCta: 'Ver manifesto',
    landingIntroTitle: '¿Qué es Ethical Digital Standards?',
    landingIntroP1:
      'Programa para la digitalización abierta: software libre y desarrollo ágil de servicios del Ayuntamiento de Barcelona que define el proceso de cambio profundo y progresivo de la manera en que la ciudad ofrecerá sus servicios a la ciudadanía en los próximos años.',
    landingIntroP2:
      'Un cambio decidido que pone a la ciudadanía en el centro para diseñar un gobierno de servicios “digitales por defecto” enfocado a la soberanía tecnológica, al software libre y de código abierto, y al uso ético de los datos para ser más abierto y transparente, que utiliza metodologías ágiles y tecnologías abiertas para ser más efectivo y que transforma la contratación pública para impulsar la innovación del conjunto de la industria local de talento, potenciando las pequeñas y medianas empresas del país. Un cambio que dé lugar, finalmente, a una relación más abierta, sencilla y enriquecedora con el conjunto de la ciudadanía.',
    landingPdfUrl: 'http://ajuntament.barcelona.cat/digital/sites/default/files/LE_MesuradeGovern_ESP_9en.pdf',
    landingCtaText: 'Medida del gobierno para la digitalización abierta (PDF)',
    landingCtaAction: 'Descargar',
    navigationMenuDownloadPdf: 'Descargar PDF',
    navigationMenuGlossary: 'Glosario de las guías',
    footerText1: 'Esta página fue creada usando',
    footerText2:
      'Todo nuestro trabajo está licenciado bajo una licencia internacional Creative Commons Attribution-NonCommercial - ShareAlike 4.0, a menos que se indique lo contrario. Esperamos que lo encuentre útil.',
    CCLicenseAlt: 'Llicència de Creative Commons',
    footerLegalDisclaimer: 'Aviso legal',
    footerLegalDisclaimerUrl: 'https://ajuntament.barcelona.cat/digital/es/aviso-legal',
  },
  ca: {
    manifesto: 'Manifest',
    editGit: 'Editar a GitHub',
    editGitTitle: 'Editar aquesta pàgina a GitHub',
    landingTitle: 'Eines per a una transformació digital oberta i àgil',
    landingSubtitle:
      'Els Estàndards Digitals Ètics de l’Ajuntament de Barcelona compartits de manera oberta i col·laborativa.',
    landingManifestoText: 'Manifest a favor de la sobirania tecnològica i els drets digitals per a les ciutats',
    landingManifestoCta: 'Veure manifest',
    landingIntroTitle: 'Què és Ethical Digital Standards?',
    landingIntroP1:
      'El programa per a la Digitalització Oberta: Programari Lliure i Desenvolupament Àgil de Serveis de l’Ajuntament de Barcelona defineix el procés de canvi profund i progressiu de la manera en que la ciutat oferirà els seus serveis a la ciutadania en els propers anys.',
    landingIntroP2:
      'Un canvi decidit que posa a la ciutadania al centre per dissenyar un govern de serveis “digitals per defecte” enfocat a la sobirania tecnològica, al programari lliure i de codi obert, i a l’ús ètic de les dades per ser més obert i transparent. Que utilitza metodologies àgils i tecnologies obertes per ser més efectiu. I que transforma la contractació pública per impulsar la innovació del conjunt de la industria local de talent, potenciant les petites i mitjanes empreses del país. Un canvi que doni lloc, finalment, a una relació més oberta, senzilla i enriquidora amb el conjunt de la ciutadania.',
    landingPdfUrl: 'http://ajuntament.barcelona.cat/digital/sites/default/files/le_mesuradegovern_v2.pdf',
    landingCtaText: 'Mesura del govern per a la digitalització oberta (PDF)',
    landingCtaAction: 'Descarregar',
    navigationMenuDownloadPdf: 'Descarregar PDF',
    navigationMenuGlossary: 'Glossari de les guies',
    footerText1: 'Aquesta pàgina va ser creada usant',
    footerText2:
      'Tot el nostre treball està sota una llicència Creative Commons Attribution-NonComercial - ShareAlike 4.0, llevat que digui el contrari. Esperem que us sigui útil.',
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
