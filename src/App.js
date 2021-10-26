import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import image from './assets/cryptocurrency.png';
import Form from './components/Form';
import axios from 'axios';




const Container = styled.div `
  max-width:900px;
  margin: 0 auto;
  @media(min-width:992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
  }
`
const Image = styled.img `
  max-width:100%;
  margin-top:5rem;

`
const Heading = styled.h1 `
  font-family:'Bebas Neue', cursive;
  color:#fff;
  text-align: left;
  font-weight: 700;
  font-size:50px;
  margin-bottom: 50px;
  margin-top:80px;

  &::after{
    content:'';
    width:100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
    `


const App = () => {


  const [data, setData] = useState({
      coin:'',
      cryptoCurrency:''
  })
  const [resp, setResp] = useState({});

  const {coin, cryptoCurrency} = data;

  useEffect(()=>{

    //fetch Api to get prices
    const fetchApiPrice = async ()=>{

    if(coin === '') return;

      const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${coin}`
      const result = await axios.get(url);
      const x = result.data.DISPLAY[cryptoCurrency][coin];

      setResp(x);
      
    }
    fetchApiPrice();

  },[coin, cryptoCurrency])

  

  return ( 
    <Container>
      <div>
        <Image 
          src={image}
          alt='crypto png'
        />
      </div>
      <div>
        <Heading>
          Crypto Currency Chart
        </Heading>

          <Form 
            setData={setData}
            data={data}
          />
      </div>
    </Container>
   );
}
 
export default App;