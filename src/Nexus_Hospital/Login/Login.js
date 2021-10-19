import React from 'react';
import {FormControl, Row } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import "./Login.css";

const Login = () => {
    const {emailField, passwordField, loginUser, error, setUser,  googleSignIn, githubSignIn, facebookSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || "/home";


   // Sending to where you were before Email Password Login
    const loginEmailPassword = (e) => {
        e.preventDefault();
        loginUser()
        .then(result => {
            setUser(result?.user);
            history.push(redirect);
        })
    }


    // Sending to where you were before Google Login
    const loginWithGoogle = () => {
        googleSignIn()
        .then(result => {
            history.push(redirect);
            setUser(result?.user);
        })
    }
// Sending to where you were before Github Login
    const loginWithGithub = () => {
        githubSignIn()
        .then(result => {
            history.push(redirect)
            setUser(result?.user);
        })
    }

    // Sending to where you were before facebook Login
    const loginWithFacebook = () => {
        facebookSignIn()
        .then(result => {
            history.push(redirect)
            setUser(result?.user);
        })
    }
    

    return (
        <div id="login" className="my-5">
        <div className="container">
            <div>
                <img width="150px" className="mt-4" src="https://i.ibb.co/G5SHpzG/logo.png" alt="" />
            </div>      
        <Row xs={1} md={2} lg={2}>

           <div className="col col-12 col-md-6 col-lg-6 mt-5">
           <form onSubmit={loginEmailPassword}>
            <FormControl onChange={emailField} type="email" placeholder="Email" className="w-100 my-3" required />
            <FormControl onChange={passwordField} type="password" placeholder="Password" className="w-100 my-3" required />
            <p className="text-danger text-start mt-2 mb-3"><small>{error}</small></p>
            <FormControl type="submit" value="LOGIN" className="btn btn-primary container-fluid mb-2" />
            </form>
            <p>New Here ? <NavLink className="text-primary" to="/signin">Sign Up</NavLink></p>

           <div>
          <div className="bg-dark"><hr /></div>
          <button onClick={loginWithGoogle} className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/fluency/30/000000/google-logo.png" alt="" /></button>
          <button onClick={loginWithGithub} className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/color/30/000000/github--v3.png" alt="" /></button>
          <button onClick={loginWithFacebook} className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/fluency/30/000000/facebook-new.png" alt="" /></button>
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