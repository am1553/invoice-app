import React from 'react'
import moment from 'moment'
import SenderAddress from './SenderAddress'
import ClientDetails from './ClientDetails'
import Items from './Items'

function InvoiceDetails({invoice}) {


  return (
    <div className='bg-dark-greyish-blue p-8 rounded-lg mt-6 flex flex-col gap-8'>
        <header>
            <h3 className='text-h3 font-bold uppercase'>#{invoice.id}</h3>
            <span className='text-body-m'>{invoice.description}</span>
        </header>
        <SenderAddress invoice={invoice}/>
        <ClientDetails invoice={invoice}/>
        <Items invoice={invoice}/>
    </div>
  )
}

export default InvoiceDetails