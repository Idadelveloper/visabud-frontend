import React from 'react'
import '../Sign up/Signup.css'
import airportLady from '../../assets/images/png/airportLady.png'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <div className="w-100">
        <Navbar />
       
        <div className="container row">
           
            <div className='col-md-6'>
                <div className="heading">
                    <h1>Log in to continue</h1>
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

                    <button className='register-btn' type='submit'>Login</button>

                    <p className='option'>Or</p>

                    <button className='register-google-btn' type='submit'>Log in with Google</button>
                    <p>Don't have an account? <Link to="/signup" className='link'>Sign up</Link></p>
                </form>
            </div>

            <div className='col-md-6'>
                <img src={airportLady} alt="" className='signup-img'/>
            </div>
        </div>

    </div>
  )
}

export default Login