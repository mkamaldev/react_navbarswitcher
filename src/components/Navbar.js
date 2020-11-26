import React, { useContext, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import ThemeContext from "../context/themeContext";

const Navbar_Component = () => {
  const themeContext = useContext(ThemeContext);
  const { navbg, bgvariant } = themeContext;
  const navbarCollapseEl = useRef(null);

  return (
    <Navbar bg={navbg} variant={bgvariant} expand="lg">
      <Navbar.Brand href="#home">Kamdev</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse ref={navbarCollapseEl} id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar_Component;
