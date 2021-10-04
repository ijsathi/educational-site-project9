import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
        <div className="row d-flex banner align-items-center justify-content-center">
          <MenuBar></MenuBar>
          <div className="col-md-6">
            <h1 className="banner-title"><span className="title-first-latter">𝕰</span>𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓</h1>
            <p className="text-white text-center mt-3">Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research</p>
            <Link to={`/enroll-now`}>
            <button className="mt-3 about-btn">Enroll Now</button>
            </Link>
            
          </div>
          <div className="col-md-6"></div>
        </div>
        <hr />
        
        <hr />
    </div>
  );
};

export default Banner;