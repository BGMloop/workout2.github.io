
import Logo from "./../assets/foto-jets.png";

// formit
import {Formik, Form} from 'formik';
import { Link } from "react-router-dom";
import * as Yup from 'yup';

// icons
import {FiMail, FiLock}from 'react-icons/fi';

//loader 
import Loader from 'react-loader-spinner';

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-200 text-gray-700 antialiased py-6 flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl mx-auto text-center">
                <span className="text-2xl font-light">Login to your account</span>
                 <div className="relative mt-4 bg-white shadow-orange-500 sm:rounded-lg text-left">
                    <div className="h-2 bg-indigo-400 rounded-t-md"></div>
                    <div className="py-6 px-8">
                        <label className="block mt-4 font-semibold">Username or Email</label>
                        <input type="text" placeholder="Username" className="border w-full h-4 px-32 py-2 mt-2 hover:outline-none focus:ring-2 focus:ring-indigo-700 rounded-md"/>
                        <label className="block mt-4 font-semibold">Password</label>
                        <input type="password" placeholder="Password" className="border w-full h-4 px-32 py-2 mt-2 hover:outline-none focus:ring-2 focus:ring-indigo-700 rounded-md"/>
                        <div className="justify-center mr-10">
                        <Link to="/dashboard">
                            <button class="mt-5 bg-indigo-700 mr-4 text-white py-2 px-6 rounded-lg">Login</button>
                            </Link>
                            <Link to="/register">
                            <button className="mt-5 bg-indigo-700 text-white py-2 px-6 rounded-lg">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
           

    );
}

export default Login;