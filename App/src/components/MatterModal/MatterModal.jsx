import ModalBackground from '../ModalBackground/ModalBackground';
import './MatterModal.css'

const MatterModal = () => {
    return(
        <ModalBackground>
            <div className='c-matterModal'>
                <h2 style={{
                    fontSize: "25px",
                    fontFamily: "arial"
                }}>Curriculum</h2>
            </div>
        </ModalBackground>
    );
}

export default MatterModal;