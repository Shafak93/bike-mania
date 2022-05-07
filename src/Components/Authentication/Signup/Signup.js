import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Signup = () => {
    
    return (
        <div className='mt-5 container w-25'>
           <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleEmail} required/>
                    {errors?.email && <p><small className='text-danger mt-2'>{errors.email}</small></p>}
                </Form.Group>
                <Form.Group className="mb-3"  controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" onChange={handlePassword} required/>
                    {errors?.password && <p><small className='text-danger mt-2'>{errors.password}</small></p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" onChange={handleConfirmPassword}/>
                    {errors?.confirmPass && <p><small className='text-danger mt-2'>{errors.confirmPass}</small></p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    className={agree ? 'text-primary' : 'text-danger'}
                    onClick={()=>setAgree(!agree)}
                     type="checkbox" 
                     label="I accept all the terms and conditions of psycho-medicine" />
                </Form.Group>
                <p>Already have an account ? <Link to={'/login'} className='text-danger text-decoration-none' onClick={navigateLogin}>Login Now</Link> </p>
                <Button 
                className='d-block mx-auto w-50'
                disabled ={!agree}
                variant="primary" type="submit">
                    Sign up
                </Button>
               
                </Form>
                
        </div>
    );
};

export default Signup;