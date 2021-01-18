import React , {useState, useEffect,useRef} from 'react';
import { NavLink } from 'react-router-dom'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import * as api from '../Helper/ApiHelper';
import * as ResponseHelper from '../Helper/ResponseHelper';

export default function Register() {

    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const [error, setError] = useState(null);
    const submitForm = async (e) => {
        e.preventDefault();
        const fullname = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        const formData = {fullname, email, password};

        if(fullname === ''){
            setError("Please enter fullname.");
            return false;
        }
        else if(email === ''){
            setError("Please enter email address");
            return false;
        }
        else if(password !== confirmPassword){
            setError("Confirm Password does not match.");
            return false;
        }
        else{
            await api.post('auth/register',formData).then(response => {
                const res = ResponseHelper.LoginData(response.data);
                if(res.status){
                    window.location.href = '/dashboard';
                }
            }).catch(err => {
                console.log(err.message);
                setError("Error in creating accounts.")
            });
        }
         
    }
    useEffect( () => {
        let timer1 = setTimeout(() => setError(null), 2500);
        return () => {
            clearTimeout(timer1)
        }
    },[error]);

    return (
        <div className="container mx-auto text-center my-2">
        <NavLink to="/">ginvoice</NavLink>
           <div className="col-md-4 card p-3" style={{ margin: '2rem auto 1rem auto' }}>
            <h4>Register </h4>   
            {error && (<p style={{ color: 'red' }}>{error}</p>)} 
            <Form onSubmit={submitForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" ref={fullNameRef} required autoComplete="off" placeholder="Enter Full Name" />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" autoComplete="off" autofill="false" placeholder="Enter email" ref={emailRef} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" autoComplete="off" placeholder="Password" ref={passwordRef} />
                </Form.Group>
                
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirmation Password</Form.Label>
                    <Form.Control type="password" autoComplete="off" placeholder="Confirm Password" ref={confirmPasswordRef} />
                </Form.Group>


                <Button 
                    variant="primary" 
                    className="btn btn-md btn-block mt-3" 
                    type="submit"
                >
                    Register
                </Button>
                </Form>
            </div>
            <div className="col-md-12 text-center">
                Already have an account ?
                <NavLink 
                    className="ml-2"
                    to='/login'
                >Login </NavLink>
            </div>
        </div>
    )
}
 