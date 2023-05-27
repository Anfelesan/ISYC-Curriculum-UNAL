import MatterCard from '../MatterCard/MatterCard'
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
                ? <MatterCard id={e} handleModal={handleModal} key={subIndex + 'matter'} />
                : <MatterCard {...e} handleModal={handleModal} key={subIndex + 'matter'} />
            })}
          </div>
        </div>
      )}
    </div>
  )
}
export default CurriculumContent
