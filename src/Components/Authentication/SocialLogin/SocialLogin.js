import React, { useEffect } from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import google from '../../../images/google.ico'
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
        
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password.")
                    break;
                default:
                    toast("something is wrong")
            }
        }
    }, [user , error])

    if(loading){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-secondary  w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-secondary  w-50'></div>
            </div>
            
            <button 
                onClick={()=> signInWithGoogle()}
                className='btn btn-secondary   mx-auto w-100 my-2'>
                    <img className='w-25' src={google} alt="" />
                    <span className='px-4'>Google Signin</span>
                </button>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogin;