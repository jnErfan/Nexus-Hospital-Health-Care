import Aos from 'aos';
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import "./PartneringValue.css";
Aos.init();

const PartneringValue = () => {
    return (
       <div className="container pb-5">
            <div className="row row-cols-2">
            <div className="col col-12 col-md-6 col-lg-6 mt-5 mb-5">
            <iframe width="90%" height="100%" src="https://www.youtube.com/embed/gOWX1xxnTWg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >
            </iframe>
            </div>
            <div className="col col-12 col-md-6 col-lg-6 text-start mb-5">
                <h3 data-aos="zoom-in" className="PARTNERING mb-4">PARTNERING ON VALUE</h3>
                <h3 className="">
                How we lower costs for our health plan partners and patients.
                </h3>
                <p><small className="text-secondary">We make efforts to change the way that healthcare services are offered in order meet changing needs of our patients, both for the present and future.</small></p>
               
                <HashLink to="/about#aboutus" >
                <button className="btn btn-outline-info mt-3">About Us</button>
                </HashLink>
            </div>
        </div>
        <div className="mt-5 mb-5">
            <hr />
        </div>
       </div>
    );
};

export default PartneringValue;