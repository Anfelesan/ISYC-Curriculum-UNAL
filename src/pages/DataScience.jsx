import { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MatterModal from '../components/MatterModal/MatterModal'
import CurriculumContent from '../components/CurriculumContent/CurriculumContent'
import { dataIngContent } from '../data/curriculumsContent'

const DataSciences = () => {
  const [matterIdModal, setMatterIdModal] = useState(null)
  const handleModal = (id) => setMatterIdModal(id)

  return (
    <>
      <Header />
      <main>
        <CurriculumContent content={dataIngContent} handleModal={handleModal} />
        {matterIdModal ? <MatterModal id={matterIdModal} handleModal={handleModal} /> : null}
      </main>
      <Footer />
    </>
  )
}
export default DataSciences
