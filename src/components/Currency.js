import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch} = useContext(AppContext);
    
    const handleCurrency =(event) =>{
        
        dispatch({
           type: 'CHG_CURRENCY',
            payload: event.target.value
        });
        

    }
    return(

        <div>
            <select className="alert alert-success" id="currency_change" onChange={handleCurrency} >
            <option className='alert alert-success'  value='£' name= '£' >Currency (£ Pound)</option>
            <option className='alert alert-success'  value='$' name= '$' >Currency ($ Dollar)</option>
            <option className='alert alert-success'  value='€' name= '€' >Currency (€ Euro)</option>
            <option className='alert alert-success'  value='₹' name= '₹' >Currency (₹ Rupee)</option>
            </select>
        </div>
        //<div >
         //   <select className="alert alert-success" id="currency_change" onChange={handleCurrency} >
         //   {currency.map((curCurrency,i) => {return <option className='alert alert-success' key={i} value={curCurrency.name} name={curCurrency.name} >{'Currency ('+curCurrency.name+')'}</option>})};
         //   </select>
       // </div>

        

        
    );

};
export default Currency;