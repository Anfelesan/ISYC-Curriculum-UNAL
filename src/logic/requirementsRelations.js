import SUBJECTS from '../data/subjects'

let subjectsWithNext = []
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

// This function can find the current semester depending of the subject id
/* const findCurrentSemester = ({ idSubject, content }) => {
  return content.indexOf(content.find(semesterContent => semesterContent.includes(idSubject)))
} */

// Check if the subject has next subjects in the current curriculum content
const curriculumHasAnyNext = ({ nextSubjects, content }) => {
  for (const idNextSubject of nextSubjects) {
    if (content.find(semesterContent => semesterContent.includes(idNextSubject))) return true
  }
  return false
}

// Restore data
export const cleanup = () => {
  subjectsWithNext = []
}

const getNextRelation = ({ idSubject, nextSubjects, content }) => {
  if (curriculumHasAnyNext({ nextSubjects, content })) {
    const length = subjectsWithNext.push(idSubject)
    return {
      number: length,
      color: colors[length - 1]
    }
  }
  return null
}

const getpreRelations = () => {}

// Main exported function
// This is executed for each subject in the curriculum content
const requirementsRelations = ({ idSubject, content }) => {
  // Trying to get the subject data
  const { prerequisites, nextSubjects } = SUBJECTS?.[idSubject] ?? { prerequisites: null, nextSubjects: null }

  const nextRelation = nextSubjects?.length > 0
    ? getNextRelation({ idSubject, nextSubjects, content })
    : null

  const preRelations = prerequisites?.length > 0
    ? getpreRelations({ idSubject, prerequisites, content })
    : []

  return { preRelations, nextRelation }
}
export default requirementsRelations
