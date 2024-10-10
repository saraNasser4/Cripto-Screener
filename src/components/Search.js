import React, { useState, useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext';

function Search({styleInput}) {
    const [searchText, setSearchText] = useState("");
    let { getSearchResult } = useContext(CryptoContext)
   
    let handleInput = (e) => {
        e.preventDefault();
        let query = e.target.value;
        setSearchText(query)
        getSearchResult(query)
    }


  return (
    <>
        <form className='col-span-3 lg:col-span-1 relative flex items-center max-w-[650px] lg:max-[350px] w-full mx-auto'>
            <input 
                className={`w-full ${styleInput}`} 
                placeholder='searc here...'  
                onChange={handleInput}
                required 
                type='text' 
                name='search'
                value={searchText}
                />
            <button className='absolute right-1 cursor-pointer' type='search' onClick={(e)=> handleInput(e)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="#14FFEC"/>
                </svg>
            </button>
        </form>

        {
            searchText.length > 0 
            ? <ul className='absolute top-11 z-50 bg-opacity-60 bg-gray-200 right-0 w-96 h-96 overflow-x-hidden rounded py-2 backdrop-blur-md'>
                
            </ul> 
            : null
        }
    </>
  )
}

export default Search