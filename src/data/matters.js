import CURRICULUM_DATA from "./curriculumData";

//mc = matter component
const mc = {
  basis : CURRICULUM_DATA.components.basis, //Componente de básico o de fundamentación
  discipline : CURRICULUM_DATA.components.discipline, //Componente disciplinar o profesional
  free : CURRICULUM_DATA.components.free, //Componente de libre elección
  leveling: CURRICULUM_DATA.components.leveling
}
//mg = matter group
const mg = {
  //Basis
  math: CURRICULUM_DATA.groups.basis.math, //Matemáticas
  probability: CURRICULUM_DATA.groups.basis.probability, //Probabilidad y estadística
  computerScience: CURRICULUM_DATA.groups.basis.computerScience, //Ciencias de la computación
  physics: CURRICULUM_DATA.groups.basis.physics, //Física
  eco: CURRICULUM_DATA.groups.basis.economicSciences, // Ciencias económicas y administrativas
  //Discipline
  softwareMethods: CURRICULUM_DATA.groups.discipline.softwareMethods, //Métodos y tecnologías de software
  computerInfrastructure: CURRICULUM_DATA.groups.discipline.computerInfrastructure, //Infraestructura informática de comunicaciones y de información
  visualComputing: CURRICULUM_DATA.groups.discipline.visualComputing, //Computación visual
  smartSystems: CURRICULUM_DATA.groups.discipline.smartSystems, //Sistemas inteligentes
  modelSystems: CURRICULUM_DATA.groups.discipline.modelSystems, //Sistemas, modelos, optimización y simulación
  professionalContext: CURRICULUM_DATA.groups.discipline.professionalContext, //Contexto profesional y proyectos de ingeniería
  degreeWork: CURRICULUM_DATA.groups.discipline.degreeWork, //Trabajo de grado
  //Free
  free: CURRICULUM_DATA.groups.free.free //Libre elección
}

//Matters data
const MATTERS = {
  1000001: {
    id: 1000001,
    name: "Matemáticas Básicas",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.leveling,
    group: mg.math,
    nextMatters: [1000004],
  },
  1000002: {
    id: 1000002,
    name: "Lecto-Escritura",
    credits: 4,
    synchronous: 4,
    asynchronous: 7,
    component: mc.leveling,
    group: mg.professionalContext,
  },
  2016499: {
    id: 2016499,
    name: "Electrónica Digital II",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.computerInfrastructure,
    prerequisites: [2016498],
    nextMatters: [2016512, 2016508],
  },
  2016508: {
    id: 2016508,
    name: "Sistemas Embebidos",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.computerInfrastructure,
    prerequisites: [2016499],
  },
  2016512: {
    id: 2016512,
    name: "Verifivación de Sistemas Digitales",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.math,
    prerequisites: [2016499],
  },
  2017271: {
    id: 2017271,
    name: "Principios de Dinámica",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.computerInfrastructure,
    prerequisites: [[1000003, 2015555]],
    nextMatters: [2016770],
  },
  2017287: {
    id: 2017287,
    name: "Sensores y Actuadores",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.computerInfrastructure,
    prerequisites: [2016507],
  },
  2016493: {
    id: 2016493,
    name: "Control",
    credits: 4,
    synchronous: 6,
    asynchronous: 6,
    component: mc.free,
    group: mg.computerInfrastructure,
    prerequisites: [2016507],
    nextMatters: [2016770],
  },
  2016770: {
    id: 2016770,
    name: "Robótica",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.computerInfrastructure,
    prerequisites: [2017271, 2016493],
  },
  2016592: {
    id: 2016592,
    name: "Econimía general",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.eco,
    nextMatters: [2016610],
  },
  2016610: {
    id: 2016610,
    name: "Sistemas de costos",
    credits: 4,
    synchronous: 6,
    asynchronous: 6,
    component: mc.free,
    group: mg.eco,
    prerequisites: [2016592],
    nextMatters: [2025986]
  },
  1000009: {
    id: 1000009,
    name: "Biología General",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.free,
  },
  1000010: {
    id: 1000010,
    name: "Biología Molecular y Celular",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.free,
  },
  2016099: {
    id: 2016099,
    name: "Taller Forma y Estructura",
    credits: 5,
    synchronous: 9,
    asynchronous: 6,
    component: mc.free,
    group: mg.visualComputing,
    nextMatters: [2016069],
  },
  2016069: {
    id: 2016069,
    name: "Fundamentos Tecnológicos: Color y Producción",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.visualComputing,
    prerequisites: [2016099],
    nextMatters: [2016061],
  },
  2016061: {
    id: 2016061,
    name: "Bocetación e Ilustración",
    credits: 3,
    synchronous: 6,
    asynchronous: 3,
    component: mc.free,
    group: mg.visualComputing,
    prerequisites:[2016069],
    nextMatters: [2016083],
  },
  2016083: {
    id: 2016083,
    name: "Producción en Medios Digitales",
    credits: 3,
    synchronous: 6,
    asynchronous: 3,
    component: mc.free,
    group: mg.visualComputing,
    prerequisites: [2016061],
    nextMatters: [2016091, 2016093],
  },
  2016091: {
    id: 2016091,
    name: "Taller de énfasis en Multimedia e Imagen Digital 1",
    credits: 3,
    synchronous: 6,
    asynchronous: 3,
    component: mc.free,
    group: mg.visualComputing,
    prerequisites: [2016083],
  },
  2016093: {
    id: 2016093,
    name: "Taller de énfasis en animación y narrativas audiovisuales 1",
    credits: 3,
    synchronous: 6,
    asynchronous: 3,
    component: mc.free,
    group: mg.visualComputing,
    prerequisites: [2016083],
  },
  2025987: {
    id: 2025987,
    name: "Modelos estocásticos para procesos de manufactura y sistemas de servicios",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.modelSystems,
    prerequisites: [[2025971, 2015173], [2025970, 2019082]],
    nextMatters: [2025988],
  },
  2025988: {
    id: 2025988,
    name: "Taller de simulación procesos de manufactura y sistemas de servicios",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.modelSystems,
    prerequisites: [2025987],
  },

    2016375: {
    id: 2016375,
    name: "Programación Orientada a Objetos",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [[2015734, 2026573]], 
    nextMatters: [2016699],
  },
  
  2016699: {
    id: 2016699,
    name: "Estructuras de Datos",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016375], 
    nextMatters: [2016701],
  },
  
  2016701: {
    id: 2016701,
    name: "Ingeniería de Software I",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016699, 2016703, 2016353, ],
    nextMatters: [2016702],
  },
  
  2016702: {
    id: 2016702,
    name: "Ingeniería de Software II",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
    
    2016716: {
    id: 2016716,
    name: "Arquitectura de Software",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016702], 
  },
    
    2015734: {
    id: 2015734,
    name: "Programación de Computadores",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    nextMatters: [2016375],
    optatives: [2026573],
  },
    
    2026573: {
    id: 2026573,
    name: "Introducción a las ciencias de la computación y a la programación",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    nextMatters: [2016375],
    optatives: [2015734],
  },
    
    2025966: {
    id: 2025966,
    name: "Lenguajes de Programación",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016699, 2015174], 
    optatives: [2027642, 2027628],
  },
    
    2027642: {
    id: 2027642,
    name: "Compiladores",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016699, 2015174], 
    optatives: [2025966, 2027628],
  },
    
    2027628: {
    id: 2027628,
    name: "Teoría de Lenguajes Formales",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016699, 2015174], 
    optatives: [2027642, 2025966],
  },
    
    2016697: {
    id: 2016697,
    name: "Arquitectura de Computadores",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [[2016698, 2016498]], 
    nextMatters: [2016707],
  },
    
    2016707: {
    id: 2016707,
    name: "Sistemas Operativos",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016697], 
  },
    
    2025967: {
    id: 2025967,
    name: "Redes de Computadores",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [1000017, 2016699, 2016697], 
  },
    
    2016722: {
    id: 2016722,
    name: "Computación Paralela y Distribuida",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696], 
  },
    
    2025983: {
    id: 2025983,
    name: "Arquitectura de Infraestructura y gobierno de TICs",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016702, 2025982], 
  },
    
    2016698: {
    id: 2016698,
    name: "Elementos de Computadores",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2025975], 
    nextMatters: [2016697],
  },
    
    2016702: {
    id: 2016702,
    name: "Electrónica Digital I",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
    
    2016702: {
    id: 2016702,
    name: "Bases de Datos",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Análisis de bases de datos",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Teoría de la Información y Sistemas de Comunicaciones",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Comunicaciones",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Sistemas de Información",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Sistemas de Información Gerencial",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Introducción a la Criptografía y a la Seguridad de la Información",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Introducción a la criptografía y a la teoría de información",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Teoría de la codificación",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Criptografía",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Análisis forense digital",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Computación Visual",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Lógica computacional",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Teoría de la recursión",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Introducción a los Sistemas Inteligentes",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  
  2016702: {
    id: 2016702,
    name: "Inteligencia Artificial y Minirobots",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.softwareMethods,

    prerequisites: [2016701, 2025967], 
    nextMatters: [2016716],
  },
  2015556: {
    id: 2015556,
    name: "Cálculo integral en una variable",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.math,
    prerequisites: [[1000004,2016377]],
    nextMatters: [1000006,2015162,1000013,2027877,2015178,2015703,2025986,2016047],
    optatives: [1000005]
  },
  1000006: {
    id: 1000006,
    name: "Cálculo en Varias Variables",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.math,
    prerequisites: [[1000005,2015556]],
    optatives: [2015162]
  },
  2015162: {
    id: 2015162,
    name: "Cálculo Vectorial",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.math,
    prerequisites: [[1000005,2015556]],
    optatives: [1000006]
  },
  1000003: {
    id: 1000003,
    name: "Álgebra Lineal",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.math,
    prerequisites: [[1000004,2016377]],
    optatives: [2015555]
  },    
  2015555: {
    id: 2015555,
    name: "Álgebra Lineal Básica",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.math,
    prerequisites: [[1000004,2016377]],
    optatives: [1000003]
  },
  1000013: {
    id: 1000013,
    name: "Probabilidad y Estadística Fundamental",
    credits: 3, 
    synchronous: 4,
    asynchronous: 5,
    component: mc.basis,
    group: mg.probability,
    prerequisites: [[1000005,2015556]],
    optatives: [[2027877,2015178]]
 },
 2027877: {
    id: 2027877,
    name: "Probabilidad Fundamental",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.probability,
    prerequisites: [[1000005,2015556]],
    optatives: [[1000013,2015178]]
  }, 
  2016763: {
    id: 2016763,
    name: "Práctica estudiantil II",
    credits: 6,
    synchronous: 8,
    asynchronous: 10,
    component: mc.free,
    group: mg.free,
    prerequisites: specialPrerequisites:"Haber aprobado 30 créditos del Componente de Formación Disciplinar o Profesional",
    nextMatters: [],
    optatives: []
  },
  2016764: {
    id: 2016764,
    name: "Práctica estudiantil III",
    credits: 9,
    synchronous: 12,
    asynchronous: 15,
    component: mc.free,
    group: mg.free,
    prerequisites: specialPrerequisites:"Haber aprobado 30 créditos del Componente de Formación Disciplinar o Profesional",
    nextMatters: [],
    optatives: []
  },
  1000070: {
    id: 1000070,
    name: "Práctica Colombia I",
    credits: 3,
    synchronous: 1,
    asynchronous: 8,
    component: mc.free,
    group: mg.free,
    prerequisites: specialPrerequisites:"Haber aprobado 30 créditos del Componente de Formación Disciplinar o Profesional",
    nextMatters: [],
    optatives: []
  },
  1000071: {
    id: 1000071,
    name: "Práctica Colombia II",
    credits: 6,
    synchronous: 1,
    asynchronous: 17,
    component: mc.free,
    group: mg.free,
    prerequisites: specialPrerequisites:"Haber aprobado 30 créditos del Componente de Formación Disciplinar o Profesional",
    nextMatters: [],
    optatives: []
  },
  1000072: {
    id: 1000070,
    name: "Práctica Colombia III",
    credits: 9,
    synchronous: 1,
    asynchronous: 26,
    component: mc.free,
    group: mg.free,
    prerequisites: specialPrerequisites:"Haber aprobado 30 créditos del Componente de Formación Disciplinar o Profesional",
    nextMatters: [],
    optatives: []
  },
  2015168: {
    id: 2015168,
    name: "Fundamentos de matemáticas",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.free,
    prerequisites: [],
    nextMatters: [2015181,2025819],
    optatives: []
  },
  2015181: {
    id: 2015181,
    name: "Sistemas Numéricos",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.free,
    prerequisites: [2015168],
    nextMatters: [2015155],
    optatives: []
  },
  2027641: {
    id: 2027641,
    name: "Análisis de bases de datos",
    credits: 3,
    synchronous: 4,
    asynchronous:5,
    component: mc.free,
    group: mg.computerInfrastructure,
    prerequisites: [2016375],
    nextMatters: [],
    optatives: []
  },
  2025819: {
    id: 2025819,
    name: "Introducción a la Teoría de Conjuntos",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.computerScience,
    prerequisites: [2015168],
    nextMatters: [2026548],
    optatives: []
  },
  2026548: {
    id: 2026548,
    name: "Introducción al Análisis Combinatorio",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.computerScience,
    prerequisites: [2015168],
    nextMatters: [],
    optatives: []
  },
  2026519: {
    id: 2026519,
    name: "Ecuaciones en Diferencias Finitas y Sistemas Dinámicos",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.free,
    prerequisites: [1000003,2015555,2015181],
    nextMatters: [],
    optatives: []
  },
  2016366: {
    id: 2016366,
    name: "Estadística Descriptiva y Exploratoria",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.free,
    prerequisites: [],
    nextMatters: [],
    optatives: []
  },
  2016379: {
    id: 2016379,
    name: "Inferencia Estadística",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.free,
    prerequisites: [1000013,2015178],
    nextMatters: [2016360],
    optatives: []
  },
  
  2016342: {
    id: 2016342,
    name: "Cálculo de ecuaciones diferenciales ordinarias",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.free,
    prerequisites: [1000005,2015556,1000003,2015555],
    nextMatters: [2016506,2015159],
    optatives: []
  },
  2016495: {
    id: 2016495,
    name: "Electrónica Análoga I",
    credits: 4,
    synchronous: 6,
    asynchronous: 6,
    component: mc.free,
    group: mg.free,
    prerequisites: [2016489],
    nextMatters: [2016498],
    optatives: []
  },
  2016489: {
    id: 2016489,
    name: "Circuitos Eléctricos I",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.free,
    prerequisites: [2016509,1000004,2016377],
    nextMatters: [2016495],
    optatives: []
  },
  2016509: {
    id: 2016509,
    name: "Taller de Ingeniería Electrónica",
    credits: 2,
    synchronous: 4,
    asynchronous: 2,
    component: mc.free,
    group: mg.free,
    prerequisites: [2025975],
    nextMatters: [2016489],
    optatives: []
  },
  2016503: {
    id: 2016503,
    name: "Líneas y Antenas",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.free,
    prerequisites: [2016487],
    nextMatters: [2016492],
    optatives: []
  },
  2016487: {
    id: 2016487,
    name: "Campos Electromagnéticos",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.free,
    prerequisites: [1000006,2015162,1000017,2016506],
    nextMatters: [2016503],
    optatives: []
  },
  2016506: {
    id: 2016506,
    name: "Señales y Sistemas I",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.free,
    prerequisites: [2016489,2016342],
    nextMatters: [2016506],
    optatives: []
  },
  
  2015159: {
    id: 2015159,
    name: "Variable Compleja",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.free,
    group: mg.free,
    prerequisites: [2016342],
    nextMatters: [2016507],
    optatives: []
  },
  2016507: {
    id: 2016507,
    name: "Señales y Sistemas II",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.free,
    group: mg.free,
    prerequisites: [2015159, 2016506],
    nextMatters: [2017287,2016493],
    optatives: []
  },
}
export default MATTERS;
