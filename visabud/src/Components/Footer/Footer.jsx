import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


import logo from '../../assets/VisaBud.png';
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-info'>
        <div className="footer-icons">
          <img src={logo} alt="VisaBud logo" srcSet="" />
          <div className="socials">
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
        <div className="footer-btns">
          <button type="button" className="btn req-btn">Get Visa Info</button>
          <button type="button" className="btn chat-btn">Start Chatting</button>
        </div>
      </div>
      <div className="copyright">© 2023 CodeBabes</div>
    </div>
  )
}
