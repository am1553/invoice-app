import React from 'react'
import InvoiceCard from './InvoiceCard'


function InvoiceCardContainer({filter, all_invoices}) {

  return (
    <div className='my-8 flex flex-col gap-4 overflow-scroll'>
      {
        all_invoices
        .filter(
          invoice => filter ? invoice.status === filter : invoice
        )
        .map((invoice, i) => <InvoiceCard key={i} data={invoice}/>)
      }
    </div>
  )
}

export default InvoiceCardContainer