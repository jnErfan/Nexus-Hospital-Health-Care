import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading} = useAuth();

    // Data Load Late Then Showing Spinner 
    if (isLoading) {
      return <div className="mt-5"> 
      <Spinner animation="border" variant="info p-5 mt-5" />
      </div>
  }
  // Private Route 
    return (
        <Route
        {...rest}
        render={({ location }) =>
        user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;