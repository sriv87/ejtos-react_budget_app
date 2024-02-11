import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses,currency, budget } = useContext(AppContext);
    //const [newCurrency] = useState(currency.symbol);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
     
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency} {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
