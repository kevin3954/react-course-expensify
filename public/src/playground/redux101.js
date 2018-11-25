import { createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const reset = () => ({
    type: 'RESET'
});

//reducers
//1. Reducers are pure functions
//2. NEVER change state or action directly. always return the value in a function to set the state


//here we set the counts default to zero and pass an action into the function
const countReducer = (state = { count: 0 }, action) => {

    //this is just like PHP
    switch(action.type){
        case 'INCREMENT':

            //if increment by is passed when calling the function we increment by that amount. If not we increment by 1
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {

                //increase the counters state
                count: state.count + incrementBy

            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        default:
            return state;
    }
};

//set up the default state object of count to zero
const store = createStore(countReducer);

//this updates our value as soon as it changes
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 50 }));
store.dispatch(decrementCount({ decrementBy: 20 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount());
store.dispatch(reset());

