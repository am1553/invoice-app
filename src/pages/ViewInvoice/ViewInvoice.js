import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { InvoicesContext } from '../../context/InvoicesContext'
import ArrowLeft from '../../assets/icon-arrow-left.svg'
import StatusCard from './components/StatusCard'
import InvoiceDetails from './components/InvoiceDetails'
function ViewInvoice() {

    const id = useParams().id
    const invoice = useContext(InvoicesContext).get_invoice(id)[0]
    const navigate = useNavigate()

  return (
    invoice ? 
    <div className='max-w-4xl py-14 h-full w-full px-4'>
        <header className=''>
            <button onClick={() => navigate('/')} className="flex items-center gap-4">
                <img src={ArrowLeft} alt="" />
                <h4 className='text-h4'>Go Back</h4>
            </button>
        </header>

        <StatusCard invoice={invoice}/>
        <InvoiceDetails invoice={invoice}/>
    </div> 
    : null
  )
}

export default ViewInvoice