import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import {
StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "../components/Styles";//Logo
import Logo from "./../assets/foto-jets.png";
import Video from './Video';

const Home = () => {
    return (
            <div>
             <Navbar />
             <Video />
            </div>

           
    );
};
export default Home;