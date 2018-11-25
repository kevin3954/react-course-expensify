
import React from "react";
//https://reacttraining.com/react-router/web/guides/philosophy
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import ExpenseDashboardPage from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/Page404';

const AppRouter = () => (

    //switch as seen below goes through each route and stops when it finds a match.
    // The last route is used to define the 404 page

    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;


