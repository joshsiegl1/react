import React, { useState, useEffect } from 'react'; 
import axios, { AxiosResponse } from 'axios'; 
import { Button, Container } from './Styles'; 
import { Currency } from '../interfaces'; 

function App(): JSX.Element {
    const [ count, setCount ] = useState<number>(0); 
    const [ currencies, setCurrencies ] = useState<Currency[]>([]); 

    useEffect(() => { 
        axios.get('https://api.coinbase.com/v2/currencies')
            .then((response: AxiosResponse) => { 
                setCurrencies(response.data.data); 
            })
    }, [])

    let increaseCount = () => setCount(count + 1)

    return (
    <Container>
        <Button onClick={increaseCount}>Increase Count: {count}</Button>
        <ul>
            {currencies.map((currency: Currency) => { 
                return (<li>{currency.id} - {currency.name} - {currency.min_size}</li>)
            })}
        </ul>
    </Container>)
}

export default App; 