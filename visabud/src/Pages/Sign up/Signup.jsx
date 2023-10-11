import React from 'react'
import './Signup.css'
import Navbar from '../../Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import airportLady from '../../assets/images/png/airportLady.png'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="w-100">
        <Navbar />
       
        <div className="container row">
           
            <div className='col-md-6'>
                 <div className="heading">
                    <h6>Welcome to visabud</h6>
                    <h1>Sign up</h1>
                </div>

                <form action="" className='signup-form'>
                    <div className='input-group'>
                        <label htmlFor="" className='form-label'>Email</label>
                        <br></br>
                        <input type="email" name="" id="" placeholder='Your Email' className='signup-input'/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="" className='form-label'>Password</label>
                        <br></br>
                        <input type="password" name="" id="" placeholder='Your Password' className='signup-input'/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="" className='form-label'>Confirm Password</label>
                        <br></br>
                        <input type="password" name="" id="" placeholder='Confirm your password' className='signup-input'/>
                    </div>

                    <button className='register-btn' type='submit'>Sign up</button>

                     <p className='option'>Or</p>

                      <button className='register-google-btn' type='submit'>Sign up with Google</button>
                      <p>Already have an account? <Link to="/login" className='link'>Log in</Link></p>
                </form>

               
            </div>

            <div className='col-md-6'>
                <img src={airportLady} alt="" className='signup-img'/>
            </div>
        </div>

    </div>
  )
}

export default Signup