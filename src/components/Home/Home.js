import React from 'react';
import Banner from '../Banner/Banner';
import EducationFooter from '../EducationFooter/EducationFooter';
import MenuBar from '../MenuBar/MenuBar';
import MiddlePart from '../MiddlePart/MiddlePart';
import MiddlePart2 from '../MiddlePart2/MiddlePart2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MiddlePart></MiddlePart>
            <EducationFooter></EducationFooter>
        </div>
    );
};

export default Home;