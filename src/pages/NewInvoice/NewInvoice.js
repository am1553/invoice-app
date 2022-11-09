import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BillFrom from './components/BillFrom';
import BillTo from './components/BillTo';
import ItemList from './components/ItemList';
import { PurpleButton, PrimaryDarkGreyButton, PrimaryGreyButton } from '../../components/ui/Buttons';
import {useNavigate} from 'react-router-dom'

function NewInvoice() {
    let navigate = useNavigate()

    return (
        <div className='flex gap-8 flex-col'>
            <header className='px-8 mt-4'>
                <button className='flex items-center' onClick={() => navigate('/')}>
                    <ChevronLeftIcon className='text-main-purple pointer-events-none pr-2'/>
                    <h4 className='text-h4 font-bold pointer-events-none ml-4'>Back to Home</h4>
                </button>
            </header>
            <main className='px-8 flex flex-col gap-8'>
                <h1 className='text-h2 font-bold'>New Invoice</h1>
                <BillFrom />
                <BillTo />
                <ItemList />
            </main>

            <footer className='p-4 mt-24 flex gap-2 justify-center bg-[#1E2139]'>
                <PrimaryDarkGreyButton text={"Discard"}/>
                <PrimaryGreyButton text={"Save as Draft"}/>
                <PurpleButton text={"Save & Send"}/>
            </footer>
        </div>
    )
}

export default NewInvoice