import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import Status from '../../../components/ui/Status'

function InvoiceCard({data}) {
    const collection_id = data.collection_id
    const theme = useContext(ThemeContext)[0]
    const convertDate = new Date(data.payment_due.seconds * 1000 + data.payment_due.nanoseconds/1000000)
    const dueDate = moment(convertDate).format("MMM Do YYYY")
    const navigate = useNavigate()
    

  return (
    <div className={`mx-4 cursor-pointer ${theme === "light" ? "bg-white" : "bg-dark-greyish-blue"} rounded-md p-4 flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:items-center`} onClick={() => navigate(`/invoice/${collection_id}`)}>
        
        <header className='flex justify-between sm:grid-cols-3 sm:justify-start sm:gap-4 md:gap-6 lg:gap-10'>
            <h4 className={`text-h4 w-16 font-bold uppercase ${theme === "light" ? "text-black" : "text-white"}`}><span className='text-sky-blue'># </span>{data.id}</h4>
            <span className="text-body-l max-sm:hidden sm:w-24">{dueDate}</span>
            <span className="text-body-l sm:w-30">{data.client_name}</span>
        </header>

        <main className='flex justify-between sm:items-center '>

            <div className="sm:grid sm:grid-cols-2 items-center">
                <span className="text-body-l sm:hidden">{dueDate}</span>
                <h3 className={`text-h3 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>£{data.total.toFixed(2)}</h3>
            </div>
            <Status status={data.status}/>
        </main>

    </div>
  )
}

export default InvoiceCard