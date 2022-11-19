import React from 'react'

function Items({invoice}) {
  return (
    <div className="rounded-lg overflow-hidden">
        {
            invoice.items.map((item, i) => {
                return(
                    <div className="">
                        <div className="bg-greyish-blue p-6 flex justify-between items-center">
                            <div className="" key={i}>
                                <h4>{item.item_name}</h4>
                                <h4>{`${item.quantity} x £${item.price}`}</h4>
                            </div>
                            <h4>£{item.total}</h4>
                        </div>
                    </div>
                )
            })
        }
        <footer className='flex items-center justify-between p-6 bg-black'>
            <span className='text-body-m'>Amount Due</span>
            <h2 className='text-h2 font-bold'>£{invoice.total.toFixed(2)}</h2>
        </footer>
    </div>
  )
}

export default Items