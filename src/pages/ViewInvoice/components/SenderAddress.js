import React from 'react'

function SenderAddress({invoice}) {
  return (
    <div className="flex flex-col">
        <span className='text-body-m' >
            { invoice.sender_address.street_address }
        </span>
        <span className='text-body-m' >
            { invoice.sender_address.city }
        </span>
        <span className='text-body-m' >
            { invoice.sender_address.post_code }
        </span>
        <span className='text-body-m' >
            { invoice.sender_address.country }
        </span>
    </div>
  )
}

export default SenderAddress