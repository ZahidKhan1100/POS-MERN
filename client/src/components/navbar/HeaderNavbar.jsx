import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const StyledNavLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #272732;
    transition: 5ms;
  }
  &.active {
    font-weight: bold;
    color: green;
  }
`;

const HeaderNavbar = () => {
  return (
    <Navbar
      bg="light"
      data-bs-theme="light"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <StyledNavLink to="/category">Category</StyledNavLink>
            </Nav.Link>
            <Nav.Link>
              <StyledNavLink to="/employee">Employee</StyledNavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
