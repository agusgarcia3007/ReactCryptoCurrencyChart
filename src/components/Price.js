import React from 'react';
import styled from '@emotion/styled';

const RespDiv = styled.div`
    color:#fff;
    font-family:'Bebas Neue', cursive;
`;

const P = styled.p `
    font-size:18px;
`;

const CurrentPrice = styled.p `
    font-size:30px;
`;

const Price = ({resp}) => {
    if(Object.keys(resp).length===0) return null;

    return ( 
        <RespDiv>
            <CurrentPrice>Current Price: <span>{resp.PRICE}</span></CurrentPrice>
            <P>Top Today: <span>Min: {resp.LOWDAY}</span> - <span>Max: {resp.HIGHDAY}</span></P>
            <P>Last 24 Hours: <span>{resp.CHANGEPCT24HOUR}% </span></P>
            <P>Updated: <span>{resp.LASTUPDATE}</span></P>
        </RespDiv>
     );

}
export default Price;