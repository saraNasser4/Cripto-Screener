import React from 'react'
// import { FaSearch } from "react-icons/fa";

function Filters (){
    const inputDefaultStyles = 'bg-gray-200 rounded py-0.5 px-2 caret-cyan focus:border-cyan border outline-none'
  return (
    <div className='grid grid-rows-3 sm:grid-rows-2 lg:grid-rows-1'>
        <div className='relative max-w-[650px] lg:max-[350px] w-full mx-auto'>
            <input className={`min-w-full ${inputDefaultStyles}`} placeholder='searc here...' type='text'/>
            <span className='absolute right-[12px] top-0.5 cursor-pointer'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="#14FFEC"/>
                </svg>
            </span>
        </div>
        <div>
            <label for='currency'>currency: </label>
            <input className={`mx-1 max-w-12 ${inputDefaultStyles}`} id='currency' type='text' placeholder='usd' />
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8571 15.4286L14.2857 12L10.8571 8.57147M14.2857 12H4" stroke="#14FFEC" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.14285 9.7143V6.27659C5.14285 5.67196 5.38241 5.09196 5.80909 4.66357C6.23577 4.23518 6.8148 3.99329 7.41942 3.99087L16.5074 3.9543C16.8077 3.9531 17.1052 4.01107 17.3831 4.1249C17.6609 4.23873 17.9136 4.40619 18.1268 4.61771C18.3399 4.82923 18.5092 5.08067 18.6251 5.35765C18.741 5.63464 18.8012 5.93176 18.8023 6.23202L18.848 17.6937C18.8492 17.9939 18.7913 18.2914 18.6775 18.5691C18.5638 18.8469 18.3964 19.0996 18.185 19.3127C17.9736 19.5258 17.7223 19.6951 17.4454 19.8111C17.1686 19.9271 16.8716 19.9874 16.5714 19.9886H7.42857C6.82236 19.9886 6.24098 19.7478 5.81232 19.3191C5.38367 18.8905 5.14285 18.3091 5.14285 17.7029V14.2857" stroke="#14FFEC" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </span>
        </div>
        <div>i</div>
    </div>
  )
}

export default Filters