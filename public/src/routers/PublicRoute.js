import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
     isAuthenticated,
     component: Component, //change lowercase component into uppercase
     ...rest //this is everything else except the isAuthenticated and the component
 }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props} />
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);