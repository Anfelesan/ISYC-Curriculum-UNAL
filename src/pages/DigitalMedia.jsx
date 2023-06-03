import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SubjectModal from '../components/SubjectModal/SubjectModal'
import CurriculumContent from '../components/CurriculumContent/CurriculumContent'
import { multimediaContent } from '../data/curriculumsContent'

const DigitalMedia = () => {
  const [subjectIdModal, setSubjectIdModal] = useState(null)
  const handleModal = (id) => setSubjectIdModal(id)

  return (
    <>
      <Header />
      <main>
        <CurriculumContent content={multimediaContent} handleModal={handleModal} />
        {subjectIdModal ? <SubjectModal id={subjectIdModal} handleModal={handleModal} /> : null}
      </main>
      <Footer />
    </>
  )
}
export default DigitalMedia
