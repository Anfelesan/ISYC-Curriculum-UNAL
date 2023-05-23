import './ModalBackground.css';

const ModalBackground = ({children, closeModal}) => {
  //CloseModal is executed without parameters because the objective is to pass null or undefined
  return(
    <section className='modalBackground' onClick={closeModal}>
      {children}
    </section>
  );
}

export default ModalBackground;