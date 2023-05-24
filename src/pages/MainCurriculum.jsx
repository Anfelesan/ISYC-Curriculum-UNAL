import React from 'react';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MatterModal from '../components/MatterModal/MatterModal';
import MatterCard from '../components/MatterCard/MatterCard';
import '../styles/CurriculumStyles.css';

const MainCurriculum = () =>{
  const [matterIdModal, setMatterIdModal] = useState(null);

  const handleModal = (id) => {
    setMatterIdModal(id)
  }

  return(
    <React.Fragment>
      <Header />
      <main>
        <div className='curriculum-semesters-container'>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre I</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={1000001} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre II</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={1000001} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre III</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={1000001} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre IV</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={1000001} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre V</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={1000001} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre VI</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={1000001} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre VII</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={1000001} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre VIII</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={1000001} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre IX</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={1000001} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre X</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
              <MatterCard id={1000001} handleModal={handleModal}/>
              <MatterCard id={2016377} handleModal={handleModal}/>
            </div>
          </div>
        </div>
        

        {matterIdModal ? <MatterModal id={matterIdModal} handleModal={handleModal} /> : null}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default MainCurriculum;