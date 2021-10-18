import React from 'react';
import "./Header.css";
import Typewriter from 'typewriter-effect';
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
       <div className="">
            <div className="headerContainer">
        <section className="bg-Style headerItem container">
        <div className="text-start">
               <h1 className="text-start headerTitle">
                Welcome To  <span className="text-danger">Nexus</span> 
               <span className="text-danger">
                    <Typewriter
                    options={{
                        strings: ['Hospital', 'Clinic', 'Health Center'],
                        autoStart: true,
                        loop: true,
                    }}/>
               </span>
              </h1>
                
            <p className="text-dark fw-bold headerSideItem"><small>Since The First Days Of Operation Nexus, Our Team Has Been <br /> Focused On Building A High Quality Medical Service</small></p>
            
            <HashLink to="/blogs#ourblog" >
            <Button variant="outline-dark headerSideItem">See Our Blogs</Button>
                </HashLink>
        </div>
        </section>
        </div>      
       </div>
    );
};

export default Header;