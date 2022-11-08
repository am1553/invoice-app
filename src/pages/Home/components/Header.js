import React, { useState } from 'react'
import { DropDown } from '../../../components/form/DropDown'
import {NewInvoiceButton} from '../../../components/ui/Buttons'
function Header() {

    const filterOptions = [{label: "Paid", value: "paid"}, {label: "Pending", value: "pending"}, {label: "Draft", value: "draft"}]
    const [selected, setSelected] = useState()

  return (
    <header className='flex justify-between mt-8 px-4'>
        <div className="">
            <h2 className='text-h2 font-bold'>Invoices</h2>
            <span className='text-body-l font-light'>7 invoices</span>
        </div>

        <div className="flex items-center gap-2">
            <DropDown options={filterOptions} defaultValue={"Filter"} onSelect={(option) => setSelected(option.value)} />
            <NewInvoiceButton />
        </div>
    </header>
  )
}

export default Header