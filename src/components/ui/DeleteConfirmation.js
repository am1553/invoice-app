import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { InvoicesContext } from '../../context/InvoicesContext'
import { ThemeContext } from '../../context/ThemeContext'
import {DestructiveButton, SmallButton} from './Buttons'

function DeleteConfirmation({collection_id, setDeleteModal}) {
    const invoice = useContext(InvoicesContext).get_invoice(collection_id)[0]
    const theme = useContext(ThemeContext)[0]
    const delete_invoice = useContext(InvoicesContext).delete_invoice
    const get_invoices = useContext(InvoicesContext).get_invoices
    const navigate = useNavigate()

    const handleDeleteInvoice = () => {
      delete_invoice(collection_id)
      get_invoices()
      navigate('/')
    }

  return (
    <div className={` p-8 rounded-lg flex flex-col gap-4 ${theme === "light" ? "bg-white" : "bg-greyish-blue"}`}>
        <h1 className={`text-h1 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>Confirm Delete</h1>
        <p className='text-body-l text-sky-blue'>Are you sure you want to delete invoice #<span className='uppercase'>{invoice.id}</span>? This action cannot be undone.</p>
        <div className="flex justify-end gap-4">
            <SmallButton text={"Cancel"}/>
            <DestructiveButton text={"Delete"} onClick={() => handleDeleteInvoice()}/>
        </div>
    </div>
  )
}

export default DeleteConfirmation