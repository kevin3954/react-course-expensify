
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectores/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

//store.dispatch(addExpense( {description: 'Water Bill', amount: 110000, createdAt: 33}));
//store.dispatch(addExpense( {description: 'Gas Bill', amount: 95000, createdAt: 500}));
//store.dispatch(addExpense( {description: 'Rent', amount: 109500, createdAt: 1000}));
//store.dispatch(addExpense( {description: 'Georgia Power', amount: 3300, createdAt: 800}));

//const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));