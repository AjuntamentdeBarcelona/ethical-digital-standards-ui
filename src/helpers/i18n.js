// Translations helper
'use strict'

const i18n = require('i18n-js')
const uiLocales = {
  en: {
    manifesto: 'Manifesto',
    editGit: 'Edit on GitHub',
    editGitTitle: 'Edit page on GitHub',
    landingTitle: 'Open & Agile Digital Transformation Toolkit',
    landingSubtitle:
      'An open source Policy Toolkit for cities to develop digital policies that put citizens at the center and make Governments more open, transparent, and collaborative.',
    landingIntroTitle: 'What are our Ethical Digital Standards?​',
    landingManifestoText: 'Manifesto in favor of technological sovereignty and digital rights for cities',
    landingManifestoCta: 'View manifesto',
    landingIntroP1:
      'The Barcelona City Council Open Digitisation Plan defines a process of profound, progressive change in the way the city will develop and offer its services to its citizens. It aims for radical improvement in digital public services, based on our Ethical Digital Standards, including in particular the use of free software, open standards, data sovereignty, developing digital services in an agile manner, and ensuring privacy, ethics and security by design.',
    landingIntroP2:
      'This is a decisive change that puts people first in the design of government services and reinforces their digital rights. The City strives for technological sovereignty for full control of its ICT services and infrastructures, and the ethical use of data to be more open and transparent, while delving data sovereignty to citizens. Agile development methodologies will make the City’s digital services more effective and by transforming public contracting, the City will promote innovation in local industry, strengthening small and medium-sized technology companies.',
    landingIntroP3:
      'Through the open data and data commons strategies, and the use of free software tools, Barcelona aims to guarantee improvements in transparency and interoperability based on open data formats and a set of interoperable and reusable applications and services, while adopting privacy-enhancing and rights-preserving technologies that protects citizens´s rights to information-self-dermination. This will lay the foundations for a people-centric digital future, so that cities can access a policy toolkit that will enable them to develop technologies and platforms based on citizens´ rights to bring long term societal innovation.',
    landingPdfUrl: 'http://ajuntament.barcelona.cat/digital/sites/default/files/LE_MesuradeGovern_EN_9en.pdf',
    landingCtaText: 'Government Measure for Open Digitisation (PDF)',
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
    landingTitle: 'Herramientas para una Transformación Digital Abierta y Ágil',
    landingSubtitle:
      'Un conjunto de herramientas de políticas de código abierto para que las ciudades desarrollen políticas digitales que pongan a los ciudadanos en el centro y hagan que los gobiernos sean más abiertos, transparentes y colaborativos.',
    landingManifestoText: 'Manifiesto a favor de la soberanía tecnológica y los derechos digitales para las ciudades',
    landingManifestoCta: 'Ver manifesto',
    landingIntroTitle: '¿Cuáles son nuestros Ethical Digital Standards?',
    landingIntroP1:
      'El Plan de digitalización abierta del Ayuntamiento de Barcelona define un proceso de cambio profundo y progresivo en la forma en que la ciudad se desarrollará y ofrecerá sus servicios a sus ciudadanos. Su objetivo es una mejora radical en los servicios públicos digitales, basados en nuestros Estándares éticos digitales, que incluyen en particular el uso de software libre, estándares abiertos, soberanía de datos, desarrollo de servicios digitales de manera ágil y garantía de privacidad, ética y seguridad mediante el diseño.',
    landingIntroP2:
      'Este es un cambio decisivo que coloca a las personas primero en el diseño de los servicios gubernamentales y refuerza sus derechos digitales. La Ciudad se esfuerza por lograr la soberanía tecnológica para el control total de sus servicios e infraestructuras de TIC, y el uso ético de los datos para que sea más abierto y transparente, al tiempo que profundiza la soberanía de los datos para los ciudadanos. Las metodologías de desarrollo ágil harán que los servicios digitales de la Ciudad sean más efectivos y, al transformar la contratación pública, la Ciudad promoverá la innovación en la industria local, fortaleciendo a las pequeñas y medianas empresas de tecnología.',
    landingIntroP3:
      'A través de las estrategias open data y data commons, y el uso de herramientas de software gratuitas, Barcelona pretende garantizar mejoras en la transparencia e interoperabilidad basadas en formatos de datos abiertos y un conjunto de aplicaciones y servicios interoperables y reutilizables, al tiempo que adopta la mejora de la privacidad y los derechos.Preservar tecnologías que protejan el derecho de los ciudadanos a la autodeterminación de la información.Esto sentará las bases para un futuro digital centrado en las personas, para que las ciudades puedan acceder a un conjunto de herramientas de políticas que les permita desarrollar tecnologías y plataformas basadas en los derechos de los ciudadanos para generar innovación social a largo plazo.',
    landingPdfUrl: 'http://ajuntament.barcelona.cat/digital/sites/default/files/LE_MesuradeGovern_ESP_9en.pdf',
    landingCtaText: 'Medida del Gobierno para la Digitalización Abierta (PDF)',
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
    landingTitle: 'Eines per a una Transformació Digital Oberta i Àgil',
    landingSubtitle:
      'Un conjunt d´eines de polítiques de codi obert perquè les ciutats desenvolupin polítiques digitals que posin als ciutadans en el centre i facin que els governs siguin més oberts, transparents i col·laboratius.',
    landingManifestoText: 'Manifest a favor de la sobirania tecnològica i els drets digitals per a les ciutats',
    landingManifestoCta: 'Veure manifest',
    landingIntroTitle: 'Quins són els nostres Ethical Digital Standards?',
    landingIntroP1:
      'El Pla de digitalització oberta de l´Ajuntament de Barcelona defineix un procés de canvi profund i progressiu en la forma en què la ciutat es desenvoluparà i oferirà els seus serveis als seus ciutadans.El seu objectiu és una millora radical en els serveis públics digitals, basats en els nostres Estàndards ètics digitals, que inclouen en particular l´ús de programari lliure, estàndards oberts, sobirania de dades, desenvolupament de serveis digitals de manera àgil i garantia de privacitat, ètica i seguretat mitjançant el disseny.',
    landingIntroP2:
      'Aquest és un canvi decisiu que col·loca a les persones primer en el disseny dels serveis governamentals i reforça els seus drets digitals. La Ciutat s´esforça per aconseguir la sobirania tecnològica per al control total dels seus serveis i infraestructures de TIC, i l´ús ètic de les dades perquè sigui més obert i transparent, alhora que aprofundeix la sobirania de les dades per als ciutadans. Les metodologies de desenvolupament àgil faran que els serveis digitals de la Ciutat siguin més efectius i, en transformar la contractació pública, la Ciutat promourà la innovació en la indústria local, enfortint a les petites i mitjanes empreses de tecnologia.',
    landingIntroP3:
      'A través de les estratègies open data i data commons, i l´ús d´eines de programari gratuïtes, Barcelona pretén garantir millores en la transparència i interoperabilitat basades en formats de dades obertes i un conjunt d´aplicacions i serveis interoperables i reutilitzables, alhora que adopta la millora de la privacitat i els derechos.Preservar tecnologies que protegeixin el dret dels ciutadans a l´autodeterminació de la informació.Això establirà les bases per a un futur digital centrat en les persones, perquè les ciutats puguin accedir a un conjunt d´eines de polítiques que els permeti desenvolupar tecnologies i plataformes basades en els drets dels ciutadans per generar innovació social a llarg termini.',
    landingPdfUrl: 'http://ajuntament.barcelona.cat/digital/sites/default/files/le_mesuradegovern_v2.pdf',
    landingCtaText: 'Mesura del Govern per a la Digitalització Oberta (PDF)',
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
