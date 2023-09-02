import React from "react";
import "./LandingPage.css";
// import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../../Components/Navbar/Navbar";
import ContextFormPage from "../Context/ContextFormPage";

const LandingPage = () => {
  return (
    <div className="container">
      <Navbar />
      <ContextFormPage />
      <div className="row">
        <div className="col">
          <h1>
            Let us take you from <br /> Africa to the World
          </h1>
          <p>
            Allow us to assist you with touring around the world with ease and
            comfort, providing you with all the details you need in getting into
            any country of your choice!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
