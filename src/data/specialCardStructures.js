import CURRICULUM_DATA from "../data/curriculumData"

export const getFreeDict = ([credits, synchronous, asynchronous]) => {
  return {
    credits: credits,
    synchronous: synchronous,
    asynchronous: asynchronous,
    component: CURRICULUM_DATA.components.free,
    group: CURRICULUM_DATA.groups.free.free
  }
}
export const degreWorkDict = {
  name: "Trabajo de grado",
  credits: 6,
  synchronous: 2,
  asynchronous: 16,
  component: CURRICULUM_DATA.components.discipline,
  group: CURRICULUM_DATA.groups.discipline.degreeWork
}