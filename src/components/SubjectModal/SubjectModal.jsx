import SUBJECTS from '../../data/subjects'
import ModalBackground from '../ModalBackground/ModalBackground'
import './SubjectModal.css'

const SubjectModal = ({ id, handleModal }) => {
  const { credits, name, synchronous, asynchronous, group, component } = SUBJECTS[id]
  const prerequisites = SUBJECTS[id]?.prerequisites
  const nextSubjects = SUBJECTS[id]?.nextSubjects
  const optatives = SUBJECTS[id]?.optatives

  const closeModal = () => {
    handleModal(null)
  }

  // The modal will be closed if background is clicked
  // stopPropagation prevent that a click inside the modal affect the event at ModalBackground
  return (
    <ModalBackground closeModal={closeModal}>
      <div className='subjectModal-exit'>
        <div className='subjectModal-exit-x' />
      </div>
      <div className='subjectModal' onClick={e => e.stopPropagation()}>
        <div className='subjectModal-firstSection-container'>
          <div>
            <span className='subjectModal-idText'>Código:</span>
            <span className='subjectModal-id'>{id}</span>
          </div>
          <div>
            <span className='subjectModal-creditsText'>Créditos:</span>
            <span className='subjectModal-credits'>{credits}</span>
          </div>
        </div>
        <h3 className='subjectModal-name'>{name}</h3>
        <div className='subjectModal-secondSection-container'>
          <div className='subjectModal-weeklyHours'>
            <span className='subjectModal-weeklyHours-title'>Horas semanales</span>
            <div>
              <span className='subjectModal-synchronousText'>Sincrónicas:</span>
              <span className='subjectModal-synchronous'>{synchronous}</span>
            </div>
            <div>
              <span className='subjectModal-asynchronousText'>Asincrónicas:</span>
              <span className='subjectModal-asynchronous'>{asynchronous}</span>
            </div>
          </div>
          <div className='subjectModal-componentGroup-container'>
            <span className='subjectModal-component'>Componente: {component.name}</span>
            <span className='subjectModal-group'>{group.name}</span>
          </div>
        </div>
        <div className='subjectModal-lists-container'>
          {prerequisites
            ? <ListDiv title='Prerrequisitos' list={prerequisites} />
            : null}
          {nextSubjects
            ? <ListDiv title='Es requisito para ver' list={nextSubjects} />
            : null}
          {optatives
            ? <ListDiv title='Optativas' list={optatives} />
            : <MandatoryNotice />}
        </div>
      </div>
    </ModalBackground>
  )
}
const ListDiv = ({ title, list }) => {
  return (
    <div className='subjectModal-list-div'>
      <span className='subjectModal-list-title'>{title}</span>
      <ul className='subjectModal-list'>
        {list.map((listItem, index) => {
          return (listItem instanceof Array
            ? (
              <li key={index}>{
                listItem.map((subjectId, i) => {
                  return (
                    <span key={subjectId}>
                      {i === 0 ? null : <span className='subjectModal-ist-separatorLetter'>O</span>}
                      <span>{SUBJECTS[subjectId].name}</span>
                    </span>
                  )
                })
              }
              </li>
              )
            : <li key={listItem}>{SUBJECTS[listItem].name}</li>
          )
        })}
      </ul>
    </div>
  )
}
const MandatoryNotice = () => {
  return (
    <div className='subjectModal-list-div'>
      <span className='subjectModal-list-title'>Obligatoria (No tiene optativas)</span>
    </div>
  )
}
export default SubjectModal
