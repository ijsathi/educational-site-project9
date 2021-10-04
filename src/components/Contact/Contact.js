import React from 'react';
import Banner from '../Banner/Banner';
import EducationFooter from '../EducationFooter/EducationFooter';

const Contact = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
            <div className="container3">
            <div classNames="col-md-8 col-lg-8 wow fadeInRight animated" >
                <h2>Fillup input</h2>
                <p>Let's eliminate the rate of illiteracy, let's enlighten in the light of education</p>
                
                <div className="row">
                <div className="col-md-6 col-lg-6">
                    <label for="name">Name</label>
                    <br />
                    <input type="text" placeholder="enter your name" name="name" id="name" />
                </div>
                <div className="col-md-6 col-lg-6">
                    <label for="email">Email</label>
                    <br />
                    <input type="text" placeholder="enter your email address" name="name" id="name" />
                </div>
                <div className="col-md-6 col-lg-6">
                    <label for="phone">Phone</label>
                    <br />
                    <input type="text" placeholder="enter your phone number" name="name" id="name" />
                </div>
                <div className="col-md-6 col-lg-6">
                    <label for="address">Subject</label>
                    <br />
                    <input type="text" placeholder="  enter your subject name" name="name" id="name" />
                </div>
            </div>
           </div>
           <br />
           <input type="text" className='w-50 h-25' placeholder="write your opinion"/><br /><br />
           <button>Submit</button>
           
        </div>
        <hr />
        <hr />
            </div>
            <EducationFooter></EducationFooter>
        </div>
    );
};

export default Contact;