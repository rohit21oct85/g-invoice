import React, { useState , useEffect} from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import * as api from '../Helper/ApiHelper';
import * as ResponseHelper from '../Helper/ResponseHelper';

export default function ForgotPassword() {
    const history = useHistory();
    const [formData, setFormData] = useState('');
    const [error, setError] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();

        if(formData.email === ''){
            setError("Please enter email");
            return false;
        }
        await api.post('auth/forgot-password',formData).then(response => {
           const res = ResponseHelper.LoginData(response.data);
           if(res.status){
                history.push('/change-password');
           }
        }).catch(err => {
            console.log(err.message);
            setError("email address doesnot belongs to our records.")
        }); 
        
    }
    useEffect( () => {
        let timer1 = setTimeout(() => setError(null), 1500);
        return () => {
        clearTimeout(timer1)
        }
    },[error]);

    return (
        <div className="container mx-auto text-center my-2">
            <NavLink to="/">ginvoice</NavLink>
            <div className="col-md-4 card p-3" style={{ margin: '3rem auto' }}>
            <h4>Reset Password </h4>    
            {error && (<p style={{ color: 'red' }}>{error}</p>)} 
            <Form onSubmit={submitForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required autoComplete="off" placeholder="Enter email" onChange={(e) => setFormData({...formData, email: e.target.value}) } />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button 
                    variant="success" 
                    className="btn btn-md btn-block mt-3" 
                    type="submit"
                >
                    Reset Password
                </Button>
                </Form>
                <div className="col-md-12 text-center mt-3">
                    Already have an account ?
                    <NavLink 
                        className="ml-2"
                        to='/login'
                    >Login</NavLink>
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
 