import './ModalBackground.css';

const ModalBackground = ({children}) => {
    return(
        <section className='c-modalBackground'>
            {children}
        </section>
    );
}

export default ModalBackground;