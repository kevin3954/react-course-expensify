const expensesReducerDefaultState = []

// EXPENSERS REDUCER
export default (state = expensesReducerDefaultState, action) => {

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

