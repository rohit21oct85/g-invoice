import React, {useState, useEffect} from 'react'
import './mainDash.css';
import {  useHistory  } from "react-router-dom";
import { Button } from 'react-bootstrap'

export default function Organisation() {
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
                            <h2>Organizations</h2>
                        </div>
                       
                        <div className="dash-cont-start">
                            <div className="org-main-area">
                                <div className="org-main-head">
                                    <span className="org-main-head-name">
                                        Hi <span>Ashutosh!</span>
                                    </span>
                                    <div className="creat-new-org">
                                        <Button variant="primary" onClick={addNewOrg} >+ New Organizations</Button>

                                    </div>
                                </div>
                                <div className="org-main-head-sub">
                                    <p>You are a part of the following organizations. Go to the organization which you wish to access now.</p>
                                </div>
                            
                                <div className="org-main-part">
                                    <div className="org-main-img">
                                        <img src="/org.png" alt="organizations"/>
                                    </div>
                                    <div className="org-main-details">
                                        <div className="org-admin-name">
                                            <span className="org-admin-name-txt">Ashutosh Saini</span>
                                        </div>
                                        <div className="org-main-created">
                                            <span>Organization created on 13/01/2021</span>
                                        </div>
                                        <div className="org-main-id">
                                            <span>Organization ID:<b> 736688926</b></span>
                                        </div>
                                        <div className="org-main-editor">
                                            <span>Organization ID:<b> 736688926</b></span>
                                        </div>
                                        <div className="org-admin-text">
                                            <p>You are an admin in this organization</p>
                                        </div>
                                    </div>
                                    <div className="org-go-btn">
                                        <Button variant="primary" >Go to Organization</Button>
                                        <Button variant="link" >
                                            <img src="/trash.png"/>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
                
            </>
        
    )
}
 