import React from 'react';
import { FormControl } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import "./SignIn.css";

const SignIn = () => {

    const {emailField, passwordField,userNameField, emailPasswordSignIn, userImageUrlField, setUser, error, updateUserProfile, varifyEmailAdress, resetPassword,  googleSignIn, githubSignIn, facebookSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory();


    const redirect = location.state?.from || "/home";

    // Sending to where you were before Email And Password Sign In
  const signInEmailPassword = (e) => {
        e.preventDefault();
        emailPasswordSignIn()
        .then(result => {
            setUser(result?.user);
            updateUserProfile();
            varifyEmailAdress();
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

    // Sending to where you were before Facebook Login
    const loginWithFacebook = () => {
        facebookSignIn()
        .then(result => {
            history.push(redirect)
            setUser(result?.user);
        })
    }
    


    return (
        <div className="formContainer my-5">
        <div className="container">
            <div>
             <img width="150px" className="mt-4" src="https://i.ibb.co/G5SHpzG/logo.png" alt="" />   
            </div>
        <div className="row">
           <div className="col col-12 col-md-6 col-lg-6 mt-5">
           <form onSubmit={signInEmailPassword}>
    <FormControl onChange={userImageUrlField} type="url" placeholder="Image URL" name="Image Url" id="" /> 
    <FormControl onChange={userNameField} type="name" placeholder="Name" className="w-100 my-3" required />
    <FormControl onChange={emailField} type="email" placeholder="Email" className="w-100 my-3" required />
    <FormControl onChange={passwordField} type="password" placeholder="Password" className="w-100 my-3" required/>
    <p className="text-danger text-start mt-2 mb-3"><small>{error}</small></p>
    <FormControl type="submit" value="SIGN UP" className="btn btn-primary container-fluid w-100 my-3" />
            </form>
            <p>You Have An Account ? <NavLink className="text-primary" to="/login">Login</NavLink></p> 
            <button onClick={resetPassword} className="btn btn-outline-secondary py-0 px-2">Reset Password</button>
          <div className="">
          <div className="bg-dark"><hr /></div>
          <button onClick={loginWithGoogle} className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/fluency/30/000000/google-logo.png" alt="" /></button>
          <button onClick={loginWithGithub} className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/color/30/000000/github--v3.png" alt="" /></button>
          <button onClick={loginWithFacebook} className="btn btn-outline-secondary mb-2 mx-3"><img src="https://img.icons8.com/fluency/30/000000/facebook-new.png" alt="" /></button>
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