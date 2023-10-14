import React, { useRef, useEffect, useState } from "react";
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
import Select from "react-select";


const LandingPage = () => {
  const infoTypeRef = useRef(null);
  const resCountryRef = useRef(null);
  const destCountryRef = useRef(null);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedDestCountry, setSelectedDestCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const infoType = infoTypeRef.current.value;
    const residenceCountry = resCountryRef.current.value;
    const destinationCountry = destCountryRef.current.value;

    const extraContext = "I am currently residing in " + residenceCountry + " and I want to travel to " + destinationCountry + ". What are the " + infoType + " for my trip?"
    console.log(extraContext)
    navigate("/chat", { state: { "context": extraContext }, replace: true })
  }
  return (
    <div className="w-100">
      <Navbar />
      <div className="top-pg">
        <div className="home-text">
          <div className="heading">
            Let's get you from <p className="heading_txt">here</p> to the <p className="heading_txt">there</p>.
          </div>
          <p className="secondary-text">
            Applying for a visa is stressful. What are the visa requirements? What documents do you submit? How do you avoid visa rejections? We're here to help!
          </p>
          <div className="home-btns">
            {/* <Link to="/start" className="btn home-btn-req">Get Visa Info</Link> */}
            <Link to="/start" className="button home-btn-chat">Get Started</Link>
          </div>

        </div>
        <div className="globe">
          <img src={hero} alt="VisaBud logo" srcSet="" />
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <p className="top">Easy to use</p>
          <p className="bottom">No need scouring the web for info. Our chatbot gets the right info for you</p>
        </div>
        <div className="stat">
          <p className="top">Suggestions</p>
          <p className="bottom">Identifies weakpoints in your application and suggests supporting documents</p>
        </div>
        <div className="stat">
          <p className="top">Personalized</p>
          <p className="bottom">The information you get is tailored to you. Can also get a custom visa cover letter</p>
        </div>
      </div>

      <div className="relative">
        <div className="mid-sec">
          <h2>We are here to help</h2>
          <p>Get visa and immigration information</p>
        </div>

        <img src={travel} alt="Car Icon" srcSet="" className="home-icon car" />
        <img src={airplane} alt="Airplane Icon" srcSet="" className="home-icon airplane" />

        <form action="" className="row home-form" onSubmit={handleSubmit}>
          <div className='col-md-4 form-group'>
            <label htmlFor="" className='form-label'>Information Type</label>
            <select ref={infoTypeRef} className="form-select">
              <option selected>Select...</option>
              <option value="visa requirements">Visa Requirements</option>
              <option value="Travel Requirements">Travel Requirements </option>
              <option value="visa suggestions or recommendations">Visa Type Suggestions</option>
            </select>
          </div>
          <div className='col-md-4 form-group'>
            <label htmlFor="" className='form-label'>Country of Residence</label>
            <Select
              options={countries}
              value={selectedCountry}
              onChange={(selectedOption) => setSelectedCountry(selectedOption)}
            />
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="" className='form-label'>Country of Destination</label>
            <Select
              options={countries}
              value={selectedDestCountry}
              onChange={(selectedOption) => setSelectedDestCountry(selectedOption)}
            />
          </div>
          <div className="col-12 form-button my-2">
            <button type="submit" className="button">Search</button>
          </div>
        </form>
      </div>
      <div className="bottom-section">
        <div className="bottom-content">
          <div className="bottom-image">
            <img src={airportLady} alt="Airport Lady" srcSet="" className="airport-lady" />
          </div>
          <div className="bottom-text">
            <h2>Prepare your visa application with AI assistance</h2>
            <p>Receive detailed guidance and travel tips using our chatbot.</p>

            <Link to="/start">
              <div className="col-12 form-button my-2 btn-bottom">
                <button className="button ">Start Chatting</button>
              </div>
            </Link>
          </div>
        </div>
        <img src={stamp} alt="Stamp Icon" srcSet="" className="home-icon stamp" />
      </div>

      {/* <Footer/> */}
    </div>
  );
};



export default LandingPage;