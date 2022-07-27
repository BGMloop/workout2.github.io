import { Link } from "react-router-dom";
import React from 'react'
import FitImage from './FitImage'
import './LoginS.css'

//loader 
import Loader from 'react-loader-spinner';
import Navbar from "./Navbar";

const Login = () => {
    return (
      <div>
          <Navbar />
          <FitImage heading='LOG.' text='IN '/>
  
          <div className='login'>
          <h1>User Login</h1>
          <label>Username</label>
          <input type='text' />
          <label>Password</label>
          <input type='text' />
          <button className='btn'>Login</button>
  
          </div>
  
      </div>
    )
  }
  
  export default Login