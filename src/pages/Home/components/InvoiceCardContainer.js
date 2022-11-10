import React from 'react'
import {useSelector} from 'react-redux'
import InvoiceCard from './InvoiceCard'


function InvoiceCardContainer({filter}) {

  const invoices = useSelector(state => state.invoice)[0]

  return (
    <div className='my-8 flex flex-col gap-4 overflow-scroll'>
      {invoices.filter(invoice => filter ? invoice.status === filter : invoice).map(invoice => <InvoiceCard key={invoice.id} data={invoice}/>)}
    </div>
  )
}

export default InvoiceCardContainer