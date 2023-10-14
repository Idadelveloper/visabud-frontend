import React, { useState, useRef } from 'react'
import "./VisaNotRequiredPage.css"
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";

export default function VisaNotRequiredPage() {
  const location = useLocation();
  // console.log("context " + location.state.explain)
  return (
    <div>
      <Navbar />
      <div class="content">
        <div>
          {location.state.explain}
        </div>
      </div>
    </div>
  )
}
