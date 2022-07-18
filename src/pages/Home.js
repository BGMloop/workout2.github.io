import React from 'react';
import { Link } from 'react-router-dom';

import {
StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "../components/Styles";//Logo
import Logo from "./../assets/foto-jets.png";

const Home = () => {
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "15px",
                    justifyContent: "flex-start",
                }}
                >
                <Avatar image={Logo} />
            </div>
            <StyledTitle className='text-4xl'>  Welcome to Dice Workout
            </StyledTitle>
            <StyledSubTitle>
                
            </StyledSubTitle>
            <div className='text-8xl'>
                {/* //background */}
                <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="w-[4000px] h-auto" alt="..." />
                <div className='text-center' >
                Welcome to Dice Workout!
                </div>
                <ButtonGroup className='justify-center'>
                    <StyledButton to="/login">Login</StyledButton>
                    <StyledButton to="/register">Register</StyledButton>
                </ButtonGroup>
            </div>
        </div>
    );
};
export default Home;