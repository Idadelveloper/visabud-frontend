import React, {useState, useRef} from 'react'
import "./ContextFormPage.css"

export default function ContextFormPage() {
  const [reason, setReason] = useState({"reason": ""})
  const curCountryRef = useRef(null);
  const destCountryRef = useRef(null);
  const firstTimeRef = useRef(null);
  const visaTypeRef = useRef(null);
  const durationRef = useRef(null);
  const purposeRef = useRef(null);
  const accomodationRef = useRef(null);
  const financeRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReason((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  
  return (
    <div>
      <div className='form-title'>Answer the following questions to help us with your search</div>
        <form className='row g-3'>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>What country are you travelling from?</label>
              <select ref={curCountryRef} className="form-select">
                <option selected>Select...</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Nigeria">Nigeria</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>What country are you travelling to?</label>
              <select ref={destCountryRef} className="form-select">
                <option selected>Select...</option>
                <option value="United States">United States</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>Is this your first time travelling?</label>
              <select ref={firstTimeRef} className="form-select">
                <option selected>Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>What type of visa do you need?</label>
              <select ref={visaTypeRef} className="form-select">
                <option selected>Select...</option>
                <option value="tourist visa">Tourist</option>
                <option value="student visa">Student</option>
                <option value="single entry">Single Entry</option>
                <option value="work visa">Work Visa</option>
                <option value="I don't know">I don't know</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>For how long will you be in the said country?</label>
              <select ref={durationRef} className="form-select">
                <option selected>Select...</option>
                <option value="Less than 2 weeks">Less than 2 weeks</option>
                <option value="2 weeks to 2 months">2 weeks to 2 months</option>
                <option value="2 months to 6 months">2 months to 6 months</option>
                <option value="6 months to a year">6 months to a year</option>
                <option value="Greater than a year">Greater than a year</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>What is your purpose of travelling?</label>
              <select ref={purposeRef} className="form-select">
                <option selected>Select...</option>
                <option value="school">School</option>
                <option value="work">Work</option>
                <option value="conference">Conference</option>
                <option value="tourism">Tourism</option>
                <option value="business">Business</option>
                <option value="visit">Visit</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>How will you be accomodated?</label>
              <select ref={accomodationRef} className="form-select">
                <option selected>Select...</option>
                <option value="hotel">Hotel</option>
                <option value="my house">My house</option>
                <option value="family house">Family house</option>
                <option value="friend's house">Friend's house</option>
                <option value="don't know">I don't know</option>
              </select>
            </div>
            <div className='col-md-6'>
              <label htmlFor="" className='form-label'>What source of income will you use during your stay?</label>
              <select ref={financeRef} className="form-select">
                <option selected>Select...</option>
                <option value="personal finaces">Personal finances</option>
                <option value="company finances">Company finances</option>
                <option value="family finances">Family finances</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='col-12'>
              <label htmlFor="reason" className='form-label'>What is your reason for travelling? (not more than 300 words)</label>
              <textarea id="reason" name="reason" className='form-control' value={reason.reason} onChange={handleChange}/>
            </div>
            <div className="col-12 form-button">
              <button type="submit" className="btn btn-primary">Suggest Visa Type</button>
              
            </div>
        </form>
    </div>
  )
}
