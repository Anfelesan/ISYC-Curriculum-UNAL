import { useEffect, useState } from 'react'
import requirementsRelations from '../../logic/requirementsRelations'
import SubjectCard from './SubjectCard'
import './SubjectCard.css'

// Theese two props are optional:
// preRelations expects to be a dictionary {number: "color", ...}
// nextRelation expects to be a dictionary with 1 entry {number: "color"}
const MCwithRequirements = ({ id, credits, synchronous, asynchronous, name, group, component, content, handleModal }) => {
  const [preRelations, setPreRelations] = useState([])
  const [nextRelation, setNextRelation] = useState(null)

  useEffect(() => {
    const { preRelations, nextRelation } = requirementsRelations({ idSubject: id, content })
    setNextRelation(nextRelation)
    setPreRelations(preRelations)
  }, [])

  return (
    <div className='subjectCard-container'>
      <div className='subjectCard-prerequisites-container'>
        <div className='subjectCard-prerequisite-square'>11</div>
        <div className='subjectCard-prerequisite-square'>12</div>
      </div>
      <SubjectCard
        id={id}
        credits={credits}
        synchronous={synchronous}
        asynchronous={asynchronous}
        name={name}
        group={group}
        component={component}
        handleModal={handleModal}
      />
      {nextRelation &&
        <div className='subjectCard-nextSubject-square' style={{ backgroundColor: nextRelation.color }}>{nextRelation.number}</div>}
    </div>
  )
}
export default MCwithRequirements
