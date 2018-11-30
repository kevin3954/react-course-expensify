
import React from "react";
//https://reacttraining.com/react-router/web/guides/philosophy
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/Page404';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (

    //switch as seen below goes through each route and stops when it finds a match.
    // The last route is used to define the 404 page

    <Router history={history}>
        <div>

            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;


