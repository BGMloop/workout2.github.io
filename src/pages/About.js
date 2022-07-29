import React from 'react'
import Navbar from '../pages/Navbar'
import FitImage from './FitImage'
import './AboutS.css'


const About = () => {
  return (
    <div>
        <Navbar />
        <FitImage heading='ABOUT.' text='US '/>
        <div className= 'content'> 
        <h5>
        Build Your Body Strong<span> & Feel Good About Yourself</span></h5>
        <p>
        Our goal is to help create a better, happier, healthier life. 
        We want you to have a great member experience with our website. We believe anything is possible when hard work is involved. Our website is designed to build the perfect body in which you deserve to see.
        </p>
        <button className="button">Lets Talk </button>
    </div>
    </div>
  )
}

export default About