import React, { useContext, useEffect, useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BillFrom from './components/BillFrom';
import BillTo from './components/BillTo';
import ItemList from './components/ItemList';
import { PurpleButton, GreyButton, SmallButton } from '../../components/ui/Buttons';
import {useNavigate, useParams} from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext';
import { InvoicesContext } from '../../context/InvoicesContext';

function EditInvoice({onClose}) {
    let navigate = useNavigate()
    const theme = useContext(ThemeContext)[0]
    const collection_id = useParams().collection_id
    const invoice = useContext(InvoicesContext).get_invoice(collection_id)[0]
    const update_invoice = useContext(InvoicesContext).update_invoice
    const get_invoices = useContext(InvoicesContext).get_invoices
    const [billFrom, setBillFrom] = useState({})
    const [billTo, setBillTo] = useState({})
    const [itemList, setItemList] = useState([])

    useEffect(() => {
        if(invoice) setItemList(invoice.items)
    }, [invoice])

    const handleAddInvoiceDraft = () => {
        const calcTotal = () => {
            let total = 0;
            itemList.map(item => total = total + item.total)
            return total
        }
        const data = {
            client_address: {
                city: billTo.city,
                country: billTo.country,
                post_code: billTo.post_code,
                street: billTo.street_address
            },
            created_at: new Date(),
            payment_due: billTo.invoice_date,
            payment_terms: billTo.payment_terms,
            sender_address: {...billFrom},
            client_email: billTo.client_email,
            client_name: billTo.client_name,
            description: billTo.project_description,
            items: itemList,
            status: invoice.status,
            total: calcTotal()
        }
        console.log(data)
        update_invoice(collection_id, data)
        get_invoices()
        const navigateBack = () => navigate('/')
        navigateBack()
        onClose()
    }



    if(!invoice) return


  return (
    <div className={`lg:rounded-r-2xl flex sm:h-[calc(100vh-72px)] md:h-screen overflow-y-scroll gap-8 flex-col pt-14 ${theme === "light" ? "bg-white" : "bg-desaturated-black"}`}>
            <header className='px-8 mt-4 sm:hidden'>
                <button className='flex items-center' onClick={() => navigate('/')}>
                    <ChevronLeftIcon className='text-main-purple pointer-events-none pr-2'/>
                    <h4 className='text-h4 font-bold pointer-events-none ml-4'>Back to Home</h4>
                </button>
            </header>
            <main className={`px-8 flex flex-col gap-8 ${theme === "light" ? "text-black" : "text-white"}`}>
                <h1 className='text-h2 font-bold'>
                    Edit
                    <span className='opacity-40'> #</span>
                    <span className='text-h2 font-bold uppercase'>{invoice.id}</span>
                </h1>
                <BillFrom invoice={invoice} setBillFrom={setBillFrom}/>
                <BillTo invoice={invoice} setBillTo={setBillTo}/>
                <ItemList invoice={invoice} itemList={itemList} setItemList={setItemList}/>
            </main>

            <footer className={`p-6 justify-end mt-14 flex gap-2 shadow-[10px_30px_40px_20px_#00000050] ${theme === "light" ? "bg-white" : "bg-[#1E2139]"}`}>
                <div className="flex gap-4">
                    <GreyButton text={"Cancel"} onClick={() => {navigate('/'); onClose()}}/>
                    <PurpleButton text={"Save & Send"} onClick={handleAddInvoiceDraft} />
                </div>
            </footer>
    </div>
  )
}

export default EditInvoice