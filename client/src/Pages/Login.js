import React , {useState, useEffect,useRef} from 'react';
import { NavLink } from 'react-router-dom'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import * as api from '../Helper/ApiHelper';
import * as ResponseHelper from '../Helper/ResponseHelper';

export default function Login() {
    
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState(null);
    const submitForm = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(email === ''){
            setError("Please enter email address");
            return false;
        }else if(password === ''){
            setError("Please enter password");
            return false;
        }else{
            const formData = {email , password};
            await api.post('auth/login',formData).then(response => {
               const res = ResponseHelper.LoginData(response.data);
               if(res.status){
                    window.location.href = '/dashboard';
               }
            }).catch(err => {
                console.log(err.message);
                setError("email or password is incorrect.")
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
        <div className="container">
            <div className="col-md-4 card p-3" style={{ margin: '3rem auto' }}>
            <h4>Login </h4>    
            {error && (<p style={{ color: 'red' }}>{error}</p>)} 
            <Form onSubmit={submitForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" autoComplete="off" ref={emailRef} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" autoComplete="off" ref={passwordRef} placeholder="Password" />
                </Form.Group>
                <Button 
                    variant="success" 
                    className="btn btn-md btn-block mt-3" 
                    type="submit"
                    
                >
                    Login
                </Button>
                </Form>
                <div className="col-md-12 text-center mt-3">
                    Forgot Password ?
                    <NavLink 
                        className="ml-2"
                        to='/forgot-password'
                    >change password</NavLink>
                </div>
            </div>

            <div className="col-md-12 text-center">
                Donot have an account ?
                <NavLink 
                    className="ml-2"
                    to='/register'
                >Register</NavLink>
            </div>
        </div>
    )
}
 