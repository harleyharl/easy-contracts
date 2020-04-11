import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route {...props} render={innerProps => localStorage.getItem("token") ? <Component {...innerProps} /> : <Redirect to="/login" /> }/>
  );
}

export default PrivateRoute
