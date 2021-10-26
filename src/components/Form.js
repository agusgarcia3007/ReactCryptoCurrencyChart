import React from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';

const Button = styled.input `
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color: #66a2fe;
    border:none;
    width:100%;
    border-radius: 10px;
    color:#fff;
    transition:background-color .3s ease;
    
    &:hover{
        background-color: #326ac0;
        cursor:pointer;
    }
`

const Form = () => {

    const exchange = [
        {code: 'USD', name:'american dolar'},
        {code: 'EUR', name:'european euro'},
        {code: 'GBP', name:'brtish pounds'},
        {code: 'ARS', name:'argentinian pesos'}
    ]

    //custom hook
    const [currency, Select, setState] = useCurrency("Choose yout Currency", '', exchange);

    return ( 
        <form >

            <Select />


            <Button 
                type='submit'
                value='Calulate'
            />
        </form>
     );
}
 
export default Form;