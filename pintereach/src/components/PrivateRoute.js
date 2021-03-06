import React from 'reactn';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest} 
        render={() => {
            if (localStorage.getItem('jwt')) {
                return <Component />
            } else {
                return <Redirect to='/login' />
            }
        }}
        />
    );
}

export default PrivateRoute


