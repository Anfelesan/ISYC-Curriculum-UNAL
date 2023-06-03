import { useEffect } from 'react'
import MCwithRequirements from '../MatterCard/MCwithRequirements'
import { cleanup } from '../../logic/requirementsRelations'
import './CurriculumContent.css'

const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

const CurriculumContent = ({ content, handleModal }) => {
  useEffect(cleanup) // Clean data at requirementsRelations.js

  return (
    <div className='curriculum-semesters-container'>
      {content.map((semesterContent, index) =>
        <div className='curriculum-semester' key={index}>
          <span className='curriculum-semester-enumeration'>Semestre {roman[index]}</span>
          <div className='semester-matters-container'>
            {semesterContent.map((e, subIndex) => {
              return typeof (e) === 'number'
                ? <MCwithRequirements id={e} content={content} handleModal={handleModal} key={subIndex + 'matter'} />
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
                    key={subIndex + 'matter'}
                  />
            })}
          </div>
        </div>
      )}
    </div>
  )
}
export default CurriculumContent
