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
      <div className="top-pg">
        <div className="home-text">
          <div className="heading">
            Let's take you from <br /> here to there.
          </div>
          <div className="secondary-text">
           Allow us to assist you with touring around the world with ease and comfort, providing you with all the details you need in getting into any country of your choice! 
          </div>
          <div className="home-btns">
            {/* <Link to="/start" className="btn home-btn-req">Get Visa Info</Link> */}
            <Link to="/" className="btn home-btn-visa">Visa guidance</Link>
            <Link to="/" className="btn home-btn-travel">Travel requirements</Link>
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
          <h2>Discover Essential Travel Requirements: Let Us Help You Prepare</h2>
          <p>Get access to the travel requirement of all the countries you dream of traveling to</p>
        </div>

        <img src={travel} alt="Car Icon" srcSet="" className="home-icon car" />
        <img src={airplane} alt="Airplane Icon" srcSet="" className="home-icon airplane" />

        <form action="" className="row home-form form-border" onSubmit={handleSubmit}>
            <div className='col-md-3'>
                <label htmlFor="" className='form-label'>Information Type</label>
                <select ref={infoTypeRef} className="form-select">
                  <option selected>Select...</option>
                  <option value="visa requirements">Visa Requirements</option>
                  <option value="Travel Requirements">Travel Requirements </option>
                  <option value="visa suggestions or recommendations">Visa Type Suggestions</option>
                </select>
              </div>
              <div className='col-md-3'>
                <label htmlFor="" className='form-label'>Country of Residence</label>
                <select ref={resCountryRef} className="form-select">
                  <option selected>Select...</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
              <div className='col-md-3'>
                <label htmlFor="" className='form-label'>Country of Destination</label>
                <select ref={destCountryRef} className="form-select">
                  <option selected>Select...</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Ethiopia">Ethiopia</option>
                </select>
              </div>
              <div className='col-md-3'>
                
                <button type="submit" className="btn btn-home">Search</button>
              </div>
              
        </form>
      </div>

      <div className="below-mid-sec">
          <h2>Get personalized help and ace those visa applications!</h2>
          <p>With our chat feature, you will receive detailed guidance and travel tips, ensuring that you your visa application is as smooth and effortless and possible</p>
           <Link to="/signup" className="btn btn-signup">Sign up</Link>
      </div>

      <div className="bottom-section">
        <div className="bottom-image">
          <img src={airportLady} alt="Airport Lady" srcSet="" className="airport-lady" />
        </div>
        <div className="bottom-text">
          <h2>Your online immigration officer</h2>
          <p>We provide you with all the information you need to immigrate into the country of your choice. From application documents to application submission best practices, we know it all!</p>
          
          <Link to="/start">
          <div className="col-12 form-button my-2 btn-bottom">
          <button className="btn btn-home">Start Started</button>
          </div>
          </Link>
        </div>
        <img src={stamp} alt="Stamp Icon" srcSet="" className="home-icon stamp" />
      </div>

      
      
      
      <Footer/>
    </div>
  );
};



export default LandingPage;
