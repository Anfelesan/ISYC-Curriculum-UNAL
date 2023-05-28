import { useState } from 'react'
import MATTERS from '../../data/matters'
import './MatterCard.css'

// All options are optional, and if their value are undefined, will be crawled at MATTERS if id is defined
const MatterCard = ({ id, credits, synchronous, asynchronous, name, group, component, handleModal }) => {
  const matter = MATTERS[id] ?? null

  const [matterInfo] = useState({
    credits: credits ?? matter?.credits,
    synchronous: synchronous ?? matter?.synchronous,
    asynchronous: asynchronous ?? matter?.asynchronous,
    name: name ?? matter?.name,
    group: group ?? matter?.group,
    component: component ?? matter?.component
  })

  return (
    <div className='matterCard-container'>
      <div className='matterCard-prerequisites-container'>
        <div className='matterCard-prerequisite-square'>11</div>
        <div className='matterCard-prerequisite-square'>12</div>
        <div className='matterCard-prerequisite-square'>13</div>
        <div className='matterCard-prerequisite-square'>14</div>
        <div className='matterCard-prerequisite-square'>15</div>
      </div>
      <div className='matterCard'>
        <div className='matterCard-firstData-container'>
          <span className='matterCard-credits'>{matterInfo.credits}</span>
          <span className='matterCard-synchronous'>{matterInfo.synchronous}</span>
          <span>{matterInfo.asynchronous}</span>
        </div>
        <h3 className='matterCard-name'>{matterInfo.name}</h3>
        <p className='matterCard-group' style={{ backgroundColor: matterInfo.group?.color }}>
          {matterInfo.group?.name}
        </p>
        <div className='matterCard-idComponent-container' style={{ backgroundColor: matterInfo.component?.color }}>
          <span className='matterCard-id'>{id}</span>
          <span className='matterCard-component'>{matterInfo.component?.symbol}</span>
        </div>
        {id && <button className='matterCard-seeMore' onClick={() => handleModal(id)}>Ver más</button>}
      </div>
      <div className='matterCard-nextMatters-container'>
        <div className='matterCard-nextMatter-square'>20</div>
        <div className='matterCard-nextMatter-square'>21</div>
        <div className='matterCard-nextMatter-square'>22</div>
        <div className='matterCard-nextMatter-square'>23</div>
      </div>
    </div>
  )
}

export default MatterCard
