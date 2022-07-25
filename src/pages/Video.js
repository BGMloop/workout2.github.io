import React from 'react'
import {Link} from 'react-router-dom'
import {
    StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "../components/Styles";//Logo
import './VideoS.css'

import fitVideo from '../assets/pexels-mikhail-nilov-6740160.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={fitVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Challenge. Fitness</h1>
                <p>Virtual Fitness Motivation</p>

                <div>
                <ButtonGroup className='justify-center'>
                    <StyledButton to="/login">Login</StyledButton>
                    <StyledButton to="/register">Register</StyledButton>
                </ButtonGroup>
                </div>
            </div>
        </div>
    )
}
export default Video