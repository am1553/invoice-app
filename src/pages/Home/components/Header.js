import React, { useContext, useState } from 'react'
import { DropDown } from '../../../components/form/DropDown'
import {NewInvoiceButton} from '../../../components/ui/Buttons'
import { ThemeContext } from '../../../context/ThemeContext'



function Header() {
    const theme = useContext(ThemeContext)[0]
    const filterOptions = [{label: "Paid", value: "paid"}, {label: "Pending", value: "pending"}, {label: "Draft", value: "draft"}]
    const [selected, setSelected] = useState()

  return (
    <header className='flex justify-between mt-8 px-4'>
        <div className="">
            <h2 className={`text-h2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>Invoices</h2>
            <span className='text-body-l font-light sm:hidden'>7 invoices</span>
            <span className='text-body-l font-light max-sm:hidden'>There are 7 total invoices</span>
        </div>

        <div className="flex items-center max-sm:gap-2 sm:gap-4 md:gap-8 xl:gap-10">
          <div className="sm:hidden">
            <DropDown options={filterOptions} defaultValue={"Filter"} onSelect={(option) => setSelected(option.value)} />
          </div>
          <div className="max-sm:hidden">
            <DropDown options={filterOptions} defaultValue={"Filter by status"} onSelect={(option) => setSelected(option.value)} />
          </div>
            <NewInvoiceButton />
        </div>
    </header>
  )
}

export default Header