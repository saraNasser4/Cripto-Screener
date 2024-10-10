import React, { createContext, useEffect, useState } from "react";

export const CryptoContext = createContext({})


export const CryptoProvider = ({children}) => {
    const [cryptoData, setCryptoData] = useState([ ]) 
    const [searchData, setSearchData] = useState("") 
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
                console.log('crypto error: ', err)
                setError(err.message)
            }
        }
        getCryptoData();
        // getSearchResult();
        
    },[])
    
    const getSearchResult = async (query)=> {
        try {
        const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
                                .then(res => res.json())                       
                                .then(json => json);                       
        setSearchData(data)
        
    } catch (err) {
        console.log('search error: ', err)
    }
}
    return (
        <CryptoContext.Provider value={{ cryptoData, searchData, getSearchResult, error }}>
            {children}
        </CryptoContext.Provider>
    )
}

