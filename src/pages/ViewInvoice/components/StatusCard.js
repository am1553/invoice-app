import React, { useContext } from 'react'
import Status from '../../../components/ui/Status'
import { ThemeContext } from '../../../context/ThemeContext'
import InvoiceDetails from './InvoiceDetails'

function StatusCard({invoice}) {
  const theme = useContext(ThemeContext)[0]

  return (
    <div className={`mt-10 ${theme === "light" ? "bg-white" : "bg-dark-greyish-blue"} p-6 rounded-lg flex items-center justify-between`}>
        <div className="flex items-center justify-between w-full">
            <span className='text-body-l'>Status</span>
            <Status status={invoice.status}/>
        </div>
    </div>
  )
}

export default StatusCard