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
           <h2 className="education-title">πΌππ¦πππ₯ππ π ππ€ π₯ππ π‘π£π πππ€π€ π π πππππππ₯ππ₯πππ ππππ£ππππ!</h2>
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