import React, { createContext, useEffect, useState } from "react";

export const CryptoContext = createContext({})


export const CryptoProvider = ({children}) => {
    const [cryptoData, setCryptoData] = useState([ ]) 
    const [error, setError] = useState(null) 
    
    useEffect(()=>{
        const getCryptoData = async ()=> {
            try {
                const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&price_change_percentage=1h%2C24h%2C7d&locale=en'
                const response = await fetch(url, {method: 'GET', headers: {accept: 'application/json'}})
                if(!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();                       
                setCryptoData(data)
                
            } catch (err) {
                console.log('error: ', err)
                setError(err.message)
            }
        }
        getCryptoData();
        
    },[])

    return (
        <CryptoContext.Provider value={{ cryptoData, error }}>
            {children}
        </CryptoContext.Provider>
    )
}

