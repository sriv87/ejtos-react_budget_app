import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {

    const { currency } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
        <span>Currency </span>
        <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
            );

}


export default Currency;