import React, { useContext, useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BillFrom from './components/BillFrom';
import BillTo from './components/BillTo';
import ItemList from './components/ItemList';
import { PurpleButton, PrimaryDarkGreyButton, PrimaryGreyButton, GreyButton, SmallButton } from '../../components/ui/Buttons';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addInvoice} from '../../features/invoice/invoiceSlice'
import { ThemeContext } from '../../context/ThemeContext';

function NewInvoice() {
    const theme = useContext(ThemeContext)[0]

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [billFrom, setBillFrom] = useState({})
    const [billTo, setBillTo] = useState({})
    const [itemList, setItemList] = useState([])
    
    const handleAddInvoice = () => {
        const invoiceData = {
            bill_from: billFrom,
            bill_to: billTo,
            item_list: itemList
        }
        dispatch(addInvoice(invoiceData))
    }

    return (
        <div 
            className={`flex sm:h-[calc(100vh-72px)] md:h-screen overflow-y-scroll gap-8 flex-col pt-14 ${theme === "light" ? "bg-white" : "bg-desaturated-black"}`}
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
                <SmallButton text={"Discard"}/>
                <div className="flex gap-4">
                    <GreyButton text={"Save as Draft"}/>
                    <PurpleButton text={"Save & Send"} onClick={handleAddInvoice} />
                </div>
            </footer>
        </div>
    )
}

export default NewInvoice