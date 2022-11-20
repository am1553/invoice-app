import React, { useContext } from 'react'
import Status from '../../../components/ui/Status'
import { ThemeContext } from '../../../context/ThemeContext'
import ActionButtons from './ActionButtons'
import InvoiceDetails from './InvoiceDetails'

function StatusCard({invoice}) {
  const theme = useContext(ThemeContext)[0]

  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-dark-greyish-blue"} p-6 rounded-lg flex items-center md:grid md:grid-cols-[40%_60%] `}>
        <div className="flex items-center justify-between w-full md:justify-start md:items-center md:gap-4 ">
            <span className='text-body-l'>Status</span>
            <Status status={invoice.status}/>
        </div>
        <div className="max-md:hidden">
          <ActionButtons />
        </div>
    </div>
  )
}

export default StatusCard