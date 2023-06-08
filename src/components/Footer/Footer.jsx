import CURRICULUM_DATA from '../../data/curriculumData'
import InfoSquares from '../InfoSquares/InfoSquares'
import { SCwithRequirementsDemo } from '../SubjectCard/MCwithRequirements'
import SubjectCard from '../SubjectCard/SubjectCard'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <GuideInfo />
      <ComponentsInfo />
    </footer>
  )
}

const ComponentsInfo = () => {
  return (
    <>
      {/* <h2 className='footer-subtitle'>Creditos por componentes</h2>
      <SubjectCard id={1000004} group={CURRICULUM_DATA.groups.leveling.foreignLanguages} /> */}
    </>
  )
}

const GuideInfo = () => {
  return (
    <>
      <h2 className='footer-subtitle'>Guía de elementos</h2>
      <div className='guide-info-container'>
        <div className='guide-info-ilustrations-container'>
          <SCwithRequirementsDemo
            id='Código / Área'
            credits='CRE-A'
            synchronous='HAP-A'
            asynchronous='HTA-A'
            name='Nombre de la asignatura'
            group={{
              name: 'Nombre de la agrupación',
              color: '#ca7'
            }}
            component={{
              symbol: 'COM',
              color: '#c8c'
            }}
          />
          <InfoSquares credits='CRE-S' synchronous='HAP-S' asynchronous='HTA-S' weeklyHours='HTS' />
        </div>
        <div className='guide-info-cards-container'>
          <GuideInfoCard abbreviation='CRE'>
            <ul className='guide-info-card-ulList'>
              <li><span className='guide-info-card-list-letter'>-A</span><span>Créditos por Asignatura</span></li>
              <li><span className='guide-info-card-list-letter'>-S</span><span>Créditos por Semestre</span></li>
            </ul>
          </GuideInfoCard>
          <GuideInfoCard abbreviation='HAP'>
            <ul className='guide-info-card-ulList'>
              <li><span className='guide-info-card-list-letter'>-A</span><span>Horas de actividad presencial por Asignatura</span></li>
              <li><span className='guide-info-card-list-letter'>-S</span><span>Horas de actividad presencial por Semana</span></li>
            </ul>
          </GuideInfoCard>
          <GuideInfoCard abbreviation='HTA'>
            <ul className='guide-info-card-ulList'>
              <li><span className='guide-info-card-list-letter'>-A</span><span>Horas de trabajo académico individual por Asignatura</span></li>
              <li><span className='guide-info-card-list-letter'>-S</span><span>: Horas de trabajo académico individual por Semana</span></li>
            </ul>
          </GuideInfoCard>
          <GuideInfoCard abbreviation='HTS'>
            <span className='guide-info-card-text'>Horas de trabajo académico Semanal</span>
          </GuideInfoCard>
          <GuideInfoCard abbreviation='COM'>
            <span className='guide-info-card-text'>Componente</span>
          </GuideInfoCard>
          <GuideInfoCard abbreviation='PRE'>
            <span className='guide-info-card-text'>Prerrequisitos</span>
          </GuideInfoCard>
          <GuideInfoCard abbreviation='NEXT'>
            <span className='guide-info-card-text'>Materias las cuales tienen como prerrequisito a la presente</span>
          </GuideInfoCard>
        </div>
      </div>
    </>
  )
}

// Text is an object: {S: 'lorem ipsum...'}
const GuideInfoCard = ({ abbreviation, children }) => {
  return (
    <div className='guide-info-card'>
      <span className='guide-info-card-abbreviation'>{abbreviation}</span>
      <div className='guide-info-card-content'>{children}</div>
    </div>
  )
}

export default Footer
