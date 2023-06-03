import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SubjectModal from '../components/SubjectModal/SubjectModal'
import CurriculumContent from '../components/CurriculumContent/CurriculumContent'
import { moOpAndSimulationContent } from '../data/curriculumsContent'

const Models = () => {
  const [subjectIdModal, setSubjectIdModal] = useState(null)
  const handleModal = (id) => setSubjectIdModal(id)

  return (
    <>
      <Header />
      <main>
        <CurriculumContent content={moOpAndSimulationContent} handleModal={handleModal} />
        {subjectIdModal ? <SubjectModal id={subjectIdModal} handleModal={handleModal} /> : null}
      </main>
      <Footer />
    </>
  )
}
export default Models
