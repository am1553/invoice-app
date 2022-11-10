import React, { useContext, useState } from 'react'
import { DropDown } from '../../../components/form/DropDown'
import {NewInvoiceButton} from '../../../components/ui/Buttons'
import { ThemeContext } from '../../../context/ThemeContext'
import {useNavigate} from 'react-router-dom'
import NewInvoice from '../../NewInvoice/NewInvoice'
import Modal from '../../../Modal'
import { useSelector } from 'react-redux'

function Header({setFilter}) {

    const invoices = useSelector(state => state.invoice)


    let navigate = useNavigate()
    const theme = useContext(ThemeContext)[0]
    const filterOptions = [{label: "Paid", value: "paid"}, {label: "Pending", value: "pending"}, {label: "Draft", value: "draft"}]
    const [modal, setModal] = useState(false)

  return (
    <header className='flex justify-between mt-8 px-4'>
        <div className="">
            <h2 className={`text-h2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>Invoices</h2>
            <span className='text-body-l font-light sm:hidden'>{invoices.length} invoices</span>
            <span className='text-body-l font-light max-sm:hidden'>There are {invoices.length} total invoices</span>
        </div>

        <div className="flex items-center max-sm:gap-2 sm:gap-4 md:gap-8 xl:gap-10">

          <div className="sm:hidden">
            <DropDown options={filterOptions} defaultValue={"Filter"} onSelect={(option) => setFilter(option)} />
          </div>
          <div className="max-sm:hidden">
            <DropDown options={filterOptions} defaultValue={"Filter by status"} onSelect={(option) => setFilter(option)} />
          </div>
          
          <div className="sm:hidden">
            <NewInvoiceButton onClick={() => navigate("/new-invoice")}/>
          </div>
          <div className="max-sm:hidden">
            <NewInvoiceButton onClick={() => setModal(true)}/>
          </div>
        </div>

        <Modal open={modal} onClose={() => setModal(false)}>
          <NewInvoice />
        </Modal>
    </header>
  )
}

export default Header