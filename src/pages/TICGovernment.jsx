import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SubjectModal from '../components/SubjectModal/SubjectModal'
import CurriculumContent from '../components/CurriculumContent/CurriculumContent'
import { TICGovermentContent } from '../data/curriculumsContent'
import '../styles/page.css'

const TICGovernment = () => {
  const [subjectIdModal, setSubjectIdModal] = useState(null)
  const handleModal = (id) => setSubjectIdModal(id)

  return (
    <>
      <Header />
      <main>
        <h1 className='curriculum-main-title'>Malla opción de ruta curricular en Arquitectura y Gestión de Tecnologías de Información y las Comunicaciones (TIC) - Gestión Pública de TIC - Gobierno Electrónico</h1>
        <CurriculumContent content={TICGovermentContent} handleModal={handleModal} />
        {subjectIdModal ? <SubjectModal id={subjectIdModal} handleModal={handleModal} /> : null}
      </main>
      <Footer />
    </>
  )
}
export default TICGovernment
