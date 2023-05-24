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

        {/* <div className='curriculum-semesters-container'>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre I</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000004} handleModal={handleModal}/>
              <MatterCard id={2025975} handleModal={handleModal}/>
              <MatterCard id={2015734} handleModal={handleModal}/>
              <MatterCard id={2016703} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre II</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000019} handleModal={handleModal}/>
              <MatterCard id={1000005} handleModal={handleModal}/>
              <MatterCard id={1000003} handleModal={handleModal}/>
              <MatterCard id={2016375} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre III</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000017} handleModal={handleModal}/>
              <MatterCard id={1000006} handleModal={handleModal}/>
              <MatterCard id={2025963} handleModal={handleModal}/>
              <MatterCard id={2016353} handleModal={handleModal}/>
              <MatterCard id={2016698} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre IV</span>
            <div className='semester-matters-container'>
              <MatterCard id={1000013} handleModal={handleModal}/>
              <MatterCard id={2015703} handleModal={handleModal}/>
              <MatterCard id={2025964} handleModal={handleModal}/>
              <MatterCard id={2016699} handleModal={handleModal}/>
              <MatterCard id={2016697} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre V</span>
            <div className='semester-matters-container'>
              <MatterCard id={2025970} handleModal={handleModal}/>
              <MatterCard id={2015702} handleModal={handleModal}/>
              <MatterCard id={2025967} handleModal={handleModal}/>
              <MatterCard id={2016701} handleModal={handleModal}/>
              <MatterCard id={2015174} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre VI</span>
            <div className='semester-matters-container'>
              <MatterCard id={2025970} handleModal={handleModal}/>
              <MatterCard id={2015702} handleModal={handleModal}/>
              <MatterCard id={2025967} handleModal={handleModal}/>
              <MatterCard id={2016701} handleModal={handleModal}/>
              <MatterCard id={2015174} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre VII</span>
            <div className='semester-matters-container'>
              <MatterCard id={2025971} handleModal={handleModal}/>
              <MatterCard id={2025982} handleModal={handleModal}/>
              <MatterCard id={2015970} handleModal={handleModal}/>
              <MatterCard id={2016702} handleModal={handleModal}/>
              <MatterCard id={2016696} handleModal={handleModal}/>
              <MatterCard id={2016707} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre VIII</span>
            <div className='semester-matters-container'>
              <MatterCard id={2025969} handleModal={handleModal}/>
              <MatterCard id={2025983} handleModal={handleModal}/>
              <MatterCard id={2025994} handleModal={handleModal}/>
              <MatterCard id={2016716} handleModal={handleModal}/>
              <MatterCard id={2025995} handleModal={handleModal}/>
              <MatterCard id={2025966} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre IX</span>
            <div className='semester-matters-container'>
              <MatterCard id={2024045} handleModal={handleModal}/>
              <MatterCard id={2016722} handleModal={handleModal}/>
              <MatterCard id={2025972} handleModal={handleModal}/>
              <MatterCard id={2025960} handleModal={handleModal}/>
              <MatterCard id={2025960} handleModal={handleModal}/>
            </div>
          </div>
          <div className='curriculum-semester'>
            <span className='curriculum-semester-enumeration'>Semestre X</span>
            <div className='semester-matters-container'>
              
            </div>
          </div>
        </div> */}
        

        {matterIdModal ? <MatterModal id={matterIdModal} handleModal={handleModal} /> : null}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default MainCurriculum;