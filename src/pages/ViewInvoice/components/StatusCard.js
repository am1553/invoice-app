import React, { useContext } from 'react'
import Status from '../../../components/ui/Status'
import {PurpleButton, GreyButton, DestructiveButton} from '../../../components/ui/Buttons'

function StatusCard({invoice}) {
  return (
    <div className='mt-10 bg-dark-greyish-blue p-8 rounded-lg flex items-center justify-between'>
        <div className="flex items-center gap-4">
            <span className='text-body-l'>Status</span>
            <Status status={invoice.status}/>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <GreyButton text={"Edit"}/>
          <DestructiveButton text={"Delete"}/>
          <PurpleButton text={"Mark as Paid"}/>
        </div>

    </div>
  )
}

export default StatusCard