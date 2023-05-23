import MATTERS from '../../data/matters';
import ModalBackground from '../ModalBackground/ModalBackground';
import './MatterModal.css'

const MatterModal = ({id}) => {
  const {credits, name, synchronous, asynchronous, group, component} = MATTERS[id];
  const prerequisites = MATTERS[id]?.prerequisites;
  const nextMatters = MATTERS[id]?.nextMatters;
  const optatives = MATTERS[id]?.optatives;

  return(
    <ModalBackground>
      <div className='matterModal-exit'>
        <div className='matterModal-exit-x'></div>
      </div>
      <div className='matterModal'>
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
        <h3 className='matterModal-name'>Calculo diferencial</h3>
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
          : null}
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
      {list.map(matterId => 
        <li key={matterId}>{MATTERS[matterId].name}</li>
      )}
    </ul>
  </div>
  );
}

{/* <div>
  {nextMatters ?
    <ul>
      {nextMatters.map(matterId => 
        <li>
        </li>
      )}
    </ul>
  }
</div> */}

export default MatterModal;