import React, { useEffect, useRef, useState } from 'react';
import {Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Loading/Loading';

const Login = () => {
    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })
    const emailRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname ||"/";
    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    useEffect(() => {
        const error = hookError;
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError])

/*==============
Email Validation
=================*/
const handleEmail = event =>{
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if(validEmail){
        setUserInput({...userInput, email:event.target.value});
        setErrors({errors, email:''})
    }else{
        setErrors({...errors, email:'Invalid email'})
        setUserInput({...userInput, email:''});
    }
}

/*================ 
Password handle
================ */
const handlePassword =(event)=>{
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const validPass = passwordRegex.test(event.target.value)
    if(validPass){
        setUserInput({ ...userInput, password: event.target.value });
        setErrors({...errors, password:''})
    }else{
        setErrors({...errors, password:'Password minimum eight characters, at least one letter and one number'})
        setUserInput({ ...userInput, password: "" });
    }
}
    /*=======================
    Redirected page
    ============== */
    useEffect(()=>{
        if(user){
            navigate(from,{replace: true});
        }
    },[user]);
    /*==============================
    Navigate to sign up page function
    ================================= */
    const navigateSignup =()=>{
        navigate('/signup')
    }

    /*=================
    Loading function
    ==================== */
    if (loading) {
        return <Loading></Loading>;
      }

    /*===============
    Forget password
    ================ */
        
    const forgetPasswordReset = async ()=>{
        const email = emailRef.current.value;
            await sendPasswordResetEmail(email);
            alert('Sent email');
    }
/*On Submit button  */
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmail(userInput.email, userInput.password);
        
    }

    return (
        <div>
            <div className='mt-5 container w-25'>
           <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleEmail}/>
                    {errors?.email && <p className="text-danger">{errors.email}</p>}
                </Form.Group>
                <Form.Group className="mb-3"  controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password"  onChange={handlePassword}/>
                    {errors?.password && <p className="text-danger">{errors.password}</p> }
                </Form.Group>
                
                <p>Don't have an account ? <Link to={'/signup'} className='text-danger text-decoration-none' onClick={navigateSignup}>Signup Now</Link> </p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>Forget password ? <a href="" className='text-primary text-decoration-none' onClick={forgetPasswordReset}>Reset password</a> </p>
                
            </Form>
            <SocialLogin></SocialLogin>
            
        </div>
        </div>
    );
};

export default Login;