import './Header.css'
import CURRICULUM_DATA from '../../data/curriculumData';
import dictWithColor from '../../logic/dictWithColor';

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
            <nav className='header-nav'>
                <ul>
                    <li></li>
                </ul>
            </nav>
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
            <h1>Plan de estudios 2879</h1>
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


            {/* <div className='header-asignatureComponent'>
                <span className='asignatureComponent-letter' style={{backgroundColor: "#e2efda"}}>B</span>
                <div className='header-componentAsignatures-list'>
                    <TextAndNumericData credits={16} color="#cff" numColor="#000" small>
                        Matemáticas
                    </TextAndNumericData>
                    <TextAndNumericData credits={3} color="#95b3d7" numColor="#000" small>
                        Probabilidad y estadística
                    </TextAndNumericData>
                    <TextAndNumericData credits={18} color="#cccc00" numColor="#000" small>
                        Ciencias de la computación
                    </TextAndNumericData>
                    <TextAndNumericData credits={8} color="#ffffcc" numColor="#000" small>
                        Física
                    </TextAndNumericData>
                    <TextAndNumericData credits={6} color="#a9d08e" numColor="#000" small>
                        Ciencias económicas y administrativas
                    </TextAndNumericData>
                </div>
            </div>
            <div className='header-asignatureComponent'>
                <span className='asignatureComponent-letter' style={{backgroundColor: "#ededed"}}>C</span>
                <div className='header-componentAsignatures-list'>
                    <TextAndNumericData credits={21} color="#e4dfec" numColor="#000" small>
                        Métodos y tecnologías de software
                    </TextAndNumericData>
                    <TextAndNumericData credits={30} color="#ffff66" numColor="#000" small>
                        Infraestruct. Comput., de Com. y de inf.
                    </TextAndNumericData>
                    <TextAndNumericData credits={3} color="#d8e4bc" numColor="#000" small>
                        Computación visual
                    </TextAndNumericData>
                    <TextAndNumericData credits={3} color="#b7dee8" numColor="#000" small>
                        Sistemas inteligentes
                    </TextAndNumericData>
                    <TextAndNumericData credits={12} color="#99cc00" numColor="#000" small>
                        Sistemas Modelos, Opt. y simul.
                    </TextAndNumericData>
                    <TextAndNumericData credits={6} color="#99ccff" numColor="#000" small>
                        Contexto Prof. y proyectos de ingeniería
                    </TextAndNumericData>
                    <TextAndNumericData credits={6} color="#d9e1f2" numColor="#000" small>
                        Trabajo de Grado
                    </TextAndNumericData>
                </div>
            </div>
            <div className='header-asignatureComponent'>
                <span className='asignatureComponent-letter' style={{backgroundColor: "#ddebf7"}}>L</span>
                <div className='header-componentAsignatures-list'>
                    <TextAndNumericData credits={33} color="#daeef3" numColor="#000" small>
                        Libre elección
                    </TextAndNumericData>
                </div>
            </div> */}
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