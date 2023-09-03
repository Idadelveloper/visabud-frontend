import React, {useRef} from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./LandingPage.css";
// import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "../../Components/Navbar/Navbar";
import ContextFormPage from "../Context/ContextFormPage";
import Footer from "../../Components/Footer/Footer";
import hero from '../../assets/images/png/hero.png';
import travel from '../../assets/images/png/travel.png';
import airplane from '../../assets/images/png/airplane.png';
import stamp from '../../assets/images/png/stamp.png';
import airportLady from '../../assets/images/png/airportLady.png';


const LandingPage = () => {
  const infoTypeRef = useRef(null);
  const resCountryRef = useRef(null);
  const destCountryRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const infoType = infoTypeRef.current.value;
    const residenceCountry = resCountryRef.current.value;
    const destinationCountry = destCountryRef.current.value;

    const extraContext = "I am currently residing in " + residenceCountry + " and I want to travel to " + destinationCountry + ". What are the " + infoType + " for my trip?"
    console.log(extraContext)
    navigate("/chat", {state: {"context": extraContext}, replace: true})
  }
  return (
    <div className="w-100">
      <Navbar />
      <div className="px-10 w-100">
        <div className="home-text">
          <div className="heading">
            Let us take you from <br /> Here to the There.
          </div>
          <div className="secondary-text">
            Allow us to assist you with touring around the world with ease and
            comfort, providing you with all the details you need in getting into
            any country of your choice!
          </div>
          <div className="home-btns">
            <Link to="/get-context" className="btn home-btn-req">Get Visa Info</Link>
            <Link to="/chat" className="btn home-btn-chat">Start Chatting</Link>
          </div>
          
        </div>
        <div className="globe">
          <img src={hero} alt="VisaBud logo" srcSet="" />
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <p className="top">200</p>
          <p className="bottom">Countries</p>
        </div>
        <div className="stat">
          <p className="top">9k+</p>
          <p className="bottom">Visa Information</p>
        </div>
        <div className="stat">
          <p className="top">500</p>
          <p className="bottom">Users</p>
        </div>
      </div>

      <div className="relative">
        <div className="mid-sec">
          <h2>Allow us help you get the travel information you need</h2>
          <p>Get access to the travel requirements of all the countries you dream of travelling to.</p>
        </div>

        <img src={travel} alt="Car Icon" srcSet="" className="home-icon car" />
        <img src={airplane} alt="Airplane Icon" srcSet="" className="home-icon airplane" />

        <form action="" className="row home-form" onSubmit={handleSubmit}>
            <div className='col-md-4'>
                <label htmlFor="" className='form-label'>Information Type</label>
                <select ref={infoTypeRef} className="form-select">
                  <option selected>Select...</option>
                  <option value="visa requirements">Visa Requirements</option>
                  <option value="Travel Requirements">Travel Requirements </option>
                  <option value="visa suggestions or recommendations">Visa Type Suggestions</option>
                </select>
              </div>
              <div className='col-md-4'>
                <label htmlFor="" className='form-label'>Residence Country</label>
                <select ref={resCountryRef} className="form-select">
                  <option selected>Select...</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
              <div className='col-md-4'>
                <label htmlFor="" className='form-label'>Destination</label>
                <select ref={destCountryRef} className="form-select">
                  <option selected>Select...</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Ethiopia">Ethiopia</option>
                </select>
              </div>
              <div className="col-12 form-button my-2">
                <button type="submit" className="btn btn-home">Search</button>
              </div>
        </form>
      </div>
      <div className="bottom-section">
        <div className="bottom-image">
          <img src={airportLady} alt="Airport Lady" srcSet="" className="airport-lady" />
        </div>
        <div className="bottom-text">
          <h2>Get one-on-one help and ace those visa interviews!</h2>
          <p>Receive detailed guidance and travel tips using our chatbot.</p>
          
          <div className="col-12 form-button my-2 btn-bottom">
            <button className="btn btn-home">Start Chatting</button>
          </div>
        </div>
        <img src={stamp} alt="Stamp Icon" srcSet="" className="home-icon stamp" />
      </div>
      
      
      <Footer/>
    </div>
  );
};



export default LandingPage;
