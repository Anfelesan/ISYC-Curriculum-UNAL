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
}
export default MATTERS;
