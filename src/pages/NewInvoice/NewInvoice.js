import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
function NewInvoice() {
  return (
    <div>
        <header>
            <button className='flex items-center'>
                <ChevronLeftIcon className='text-main-purple'/>
                <h4 className='text-h4 font-bold'>Go back</h4>
            </button>
        </header>

        <h1 className='text-h2 font-bold'>New Invoice</h1>
    </div>
  )
}

export default NewInvoice