import './InfoSquares.css'

const InfoSquares = ({ credits, synchronous, asynchronous, weeklyHours }) => {
  return (
    <div className='infoSquares-container'>
      <span className='infoSquares-item infoSquares-item-credits'>{credits}</span>
      <span className='infoSquares-item infoSquares-item-synchronous'>{synchronous}</span>
      <span className='infoSquares-item infoSquares-item-asynchronous'>{asynchronous}</span>
      <span className='infoSquares-item infoSquares-item-weeklyHours'>{weeklyHours}</span>
    </div>
  )
}
export default InfoSquares
