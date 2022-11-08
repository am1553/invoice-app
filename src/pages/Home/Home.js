import React from 'react'
import Header from './components/Header'
import NothingHereImage from '../../assets/illustration-empty.svg'
function Home() {

  const NoInvoices = () => {

    return(
      <div className="flex flex-col gap-4 items-center justify-center pt-14">
        <img src={ NothingHereImage } alt="" />
        <h2 className='text-h2 font-bold text-center'>There is nothing here</h2>
        <p className='text-body-l font-normal w-44 text-center'>
          Create an invoice by clicking the <strong className='font-bold'>New</strong> button and get started
        </p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <NoInvoices />
    </div>
  )
}

export default Home