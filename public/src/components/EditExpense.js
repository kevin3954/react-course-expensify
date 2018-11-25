import React from "react";
import { connect } from 'react-redux'
import ExpenseForm from './expenseForm'
import { editExpense, removeExpense} from '../actions/expenses'

const EditExpensePage = (props) => {

    return (

        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/') //change the page
                }}
            />
            <button onClick={(e) =>{
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/') //change the page
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditExpensePage);