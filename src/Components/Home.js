import React from 'react'
import { useQuery, gql } from '@apollo/client'

const EXCHANGE_RATES = gql`
    query GetExcgangeRates{ 
        #this is comment
        rates(currency: "USD"){
            name
            rate
            currency
        }
    }
`;

const Home = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <div>Wait for a moment! </div>

    if (error) return <div>Well thats awkward! {console.log(error.message)}</div>

    return (
        <div>
            Success is sweet!
            {data.rates.map(item => <div key={item.currency}>{item.currency} = {item.rate}</div>)}
        </div>
    )
}

export default Home
