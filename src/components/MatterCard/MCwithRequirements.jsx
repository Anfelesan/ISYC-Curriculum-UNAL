import MatterCard from './MatterCard'
import './MatterCard.css'

// Theese two props are optional:
// preRelations expects to be a dictionary {number: "color", ...}
// nextRelation expects to be a dictionary with 1 entry {number: "color"}
const MCwithRequirements = ({ id, credits, synchronous, asynchronous, name, group, component, handleModal, preRelations, nextRelation }) => {
  return (
    <div className='matterCard-container'>
      <div className='matterCard-prerequisites-container'>
        <div className='matterCard-prerequisite-square'>11</div>
        <div className='matterCard-prerequisite-square'>12</div>
      </div>
      <MatterCard
        id={id}
        credits={credits}
        synchronous={synchronous}
        asynchronous={asynchronous}
        name={name}
        group={group}
        component={component}
        handleModal={handleModal}
      />
      <div className='matterCard-nextMatter-square'>20</div>
    </div>
  )
}
export default MCwithRequirements
