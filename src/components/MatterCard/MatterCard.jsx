import MATTERS from '../../data/matters'
import './MatterCard.css'

// All options are optional, and if their value are undefined, will be crawled at MATTERS if id is defined
const MatterCard = ({ id, credits, synchronous, asynchronous, name, group, component, handleModal }) => {
  const matterInfo = MATTERS[id] ?? null
  // Props are immutable, so new constants are declared
  const _credits = credits ?? matterInfo?.credits
  const _synchronous = synchronous ?? matterInfo?.synchronous
  const _asynchronous = asynchronous ?? matterInfo?.asynchronous
  const _name = name ?? matterInfo?.name
  const _group = group ?? matterInfo?.group
  const _component = component ?? matterInfo?.component

  return (
    <div className='matterCard'>
      <div className='matterCard-firstData-container'>
        <span className='matterCard-credits'>{_credits}</span>
        <span className='matterCard-synchronous'>{_synchronous}</span>
        <span>{_asynchronous}</span>
      </div>
      <h3 className='matterCard-name'>{_name}</h3>
      <p className='matterCard-group' style={{ backgroundColor: _group?.color }}>
        {_group?.name}
      </p>
      <div className='matterCard-idComponent-container' style={{ backgroundColor: _component?.color }}>
        <span className='matterCard-id'>{id}</span>
        <span className='matterCard-component'>{_component?.symbol}</span>
      </div>
      {id && <button className='matterCard-seeMore' onClick={() => handleModal(id)}>Ver más</button>}
    </div>
  )
}

export default MatterCard
