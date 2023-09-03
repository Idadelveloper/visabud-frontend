import React from "react";
// import { Container, Nav, Form, Button, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/VisaBud.png';
import "./Navbar.css"

import {
  BrowserRouter,
  Link,
  Routes,
  Navigate,
  Router,
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
        <div className="features">
          <button type="button" className="btn req-btn">About Us</button>
          <Link to="/start"><button type="button" className="btn chat-btn">Start Chatting</button></Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
