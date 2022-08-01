import React from 'react'
import Navbar from '../pages/Navbar'
import FitImage from './FitImage'
import './AboutS.css'



const About = () => {
  return (
    <body>
      <Navbar />
      <section class="about">
        <div class="FitMan">
          <FitImage src="img/FitMan.jpg" />
          <div class="about-text" >
            <h1>About Us</h1>
            <h5>
            Build Your Body Strong<span> & Feel Good About Yourself</span></h5>
            <p>
            Our goal is to help create a better, happier, healthier life. 
            We want you to have a great member experience with our website. We believe anything is possible when hard work is involved. Our website is designed to build the perfect body in which you deserve to see.
            </p>
            <button className="button">Lets Talk </button>
         </div>
        </div>
        </section>
    </body>
  )
}

export default About