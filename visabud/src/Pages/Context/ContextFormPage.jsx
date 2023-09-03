import React, {useState, useRef} from 'react'
import "./ContextFormPage.css"
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ContextFormPage() {
  const [reason, setReason] = useState({})
  const curCountryRef = useRef(null);
  const destCountryRef = useRef(null);
  const firstTimeRef = useRef(null);
  const visaTypeRef = useRef(null);
  const durationRef = useRef(null);
  const purposeRef = useRef(null);
  const accomodationRef = useRef(null);
  const financeRef = useRef(null);
  const history = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReason((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(reason)
  };

//   async function genContext(context_info) {
//     await axios.post("http://127.0.0.1:5000/init", context_info)
//     .then((response) => {
//         res = response.data
//     })
//     .catch(error => {
//         console.log(error)
//     });
// }

const handleSubmit = (event) => {
  event.preventDefault(); 
  const data = {
    ...reason 
  };
  history('/chat',
      {state: data 
  })
}

  // const handleSubmit = (event) => {
  //   const originCountry = curCountryRef.current.value;
  //   const curCountry = curCountryRef.current.value;
  //   const destCountry = destCountryRef.current.value;
  //   const visaType = visaTypeRef.current.value
  //   // const suggest = visaTypeRef.current.value == "suggest" ? true : false
  //   const extraContext = "My country of origin is" + curCountryRef.current.value + "and I am currently residing in" + curCountryRef.current.value + "and I want to travel to" + destCountryRef.current.value + ". I want to apply for a " + visaTypeRef.current.value + " visa."
  //   console.log(extraContext)
  // }

  
  return (
    <div>
      <Navbar />
      <div className='form-title'>Answer the following questions to help us help you</div>
        <form className='row g-3 context-form'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>What country are you travelling from?</label>
              <select name="origin" ref={curCountryRef} className="form-select" onChange={handleInputChange}>
                <option selected>Select...</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>What country are you travelling to?</label>
              <select name="destination" ref={destCountryRef} className="form-select" onChange={handleInputChange}>
                <option selected>Select...</option>
                <option value="Canada">Canada</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>What type of visa do you need?</label>
              <select name="type" ref={visaTypeRef} className="form-select" onChange={handleInputChange}>
                <option selected>Select...</option>
                <option value="tourist">Tourist</option>
                <option value="student">Student</option>
                <option value="work">Work</option>
                <option value="suggest">I don't know</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>What is your purpose of travelling?</label>
              <select name="purpose" ref={purposeRef} className="form-select" onChange={handleInputChange}>
                <option selected>Select...</option>
                <option value="school">School</option>
                <option value="work">Work</option>
                <option value="conference">Conference</option>
                <option value="tourism">Tourism</option>
                <option value="business">Business</option>
                <option value="visit">Visit</option>
              </select>
            </div>
            {/* <div className='col-12'>
              <label htmlFor="reason" className='form-label'>What is your reason for travelling? (not more than 300 words)</label>
              <textarea id="reason" name="reason" className='form-control' value={reason.reason} onChange={handleChange}/>
            </div> */}
            <div className="col-12 form-button my-3">
              
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Let's Go</button>
            </div>
            {/* <Link onChange={handleInputChange} to="/chat" state={reason}> Go
            </Link> */}
        </form>
        {/* <Footer /> */}
    </div>
  )
}
