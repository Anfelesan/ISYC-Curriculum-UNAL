import CURRICULUM_DATA from "./curriculumData";

export const mainCurriculumContent = [
[1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, {free: [3, 4, 5]}, {free: [2, 4, 2]}], //Semester 8
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}], //Semester 9
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
//malla de ingeniería de software
export const softwareEngineeringContent = [
    [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, {free: [3, 4, 5]}, {free: [2, 4, 2]}], //Semester 8
  [2026213, 2016732, 2019772, 2019725], //Semester 9
  [2019773, 2019795, 2019762, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
//Malla de Sistemas inteligentes
export const SmartSistemsContent = [
  [1000004, 2025975, 2015734, 2016703, {free: [3, 4, 5]}], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, 2016379], //Semester 8
  [2026484, 2019818, 2012033, 2019762], //Semester 9
  [2019779, 2026442, {free: [2, 4, 2]}, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
//malla de Bioinformática, Biología Computacional y Computación Bioinspirada
export const BioComputingContent = [
  [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375, 1000009], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, 2016379], //Semester 8
  [2025439, 2012046, 2012946, 2020933], //Semester 9
  [{free: [2, 4, 2]}, 2019799, 2016839, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
//malla de Telecomunicaciones
export const TelecomunicationsContent = [
  [1000004, 2025975, 2015734, 2016703, {free: [3, 4, 5]}], //Semester 1
  [1000019, 1000005, 1000003, 2016375, 2016698], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016697], //Semester 3
  [1000013, 2015703, 1000007, 2016699, 2016707], //Semester 4
  [2025964, 2015702, 2025967, 2016701, 2016509], //Semester 5
  [2025970, 2025982, 2016702, 2015174, 2016489], //Semester 6
  [2025971, 2025983, 2016716, 2016696, 2016487, 2016506], //Semester 7
  [2025969, 2025994, 2025966, 2025995, 2015970, 2016503], //Semester 8
  [2024045, 2016722, 2025972, 2025960, 2016492], //Semester 9
  [{free: [2, 4, 2]}, 2025783, 2025960, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
/*malla de Arquitectura y Gestión de Tecnologías de Información y las Comunicaciones (TIC) - Gestión Pública de TIC 
- Gobierno Electrónico*/
export const TICGovermentContent = [
  [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, {free: [3, 4, 5]}, {free: [2, 4, 2]}], //Semester 8
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}], //Semester 9
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
// malla de Modelos, Optimización y Simulación
export const MoOpAndSimulationContent = [
  [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, {free: [3, 4, 5]}, {free: [2, 4, 2]}], //Semester 8
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}], //Semester 9
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
// malla de Ciencias de la Computación
export const ComputerCienceContent = [
  [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, {free: [3, 4, 5]}, {free: [2, 4, 2]}], //Semester 8
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}], //Semester 9
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
//malla de Hardware
export const HardwareContent = [
  [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, {free: [3, 4, 5]}, {free: [2, 4, 2]}], //Semester 8
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}], //Semester 9
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
//malla de Visión y Robótica
export const RoboticVisionContent = [
  [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, {free: [3, 4, 5]}, {free: [2, 4, 2]}], //Semester 8
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}], //Semester 9
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
//malla de Ingeniería Biomédica
export const BiomedicIngContent = [
  [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, {free: [3, 4, 5]}, {free: [2, 4, 2]}], //Semester 8
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}], //Semester 9
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
//malla de Computación Interactiva y Creativa, Medios Digitales y Animación
export const MultimediaContent = [
  [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, {free: [3, 4, 5]}, {free: [2, 4, 2]}], //Semester 8
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}], //Semester 9
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
//malla de Ingeniería y ciencias de datos
export const DataIngContent = [
  [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, {free: [3, 4, 5]}, {free: [2, 4, 2]}], //Semester 8
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}], //Semester 9
  [{free: [4, 4, 8]}, {free: [4, 4, 8]}, {free: [4, 4, 8]}, {degreeWork: {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.degreeWork
  }}] //Semester 10
];
//1000089: Catedra de inducción sede Bogotá
