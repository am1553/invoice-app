import React, {useContext, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {PurpleButton, DestructiveButton, GreyButton} from '../../../components/ui/Buttons'
import DeleteConfirmation from '../../../components/ui/DeleteConfirmation'
import Confirmation from '../../../Confirmation'
import { InvoicesContext } from '../../../context/InvoicesContext'
import Modal from '../../../Modal'
import EditInvoice from '../../EditInvoice/EditInvoice'


function ActionButtons() {
  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const collection_id = useParams().collection_id
  const invoice = useContext(InvoicesContext).get_invoice(collection_id)[0]
  const mark_as_paid = useContext(InvoicesContext).mark_as_paid
  const get_invoices = useContext(InvoicesContext).get_invoices

  const navigate = useNavigate()
  const handleEdit = () => {
    navigate(`/invoice/${collection_id}/edit`)
  }
  const handleMarkAsPaid = () => {
    mark_as_paid(collection_id)
    navigate('/')
    get_invoices()
  }


  return (
    <footer className='bg-dark-greyish-blue max-md:p-8 flex justify-center gap-2 md:bg-opacity-0'>
        <div className='md:hidden'><GreyButton text={"Edit"} onClick={handleEdit}/></div>
        <div className='max-md:hidden'><GreyButton text={"Edit"} onClick={() => setModal(true)}/></div>
        <DestructiveButton text={"Delete"} onClick={() => setDeleteModal(true)}/>
        {invoice.status !== "paid" ? <PurpleButton onClick={handleMarkAsPaid} text={"Mark as Paid"}/> : null}

        <Modal open={modal} onClose={() => setModal(false)}>
          <EditInvoice onClose={() => setModal(false)}/>
        </Modal>

        <Confirmation open={deleteModal} onClose={() => setDeleteModal(false)}>
          <DeleteConfirmation collection_id={collection_id} setDeleteModal={setDeleteModal}/>
        </Confirmation>
    </footer>
  )
}

export default ActionButtons