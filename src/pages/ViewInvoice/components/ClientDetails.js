import moment from 'moment'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

function ClientDetails({invoice}) {
    const theme = useContext(ThemeContext)[0]
    const convertDueDate = new Date(invoice.payment_due.seconds * 1000 + invoice.payment_due.nanoseconds/1000000)
    const convertInvoiceDate = new Date(invoice.created_at.seconds * 1000 + invoice.payment_due.nanoseconds/1000000)
    
    const dueDate = moment(convertDueDate).format("MMM Do YYYY")
    const createdAt = moment(convertInvoiceDate).format("MMM Do YYYY")

  return (
    <div className="grid grid-cols-2 items-start">
            <div className="flex flex-col gap-4">
                <div className="">
                    <span className="text-body-m">Invoice Date</span>
                    <h2 className={`text-h2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>{createdAt}</h2>
                </div>
                <div className="">
                    <span className="text-body-m">Due Date</span>
                    <h2 className={`text-h2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>{dueDate}</h2>
                </div>
            </div>

            <div className="flex flex-col gap-4 items-start">
                <div className="">
                    <span className='text-body-m'>Bill to</span>
                    <h2 className={`text-h2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>{invoice.client_name}</h2>
                </div>
                <div className="flex flex-col">
                    <span className='text-body-m'>{ invoice.client_address.street }</span>
                    <span className='text-body-m'>{ invoice.client_address.city }</span>
                    <span className='text-body-m'>{ invoice.client_address.post_code }</span>
                    <span className='text-body-m'>{ invoice.client_address.country }</span>
                </div>
            </div>

            <div className="">
                <span className='text-body-m'>Sent to</span>
                <h4 className={`text-h2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>{invoice.client_email}</h4>
            </div>
        </div>
  )
}

export default ClientDetails