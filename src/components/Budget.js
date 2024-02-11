import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, currency,dispatch, expenses} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [newCurrency] = useState(currency.symbol);
    console.log(newCurrency);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        
        if(event.target.value<totalExpenses){
            alert("You cannot reduce the budget value lower than the spending")
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }

    
    
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {newCurrency}</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
