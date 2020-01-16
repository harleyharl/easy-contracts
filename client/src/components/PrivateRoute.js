import React from 'react'

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        myAuth.isAuth ?
            <Component {...innerProps} />
            :
            <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute
