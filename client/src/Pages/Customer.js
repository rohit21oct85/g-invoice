import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './mainDash.css';
import { Button } from 'react-bootstrap'

export default function Customer() {
    const history = useHistory();
    const addNewCustomer = (e) => {
        history.push('/create-new-customer')
    }
    return (

            <>
            <div className="col-lg-10 col-md-10 main_dash_area">
                <div className="main-area-all">
                    <div className="dashboard_main-container">
                        <div className="dash-main-head">
                            <h2>Customers</h2>
                        </div>
                       
                       <div className="customer-new-main">
                           <div className="customer-new-area">
                               <h2>Business is no fun without people.</h2>
                               <span className="customer-new-area-sub">
                                   <p>Create and manage your contacts, all in one place.</p>
                               </span>
                               <Button variant="success" 
                                onClick={addNewCustomer}
                               >Create a New Customer</Button>
                           </div>
                       </div>
                        
                    </div>
                </div>
                
            </div>
                
            </>
        
    )
}
 