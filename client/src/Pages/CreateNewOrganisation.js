import React, {useState, useEffect} from 'react'
import './mainDash.css';
import {  useHistory  } from "react-router-dom";
import { Button, Form } from 'react-bootstrap'

export default function Customer() {
    const [logged, setLogged] = useState();
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const history = useHistory();
    const addNewOrg = (e) => {
        history.push('/create-new-organization')
    }

    useEffect(()=>{
        if(isLoggedIn){
            setLogged(isLoggedIn)
        }
      
    },[isLoggedIn]);
    return (

            <>
            <div className="col-lg-10 col-md-10 main_dash_area">
                <div className="main-area-all">
                    <div className="dashboard_main-container">
                        <div className="dash-main-head">
                            <h2>Create New Organization</h2>
                        </div>
                       
                        <div className="dash-cont-start">
                            <div class="create-new-org-form">
                            <Form>
                            <Form.Group controlId="companyName">
                                    <Form.Label className="form-lable">Organization Name</Form.Label>
                                    <Form.Control className="form-input" type="text" placeholder="Company Name" />
                                </Form.Group>
                           
                                <Form.Group  controlId="formName">
                                    <Form.Label className="form-lable">Bussiness Loaction</Form.Label>
                                    <div className="form-input">
                                        <Form.Control className="form-name-main"  as="select" >
                                            <option>India</option>
                                            
                                        </Form.Control>
                                        
                                    </div>
                                </Form.Group>
                              

                                
                                <Form.Group controlId="" >
                                    <div className="form-input">
                                        <Form.Control className="form-loc"  type="text" placeholder="State" />
                                        <Form.Control className="form-loc"   type="text" placeholder="City" />
                                        <Form.Control className="form-loc"   type="text" placeholder="Pin Code" />
                                    </div>
                                    
                                </Form.Group>
                                

                                <Form.Group  controlId="currency">
                                    <Form.Label className="form-lable">Currency</Form.Label>
                                    <div className="form-input">
                                        <Form.Control className="form-currency"  as="select" >
                                            <option>INR</option>
                                            
                                        </Form.Control> 
                                    </div>
                                </Form.Group>
                                <Form.Group  controlId="paymentTerms">
                                    <Form.Label className="form-lable">Language</Form.Label>
                                    <div className="form-input">
                                        <Form.Control className="form-paymet-term"  as="select" >
                                            <option>English</option>
                                            
                                        </Form.Control> 
                                    </div>
                                </Form.Group>
                                <Form.Group controlId="">
                                    <Form.Check  className="form-check-inp" type="checkbox" label="This business is registered for GST." />
                                </Form.Group>
                                
                                <div className="customer-creat-btns">
                                    <Button variant="primary" type="submit" className=" mr-1">
                                        Submit
                                    </Button>
                                    <Button variant="secondary" type="cancel">
                                        Cancel
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
 