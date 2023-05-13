const MatterCard = ({credits, synchronous, asynchronous, name, group}) => {
    /* const COMPONENTS = {
        ''
    } */
    
    return(
        <div className="MatterCard">
            <div>
                <span>{credits}</span>
                <span>{synchronous}</span>
                <span>{asynchronous}</span>
            </div>
            <h3>{name}</h3>
            <p>{group}</p>
        </div>
    );
}

export default MatterCard;