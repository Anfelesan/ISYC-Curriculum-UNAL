import getFreeDict from "../logic/getFreeDict";
import CURRICULUM_DATA from "./curriculumData";

export const mainCurriculumContent = [
  [1000004, 2025975, 2015734, 2016703], //Semester 1
  [1000019, 1000005, 1000003, 2016375], //Semester 2
  [1000017, 1000006, 2025963, 2016353, 2016698], //Semester 3
  [1000013, 2015703, 2025964, 2016699, 2016697], //Semester 4
  [2025970, 2015702, 2025967, 2016701, 2015174], //Semester 5
  [2025971, 2025982, 2015970, 2016702, 2016696, 2016707], //Semester 6
  [2025969, 2025983, 2025994, 2016716, 2025995, 2025966], //Semester 7
  [2024045, 2016722, 2025972, 2025960, getFreeDict([3, 4, 5]), getFreeDict([2, 4, 2])], //Semester 8
  [getFreeDict([4, 4, 8]), getFreeDict([4, 4, 8]), getFreeDict([4, 4, 8]), getFreeDict([4, 4, 8])], //Semester 9
  [getFreeDict([4, 4, 8]), getFreeDict([4, 4, 8]), getFreeDict([4, 4, 8]), {
    name: "Trabajo de grado",
    credits: 6,
    syncronous: 2,
    asynchronous: 16,
    component: CURRICULUM_DATA.components.discipline,
    group: CURRICULUM_DATA.groups.discipline.degreeWork
  }] //Semester 10
];
export const softwareEngineeringContent = [];

//1000089: Catedra de inducción sede Bogotá
