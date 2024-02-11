import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch,currency } = useContext(AppContext);
    const [setName] = useState('');
    const handleCurrency =(event) =>{
        
        setName(event.target.name)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
        dispatch({
            type: 'CHG_SYMBOL',
            payload:event.target.symbol
        })

    }
    return(

        
        <div >
            <select className="alert alert-success" id="currency_change" onChange={handleCurrency} >
            {currency.map((curCurrency,i) => {return <option className='alert alert-success' key={i} value={curCurrency.symbol} name={curCurrency.name} >{'Currency ('+curCurrency.name+')'}</option>})};
            </select>
        </div>

        

        
    );

};
export default Currency;