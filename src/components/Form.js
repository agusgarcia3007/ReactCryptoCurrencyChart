import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import Error from './Error';
import axios from 'axios';
import PropTypes from 'prop-types';

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

const Form = ({setData, data}) => {

    //useState crypto list
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);

    const exchange = [
        {code: 'USD', name:'american dolar'},
        {code: 'EUR', name:'european euro'},
        {code: 'GBP', name:'brtish pound'},
        {code: 'ARS', name:'argentinian peso'}
    ]

    //custom hook useCurrency
    const [currency, Select] = useCurrency("Choose your Currency", '', exchange);

    //custom hook useCrypto
    const[crypto, SelectCrypto] = useCrypto("Choose your Crypto",'', list);

    //useEffect to fetch API
    useEffect(()=>{
        const fetchApi = async () => {
            const result = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
            const coins = result.data.Data;
            setList(coins);
        }
        fetchApi();
    },[]);

    const handleSubmit = e => {
        e.preventDefault();


        if(currency === '' || crypto === ''){
            setError(true);
            return;
        }
        setError(false);
        setData({
            coin:currency,
            cryptoCurrency:crypto
        })

    }


    return ( 
        <form
            onSubmit={handleSubmit}
        >

            {error ? <Error message='All fields are required' /> :null}

            <Select />

            <SelectCrypto />


            <Button 
                type='submit'
                value='Calulate'
            />
        </form>
     );
}

Form.propTypes={
    data:PropTypes.object.isRequired,
    setData:PropTypes.func.isRequired
}
 
export default Form;