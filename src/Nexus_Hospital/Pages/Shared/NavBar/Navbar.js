import React, { useState } from 'react';
import "./NavBar.css";
import { Button, Container, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {
   const {user, logOutUser} = useAuth();
   const [scrollChainge, setSrollChainge] = useState(false)
  const defaultUserImage = "https://i.ibb.co/hM9DLXG/avt2.png";

    const onScrollHeader = () => {
      window.scrollY >= 50 ? setSrollChainge(true) : setSrollChainge(false)
    }
    window.addEventListener('scroll', onScrollHeader)

    const activeStyle={
        backgroundColor: "#000",
        color: "#fff"
      }

    return (
        <Navbar className={scrollChainge ? "bg-white scrollBg" : "bg-transparent scrollOutBg"} fixed="top" bg="light" variant="light" expand="md">
  <Container>
   <div>
   <Navbar.Brand href="#home"> <img width="50px" src="https://i.ibb.co/G5SHpzG/logo.png" alt="" /> </Navbar.Brand>
   </div>
   
    <div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-3"  />
    <Navbar.Collapse className="" id="basic-navbar-nav">
      <NavLink activeStyle={activeStyle}className="navItem" to="/home">
      <i className="fas fa-home me-2"></i>  Home</NavLink>
      <NavLink activeStyle={activeStyle} className="navItem" to="/services">
      <i className="fas fa-notes-medical me-2"></i> Services</NavLink>
      <NavLink activeStyle={activeStyle}  className="navItem" to="/blogs">
      <i className="fab fa-blogger-b me-2"></i> Blogs</NavLink>
      <NavLink activeStyle={activeStyle} className="navItem about" to="/about">
       <i className="far fa-address-card me-2"></i> About Us</NavLink>
      <NavLink activeStyle={activeStyle}  className="navItem" to="/contract">
      <i className="far fa-envelope me-2"></i> Contract Us</NavLink>
      </Navbar.Collapse>
    </div>

    <div>
   
   {
     user && <span>
     <img className="me-2 UserImage" width="50px" src={user?.photoURL || defaultUserImage} alt="" />
   </span>
   }
   {
     user && <span className="fw-bold pe-2">
     {user?.displayName || user?.email}
     </span>
   }
   
    {
      user ? <Button onClick={logOutUser} variant="py-0 ms-2 mb-2 logOut btn">
        <img className="" src="https://img.icons8.com/metro/26/000000/export.png" alt="" />
      </Button> :
      <><HashLink to="/login" ><Button variant="outline-dark px-3 py-0 mb-2 rounded-pill fw-bold">LOGIN</Button></HashLink>
      <HashLink to="/signin" ><Button variant="dark px-3 py-0 mb-2 rounded-pill ms-3 fw-bold">SIGN UP</Button></HashLink></>
      
    }
    </div>
  </Container>

</Navbar>
    );
};

export default NavBar;