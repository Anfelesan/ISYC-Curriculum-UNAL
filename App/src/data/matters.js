import CURRICULUM_DATA from "./curriculumData";

const MATTERS = {
  1000004 : {
    id: 1000004,
    name: "Cálculo diferencial",
    credits: 4,
    synchronous: 4,
    asynchronous: 8,
    component: matterComponents.basis,
    group: matterGroups.math,

    //This depends of the matter
    nextMatter: 1000005,
    prerequisites : [1000001] // [1000001, 1000002] o [1000001, 1000002, 1000003...]
        
  }
}

const matterComponents = {
  basis : "Fundamentación",
  discipline : "Disciplinar",
  free : "Libre elección"
}
const matterGroups = {
  math : "Matemáticas",
}