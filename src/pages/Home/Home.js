import React, { useContext, useState } from 'react'
import Header from './components/Header'
import NothingHereImage from '../../assets/illustration-empty.svg'
import { ThemeContext } from '../../context/ThemeContext'
import InvoiceCardContainer from './components/InvoiceCardContainer'
import { InvoicesContext } from '../../context/InvoicesContext'


function Home() {
  const allInvoices = useContext(InvoicesContext).all_invoices
  const theme = useContext(ThemeContext)[0]
  const [filter, setFilter] = useState(null)

  const NoInvoices = () => {
    return(
      <div className="flex flex-col gap-4 items-center justify-center my-auto">
        <img src={ NothingHereImage } alt="" />
        <h2 className={`text-h2 font-bold text-center ${theme === "light" ? "text-black" : "text-white"}`}>There is nothing here</h2>
        <p className='text-body-l font-normal w-44 text-center'>
          Create an invoice by clicking the <strong className='font-bold'>New</strong> button and get started
        </p>
      </div>
    )
  }

  return (
    <div className='flex flex-col flex-1 max-w-4xl mx-auto h-[calc(100vh-72px)]'>
      <Header setFilter={(option) => setFilter(option)}/>
      {
        allInvoices.length < 1 ? <NoInvoices /> : <InvoiceCardContainer all_invoices={allInvoices} filter={filter} />
      }
    </div>
  )
}

export default Home