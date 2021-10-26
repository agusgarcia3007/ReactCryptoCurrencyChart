import React from 'react';
import styled from '@emotion/styled';


const P = styled.p `
    background-color: #b7322c;
    padding:1rem;
    color:#fff;
    font-size: 25px;
    text-transform: uppercase;
    font-weight:bold;
    font-family:'Bebas Neue', cursive;
    
`

const Error = ({message}) => {
    return ( 
        <P>{message}</P>
     );
}
 
export default Error;