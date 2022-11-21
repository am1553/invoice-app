import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

function Items({invoice}) {

    const theme = useContext(ThemeContext)[0]

  return (
    <div className="rounded-lg overflow-hidden">
        {
            invoice.items.map((item, i) => {
                return(
                    <div className="" key={i}>
                        <div className={`${theme === "light" ?"bg-desaturated-white" : "bg-greyish-blue" } p-6 flex justify-between items-center`}>
                            <div className="" key={i}>
                                <h4 className={`text-h2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>{item.item_name}</h4>
                                <h4>{`${item.quantity} x £${item.price}`}</h4>
                            </div>
                            <h4 className={`text-h2 font-bold ${theme === "light" ? "text-black" : "text-white"}`}>£{item.total}</h4>
                        </div>
                    </div>
                )
            })
        }
        <footer className={`flex items-center justify-between text-white p-6 ${theme === "light" ? "bg-[#373B53] " : "bg-black"}`}>
            <span className='text-body-m'>Amount Due</span>
            <h2 className='text-h2 font-bold'>£{invoice.total.toFixed(2)}</h2>
        </footer>
    </div>
  )
}

export default Items