import React, { useEffect, useState } from 'react'
import {TextField} from '../../../components/form/TextField'
import {DateDropDown} from '../../../components/form/DateDropDown'
import { DropDown } from '../../../components/form/DropDown'
import { paymentTermOptions } from '../../../constants/payment-options'
function BillTo({setBillTo}) {

  const [clientsName, setClientsName] = useState("")
  const [clientsEmail, setClientsEmail] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [city, setCity] = useState("")
  const [postCode, setPostCode] = useState("")
  const [country, setCountry] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [paymentTerms, setPaymentTerms] = useState("")
  const [projectDescription, setProjectDescription] = useState("")

  useEffect(() => {
    setBillTo({
      client_name: clientsName,
      client_email: clientsEmail,
      street_address: streetAddress,
      city: city,
      post_code: postCode,
      country: country,
      invoice_date: invoiceDate,
      payment_terms: paymentTerms,
      project_description: projectDescription
    })
  }, [
    clientsName,
    clientsEmail,
    streetAddress,
    city,
    postCode,
    country,
    invoiceDate,
    paymentTerms,
    projectDescription
  ])


  return (
    <div className='flex flex-col gap-4'>
        <h4 className='text-h4 font-bold text-main-purple'>Bill To</h4>

        <TextField label={"Client's Name"} onChange={(e) => setClientsName(e.target.value)} />
        <TextField label={"Client's Email"} onChange={(e) => setClientsEmail(e.target.value)} />
        <TextField label={"Street Address"} onChange={(e) => setStreetAddress(e.target.value)} />

        <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 gap-4">
            <TextField label={"City"} onChange={(e) => setCity(e.target.value)} />
            <TextField label={"Post Code"} onChange={(e) => setPostCode(e.target.value)} />
            <div className="max-sm:hidden">
              <TextField label={"Country"} onChange={(e) => setCountry(e.target.value)} />
            </div>
        </div>
        <div className="sm:hidden">
          <TextField label={"Country"} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <DateDropDown label={"Invoice Date"} onChange={setInvoiceDate}/>
          <DropDown label={"Payment Terms"} onSelect={setPaymentTerms} options={paymentTermOptions} defaultValue={"Choose a payment term"}/>
        </div>


        <TextField label={"Project Description"} onChange={(e) => setProjectDescription(e.target.value)} />
    </div>
  )
}

export default BillTo