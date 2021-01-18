import React, {useState, useEffect, useRef} from 'react'
import './mainDash.css';
import {  useHistory  } from "react-router-dom";
import { Button,Form } from 'react-bootstrap'
import * as api from '../Helper/ApiHelper';
import * as ResponseHelper from '../Helper/ResponseHelper';

export default function Customer() {

const history = useHistory();
const Back = (e) => {
    history.push('/customer')
}

const [paymentTerms, setPaymentTerms] = useState();
const [customerType, setCustomerType] = useState();
const [salute, setSalute] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [companyName, setCompanyName] = useState('');
const [companyEmail, setCompanyEmail] = useState('');
const [companyWorkPhone, setCompanyWorkPhone] = useState('');
const [companyWorkMobile, setCompanyWorkMobile] = useState('');
const [companyWebsite, setCompanyWebsite] = useState('');
const [companyCurrency, setCompanyCurrency] = useState('');
const [selectedPaymentTerms, setSelectedPaymentTerms] = useState('');
const [enablePortalAccess, setEnablePortalAccess] = useState('');

const [error, setError] = useState(null);
const [success, setSuccess] = useState(null);

const url = window.location.href;
useEffect( () => { 
    api.get('payment-terms').then( response => {
        const payment  = response.data.payment
        setPaymentTerms(payment)
    });
},[url]);    

const submitCustomerForm = async (e) => {
    e.preventDefault();
    const data = {
        coustomer_type: customerType, 
        title: salute, 
        first_name: firstName, 
        last_name: lastName, 
        company_name: companyName, 
        email: companyEmail, 
        phone: companyWorkPhone,
        mobile: companyWorkMobile,
        website: companyWebsite,
        currency: companyCurrency,
        payment_terms: selectedPaymentTerms,
        enable_portal_access: enablePortalAccess
    };

    await api.post('coustomers/create', data)
    .then(response => {
        const res = ResponseHelper.LoginData(response.data);
        if(res.status){
            setSuccess("Customer created successfully !")
            history.push('/customer')
        }
    }).catch(err => {
        console.log(err.message);
        setError("Error in creating accounts.")
    });
}

useEffect( () => {
    let timer1 = setTimeout(() => {
        setError(null)
        setSuccess(null)
    }, 2500);
    return () => {
        clearTimeout(timer1)
    }
},[error, success]);

return (

<>
<div className="col-lg-10 col-md-10 main_dash_area">
    <div className="main-area-all">
        <div className="dashboard_main-container">
            <div className="dash-main-head">
                <h2>Create New Customers</h2>
            </div>
            
            <div className="addnew_custom_form dash-cont-start">
                <div className="creat-customer-form">
                {error && (<p style={{ color: 'red' }}>{error}</p>)}     
                {success && (<p style={{ color: 'red' }}>{success}</p>)}     
                <Form onSubmit={submitCustomerForm}>
                <Form.Group controlId="kindOfStand">
                <Form.Label className="form-lable">Customer Type</Form.Label>
                    <div className="form-input">
                        <Form.Check onChange={(e)=> setCustomerType(e.target.value)} name="customerType" type="radio"  aria-label="radio 1" label="Bussiness"  value="Business"/>
                        <Form.Check  onChange={(e)=> setCustomerType(e.target.value)} name="customerType" type="radio" aria-label="radio 2" label="Individual" value="Indivisual"/>
                    </div>
                </Form.Group>
                
                    <Form.Group  controlId="formName">
                        <Form.Label className="form-lable">Primary Conatct</Form.Label>
                        <div className="form-input">
                            <Form.Control 
                            onChange={(e) => setSalute(e.target.value)}
                            className="form-name-main"  as="select" >
                                <option>Select</option>
                                <option value="Mr">Mr.</option>
                                <option value="Mrs">Mrs.</option>
                                <option value="Mrs">Ms.</option>
                                <option value="Miss">Miss.</option>
                                <option value="Dr">Dr.</option>
                            </Form.Control>
                            <Form.Control 
                                onChange={e => setFirstName(e.target.value)}
                                className="form-name-inp"  type="text" placeholder="First Name" />
                            <Form.Control 
                                onChange={e => setLastName(e.target.value)}
                                className="form-name-inp" type="text" placeholder="Last Name" />
                        </div>
                    </Form.Group>

                    <Form.Group controlId="companyName">
                        <Form.Label className="form-lable">Company Name</Form.Label>
                        <Form.Control 
                        onChange={e => setCompanyName(e.target.value)}
                        className="form-input" type="text" placeholder="Company Name" />
                    </Form.Group>
                    <Form.Group controlId="companyEmail">
                        <Form.Label className="form-lable">Company Email</Form.Label>
                        <Form.Control 
                        onChange={e => setCompanyEmail(e.target.value)}
                        className="form-input" type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="companyPhone" >
                        <Form.Label className="form-lable">Company Phone</Form.Label>
                        <div className="form-input">
                            <Form.Control 
                            onChange={e => setCompanyWorkPhone(e.target.value)}
                            className="companyPhone"  type="text" placeholder="Work Phone" />
                            <Form.Control 
                            onChange={e => setCompanyWorkMobile(e.target.value)}
                            className="companyPhone"   type="text" placeholder="Mobile" />
                        </div>
                        
                    </Form.Group>
                    <Form.Group controlId="compWebsite">
                        <Form.Label className="form-lable">Website</Form.Label>
                        <Form.Control 
                        onChange={e => setCompanyWebsite(e.target.value)}
                        className="form-input" type="text" placeholder="Website" />
                    </Form.Group>

                    <Form.Group  controlId="currency">
                        <Form.Label className="form-lable">Currency</Form.Label>
                        <div className="form-input">
                            <Form.Control 
                            onChange={e => setCompanyCurrency(e.target.value)}
                            className="form-currency"  as="select" >
                                <option>Select</option>
                                <option value="inr">INR</option>
                            </Form.Control> 
                        </div>
                    </Form.Group>
                    <Form.Group  controlId="paymentTerms">
                        <Form.Label className="form-lable">Payment Terms</Form.Label>
                        <div className="form-input">
                            <Form.Control 
                            onChange={e => setEnablePortalAccess(e.target.value)}
                            className="form-paymet-term"  as="select" >
                                <option>Select</option>
                                {paymentTerms && paymentTerms.map(term => (
                                    <option key={term._id} value={term.name}>{term.name}</option>
                                ))}
                            </Form.Control> 
                        </div>
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label className="form-lable">Enable Portal?</Form.Label>
                        <Form.Check  
                        onChange={e => setSelectedPaymentTerms(e.target.value)}
                        className="form-check-inp" type="checkbox" label="Allow portal access for this customer" />
                    </Form.Group>
                    
                    <div className="customer-creat-btns">
                        <Button 
                            variant="primary" 
                            type="submit" 
                            className=" mr-1">
                            Submit
                        </Button>
                        <Button 
                        onClick={Back}
                        variant="secondary" type="cancle">
                            Cancle
                        </Button>
                    </div>
                    
                </Form>
                </div>
            </div>
            
        </div>
    </div>
    
</div>
    
</>

)
}
