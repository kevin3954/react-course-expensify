
import { createStore, combineReducers, applyMiddleware} from 'redux';
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //store creation
    const store = createStore(
        combineReducers({
            expenses: expensesReducer, //set up to be managed by the expenses reducer
            filters:filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}

