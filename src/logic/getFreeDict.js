import CURRICULUM_DATA from "../data/curriculumData"

const getFreeDict = ([credits, synchronous, asynchronous]) => {
  return{
    credits: credits,
    synchronous: synchronous,
    asynchronous: asynchronous,
    component: CURRICULUM_DATA.components.free,
    group: CURRICULUM_DATA.groups.free.free
  }
}
export default getFreeDict
