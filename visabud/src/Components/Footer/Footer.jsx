import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


import logo from '../../assets/VisaBud.png';
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-info'>
        <div className="footer-icons">
          <div className="footer-logo">
            <img src={logo} alt="VisaBud logo" srcSet="" />
            <p>VisaBud’s aim is to enable you get the opportunity to travel and get into any country of your choice without any hassle!</p>
          </div>
          <div className="user-acc-btns">
            <button type="button" className="btn login-btn">Login</button>
            <button type="button" className="btn signup-btn">Sign up</button>
          </div>

          <div className="socials">
            <div>
              <a className='px-2' href="">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a className='px-2' href="">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a className='px-2' href="">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a className='px-2' href="">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            </div>
          </div>
        </div>
        <div className="footer-btns">
          <button type="button" className="btn req-btn">Home</button>
          <button type="button" className="btn chat-btn">Travel Requirements</button>
          <button type="button" className="btn chat-btn">Visa guidance</button>
           
        </div>
        

      </div>
      
      <div className="copyright">© 2023 CodeBabes</div>
    </div>
  )
}
