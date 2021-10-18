import React from 'react';
import { FormControl, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
        <div id="login" className="my-5">
        <div className="container">
            <div>
                <img width="150px" className="mt-4" src="https://i.ibb.co/G5SHpzG/logo.png" alt="" />
            </div>      
        <Row xs={1} md={2} lg={2}>

           <div className="col col-12 col-md-6 col-lg-6 mt-5">
            <FormControl type="email" placeholder="Email" className="w-100 my-3" />
            <FormControl type="password" placeholder="Password" className="w-100 my-3" />
            <button className="btn btn-primary container-fluid mb-2">LOGIN</button>
            <p>New Here ? <NavLink className="text-primary" to="/signin">Sign In</NavLink></p>

           <div>
          <div className="bg-dark"><hr /></div>
          <button className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/fluency/30/000000/google-logo.png" alt="" /></button>
          <button className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/color/30/000000/github--v3.png" alt="" /></button>
          <button className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/fluency/30/000000/facebook-new.png" alt="" /></button>
          </div>
          </div>

          <div className="col col-12 col-md-6 col-lg-6">
              <img className="w-100" src="https://i.ibb.co/Zd372mx/login.png" alt="" />
          </div>


        </Row>
        <div className="bg-info mt-5"><hr /></div>
        </div>
        </div>
    );
};

export default Login;