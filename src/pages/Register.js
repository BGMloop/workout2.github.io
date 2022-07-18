import {StyledTextInput, StyledFormArea, StyledFormButton, StyledLabe1, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText} from "../components/Styles";

import Logo from "./../assets/foto-jets.png";

// formit
import { Formik } from 'formik';
import { Form } from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';

// icons
import { FiMail, FiLock, FiUser, FiCalendar }from 'react-icons/fi';

// Loader
import loader from 'react-loader-spinner';

const Register = () => {
    return (
        <div>
            <StyledFormArea>
                <avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>memeber register</StyledTitle>
                <Formik>
                    initialValues ={{
                        email: "",
                        Password: "",
                        repeatPassword: "",
                        dateofbirth: "",
                        name: ""
                    }}
                    validationSchema={Yup.object({
                    dateOfBirth: Yup.date().required("Required"),
                    email: Yup.string().email("Invalid email address").required("Required"),password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"), name: Yup.string().reqired("Required"), dateOfBirth: Yup.date().required("Required"), repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must match")
                    })
                }
                onSubmit={(values, {setSubmitting}) => { console.log(values);
                }}
                {({isSubmitting}) => (
                    <Form>
                        <TextInput name="name" type="text" labe1="Full Name" placeholder="Gasman Simpson" icon={<FiUser/>} />
                        <TextInput name="email" type="text" labe1="Email Address" placeholder="gasman1@example.com"
                        icon={<FiMail/>}/>
                        <TextInput name="dateOfBirt" type="text" labe1="Date of Birth" icon={<FiCalendar/>}/>
                        <TextInput name="password"
                        type="password"
                        labe1="Password"
                        placeholder="********" icon={<FiLock/>}/>
                        <TextInput name="repeatpassword" type="password" labe1="Repeat Password" placeholder="********" icon={<FiLock/>}/>
                        <ButtonGroup>
                            {isSubmitting && ( <StyledFormButton type="submit">Register</StyledFormButton>)}
                            
                        </ButtonGroup>
                    </Form>
                )}
                </Formik>
                <ExtraText>
                    Already have an account? <TextLink to='/login'>Login</TextLink> 
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All right reserved &copy;2020
            </CopyrightText>
        </div>
    )
}
export default Register;