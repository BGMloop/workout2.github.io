import {useState} from 'react';
import {useField} from 'formik';
import { StyledTextInput, StyledLabe1, StyledIcon, ErrorMsg } from "./Styles";

// Eye for password
import {FiEyeOff, FiEye}  from 'react-icons/fi';

 export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    const[show, setShow] = useState(false);

    return(
        <div style={{position: "relative"}}>
            <StyledLabe1 htmlFor={props.namne}>{props.labe1}</StyledLabe1>
            {props.type !== "password" && <StyledTextInput{...field} {...props}
           />} 
            
        {props.type == "password" && ( <StyledTextInput invalid={meta.touched && meta.error}
            {...field} {...props} type={show ? "text" : "password"}/>
            )}
            <StyledIcon>
                {icon}
            </StyledIcon>
            {
                props.type == "password" && (
                    <StyledIcon onClick={() => setShow(!show)} right> {show && <FiEye/>} {!show && <FiEyeOff/>}</StyledIcon>
                )
            }

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ): 
            ( <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>

            )}
        
        </div>
    )
 
}