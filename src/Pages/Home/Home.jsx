import React from 'react';
import Slieder from '../../Components/Slieder/Slieder';
import TopClass from '../../Components/TopClass/TopClass';
import Instructor from '../../Components/Instructor/Instructor';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    return (
        <div>
            <Slieder />      
            <TopClass />
            <Instructor />
            <ExtraSection />
        </div>
    );
};

export default Home;