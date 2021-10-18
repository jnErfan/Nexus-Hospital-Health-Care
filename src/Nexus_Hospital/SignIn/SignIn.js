import React from 'react';
import { FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./SignIn.css";

const SignIn = () => {
    return (
        <div className="formContainer my-5">
        <div className="container">
            <div>
             <img width="150px" className="mt-4" src="https://i.ibb.co/G5SHpzG/logo.png" alt="" />   
            </div>
        <div className="row">
           <div className="col col-12 col-md-6 col-lg-6 mt-5">
          <FormControl type="name" placeholder="Name" className="w-100 my-3" />
            <FormControl type="email" placeholder="Email" className="w-100 my-3" />
            <FormControl type="password" placeholder="Password" className="w-100 my-3" />
            <button className="btn btn-primary container-fluid mb-2">SIGN IN</button>
          <p>Already Sign In ? <NavLink className="text-primary" to="/login">Login</NavLink></p> 

          <div className="">
          <div className="bg-dark"><hr /></div>
          <button className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/fluency/30/000000/google-logo.png" alt="" /></button>
          <button className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/color/30/000000/github--v3.png" alt="" /></button>
          <button className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/fluency/30/000000/facebook-new.png" alt="" /></button>
          </div>

          </div>
          <div className="col col-12 col-md-6 col-lg-6">
              <img className="w-75" src="https://i.ibb.co/f4MKBWR/Sign-In-2.png" alt="" />
          </div>
        </div>
        <div className="bg-info"><hr /></div>
        </div>
        </div>
    );
};

export default SignIn;