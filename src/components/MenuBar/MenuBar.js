import React from 'react';
import { Link } from 'react-router-dom';
import('./MenuBar.css')

const MenuBar = () => {
    return (
        <div className="MenuBar-container mt-5">
            <div className="container ">
                <div className="row">
                    <div className="col-md-2">
                        <div>
                            
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-bar-end justify-content-end">
                                <Link to={`/home`}>
                                    <button className="bar">Home</button>
                                </Link>

                                <Link to={`/services`}>
                                    <button className="bar">Services</button>
                                </Link>

                                    <Link to={`/about-us`}>
                                    <button className="bar">About Us</button>
                                    </Link>

                                <Link to={`/contact-us`}>
                                    <button className="bar">Contact Us</button>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
