import React from 'react'
import {useSelector} from 'react-redux'
import InvoiceCard from './InvoiceCard'


function InvoiceCardContainer() {

  const invoices = useSelector(state => state.invoice)[0]

  return (
    <div className='mx-4 my-8 flex flex-col gap-4'>
      {invoices.map(invoice => <InvoiceCard key={invoice.id} data={invoice}/>)}
    </div>
  )
}

export default InvoiceCardContainer