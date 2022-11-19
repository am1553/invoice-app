import React from 'react'
import {PurpleButton, DestructiveButton, GreyButton} from '../../../components/ui/Buttons'
function ActionButtons() {
  return (
    <footer className='bg-dark-greyish-blue mt-14 p-8 flex justify-center gap-2'>
        <GreyButton text={"Edit"}/>
        <DestructiveButton text={"Delete"}/>
        <PurpleButton text={"Mark as Paid"}/>
    </footer>
  )
}

export default ActionButtons