import React, { useEffect, useState } from 'react'
import {TextField} from '../../../components/form/TextField'
import {DateDropDown} from '../../../components/form/DateDropDown'
import { DropDown } from '../../../components/form/DropDown'
import { paymentTermOptions } from '../../../constants/payment-options'
import moment from 'moment'

function BillTo({setBillTo, invoice}) {
  
  const [clientsName, setClientsName] = useState(invoice.client_name)
  const [clientsEmail, setClientsEmail] = useState(invoice.client_email)
  const [streetAddress, setStreetAddress] = useState(invoice.client_address.street)
  const [city, setCity] = useState(invoice.client_address.city)
  const [postCode, setPostCode] = useState(invoice.client_address.post_code)
  const [country, setCountry] = useState(invoice.client_address.country)
  const [invoiceDate, setInvoiceDate] = useState(null)
  const [paymentTerms, setPaymentTerms] = useState(invoice.payment_terms)
  const [projectDescription, setProjectDescription] = useState(invoice.description)
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
    clientsName, clientsEmail, streetAddress, city, postCode, country, invoiceDate, paymentTerms, projectDescription
  ])

  return (
    <div className='flex flex-col gap-4'>
        <h4 className='text-h4 font-bold text-main-purple'>Bill To</h4>

        <TextField defaultValue={clientsName} label={"Client's Name"} onChange={(e) => setClientsName(e.target.value)} />
        <TextField defaultValue={clientsEmail} label={"Client's Email"} onChange={(e) => setClientsEmail(e.target.value)} />
        <TextField defaultValue={streetAddress} label={"Street Address"} onChange={(e) => setStreetAddress(e.target.value)} />

        <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 gap-4">
            <TextField defaultValue={city} label={"City"} onChange={(e) => setCity(e.target.value)} />
            <TextField defaultValue={postCode} label={"Post Code"} onChange={(e) => setPostCode(e.target.value)} />
            <div className="max-sm:hidden">
              <TextField defaultValue={country} label={"Country"} onChange={(e) => setCountry(e.target.value)} />
            </div>
        </div>
        <div className="sm:hidden">
          <TextField defaultValue={country} label={"Country"} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <DateDropDown defaultValue={invoiceDate} label={"Invoice Date"} onChange={setInvoiceDate}/>
          <DropDown  label={"Payment Terms"} onSelect={setPaymentTerms} options={paymentTermOptions} defaultValue={paymentTerms ? paymentTerms : "Choose a payment term"}/>
        </div>


        <TextField defaultValue={projectDescription} label={"Project Description"} onChange={(e) => setProjectDescription(e.target.value)} />
    </div>
  )
}

export default BillTo