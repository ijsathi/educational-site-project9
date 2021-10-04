import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import EducationFooter from '../EducationFooter/EducationFooter';
import MiddlePart from '../MiddlePart/MiddlePart';

const Service = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='li'>
                <li >
                    <h2>Online Courses</h2>
                </li>
                <li >
                    <h2>Open Library</h2>
                </li>
                <li >
                    <h2> Ready to Use</h2>
                </li>
                <li >
                    <h2>Measurable</h2>
                </li>
                <li >
                    <h2>Everywhere</h2>
                </li>
                <li >
                    <h2>Certificated</h2>
                </li>
                <li >
                    <h2>Language</h2>
                </li>
                <li >
                    <h2>Software</h2>
                </li>
                <li >
                    <h2>Business</h2>
                </li>
                </div>
                <hr /><hr />
            <EducationFooter></EducationFooter>
        </div>
    );
};

export default Service;