import React from 'react';
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {

    const auth =  localStorage.getItem("access_token");
    return (
        <Route {...rest} render={props => (
            auth ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
        )} />
    )
    
}



export default PrivateRoute;