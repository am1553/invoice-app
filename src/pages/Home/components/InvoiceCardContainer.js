import React from 'react'
import InvoiceCard from './InvoiceCard'


function InvoiceCardContainer({filter}) {


  return (
    <div className='my-8 flex flex-col gap-4 overflow-scroll'>
      {/* {invoices.filter(invoice => filter ? invoice.status === filter : invoice).map(invoice => <InvoiceCard key={invoice.id} data={invoice}/>)} */}
    </div>
  )
}

export default InvoiceCardContainer