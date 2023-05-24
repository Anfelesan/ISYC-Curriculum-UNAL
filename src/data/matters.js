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
    nextMatters: [1000004,2016377],
  },
  1000004: {
    id: 1000004,
    name: "Cálculo diferencial",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.math,

    //This depends of the matter
    prerequisites: [1000001], // [1000001, 1000002] o [1000001, 1000002, 1000003...]
    nextMatters: [1000005,2015556,1000003,2015555,1000019],
    optatives: [2016377]
  },
  2016377: {
    id: 2016377,
    name: "Cálculo diferencial en una variable",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.math,
    prerequisites: [1000001],
    nextMatters: [1000005,2015556,1000003,2015555,1000019],
    optatives: [1000004]
  },
  1000005: {
    id: 1000005,
    name: "Cálculo integral",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.math,
    prerequisites: [[1000004,2016377]],//[[1000004,2016377]], cuando es opcional 
    nextMatters: [1000006,2015162,1000013,2027877,2015178,2015703,2025986,2016047],
    optatives: [2015556]
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
    nextMatters: [2025963,2026519,2016342,2017271],
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
    nextMatters: [2025963,2026519,2016342,2017271],
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
 2015178: {
    id: 2015178,
    name: "Probabilidad",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.probability,
    prerequisites: [[1000005,2015556]],
    optatives: [1000013,2027877]
 },  
 1000019: {
    id: 1000019,
    name: "Fundamentos de Mecánica",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.physics,
    prerequisites: [[1000004,2016377]],
    nextMatters: [1000017],
 }, 
 1000017: {
    id: 1000017,
    name: "Fundamentos de Electricidad y Magnetismo",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.physics,
    prerequisites: [[1000005,2015556],1000019],
    nextMatters: [1000017],
 },
  2015174: {
    id: 2015174,
    name: "Introducción a la Teoría de la Computación",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.computerScience,
    prerequisites: [[2015184,2025963]],
    nextMatters: [2025966,2027642,2027628],
 },
 2016696: {
    id: 2016696,
    name: "Algoritmos",
    credits: 3, 
    synchronous: 5,
    asynchronous: 4,
    component: mc.basis,
    group: mg.computerScience,
    prerequisites: [2016699,[2015184,2025963],[2025964,2026519]],
    nextMatters: [2016722,2025972,2027311,2027313,2027310,2027309,2025960,2027629,2019267,2025995,2023251,2027631,2028837,2017290],
 },
 2025963: {
    id: 2025963,
    name: "Matemáticas Discretas I",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.computerScience,
    prerequisites: [[1000003,2015555]],
    nextMatters: [2025964,2015174,2016696],
    optatives: [2025819]
 }, 
  2025819: {
    id: 2025819,
    name: "Sistemas numéricos",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.computerScience,
    prerequisites: [1000019],
    nextMatters: [2015181,2015155,2026519], 
    optatives: [2025963]
 }, 
 2025964: {
    id: 2025964,
    name: "Matemáticas Discretas II",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.computerScience,
    prerequisites: [2025963,2015184],
    nextMatters: [2016696,2025970,2019082],
    optatives: [2015181]
 }, 
 2015181: {
    id: 2015181,
    name: "Introducción a la teoría de conjuntos",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.computerScience,
    prerequisites: [2025819],
    nextMatters: [2026548],
    optatives: [2025964]
 },
2015970: {
    id: 2015970,
    name: "Métodos Numéricos",
    credits: 3, 
    synchronous: 4,
    asynchronous: 5,
    component: mc.basis,
    group: mg.computerScience,
    prerequisites: [[1000006,2015162]],
    optatives: [2019072]
}, 
2019072: {
    id: 2019072,
    name: "Análisis Numérico I",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.computerScience,
    prerequisites: [2015155],
    optatives: [2015970]
},
2015703: {
    id: 2015703,
    name: "Ingeniería Económica",
    credits: 3, 
    synchronous: 4,
    asynchronous: 5,
    component: mc.basis,
    group: mg.eco,
    prerequisites: [[1000005,2015556]],
    nextMatters: [2015702,2016028],
    optatives: [2025986,2016047]
},
2025986: {
    id: 2025986,
    name: "Ingeniería Económica y Análisis de Riesgo",
    credits: 3, 
    synchronous: 4,
    asynchronous: 5,
    component: mc.basis,
    group: mg.eco,
    prerequisites: [[1000005,2015556],1000013,[2027877,2015178],2016610],
    nextMatters: [2015702,2016028],
    optatives: [2015703,2016047]
},
2016047: {
    id: 2016047,
    name: "Modelos Económicos Computacionales",
    credits: 3, 
    synchronous: 4,
    asynchronous: 5,
    component: mc.basis,
    group: mg.eco,
    prerequisites: [[1000005,2015556]],
    nextMatters: [2015702,2016028],
    optatives: [2015703,2025986]
},  
2015702: {
    id: 2015702,
    name: "Gerencia y Gestión de Proyectos",
    credits: 3, 
    synchronous: 4,
    asynchronous: 5,
    component: mc.basis,
    group: mg.eco,
    prerequisites: [[2015703,2025986,2016047]],
    nextMatters: [2025982,2016053,2024045,2016615,2026551,2016007,2016600,2016599,2016741,2016037],
    optatives: [2016028]
}, 
2016028: {
    id: 2016028,
    name: "Diseño, Gestión y Evaluación de Proyectos",
    credits: 4, 
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.eco,
    prerequisites: [[2015703,2025986,2016047]],
    nextMatters: [2025982,2016053,2024045,2016615,2026551,2016007,2016600,2016599,2016741,2016037],
    optatives: [2015702]
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
  1000004: {
    id: 1000004,
    name: "Cálculo diferencial",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.math,

    //This depends of the matter
    prerequisites: [1000001], // [1000001, 1000002] o [1000001, 1000002, 1000003...]
    nextMatters: [1000005],
    nextMatters: [1000005,2015556,1000003,2015555,1000019],
    optatives: [2016377]
  },
  2016377: {
    id: 2016377,
    name: "Cálculo diferencial en una variable",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.basis,
    group: mg.math,
    prerequisites: [1000001],
    nextMatters: [1000005],
    nextMatters: [1000005,2015556,1000003,2015555,1000019],
    optatives: [1000004]
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
    component: mc.discipline,
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
    component: mc.discipline,
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
    component: mc.discipline,
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
    component: mc.discipline,
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
    component: mc.discipline,
    group: mg.softwareMethods,

    prerequisites: [2016702], 
  },
    
    2015734: {
    id: 2015734,
    name: "Programación de Computadores",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
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
    component: mc.discipline,
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
    component: mc.discipline,
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
    component: mc.discipline,
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
    component: mc.discipline,
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
    component: mc.discipline,
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
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016697], 
  },
    
    2025967: {
    id: 2025967,
    name: "Redes de Computadores",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [1000017, 2016699, 2016697], 
  },
    
    2016722: {
    id: 2016722,
    name: "Computación Paralela y Distribuida",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696], 
  },
    
    2025983: {
    id: 2025983,
    name: "Arquitectura de Infraestructura y gobierno de TICs",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016702, 2025982], 
  },
    
    2016698: {
    id: 2016698,
    name: "Elementos de Computadores",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2025975], 
    nextMatters: [2016697],
    optatives: [2016498],
  },
    
    2016498: {
    id: 2016498,
    name: "Electrónica Digital I",
    credits: 4,
    synchronous: 5,
    asynchronous: 7,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016495], 
    nextMatters: [2016716],
    optatives: [2016698],
      
  },
    
    2016353: {
    id: 2016353,
    name: "Bases de Datos",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,
      
    prerequisites: [2016375], 
    nextMatters: [2016716],
    optatives: [2027641],
  },
  
    2027641: {
    id: 2027641,
    name: "Análisis de bases de datos",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016375], 
    nextMatters: [2016716],
    optatives: [2016353],
  },
  
  2025994: {
    id: 2025994,
    name: "Teoría de la Información y Sistemas de Comunicaciones",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [[1000013, 2015178], 2025967],
    optatives: [2016492],
  },
  
  2016492: {
    id: 2016492,
    name: "Comunicaciones",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016503], 
    optatives: [2025994],
  },
  
  2016702: {
    id: 2016702,
    name: "Sistemas de Información",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [[2016353,2027641], [2015702, 2016028], 2016703], 
    nextMatters: [2025983],
  },
  
  2016702: {
    id: 2016702,
    name: "Sistemas de Información Gerencial",
    credits: 4,
    synchronous: 5,
    asynchronous: 7,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [[2016353,2027641], [2015702, 2016028], 2016703], 
    nextMatters: [2025983],
  },
  
  2025972: {
    id: 2025972,
    name: "Introducción a la Criptografía y a la Seguridad de la Información",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696],
  },
  
  2027311: {
    id: 2027311,
    name: "Introducción a la criptografía y a la teoría de información",
    credits: 4,
    synchronous: 5,
    asynchronous: 7,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696], 
  },
  
  2027313: {
    id: 2027313,
    name: "Teoría de la codificación",
    credits: 4,
    synchronous: 5,
    asynchronous: 7,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696], 
  },
  
  2027310: {
    id: 2027310,
    name: "Criptografía",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696], 
  },
  
  2016702: {
    id: 2016702,
    name: "Análisis forense digital",
    credits: 4,
    synchronous: 5,
    asynchronous: 7,
    component: mc.discipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696], 
  },
  
  2025960: {
    id: 2025960,
    name: "Computación Visual",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.visualComputing,

    prerequisites: [2016696], 
    optatives: [2027629, 2019267],
  },
  
  2027629: {
    id: 2027629,
    name: "Lógica computacional",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.visualComputing,

    prerequisites: [2016696], 
    optatives: [2019267, 2025960],
  },
  
  2019267: {
    id: 2019267,
    name: "Teoría de la recursión",
    credits: 4,
    synchronous: 5,
    asynchronous: 7,
    component: mc.discipline,
    group: mg.visualComputing,

    prerequisites: [2016696], 
    optatives: [2025960, 2027629],
  },
  
  2025995: {
    id: 2025995,
    name: "Introducción a los Sistemas Inteligentes",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.smartSystems,

    prerequisites: [2016696], 
    nextMatters: [2016716],
    optatives: [2023251, 2027631, ,2028837 ,2017290],
  },
  
  2023251: {
    id: 2023251,
    name: "Inteligencia Artificial y Minirobots",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.smartSystems,

    prerequisites: [2016696], 
    nextMatters: [2016716],
    optatives: [2025995, 2027631,2028837 ,2017290],
  },
  
  2027631: {
    id: 2027631,
    name: "Introducción a la Inteligencia Artificial",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.smartSystems,

    prerequisites: [2016696], 
    nextMatters: [2016716],
    optatives: [2025995, 2023251, 2028837, 2017290],
  },
  
  2028837: {
    id: 2028837,
    name: "Matemáticas del aprendizaje de máquinas",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.discipline,
    group: mg.smartSystems,

    prerequisites: [2016696], 
    nextMatters: [2016716],
    optatives: [2025995, 2023251, 2027631, 2017290],
  },
  
  2017290: {
    id: 2017290,
    name: "Técnicas de Inteligencia Artificial",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.smartSystems,

    prerequisites: [2016696], 
    nextMatters: [2016716],
    optatives: [2025995, 2023251, 2027631, 2028837],
  },
  
  2016703: {
    id: 2016703,
    name: "Pensamiento Sistémico",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.modelSystems,

    nextMatters: [[2025971,2015173]],
  },
  
  2025969: {
    id: 2025969,
    name: "Modelos Estocásticos y Simulación en Computación y Comunicaciones",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.modelSystems,

    prerequisites: [[2025971,2015173]], 
    nextMatters: [2016716],
  },
  
  2025970: {
    id: 2025970,
    name: "Modelos y Simulación",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.modelSystems,

    prerequisites: [[1000006, 2015162], [2025964, 2026519], [1000013, 2015178], 2016375], 
    nextMatters: [2016716],
    optatives: [2019082],
  },
  
  2019082: {
    id: 2019082,
    name: "Modelos matemáticos I",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.discipline,
    group: mg.modelSystems,

    prerequisites: [[1000006, 2015162], [2025964, 2026519], [1000013, 2015178], 2016375], 
    nextMatters: [2016716],
    optatives: [2025970],
  },
  
  2025971: {
    id: 2025971,
    name: "Optimización",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.modelSystems,

    prerequisites: [[2025970, 2019082]], 
    nextMatters: [2016716],
    optatives: [2015173],
  },
  
  2015173: {
    id: 2015173,
    name: "Introducción a la Optimización",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.discipline,
    group: mg.modelSystems,

    prerequisites: [[2025970, 2019082]], 
    nextMatters: [2019082],
    optatives: [2025971],
  },
  
  2025975: {
    id: 2025975,
    name: "Introducción a la Ingeniería de Sistemas y Computación",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.professionalContext,

    nextMatters: [2016716],
  },
  
  2024045: {
    id: 2024045,
    name: "Taller de Proyectos Interdisciplinarios",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.professionalContext,

    specialPrerequisites: "Haber aprovado aprobado 30 créditos del Componente de Formación Disciplinar o Profesional; y, Gerencia y Gestión de Proyectos o Diseño, Gestión y Evaluación de Proyectos", 
    nextMatters: [2016716],
    optatives: [2016600, 2026551, 2016007, 2016615, 2016599, 2016741, 2016037],
  },
  
  2016615: {
    id: 2016615,
    name: "Taller de Invención y Creatividad",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.professionalContext,

    specialPrerequisites: "Haber aprovado aprobado 30 créditos del Componente de Formación Disciplinar o Profesional; y, Gerencia y Gestión de Proyectos o Diseño, Gestión y Evaluación de Proyectos",
    nextMatters: [],
    optatives: [2024045, 2026551, 2016007, 2016600, 2016599, 2016741, 2016037],
  },
  
  2026551: {
    id: 2026551,
    name: "Creación y Gestión de Empresas",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.professionalContext,

    specialPrerequisites: "Haber aprovado aprobado 30 créditos del Componente de Formación Disciplinar o Profesional; y, Gerencia y Gestión de Proyectos o Diseño, Gestión y Evaluación de Proyectos",
    nextMatters: [2016716],
    optatives: [2024045, 2016600, 2016007, 2016615, 2016599, 2016741, 2016037],
  },
  
  2016007: {
    id: 2016007,
    name: "Fundamentos de Administración",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.discipline,
    group: mg.professionalContext,

    specialPrerequisites: "Haber aprovado aprobado 30 créditos del Componente de Formación Disciplinar o Profesional; y, Gerencia y Gestión de Proyectos o Diseño, Gestión y Evaluación de Proyectos",
    nextMatters: [2016716],
    optatives: [2024045, 2026551, 2016600, 2016615, 2016599, 2016741, 2016037],
  },
  2016600: {
    id: 2016600,
    name: "Gestión Tecnológica",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.professionalContext,

    specialPrerequisites: "Haber aprovado aprobado 30 créditos del Componente de Formación Disciplinar o Profesional; y, Gerencia y Gestión de Proyectos o Diseño, Gestión y Evaluación de Proyectos", 
    nextMatters: [2016716],
    optatives: [2024045, 2026551, 2016007, 2016615, 2016599, 2016741, 2016037],
  },
  
  2016599: {
    id: 2016599,
    name: "Gestión de la Ciencia, la Tecnología y la Innovación",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.professionalContext,

    specialPrerequisites: "Haber aprovado aprobado 30 créditos del Componente de Formación Disciplinar o Profesional; y, Gerencia y Gestión de Proyectos o Diseño, Gestión y Evaluación de Proyectos", 
    nextMatters: [2016716],
    optatives: [2024045, 2026551, 2016007, 2016615, 2016600, 2016741, 2016037],
  },
  
  2016741: {
    id: 2016741,
    name: "Finanzas",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.discipline,
    group: mg.professionalContext,

    specialPrerequisites: "Haber aprovado aprobado 30 créditos del Componente de Formación Disciplinar o Profesional; y, Gerencia y Gestión de Proyectos o Diseño, Gestión y Evaluación de Proyectos", 
    nextMatters: [2016716],
    optatives: [2024045, 2026551, 2016007, 2016615, 2016599, 2016600, 2016037],
  },
  
  2016037: {
    id: 2016037,
    name: "Finanzas Avanzadas",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: mc.discipline,
    group: mg.professionalContext,

    specialPrerequisites: "Haber aprovado aprobado 30 créditos del Componente de Formación Disciplinar o Profesional; y, Gerencia y Gestión de Proyectos o Diseño, Gestión y Evaluación de Proyectos", 
    nextMatters: [2016716],
    optatives: [2024045, 2026551, 2016007, 2016615, 2016599, 2016741, 2016600],
  },

}
export default MATTERS;
