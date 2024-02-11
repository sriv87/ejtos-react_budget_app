import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
//import { TiPlus } from 'react-icons/ti';
//import { TiMinus } from 'react-icons/ti';
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FiPlusCircle size='1.5em' color= "green" onClick={event=> increaseAllocation(props.name)}></FiPlusCircle></td>
        <td><FiMinusCircle size='1.5em' color= "red" onClick={event=> decreaseAllocation(props.name)}></FiMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
