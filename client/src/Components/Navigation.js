import React, { useState, useEffect } from 'react'
import { Link, useHistory ,NavLink } from "react-router-dom";
import './loginNav.css';
import { Navbar,Nav} from 'react-bootstrap'

export default function Navigation() {
    const history = useHistory();
    const [fullname, setFullName] = useState();
    const [logged, setLogged] = useState();
    useEffect(()=>{
        const name = localStorage.getItem('fullname');
        const isAuth = localStorage.getItem('isLoggedIn');
        console.log(isAuth, 'name ' + name)
        setFullName(name)
        setLogged(isAuth)
        
    },[]);  
    const organisation = (e) => {
        history.push('/organization')
    }
    function logout(){
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('isLoggedIn');
        window.location.href = '/';
    }
return (
<>
{!logged && (
    <div className="col-lg-12 col-md-12 col-12">
        
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home">88Invoice</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    
                    <>
                    <Nav className="mr-auto ml-3">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Signup</Nav.Link>
                    </Nav>
                    </>
                   
                </Navbar.Collapse>
        </Navbar>
    </div>
 )}

    {logged && (
        <div className="login_menu col-lg-2 col-md-2 col-12" bg="dark" variant="dark" expand="lg">
            <div className="webLogo">
                LOGO
            </div>
            <div className="user_area">
               <div className="user_icon">
                    <img src="/user.png" alt="User"/>
               </div>
               <div className="user_details">
                   <span className="user_name">{fullname}</span>
               </div>
               <div className="user_options">
                   <ul>
                       <li as={Link} onClick={organisation}>My Profile</li>
                       <li>|</li>
                       <li as={Link} onClick={logout}>Logout</li>
                   </ul>
               </div>
            </div>
            <div className="navbar_menus">
                <ul>
                    <li>
                        <Nav className="ml-auto">

                            <NavLink to="/dashboard" >Dashboard</NavLink>
                        </Nav>
                    </li>
                    <li>
                        <Nav className="ml-auto">
                            <NavLink to="/customer" >Customer</NavLink>
                        </Nav> 
                    </li>
                    <li>
                    <Nav className="ml-auto">
                            <NavLink to="/item">Item</NavLink>
                        </Nav> 
                    </li>
                    <li>
                    <Nav className="ml-auto">
                            <NavLink to="/estimates">Estimates</NavLink>
                        </Nav> 
                    </li>
                    <li>
                    <Nav className="ml-auto">
                            <NavLink to="/invoices" >Invoices</NavLink>
                        </Nav> 
                    </li>
                    <li>
                    <Nav className="ml-auto">
                            <NavLink to="/income" >Income</NavLink>
                        </Nav> 
                    </li>
                    <li >
                    <Nav className="ml-auto">
                            <NavLink to="/expences" >Expenses</NavLink>
                        </Nav> 
                    </li>
                    <li>
                    <Nav className="ml-auto">
                            <NavLink to="/reports" >Reports</NavLink>
                        </Nav> 
                    </li>
                    
                </ul>
            </div>
                   
                   
        </div>
    )}
            
</>             
)
}
