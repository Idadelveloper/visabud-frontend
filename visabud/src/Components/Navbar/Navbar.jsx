import React from "react";
// import { Container, Nav, Form, Button, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/VisaBud.png';
import "./Navbar.css"

import {
  Link,
} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar row">
      <div className="nav-content">
        <Link to="/">
          <div className="logo col">
            <img src={logo} alt="VisaBud logo" srcSet="" />
          </div>
        </Link>

        <div>
          <button type="button" className="btn req-btn">Home</button>
          <button type="button" className="btn req-btn">Travel Requirements</button>
          <button type="button" className="btn req-btn">Visa guidance</button>
        </div>

        <div className="features">
          <Link to="/login"><button type="button" className="btn login-btn">Login</button></Link>
          <Link to="/signup"><button type="button" className="btn signup-btn">Sign up</button></Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
