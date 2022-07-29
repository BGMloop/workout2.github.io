import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabe1, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from "../components/Styles";

import { Link } from "react-router-dom";
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';
import FitImage from './FitImage'
// icons
import { FiMail, FiLock, FiUser, FiCalendar }from 'react-icons/fi';

// Loader
import loader from 'react-loader-spinner';
import Navbar from "./Navbar";

const Register = () => {
    return (
        <div>
        <Navbar />
        <FitImage heading='JOIN.' text='US '/>

    <div className='registration'>
        <h1>User Registration</h1>
      <form >
        <label>Username</label>
        <input type='text' name='username' placeholder= 'username' />
        <label>Email</label>
        <input type='text' name='email' placeholder='email' />
        <label>Password</label>
        <input type='text' name= 'password' placeholder='password' />
        <button className='btn'>Register</button>
      </form>
    </div>

    </div>




	)
}
export default Register;