import MATTERS from '../data/matters'

let mattersWithNext = []
const colors = [
  '#F21',
  '#0AF',
  '#C80',
  '#0CA',
  '#0C0',
  '#71F',
  '#F5c',
  '#F50',
  '#000',
  '#666',
  '#481',
  '#CA0',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444',
  '#444'
]

// This function can find the current semester depending of the matter id
/* const findCurrentSemester = ({ idMatter, content }) => {
  return content.indexOf(content.find(semesterContent => semesterContent.includes(idMatter)))
} */

// Check if the matter has next matters in the current curriculum content
const curriculumHasAnyNext = ({ nextMatters, content }) => {
  for (const idNextMatter of nextMatters) {
    if (content.find(semesterContent => semesterContent.includes(idNextMatter))) return true
  }
  return false
}

// Restore data
export const cleanup = () => {
  mattersWithNext = []
}

const getNextRelation = ({ idMatter, nextMatters, content }) => {
  if (curriculumHasAnyNext({ nextMatters, content })) {
    const length = mattersWithNext.push(idMatter)
    return {
      number: length,
      color: colors[length - 1]
    }
  }
  return null
}

const getpreRelations = () => {}

// Main exported function
// This is executed for each matter in the curriculum content
const requirementsRelations = ({ idMatter, content }) => {
  // Trying to get the matter data
  const { prerequisites, nextMatters } = MATTERS?.[idMatter] ?? { prerequisites: null, nextMatters: null }

  const nextRelation = nextMatters?.length > 0
    ? getNextRelation({ idMatter, nextMatters, content })
    : null

  const preRelations = prerequisites?.length > 0
    ? getpreRelations({ idMatter, prerequisites, content })
    : []

  return { preRelations, nextRelation }
}
export default requirementsRelations
