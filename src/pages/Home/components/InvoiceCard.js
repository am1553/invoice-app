import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import moment from 'moment'

function InvoiceCard({data}) {
    const theme = useContext(ThemeContext)[0]
    const dueDate = moment(data.paymentDue).format("MMM Do YYYY")


  return (
    <div className={`mx-4 ${theme === "light" ? "bg-white" : "bg-dark-greyish-blue"} rounded-md p-4 flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:items-center`}>
        
        <header className='flex justify-between sm:grid-cols-3 sm:justify-start sm:gap-4 md:gap-6 lg:gap-10'>
            <h4 className={`text-h4 w-16 font-bold ${theme === "light" ? "text-black" : "text-white"}`}><span className='text-sky-blue'># </span>{data.id}</h4>
            <span className="text-body-l max-sm:hidden sm:w-24">{dueDate}</span>
            <span className="text-body-l sm:w-30">{data.clientName}</span>
        </header>

        <main className='flex justify-between sm:items-center '>

            <div className="sm:grid sm:grid-cols-2 items-center">
                <span className="text-body-l sm:hidden">{dueDate}</span>
                <h3 className={`text-h3 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>£{data.total.toFixed(2)}</h3>
            </div>

            <div className={`${data.status === "paid" ? "bg-[#33D69F10]" : data.status === "pending" ? "bg-[#FF8F0010]" : theme === "light" ? "bg-[#373B5310]" : "bg-[#DFE3FA10]"} rounded-md flex items-center justify-center gap-2 w-28 h-10`}>
                <div className={`w-2 h-2 rounded ${data.status === "paid" ? "bg-[#33D69F]" : data.status === "pending" ? "bg-[#FF8F00]" : theme === "light" ? "bg-[#373B53]" : "bg-[#DFE3FA]"}`}></div>
                <h4 className={`capitalize text-h4 font-bold ${data.status === "paid" ? "text-[#33D69F]" : data.status === "pending" ? "text-[#FF8F00]" : theme === "light" ? "text-[#373B53]" : "text-[#DFE3FA]"}`}>{data.status}</h4>
            </div>

        </main>

    </div>
  )
}

export default InvoiceCard