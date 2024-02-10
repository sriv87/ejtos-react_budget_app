import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [setName] = useState('');
    //const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrency =(event) =>{
        setName(event.target.value)

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });

    }
    return(
        <div className='alert alert-secondary'>
            <select className="custom-select" id="currency_change" onChange={handleCurrency}>
            {currency.map((curCurrency,i) => {return <option key={i} value={curCurrency.name} name={curCurrency.name}>{curCurrency.name}</option>})};
            </select>
        </div>
    );

};
export default Currency;