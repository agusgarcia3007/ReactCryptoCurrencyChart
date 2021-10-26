import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label `
    font-family:'Bebas Neue',cursive;
    color:#fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size:2.4rem;
    margin-top:2rem;
    display: block;
`
const Selector = styled.select `
    width:100%;
    display:block;
    padding:1rem;
    --webkit-appearance:none;
    border-radius: 10px;
    border:none;
    font-size: 1.2rem;
`

const useCurrency = (label, initialState, exchange) => {

    const [state, setState] = useState(initialState)

    const Select = ()=>(
        <>
            <Label>{label}</Label>
            <Selector
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">--Select--</option>
                {exchange.map(x => (
                    <option key={x.code} value={x.code}>{x.name}</option>
                ))}
            </Selector>
        </>
    );


    return [state, Select, setState];
}

export default useCurrency;