import { useMemo, useState } from 'react'
import SUBJECTS from '../../data/subjects'
import './SubjectCard.css'

// All options are optional, and if their value are undefined, will be crawled at SUBJECTS if id is defined
const SubjectCard = ({ id, credits, synchronous, asynchronous, name, group, component, handleModal }) => {
  const subject = useMemo(() => {
    return SUBJECTS[id] ?? null
  }, [])

  const [subjectInfo] = useState({
    credits: credits ?? subject?.credits,
    synchronous: synchronous ?? subject?.synchronous,
    asynchronous: asynchronous ?? subject?.asynchronous,
    name: name ?? subject?.name,
    group: group ?? subject?.group,
    component: component ?? subject?.component
  })

  return (
    <div className='subjectCard'>
      <div className='subjectCard-firstData-container'>
        <span className='subjectCard-credits'>{subjectInfo.credits}</span>
        <span className='subjectCard-synchronous'>{subjectInfo.synchronous}</span>
        <span>{subjectInfo.asynchronous}</span>
      </div>
      <h3 className='subjectCard-name'>{subjectInfo.name}</h3>
      <p className='subjectCard-group' style={{ backgroundColor: subjectInfo.group?.color }}>
        {subjectInfo.group?.name}
      </p>
      <div className='subjectCard-idComponent-container' style={{ backgroundColor: subjectInfo.component?.color }}>
        <span className='subjectCard-id'>{id}</span>
        <span className='subjectCard-component'>{subjectInfo.component?.symbol}</span>
      </div>
      {id && <button className='subjectCard-seeMore' onClick={() => handleModal(id)}>Ver más</button>}
    </div>
  )
}

export default SubjectCard
