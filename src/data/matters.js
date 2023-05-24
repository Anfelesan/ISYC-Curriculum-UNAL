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
    name: "Matemáticas básicas",
    credits: 4,
    synchronous: 6,
    asynchronous: 6,
    component: mc.leveling,
    group: mg.math,
    nextMatters: [1000004, 2016377],
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

    credits: 4
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016353,2027641], [2015702, 2016028], 2016703, 
    nextMatters: [2025983],
  },
  
  2016702: {
    id: 2016702,
    name: "Sistemas de Información Gerencial",
    credits: 4,
    synchronous: 5,
    asynchronous: 7,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016353,2027641], [2015702, 2016028], 2016703, 
    nextMatters: [2025983],
  },
  
  2025972: {
    id: 2025972,
    name: "Introducción a la Criptografía y a la Seguridad de la Información",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696],
  },
  
  2027311: {
    id: 2027311,
    name: "Introducción a la criptografía y a la teoría de información",
    credits: 4,
    synchronous: 5,
    asynchronous: 7,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696], 
  },
  
  2027313: {
    id: 2027313,
    name: "Teoría de la codificación",
    credits: 4,
    synchronous: 5,
    asynchronous: 7,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696], 
  },
  
  2027310: {
    id: 2027310,
    name: "Criptografía",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696], 
  },
  
  2016702: {
    id: 2016702,
    name: "Análisis forense digital",
    credits: 4,
    synchronous: 5,
    asynchronous: 7,
    component: mc.dicipline,
    group: mg.computerInfrastructure,

    prerequisites: [2016696], 
  },
  
  2025960: {
    id: 2025960,
    name: "Computación Visual",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
    group: mg.modelSystems,

    nextMatters: [[2025971,2015173]],
  },
  
  2025969: {
    id: 2025969,
    name: "Modelos Estocásticos y Simulación en Computación y Comunicaciones",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
    group: mg.professionalContext,

    nextMatters: [2016716],
  },
  
  2024045: {
    id: 2024045,
    name: "Taller de Proyectos Interdisciplinarios",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
    group: mg.professionalContext,

    specialPrerequisites: "Haber aprovado aprobado 30 créditos del Componente de Formación Disciplinar o Profesional; y, Gerencia y Gestión de Proyectos o Diseño, Gestión y Evaluación de Proyectos",
    nextMatters: [2016716],
    optatives: [2024045, 2026551, 2016600, 2016615, 2016599, 2016741, 2016037],
  
 2016600: {
    id: 2016600,
    name: "Gestión Tecnológica",
    credits: 3,
    synchronous: 4,
    asynchronous: 5,
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
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
    component: mc.dicipline,
    group: mg.professionalContext,

    specialPrerequisites: "Haber aprovado aprobado 30 créditos del Componente de Formación Disciplinar o Profesional; y, Gerencia y Gestión de Proyectos o Diseño, Gestión y Evaluación de Proyectos", 
    nextMatters: [2016716],
    optatives: [2024045, 2026551, 2016007, 2016615, 2016599, 2016741, 2016600],
  },
  


}
export default MATTERS;
