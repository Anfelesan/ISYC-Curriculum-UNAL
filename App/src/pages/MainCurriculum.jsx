import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MatterModal from '../components/MatterModal/MatterModal';
import MatterCard from '../components/MatterCard/MatterCard';

const MainCurriculum = () =>{
    return(
        <React.Fragment>
            <Header />
            <main>
                {/*<MatterModal />*/}
                <MatterCard />
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default MainCurriculum;