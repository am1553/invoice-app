import React, { useEffect, useState } from 'react'
import {TextField} from '../../../components/form/TextField'

function BillFrom({setBillFrom, invoice}) {

  const [streetAddress, setStreetAddress] = useState(invoice.sender_address.street_address)
  const [city, setCity] = useState(invoice.sender_address.city)
  const [postCode, setPostCode] = useState(invoice.sender_address.post_code)
  const [country, setCountry] = useState(invoice.sender_address.country)

  useEffect(() => {
    setBillFrom({
      street_address: streetAddress,
      city: city,
      post_code: postCode,
      country: country
    })
  }, [
    streetAddress,
    city,
    postCode,
    country])

    
  return (
    <div className='flex flex-col gap-4'>
        <h4 className='text-h4 font-bold text-main-purple'>Bill From</h4>

        <TextField label={"Street Address"} defaultValue={streetAddress} onChange={(e) => setStreetAddress(e.target.value)}/>

        <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 gap-4">
            <TextField defaultValue={city} label={"City"} onChange={(e) => setCity(e.target.value)}/>
            <TextField defaultValue={postCode} label={"Post Code"} onChange={(e) => setPostCode(e.target.value)}/>
            <div className="max-sm:hidden">
              <TextField defaultValue={country} label={"Country"} onChange={(e) => setCountry(e.target.value)} />
            </div>
        </div>

        <div className="sm:hidden">
          <TextField label={"Country"} onChange={(e) => setCountry(e.target.value)}/>
        </div>
    </div>
  )
}

export default BillFrom