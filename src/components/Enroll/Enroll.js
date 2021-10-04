import React from 'react';
import Banner from '../Banner/Banner';
import EducationFooter from '../EducationFooter/EducationFooter';
import './Enroll.css'

const Enroll = () => {
    return (
        <div>
            <Banner></Banner>
        <div className="container3">
            <div classNames="col-md-8 col-lg-8 wow fadeInRight animated" >
                <h2>Register Now</h2>
                <p>Let's eliminate the rate of illiteracy, let's enlighten in the light of education</p>
                <div>
                    <h5>Be Punctual</h5>
                    <h5>Do Respect</h5>
                    <h5>Be generous</h5>
                    <h5>Do your own thing</h5>
                    <h5>Love your parents</h5>
                </div>
                <div className="row">
                <div className="col-md-6 col-lg-6">
                    <label for="name">Name</label>
                    <br />
                    <input type="text" placeholder="enter your name" name="name" id="name" />
                </div>
                <div className="col-md-6 col-lg-6">
                    <label for="surename">Sure Name</label>
                    <br />
                    <input type="text" placeholder="enter your sure name" name="name" id="name" />
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
                    <label for="school">School</label>
                    <br />
                    <input type="text" placeholder="enter your school name" name="name" id="name" />
                </div>
                <div className="col-md-6 col-lg-6">
                    <label for="address">Address</label>
                    <br />
                    <input type="text" placeholder="  enter your address" name="name" id="name" />
                </div>
            </div>
           </div>
           <button>Submit</button>
        </div>
        <hr />
        <hr />
        <EducationFooter></EducationFooter>
        </div>
    );
};

export default Enroll;