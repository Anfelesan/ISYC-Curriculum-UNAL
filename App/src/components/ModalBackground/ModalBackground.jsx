import './ModalBackground.css';

const ModalBackground = ({children}) => {
  return(
    <section className='modalBackground'>
      {children}
    </section>
  );
}

export default ModalBackground;