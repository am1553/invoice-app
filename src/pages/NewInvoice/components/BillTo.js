import React from 'react'
import {TextField} from '../../../components/form/TextField'
import {DateDropDown} from '../../../components/form/DateDropDown'
import { DropDown } from '../../../components/form/DropDown'

function BillTo() {

    const paymentTermOptions = [
        {label: 'Net 1 Day', value: 'net-1-day'},
        {label: 'Net 7 Day', value: 'net-7-day'},
        {label: 'Net 14 Day', value: 'net-14-day'},
        {label: 'Net 30 Day', value: 'net-30-day'}
    ]

  return (
    <div className='flex flex-col gap-4'>
        <h4 className='text-h4 font-bold text-main-purple'>Bill To</h4>
        <TextField label={"Client's Name"}/>
        <TextField label={"Client's Email"}/>
        <TextField label={"Street Address"}/>
        <div className="grid grid-cols-2 gap-4">
            <TextField label={"City"}/>
            <TextField label={"Post Code"}/>
        </div>
        <TextField label={"Country"}/>
        <DateDropDown label={"Invoice Date"}/>
        <DropDown label={"Payment Terms"} options={paymentTermOptions} defaultValue={""}/>
        <TextField label={"Project Description"}/>
    </div>
  )
}

export default BillTo