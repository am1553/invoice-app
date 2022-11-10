import React, { useContext } from 'react'
import Header from './components/Header'
import NothingHereImage from '../../assets/illustration-empty.svg'
import { ThemeContext } from '../../context/ThemeContext'
import {useSelector} from 'react-redux'
import InvoiceCardContainer from './components/InvoiceCardContainer'


function Home() {
  const theme = useContext(ThemeContext)[0]

  const invoice = useSelector((state) => state.invoice)


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
      <Header />
      {
        invoice.length < 1 ? <NoInvoices /> : <InvoiceCardContainer />
      }
    </div>
  )
}

export default Home