import React, { useContext } from 'react'
import AddIcon from '../../assets/icon-plus.svg'
import {ThemeContext} from '../../context/ThemeContext'


export const NewInvoiceButton = ({onClick}) => {
    return(
        <>
            <button onClick={onClick} className="bg-main-purple hover:bg-desaturated-purple transition-colors rounded-full max-sm:hidden h-12 w-[150px] flex items-center justify-between pl-2 pr-6">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={ AddIcon } alt="" />
                </div>
                <h4 className='text-h4 font-bold text-white'>New Invoice</h4>
            </button>
            <button onClick={onClick} className="bg-main-purple rounded-full sm:hidden h-11 w-[90px] flex items-center justify-between pl-2 pr-4">   
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={ AddIcon } alt="" />
                </div>
                <h4 className='text-h4 font-bold text-white'>New</h4>
            </button>
        </>
    )
}

export const PurpleButton = ({text, onClick}) => {

    return(
        <button 
            className='h-12 px-6 bg-main-purple rounded-full hover:bg-desaturated-purple transition-colors'
            onClick={onClick}
        >
            <h4 className='text-h4 font-bold text-white'>{text}</h4>
        </button>
    )
}

export const GreyButton = ({text}) => {
    const theme = useContext(ThemeContext)[0]
    return(
        <button className={`h-12 px-6 rounded-full transition-colors ${theme === "light" ? "bg-[#373B53] hover:bg-[#0C0E16] text-[#888EB0]" : "bg-[#373B53] text-[#DFE3FA] hover:bg-[#1E2139]"}`}>
            <h4 className='text-h4 font-bold'>{text}</h4>
        </button>
    )
}

export const SmallButton = ({text}) => {
    const theme = useContext(ThemeContext)[0]
    return(
        <button className={`h-12 px-6 rounded-full transition-colors ${theme === "light" ? "bg-desaturated-white hover:bg-sky-blue hover:bg-opacity-50 text-sky-blue" : "bg-greyish-blue text-desaturated-grey hover:bg-opacity-0"}`}>
            <h4 className='text-h4 font-bold'>{text}</h4>
        </button>
    )
}

export const AddNewItemButton = ({onClick}) => {
    return(
        <button onClick={onClick} className='h-12 w-[80vw] max-w-xs transition-colors rounded-full bg-sky-blue bg-opacity-10 hover:bg-opacity-30'>
            <h4 className='text-h4 font-bold text-sky-blue'>+ Add New Item</h4>
        </button>
    )
}