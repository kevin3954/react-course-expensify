import {NavLink} from "react-router-dom";
import React from "react";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <p>
            <NavLink to="/" activeClassName="is-active" exact={true}>Go Home </NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense </NavLink>
            <button onClick={startLogout}>Logout</button>
        </p>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);