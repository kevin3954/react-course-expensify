
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectores/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from './firebase/firebase';

const store = configureStore();

//store.dispatch(addExpense( {description: 'Water Bill', amount: 110000, createdAt: 33}));
//store.dispatch(addExpense( {description: 'Gas Bill', amount: 95000, createdAt: 500}));
//store.dispatch(addExpense( {description: 'Rent', amount: 109500, createdAt: 1000}));
//store.dispatch(addExpense( {description: 'Georgia Power', amount: 3300, createdAt: 800}));

//const state = store.getState();

//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)


let hasRendered = false;

//our function to render the app
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if(user){

        store.dispatch(login(user.uid));

        //get the users expenses
        store.dispatch(startSetExpenses()).then(() => {
          renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

