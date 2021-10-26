import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


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

Error.propTypes={
    message:PropTypes.string.isRequired
}
 
export default Error;