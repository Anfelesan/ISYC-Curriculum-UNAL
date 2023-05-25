import React from 'react';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MatterModal from '../components/MatterModal/MatterModal';
import MatterCard from '../components/MatterCard/MatterCard';
import '../styles/CurriculumStyles.css';
import { mainCurriculumContent } from '../data/curriculumsContent';

const MainCurriculum = () =>{
  const [matterIdModal, setMatterIdModal] = useState(null);

  const handleModal = (id) => {
    setMatterIdModal(id)
  }
  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  return(
    <React.Fragment>
      <Header />
      <main>

        <div className='curriculum-semesters-container'>
          {mainCurriculumContent.map((semesterContent, index) => 
            <div className='curriculum-semester' key={index}>
              <span className='curriculum-semester-enumeration'>Semestre {roman[index]}</span>
              <div className='semester-matters-container'>
                {semesterContent.map((e, i) => {
                  return typeof(e) === "number"
                  ? <MatterCard id={e} handleModal={handleModal} key={i + 100}/>
                  : <MatterCard {...e} handleModal={handleModal} key={i + 100}/>
                })}
              </div>
            </div>
          )}
        </div>
        {matterIdModal ? <MatterModal id={matterIdModal} handleModal={handleModal} /> : null}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default MainCurriculum;