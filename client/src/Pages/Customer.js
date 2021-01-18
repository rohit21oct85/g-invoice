import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './mainDash.css';
import { Button } from 'react-bootstrap'
import * as api from '../Helper/ApiHelper';

export default function Customer() {
    const history = useHistory();
    const [data, setData] = useState(true)
    const [myCustomers, setMyCustomers] = useState([]);
    const addNewCustomer = (e) => {
        history.push('/create-new-customer')
    }
    useEffect( () => {
        fetchData();
    },[]);
    const fetchData = async () => {
        await api.get('coustomers/my-customer').then( customers => {
            setMyCustomers(customers.data.response);
            setData(false)
        })
    };
    return (

            <>
            <div className="col-lg-10 col-md-10 main_dash_area">
                <div className="main-area-all">
                    <div className="dashboard_main-container">
                        <div className="dash-main-head">
                            <h2>Customers</h2>
                        </div>
                       
                       
                        <div className="customer-new-main" style={{ 'display': data ? 'block':'none'  }}>
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
                       
                        <div className="col-md-12 p-0">
                        
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Customer Type</th>
                                    <th>First Name</th>
                                    <th>Last  Name</th>
                                </tr>
                            </thead>
                            <tbody>
                        {myCustomers && myCustomers.map(customer => {
                            return (
                            <tr key={customer._id}>
                                <td>{ customer.customer_type}</td>
                                <td>{ customer.first_name}</td>
                                <td>{ customer.last_name}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                         </table>
                        </div>
   
                       
                        
                        
                    </div>
                </div>
                
            </div>
                
            </>
        
    )
}
 