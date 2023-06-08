import { useEffect } from 'react'
import MCwithRequirements from '../SubjectCard/MCwithRequirements'
import { cleanup } from '../../logic/requirementsRelations'
import InfoSquares from '../InfoSquares/InfoSquares'
import './CurriculumContent.css'
import SUBJECTS from '../../data/subjects'

const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

const CurriculumContent = ({ content, handleModal }) => {
  useEffect(cleanup) // Clean data at requirementsRelations.js

  let [creditsBySemester, synchronousBySemester, asynchronousBySemester] = [0, 0, 0]

  const increaseValuesBySemester = currentIteration => {
    // If this is a number, it represent an ID, else, represent and Object
    const currentSubject = typeof (currentIteration) === 'number'
      ? SUBJECTS?.[currentIteration] ?? null
      : currentIteration ?? null

    creditsBySemester += currentSubject?.credits ?? 0
    synchronousBySemester += currentSubject?.synchronous ?? 0
    asynchronousBySemester += currentSubject?.asynchronous ?? 0
  }
  const resetValuesBySemester = () => {
    creditsBySemester = 0
    synchronousBySemester = 0
    asynchronousBySemester = 0
  }

  return (
    <div className='curriculum-semesters-container'>
      {content.map((semesterContent, index) => {
        return (
          <div className='curriculum-semester' key={index}>
            <span className='curriculum-semester-enumeration'>Semestre {roman[index]}</span>
            <div className='semester-subjects-container'>
              {semesterContent.map((e, subIndex) => {
                increaseValuesBySemester(e)
                return typeof (e) === 'number'
                  ? <MCwithRequirements id={e} content={content} handleModal={handleModal} key={subIndex + 'subject'} />
                  : <MCwithRequirements
                      id={e?.id}
                      credits={e?.credits}
                      synchronous={e?.synchronous}
                      asynchronous={e?.asynchronous}
                      name={e?.name}
                      group={e?.group}
                      component={e?.component}
                      content={content}
                      handleModal={handleModal}
                      key={subIndex + 'subject'}
                    />
              })}
            </div>
            <div className='curriculum-semester-InfoSquares-container'>
              <InfoSquares
                credits={creditsBySemester}
                synchronous={synchronousBySemester}
                asynchronous={asynchronousBySemester}
                weeklyHours={synchronousBySemester + asynchronousBySemester}
              />
            </div>
            {resetValuesBySemester()}
          </div>
        )
      })}
    </div>
  )
}
export default CurriculumContent
