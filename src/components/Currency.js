import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {

    const { currency } = useContext(AppContext);
    return (
        <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Currency
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">$ Dollar</a>
    <a class="dropdown-item" href="#">£ Pound action</a>
    <a class="dropdown-item" href="#">€ Euro</a>
  </div>
</div>
    );

}


export default Currency;