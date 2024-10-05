import React, { useState, useEffect } from 'react'

function Table () {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(()=> {
      const hadleResize = _ => setWidth(window.innerWidth);
      window.addEventListener('resize', hadleResize)
  
      return ()=> window.removeEventListener('resize', hadleResize)
    },[])
  
    const tableData = {
        mobileScreen: ["asset",	"name"],
        smScreen: ["asset",	"name",	"price",	"market cap change"],
        mdScreen: ["asset",	"name",	"price",	"total volume",	"market cap change"],
        lgScreen: ["asset",	"name",	"price",	"total volume",	"market cap change", "1H",	"24H",	"7D"]
      }
  
    const ScreenSize = width <= 580 ? tableData.mobileScreen : width <= 640 ? tableData.smScreen : width <= 1030 ? tableData.mdScreen : tableData.lgScreen;
  

  return (
    <table className='border border-gray-100 rounded mt-5'>
        <thead className='p-1 capitalize text-nowrap text-gray-100 border-b border-gray-100'>
          <tr>
            {ScreenSize.map((data, index)=> {
              return (<th className='p-1' key={index}>{data}</th>)
            })}
          </tr>
        </thead>
        <tbody className='text-center text-base [&>*]:hover:bg-gray-200 [&>*]:border-b [&>*]:border-gray-100'>
            <tr>
                {ScreenSize.map((data, index)=> {
                return (<td className='p-1' key={index}>{data}</td>)
                })}
            </tr>
            <tr>
                {ScreenSize.map((data, index)=> {
                return (<td className='p-1' key={index}>{data}</td>)
                })}
            </tr>
        </tbody>
      </table>
  )
}

export default Table