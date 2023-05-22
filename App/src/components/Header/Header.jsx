import './Header.css'
import CURRICULUM_DATA from '../../data/curriculumData';
import dictWithColor from '../../logic/dictWithColor';
import NavBar from './NavBar';

const Header = () => {
  return(
    <header>
      <section className='header-info'>
        <LogoAndInfoContainer />
        <TitleAndRegulations />
        <TrainingAreas />
        <Components />
        <ComponentAsignatures />
      </section>
      <NavBar />
    </header>
  );
}

//Componetized parts
const LogoAndInfoContainer = () => {
  return(
    <div className='header-logoAndInfoContainer'>
      <img className='header-logo' src="./src/assets/logo-UNAL.png" alt="logo Universidad Nacional de Colombia" />
      <p>Area curricular de ingeniería de sistemas e industrial</p>
      <p><b>Programa de pregrado en ingeniería de sistemas y computación</b></p>
    </div>
  );
}
const TitleAndRegulations = () => {
  return(
    <div className='header-titleAndRegulations'>
      <span className='header-curriculumTitle'>Plan de estudios 2879</span>
      <p className='titleAndRegulation-clarification'>Sugerido para el plan básico</p>
      <h2 className='titleAndRegulation-regulationTitle'>Normativa</h2>
      <ul className='titleAndRegulation-list'>
        <li className='titleAndRegulation-list-li'>
          <span>1.) Creación:</span> 
          <a href="http://www.legal.unal.edu.co/rlunal/home/doc.jsp?d_i=69299" target='_blank'>
            Acuerdo 91 de 1978 del Consejo Superior Universitario
          </a>
        </li>
        <li className='titleAndRegulation-list-li'>
          <span>2.) Denominación:</span> Acuerdo 86 de 2013 del Consejo Superior Universitario
        </li>
        <li className='titleAndRegulation-list-li'>
          <span>3.) Estructura del plan:</span> Acuerdo 91 de 1978 del Consejo Superior Universitario
        </li>
        <li className='titleAndRegulation-list-li'>
          <span>4.) Plan de estudios detallado:</span> Acuerdo 91 de 1978 del Consejo Superior Universitario
        </li>
      </ul>
    </div>
  );
}
const TrainingAreas = () => {
  return(
    <div className='header-trainingAreas'>
      <h2>Créditos áreas de formación. Resolución 2773 de 2003 MEN.</h2>
      <div className='trainingAreas-containerData'>
        {Object.values(CURRICULUM_DATA.training_areas).map((area, index) => 
          <TextAndNumericData credits={area.credits} color={dictWithColor(area).color} numColor="#000" key={index}>
            {area.name}
          </TextAndNumericData>
        )}
      </div>
    </div>
  );
}
const Components = () => {
  const {basis: CB, discipline: CD, free: CF, leveling: CL} = CURRICULUM_DATA.components;
  return(
    <div className='header-componentsTypes'>
      <h2>Créditos Componentes Acuerdo 033 de 2007 del CSU.</h2>
      <div className='header-componentsTypes-container'>
        <TextAndNumericData credits={CB.credits} component={CB.symbol} color={dictWithColor(CB).color} numColor="#000">
          {CB.name}
        </TextAndNumericData>
        <TextAndNumericData credits={CD.credits} component={CD.symbol} color={dictWithColor(CD).color} numColor="#000">
          {CD.name}
        </TextAndNumericData>
        <TextAndNumericData credits={CF.credits} component={CF.symbol} color={dictWithColor(CF).color} numColor="#000">
          {CF.name}
        </TextAndNumericData>
          <hr/>
        <TextAndNumericData credits={CURRICULUM_DATA.total_credits} color="#002060" numColor="#fff">
          Total
        </TextAndNumericData>
        <TextAndNumericData credits={CL.credits} component={CL.symbol} color={dictWithColor(CL).color} numColor="#000">
          {CL.name}
        </TextAndNumericData>
      </div>
    </div>
  );
}

const ComponentAsignatures = () => {
  return(
    <div className='header-componentAsignatures'>
      {Object.entries(CURRICULUM_DATA.groups).map(([componentType, groupsObj], index) =>

        <div className='header-asignatureComponent' key={index}>
          <span className='asignatureComponent-letter' style={{
            backgroundColor: dictWithColor(CURRICULUM_DATA.components[componentType]).color}}>
            {CURRICULUM_DATA.components[componentType].symbol}
          </span>
          <div className='header-componentAsignatures-list'>
            {Object.values(groupsObj).map((group, index) =>
              <TextAndNumericData credits={group.credits} color={dictWithColor(group).color} numColor="#000" small key={index}>
                {group.name}
              </TextAndNumericData>
            )}
          </div>
        </div>
      )}
    </div>
    );
}


const ColoredNumericData = ({credits, color, numColor, small}) => {
  const sizes = {
    width: small? "80px": "85px",
    height: small? "20px": "26px",
    fontSize: small? "13.5px": "15px"
  }
    
  const boxStyles = {
    backgroundColor: color,
    color: numColor,
    width: sizes.width,
    height: sizes.height,
    fontSize: sizes.fontSize
  }

  const dataBarStyles = {
    width: `${credits * 100 / CURRICULUM_DATA.total_credits}%`
  }

  return(
    <div className='header-coloredNumericData' style={boxStyles}>
      <span className='coloredNumericData-dataBar-container'>
          <span className='coloredNumericData-dataBar' style={dataBarStyles}></span>
      </span>
      <span className='coloredNumericData-value'>{credits}</span>
    </div>
  );
}

const TextAndNumericData = ({credits, color, numColor, small, component, children}) =>{
    const componentType = component != null 
        ?<span className='textAndNumericData-componentType'>{component}</span>
        : null

    return(
        <div className='header-textAndNumericData'>
            <span className='textAndNumericData-text'>{children}</span>
            <ColoredNumericData credits={credits} color={color} numColor={numColor} small={small}/>
            {componentType}
        </div>
    );
}

export default Header;