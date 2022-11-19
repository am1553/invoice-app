import React, { useContext } from 'react'
import Status from '../../../components/ui/Status'
import InvoiceDetails from './InvoiceDetails'

function StatusCard({invoice}) {
  return (
    <div className='mt-10 bg-dark-greyish-blue p-6 rounded-lg flex items-center justify-between'>
        <div className="flex items-center justify-between w-full">
            <span className='text-body-l'>Status</span>
            <Status status={invoice.status}/>
        </div>
    </div>
  )
}

export default StatusCard