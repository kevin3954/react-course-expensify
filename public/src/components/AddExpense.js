import React from "react";
import { connect } from 'react-redux'
import ExpenseForm from './expenseForm'
import { addExpense} from '../actions/expenses'

//import the props from the connect file
const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/') //change the page
            }}
        />
    </div>
);

export default connect()(AddExpensePage);