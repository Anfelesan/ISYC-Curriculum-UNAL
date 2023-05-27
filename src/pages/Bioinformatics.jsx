import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MatterModal from '../components/MatterModal/MatterModal'
import CurriculumContent from '../components/CurriculumContent/CurriculumContent'
import { bioComputingContent } from '../data/curriculumsContent'

const Bioinformatics = () => {
  const [matterIdModal, setMatterIdModal] = useState(null)
  const handleModal = (id) => setMatterIdModal(id)

  return (
    <>
      <Header />
      <main>
        <CurriculumContent content={bioComputingContent} handleModal={handleModal} />
        {matterIdModal ? <MatterModal id={matterIdModal} handleModal={handleModal} /> : null}
      </main>
      <Footer />
    </>
  )
}
export default Bioinformatics
