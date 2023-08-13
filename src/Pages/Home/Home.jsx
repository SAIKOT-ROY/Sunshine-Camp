import React from 'react';
import Slieder from '../../Components/Slieder/Slieder';
import TopClass from '../../Components/TopClass/TopClass';
import Instructor from '../../Components/Instructor/Instructor';
import ExtraSection from '../ExtraSection/ExtraSection';
import LittleSlide from '../../Components/LittleSlide/LittleSlide';
import Curve from '../../Components/Curve/Curve';
import Accordin from '../../Components/Accordin/Accordin';
import useTitle from '../../Hooks/useTitle';
import ContactUs from '../../Components/ContactUs/ContactUs';


const Home = () => {
    useTitle("Sunshine Camp")
    return (
        <div className='mx-auto'>   
            <Slieder />
            <ContactUs /> 
            <TopClass />
            <Instructor />
            <LittleSlide />
            <Accordin />
            <ExtraSection />
            <Curve />
        </div>
    );
};

export default Home;