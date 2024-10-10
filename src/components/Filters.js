import React from 'react'
import Search from "./Search";

function Filters (){
    const selectOptions =['Market cap desc', 'Market cap asc', 'volume desc', 'volume asc', 'id desc', 'id asc', 'gecko desc', 'gecko asc']
    const inputDefaultStyles = 'bg-gray-200 rounded py-0.5 px-2 caret-cyan focus:border-cyan border outline-none'
  
  
    return (
        <div className='grid grid-cols-3 mb-8 lg:p-2 w-[80%] max-w-[1350px] min-w-full lg:border-2 border-gray-100 rounded-lg'>
            <Search styleInput={inputDefaultStyles}/>
            <div className='col-span-3 lg:col-span-2 relative flex items-center justify-self-end my-4 lg:max-w-[550px] w-full mx-auto'>
                <>
                    <label for='currency'>currency: </label>
                    <input className={`mx-1 max-w-12 ${inputDefaultStyles}`} id='currency' type='text' placeholder='usd' />
                </>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8571 15.4286L14.2857 12L10.8571 8.57147M14.2857 12H4" stroke="#14FFEC" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.14285 9.7143V6.27659C5.14285 5.67196 5.38241 5.09196 5.80909 4.66357C6.23577 4.23518 6.8148 3.99329 7.41942 3.99087L16.5074 3.9543C16.8077 3.9531 17.1052 4.01107 17.3831 4.1249C17.6609 4.23873 17.9136 4.40619 18.1268 4.61771C18.3399 4.82923 18.5092 5.08067 18.6251 5.35765C18.741 5.63464 18.8012 5.93176 18.8023 6.23202L18.848 17.6937C18.8492 17.9939 18.7913 18.2914 18.6775 18.5691C18.5638 18.8469 18.3964 19.0996 18.185 19.3127C17.9736 19.5258 17.7223 19.6951 17.4454 19.8111C17.1686 19.9271 16.8716 19.9874 16.5714 19.9886H7.42857C6.82236 19.9886 6.24098 19.7478 5.81232 19.3191C5.38367 18.8905 5.14285 18.3091 5.14285 17.7029V14.2857" stroke="#14FFEC" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </span>
                <span className='absolute right-1'>
                    <svg className='w-8 h-8 text-cyan cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="10" height="10" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3s-3 1.331-3 3s1.329 3 3 3z"/><path fill="currentColor" d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219a9.053 9.053 0 0 0-2.43-2.43a8.95 8.95 0 0 0-3.219-1.355a9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053a7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725a7.11 7.11 0 0 1-.644 1.188a7.2 7.2 0 0 1-.858 1.039a7.028 7.028 0 0 1-3.536 1.907a7.13 7.13 0 0 1-2.822 0a6.961 6.961 0 0 1-2.503-1.054a7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034a9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183a9.014 9.014 0 0 0 3.218-1.355a8.886 8.886 0 0 0 1.331-1.099a9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
                </span>
                <div className='relative'>
                    <label>
                        <span>sort by: </span>
                        <select className={`mx-1 ${inputDefaultStyles} !border-none`} id='sort-by'>
                            {selectOptions.map((op, ind) =><option value={op} key={ind}>{op}</option>)}
                        </select>
                        <span className='absolute t'>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.47951 11.4153C7.42599 11.493 7.35438 11.5565 7.27085 11.6004C7.18732 11.6444 7.09437 11.6673 7.00001 11.6673C6.90564 11.6673 6.81269 11.6444 6.72916 11.6004C6.64563 11.5565 6.57402 11.493 6.52051 11.4153L1.27051 3.83194C1.20974 3.74447 1.1741 3.64202 1.16747 3.53572C1.16084 3.42943 1.18346 3.32334 1.23289 3.229C1.28232 3.13466 1.35665 3.05567 1.44782 3.0006C1.53899 2.94554 1.6435 2.91652 1.75001 2.91669H12.25C12.3563 2.91713 12.4604 2.94652 12.5512 3.00172C12.642 3.05691 12.716 3.13581 12.7653 3.22993C12.8147 3.32406 12.8374 3.42984 12.8311 3.53591C12.8247 3.64199 12.7896 3.74433 12.7295 3.83194L7.47951 11.4153Z" fill="#14FFEC"/>
                            </svg>
                        </span>

                    </label>

                </div>
            </div>
            
        </div>
  )
}

export default Filters