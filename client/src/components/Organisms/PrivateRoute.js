import React from 'react'
import {Route, Redirect} from 'react-router-dom'




function PrivateRoute({children, ...rest}){

    const isAuthenticated = () => {
        return localStorage.getItem('token') ? true : false;
    }//checking local storage for the token's existence

    return(
        <Route 
        {...rest}
        render={({location}) => 
        isAuthenticated() ? (children) : (<Redirect to={{ //this sends to the child if authenticated or login if not
            pathname: '/login',
            state: {from: location} //look up this from property
        }}/>)}
        />
    )
}

export default PrivateRoute