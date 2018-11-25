import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})


// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByHighAmount = () => ({
    type: 'SORT_BY_HIGH_AMOUNT'
});

// SORT_BY_AMOUNT
const sortByLowAmount = () => ({
    type: 'SORT_BY_LOW_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

const expensesReducerDefaultState = []

// EXPENSERS REDUCER
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'ADD_EXPENSE':
            return [

                ...state, //gets all the values in the expenses array currently
                action.expense //adds the new item on

            ];

        case 'REMOVE_EXPENSE':
            //use state.filter to get a new array back. filter doesnt change state or the array its calls on, but
            // returns a new array with all the values that not equal to the current id
            return state.filter(({ id }) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense, //grab all the existing properties from the expense
                        ...action.updates //override the existing properties with the updates the user set
                    };
                }else{

                    //do nothing at all and just return the expense
                    return expense;

                }
            })

        default: return state;
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_HIGH_AMOUNT':
            return {
                ...state,
                sortBy: 'highAmount'
            };
        case 'SORT_BY_LOW_AMOUNT':
            return {
                ...state,
                sortBy: 'lowAmount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: return state;
    }
}

//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1: -1
        }else if (sortBy === 'highAmount'){
            return a.amount < b.amount ? 1: -1
        }else if (sortBy === 'lowAmount'){
            return a.amount > b.amount ? 1: -1
        }
    });
};

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer, //set up to be managed by the expenses reducer
        filters:filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense( {description: 'Rent', amount: 500, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense( {description: 'Coffee', amount: 637, createdAt: -1000}));
//const expenseThree = store.dispatch(addExpense( {description: 'Cellphone', amount: 238, note: 'This bill sucks'}));

//store.dispatch(removeExpense({ id: expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());

store.dispatch(sortByHighAmount());
store.dispatch(sortByLowAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
//store.dispatch(setTextFilter('e'));
//store.dispatch(setStartDate());

//store.dispatch(setEndDate(1250));
//store.dispatch(setEndDate());


