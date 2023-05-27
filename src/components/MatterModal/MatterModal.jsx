import MATTERS from '../../data/matters';
import ModalBackground from '../ModalBackground/ModalBackground';
import './MatterModal.css'

const MatterModal = ({id, handleModal}) => {
  const {credits, name, synchronous, asynchronous, group, component} = MATTERS[id];
  const prerequisites = MATTERS[id]?.prerequisites;
  const nextMatters = MATTERS[id]?.nextMatters;
  const optatives = MATTERS[id]?.optatives;

  const closeModal = () => {
    handleModal(null)
  }

  //The modal will be closed if background is clicked
  //stopPropagation prevent that a click inside the modal affect the event at ModalBackground
  return(
    <ModalBackground closeModal={closeModal}>
      <div className='matterModal-exit' onClick={closeModal}>
        <div className='matterModal-exit-x'></div>
      </div>
      <div className='matterModal' onClick={e => e.stopPropagation()}>
        <div className='matterModal-firstSection-container'>
          <div>
            <span className='matterModal-idText'>Código:</span>
            <span className='matterModal-id'>{id}</span>
          </div>
          <div>
            <span className='matterModal-creditsText'>Créditos:</span>
            <span className='matterModal-credits'>{credits}</span>
          </div>
        </div>
        <h3 className='matterModal-name'>{name}</h3>
        <div className='matterModal-secondSection-container'>
          <div className='matterModal-weeklyHours'>
            <span className='matterModal-weeklyHours-title'>Horas semanales</span>
            <div>
              <span className='matterModal-synchronousText'>Sincrónicas:</span>
              <span className='matterModal-synchronous'>{synchronous}</span>
            </div>
            <div>
              <span className='matterModal-asynchronousText'>Asincrónicas:</span>
              <span className='matterModal-asynchronous'>{asynchronous}</span>
            </div>
          </div>
          <div className='matterModal-componentGroup-container'>
            <span className='matterModal-component'>Componente: {component.name}</span>
            <span className='matterModal-group'>{group.name}</span>
          </div>
        </div>
        <div className='matterModal-lists-container'>
          {prerequisites ?
            <ListDiv title="Prerrequisitos" list={prerequisites}/>
          : null}
          {nextMatters ?
            <ListDiv title="Próximas asignaturas" list={nextMatters}/>
          : null}
          {optatives ?
            <ListDiv title="Optativas" list={optatives} />
          : <MandatoryNotice />}
        </div>
      </div>
    </ModalBackground>
  );
}
const ListDiv = ({title, list}) => {
  return (
    <div className='matterModal-list-div'>
    <span className='matterModal-list-title'>{title}</span>
    <ul className='matterModal-list'>
      {list.map((listItem, index) => {
        return listItem instanceof Array
        ? <li key={index}>
            {listItem.map((matterId, i) => {
              <span key={matterId}>
                {i === 0 ? null : <span className='matterModal-ist-separatorLetter'>O</span>}
                <span>{MATTERS[matterId].name}</span>
              </span>
            })}
          </li>
        : <li key={listItem}>{MATTERS[listItem].name}</li>
      })}
    </ul>
  </div>
  );
}
const MandatoryNotice = () => {
  return (
    <div className='matterModal-list-div'>
      <span className='matterModal-list-title'>Obligatoria (No tiene optativas)</span>
    </div>
  ) ;
}
export default MatterModal;
