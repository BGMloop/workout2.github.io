import React from 'react'
import Navbar from './Navbar'
import FitImage from './FitImage'
import Form from './CForm'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <FitImage heading='CONTACT.' text='Contact Us '/>
        <Form></Form>

    </div>
  )
}

export default Contact