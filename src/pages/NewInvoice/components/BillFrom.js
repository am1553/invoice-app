import React, { useEffect, useState } from 'react'
import {TextField} from '../../../components/form/TextField'


function BillFrom({setBillFrom}) { 
  const [streetAddress, setStreetAddress] = useState("")
  const [city, setCity] = useState("")
  const [postCode, setPostCode] = useState("")
  const [country, setCountry] = useState("")

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
        <TextField label={"Street Address"} onChange={(e) => setStreetAddress(e.target.value)}/>
        <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 gap-4">
            <TextField label={"City"} onChange={(e) => setCity(e.target.value)}/>
            <TextField label={"Post Code"} onChange={(e) => setPostCode(e.target.value)}/>
            <div className="max-sm:hidden">
              <TextField label={"Country"} onChange={(e) => setCountry(e.target.value)} />
            </div>
        </div>

        <div className="sm:hidden">
          <TextField label={"Country"} onChange={(e) => setCountry(e.target.value)}/>
        </div>
    </div>
  )
}

export default BillFrom