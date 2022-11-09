import React from 'react'
import {TextField} from '../../../components/form/TextField'
function BillFrom() {
  return (
    <div className='flex flex-col gap-4'>
        <h4 className='text-h4 font-bold text-main-purple'>Bill From</h4>
        <TextField label={"Street Address"}/>
        <div className="grid grid-cols-2 gap-4">
            <TextField label={"City"}/>
            <TextField label={"Post Code"}/>
        </div>
        <TextField label={"Country"}/>
    </div>
  )
}

export default BillFrom