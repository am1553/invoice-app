import React, { useContext } from 'react'
import moment from 'moment'
import SenderAddress from './SenderAddress'
import ClientDetails from './ClientDetails'
import Items from './Items'
import { ThemeContext } from '../../../context/ThemeContext'

function InvoiceDetails({invoice}) {

    const theme = useContext(ThemeContext)[0]
  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-dark-greyish-blue"} p-8 rounded-lg mt-6 flex flex-col gap-8`}>
        <header>
            <h3 className={`${theme === "light" ? "text-black" : "text-white"} text-h3 font-bold uppercase`}><span className='text-grey'># </span>{invoice.id}</h3>
            <span className='text-body-m'>{invoice.description}</span>
        </header>
        <SenderAddress invoice={invoice}/>
        <ClientDetails invoice={invoice}/>
        <Items invoice={invoice}/>
    </div>
  )
}

export default InvoiceDetails