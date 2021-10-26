import React, { useState } from 'react';

const useCurrency = (label, initialState, exchange) => {

    const [state, setState] = useState(initialState)

    const Select = ()=>(
        <>
            <label>{label}</label>
            <select>
                <option value="">--Select--</option>
                {exchange.map(x => (
                    <option key={x.code} value={x.code}>{x.name}</option>
                ))}
            </select>
        </>
    );


    return [state, Select, setState];
}

export default useCurrency;