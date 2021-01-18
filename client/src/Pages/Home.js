import React from 'react'
import {NavLink} from 'react-router-dom'
import './Home.css';


export default function Home() {
    return (
        <div className="wrapper">
            <div className="row no-gutters">
                <div className="col-lg-12 col-md-12 col-12">
                    <div className="invoice-home-banner">
                        <div className="home-banner-cont">
                            <h1>GInvoice software for small businesses.</h1>
                            <div className="banner-cont-sub">
                                GInvoice is online invoicing software that helps you craft professional 
                                invoices, automatically send payment reminders, and get paid faster online.
                            </div>
                            <div className="col-md-12 text-center">
                                <NavLink 
                                    className="btn btn-success"
                                    to="/login"
                                >
                                    <span className="fa fa-user"></span>
                                    Login Your Account
                                </NavLink>
                                
                                <NavLink 
                                    className="btn btn-warning ml-2"
                                    to="/register"
                                >
                                    <span className="fa fa-user"></span>
                                    Create Your Account
                                </NavLink>

                            </div>
                            <div className="banner-img-main">
                                <div className="banner-img-1">
                                    <img src="/screen.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 