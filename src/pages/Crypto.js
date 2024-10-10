import React from 'react'
import Filters from '../components/Filters'
import Table from '../components/TableRen'

function Crypto() {
  return (
    <section className='w-[80%] max-w-[1350px] h-full flex flex-col my-10 relative'>
      <Filters />
      <Table />
    </section>
  )
}

export default Crypto