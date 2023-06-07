import React from 'react'
import "./menu.css"

import brandlogo from "../images/Brand Logo.webp";
//import Form from 'react-bootstrap/Form';
import { NavLink ,Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Menu = () => {
    let expand = 'md';
    let homeurl = "/";

  return (
    <>

<Container fluid className='main-menu px-md-5 px-sm-0'>
          
    <Navbar key={expand} bg="transparent"  expand={expand} className="navbar-dark mb-3">
            <Navbar.Brand href={homeurl}><img src={brandlogo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        <NavLink to={homeurl} ><img src={brandlogo} alt='Brand Logo' /></NavLink>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end gap-md-5 flex-grow-1 pe-3">
                        <NavLink to="about">ABOUT</NavLink>
                        <NavLink to="memberbenefits">MEMBER BENEFITS</NavLink>
                        <NavDropdown 
                            className='desktop communitymargin'
                            title="COMMUNITY"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                            <NavDropdown.Item href="advisorycounciling">ADVISORY COUNCIL</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="members">MEMBERS</NavDropdown.Item>
                        </NavDropdown>

                        <NavLink className='mobile' to="advisorycounciling">ADVISORY COUNCIL</NavLink>
                        <NavLink className='mobile' to="members">MEMBERS</NavLink>
                     
                        <NavLink to="knowledge">INSIGHTS</NavLink>
                        <NavLink className='desktop' to="applytojoin">APPLY TO JOIN</NavLink>
                    </Nav>

                    <div className='btn-box'>
                       <button className="applynow-btn btn-mb mobile ">APPLY TO JOIN</button>
                    </div>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    </Container>

    <Outlet />
    </>
  )
}

export default Menu
