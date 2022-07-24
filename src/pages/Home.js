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
                <img src="https://th.bing.com/th/id/R.2d5694abbad70649c13dc7f02a4ed263?rik=mHGY32JTZagPLA&pid=ImgRaw&r=0" class="w-[4000px] h-auto" alt="..." />
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