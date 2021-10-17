import React, { useState } from 'react';
import "./NavBar.css";
import { Button, Container, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
   
    const [scrollChainge, setSrollChainge] = useState(false)
  
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
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <NavLink activeStyle={activeStyle}  className="navItem" to="/home">Home</NavLink>
      <NavLink activeStyle={activeStyle}  className="navItem" to="/services">Services</NavLink>
      <NavLink activeStyle={activeStyle}  className="navItem" to="/blogs">Blogs</NavLink>
      <NavLink activeStyle={activeStyle} className="navItem" to="/about">About Us</NavLink>
      <NavLink activeStyle={activeStyle}  className="navItem" to="/contract">Contract Us</NavLink>
    </Navbar.Collapse>
    </div>

    <div>
   
   {/* <span>
     <img className="rounded-circle me-2" width="8%" src='User Img' alt="" />
   </span> */}
  {/*  <span className="fw-bold pe-2 text-secondary">
     User Name
   </span> */}
   {/*  {
      user ? <Button onClick={logOut} variant=" py-0 mb-2">
        <img width="20px" src="https://cdn-icons-png.flaticon.com/512/158/158730.png" alt="" />
      </Button> : */}
    
      <HashLink to="/login#login" ><Button variant="outline-dark px-3 py-0 mb-2 rounded-pill fw-bold">LOGIN</Button></HashLink>
      <HashLink to="/signin#signin" ><Button variant="dark px-3 py-0 mb-2 rounded-pill ms-3 fw-bold">SIGN UP</Button></HashLink>
     
    {/* } */}
    </div>
  </Container>

</Navbar>
    );
};

export default NavBar;