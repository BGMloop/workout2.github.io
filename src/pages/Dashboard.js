import {  StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea, colors} from "../components/Styles";
import React from "react";
import { Link } from "react-router-dom";

//Logo 
import Logo from "./../assets/foto-jets.png";

const Dashboard = () => {
return (
    <div className="min-h-screen bg-gray-200 text-gray-700 antialiased py-6 flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl mx-auto text-center">
        <span className="text-2xl font-light">Welcome, User</span>
         <div className="relative mt-4 bg-white shadow-orange-500 sm:rounded-lg text-left">
            <div className="h-2 bg-indigo-400 rounded-t-md"></div>
            <div className="py-6 px-8">
            <div class="text-center mr-10">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
            <Link to="/">
                    <button class="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Logout
                    </button>
                </Link>
                </div>
                </div>
                </div>
                </div>
                </div>

);
};

export default Dashboard;