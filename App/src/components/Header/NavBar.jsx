import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () =>  {

  return (
    <nav className='header-nav'>
      <span>Enfoques</span>
      <ul className='header-nav-ul'>
        <li className='header-nav-li'>
          <Link to="/ingenieria-de-software" className='header-nav-link'>Ingeniería de software</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/sistemas-inteligentes" className='header-nav-link'>Sistemas inteligentes</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/bioinformatica" className='header-nav-link'>Bioinformática, Biología Computacional y Computación Bioinspirada</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/telecomunicaciones" className='header-nav-link'>Telecomunicaciones</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/gobierno-tic" className='header-nav-link'>Arquitectura y Gestión de Tecnologías de Información y las Comunicaciones (TIC) - Gestión Pública de TIC - Gobierno Electrónico</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/modelos" className='header-nav-link'>Modelos, Optimización y Simulación</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/ciencias-de-la-computacion" className='header-nav-link'>Ciencias de la Computación</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/hardware" className='header-nav-link'>Hardware</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/vision-y-robotica" className='header-nav-link'>Visión y Robótica</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/ingenieria-biomedica" className='header-nav-link'>Ingeniería Biomédica</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/medios-digitales" className='header-nav-link'>Computación Interactiva y Creativa, Medios Digitales y Animación</Link>
        </li>
        <li className='header-nav-li'>
          <Link to="/ciencia-de-datos" className='header-nav-link'>Ingeniería y ciencias de datos</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar;

