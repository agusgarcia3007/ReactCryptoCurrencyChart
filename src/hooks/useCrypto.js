import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label `
    font-family:'Bebas Neue',cursive;
    color:#fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size:2.8rem;
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
    font-size: 1.4rem;
`

const useCrypto = (label, initialState, options) => {

    const [state, setState] = useState(initialState);

    const SelectCrypto = ()=>(
        
        <>
            <Label>{label}</Label>
            <Selector
                onChange={e => setState(e.target.value)}
                value={state}
            >

                <option value="">-Select-</option>
                {options.map(x => (
                
                    <option key={x.CoinInfo.Id} value={x.CoinInfo.Name}>{x.CoinInfo.FullName}</option>
                    
                ))};


            </Selector>
        </>
    );


    return [state, SelectCrypto, setState];
}

export default useCrypto;