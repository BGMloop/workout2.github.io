import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabe1, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from "../components/Styles";

import Logo from "./../assets/foto-jets.png";

// formit
import { Formik } from 'formik';
import { Link } from "react-router-dom";
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';

// icons
import { FiMail, FiLock, FiUser, FiCalendar }from 'react-icons/fi';

// Loader
import loader from 'react-loader-spinner';

const Register = () => {
    return (
		<div class="flex justify-center w-screen h-screen">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[600px] h-[300px]">
            <div className='text-8xl'></div>
                {/* //background */}
                <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="w-[4000px] h-auto" alt="..." />
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter" />
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="justify-center mr-10">
                <Link to="/">
                    <button class="bg-blue-500 mr-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    </Link>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Register
                    </button>
                </div>
            </form>
        </div>
	)
}
export default Register;