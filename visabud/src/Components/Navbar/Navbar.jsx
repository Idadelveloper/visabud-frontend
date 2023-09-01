import React from "react";
import { Container, Nav, Form, Button, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter,
  Link,
  Routes,
  Navigate,
  Router,
} from "react-router-dom";

const Navbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src="./Assets/Images/VisaBud.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Nav.Link href="#" disabled>
              Travel Requirements
            </Nav.Link>
            <Button title="Start chatting" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar;
