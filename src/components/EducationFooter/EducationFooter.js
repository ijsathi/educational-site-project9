import React from 'react';
import './EducationFooter.css';
import {FaFacebook} from 'react-icons/fa';
import { AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'

const EducationFooter = () => {
    return (
        <div className="container1">
            <div class="row">
              <div class="col-md-4">
                  <h1>𝕰𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓</h1>
                  <p className='p'> Almost all of these websites have multiple columns of content and navigation in the footer, with 4 columns of navigation menus to be a common design pattern.</p>
              </div>
              <div class="col-md-4 offset-md-4 icon-w">
                  <FaFacebook className='icon' size='38px'></FaFacebook>
                  <AiFillLinkedin className='icon1' size='38px'></AiFillLinkedin>
                  <AiFillYoutube className='icon2' size='38px'></AiFillYoutube>
              </div>
              <p>User dashboard</p>
              <p>Contact Us</p>
            </div>
            <hr />
            <footer>
                <p><small>© 2021 IJ SATHI courses Ltd. Do or Die.</small></p>
            </footer>
        </div>
    );
};

export default EducationFooter;