import MCwithRequirements from '../MatterCard/MCwithRequirements'
import './CurriculumContent.css'

const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

const CurriculumContent = ({ content, handleModal }) => {
  return (
    <div className='curriculum-semesters-container'>
      {content.map((semesterContent, index) =>
        <div className='curriculum-semester' key={index}>
          <span className='curriculum-semester-enumeration'>Semestre {roman[index]}</span>
          <div className='semester-matters-container'>
            {semesterContent.map((e, subIndex) => {
              return typeof (e) === 'number'
                ? <MCwithRequirements id={e} handleModal={handleModal} key={subIndex + 'matter'} />
                : <MCwithRequirements
                    id={e.id}
                    credits={e.credits}
                    synchronous={e.synchronous}
                    asynchronous={e.asynchronous}
                    name={e.name}
                    group={e.group}
                    component={e.component}
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
