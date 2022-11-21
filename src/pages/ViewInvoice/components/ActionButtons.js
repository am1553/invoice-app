import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {PurpleButton, DestructiveButton, GreyButton} from '../../../components/ui/Buttons'


function ActionButtons() {

  const collection_id = useParams().collection_id
  
  const navigate = useNavigate()
  const handleEdit = () => {
    navigate(`/invoice/${collection_id}/edit`)
  }

  return (
    <footer className='bg-dark-greyish-blue max-md:p-8 flex justify-center gap-2 md:bg-opacity-0'>
        <GreyButton text={"Edit"} onClick={handleEdit}/>
        <DestructiveButton text={"Delete"}/>
        <PurpleButton text={"Mark as Paid"}/>
    </footer>
  )
}

export default ActionButtons