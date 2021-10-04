import React from 'react';
import './MiddlePart.css'
import img from '../../images/backtoschool.png'
import MiddlePart2 from '../MiddlePart2/MiddlePart2';

const MiddlePart = () => {
    return (
    <div className="container px-3">
    <div className="row gx-3">
      <div className="col">
       <div className="p-5 me-5">
           <h2 className="education-title">𝔼𝕕𝕦𝕔𝕒𝕥𝕚𝕠𝕟 𝕚𝕤 𝕥𝕙𝕖 𝕡𝕣𝕠𝕔𝕖𝕤𝕤 𝕠𝕗 𝕗𝕒𝕔𝕚𝕝𝕚𝕥𝕒𝕥𝕚𝕟𝕘 𝕝𝕖𝕒𝕣𝕟𝕚𝕟𝕘!</h2>
           <p className="edu-text">Education refers to the discipline that is concerned with methods of teaching and learning in schools or school-like environments, as opposed to various nonformal and informal means of socialization.</p>
       </div>
      </div>
      <div className="col">
        <div className="p-5 ms-5 ">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
    <MiddlePart2></MiddlePart2>
  </div>
  
    );
};

export default MiddlePart;