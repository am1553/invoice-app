import React, { useContext, useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BillFrom from './components/BillFrom';
import BillTo from './components/BillTo';
import ItemList from './components/ItemList';
import { PurpleButton, GreyButton, SmallButton } from '../../components/ui/Buttons';
import {useNavigate} from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext';
import { InvoicesContext } from '../../context/InvoicesContext';

function NewInvoice({onClose}) {
    const theme = useContext(ThemeContext)[0]
    let navigate = useNavigate()
    const create_invoice = useContext(InvoicesContext).create_invoice
    
    function makeid(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
    const [billFrom, setBillFrom] = useState({})
    const [billTo, setBillTo] = useState({})
    const [itemList, setItemList] = useState([])
    
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
            id: makeid(6),
            items: itemList,
            status: "draft",
            total: calcTotal()
        }
        create_invoice(data)
        const navigateBack = () => navigate('/')
        navigateBack()
        onClose()
    }
    const handleAddInvoicePending = () => {
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
            id: makeid(6),
            items: itemList,
            status: "pending",
            total: calcTotal()
        }
        create_invoice(data)
        const navigateBack = () => navigate('/')
        navigateBack()
        onClose()
    }


    return (
        <div 
            className={`lg:rounded-r-2xl flex sm:h-[calc(100vh-72px)] md:h-screen overflow-y-scroll gap-8 flex-col pt-14 ${theme === "light" ? "bg-white" : "bg-desaturated-black"}`}
        >
            <header className='px-8 mt-4 sm:hidden'>
                <button className='flex items-center' onClick={() => navigate('/')}>
                    <ChevronLeftIcon className='text-main-purple pointer-events-none pr-2'/>
                    <h4 className='text-h4 font-bold pointer-events-none ml-4'>Back to Home</h4>
                </button>
            </header>
            <main className={`px-8 flex flex-col gap-8 ${theme === "light" ? "text-black" : "text-white"}`}>
                <h1 className='text-h2 font-bold'>New Invoice</h1>
                <BillFrom setBillFrom={setBillFrom}/>
                <BillTo setBillTo={setBillTo}/>
                <ItemList itemList={itemList} setItemList={setItemList}/>
            </main>

            <footer className={`p-6 justify-between mt-14 flex gap-2 shadow-[10px_30px_40px_20px_#00000050] ${theme === "light" ? "bg-white" : "bg-[#1E2139]"}`}>
                <SmallButton text={"Discard"} onClick={() => navigate('/')}/>
                <div className="flex gap-4">
                    <GreyButton text={"Save as Draft"} onClick={handleAddInvoiceDraft}/>
                    <PurpleButton text={"Save & Send"}  onClick={handleAddInvoicePending}/>
                </div>
            </footer>
        </div>
    )
}

export default NewInvoice