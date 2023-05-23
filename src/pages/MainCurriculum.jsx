import React from 'react';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MatterModal from '../components/MatterModal/MatterModal';
import MatterCard from '../components/MatterCard/MatterCard';

const MainCurriculum = () =>{
  const [matterIdModal, setMatterIdModal] = useState(null);

  const handleModal = (id) => {
    setMatterIdModal(id)
  }

  return(
    <React.Fragment>
      <Header />
      <main>
        <MatterCard id={1000004} handleModal={handleModal}/>
        <MatterCard id={2016377} handleModal={handleModal}/>
        <div className='Curriculum-semester'>
        </div>

        {matterIdModal ? <MatterModal id={matterIdModal} handleModal={handleModal} /> : null}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default MainCurriculum;