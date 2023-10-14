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
    <div className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo-link">
          <div className="logo">
            <img src={logo} alt="VisaBud logo" srcSet="" />
          </div>
        </Link>

        {/* <div>
          <button type="button" className="btn req-btn">Home</button>
          <button type="button" className="btn req-btn">Travel Requirements</button>
          <button type="button" className="btn req-btn">Visa guidance</button>
        </div> */}

        <div className="features">
        <Link to="/how-it-works" className="link">How it works</Link>
          <Link to="/start" className="chat-btn">Start Chatting</Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
