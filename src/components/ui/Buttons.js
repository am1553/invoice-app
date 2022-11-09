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
        <button onClick={onClick} className='h-12 w-fit min-w-[80px] px-4 bg-main-purple hover:bg-desaturated-purple transition-colors rounded-full'>
            <h4 className='text-h4 font-bold text-white'>{text}</h4>
        </button>
    )
}

export const EditButton = () => {
    const theme = useContext(ThemeContext)[0]
    return(
        <button className={` transition-colors ${theme === "light" ? "bg-desaturated-grey bg-opacity-20 hover:bg-opacity-100" : "bg-greyish-blue hover:bg-opacity-0"} rounded-full h-12 w-20`}>
            <h4 className={` font-bold text-h4 ${theme === "light" ? "text-sky-blue" : "text-desaturated-grey"}`}>Edit</h4>
        </button>
    )
}

export const PrimaryDarkGreyButton = ({text}) => {
    const theme = useContext(ThemeContext)[0]
    return(
        <button className={` transition-colors rounded-full h-12 w-fit px-4 ${theme === "light" ? "bg-[#373B53] hover:bg-[#0C0E16]" : "bg-greyish-blue hover:bg-[#1E2139]"}`}>
            <h4 className={`text-h4 font-bold ${theme === "light" ? "text-grey" : "text-desaturated-grey"}`}>{text}</h4>
        </button>
    )
}
export const PrimaryGreyButton = ({text}) => {
    const theme = useContext(ThemeContext)[0]
    return(
        <button className={` transition-colors rounded-full h-12 w-fit px-4 ${theme === "light" ? "bg-[#373B53] hover:bg-[#0C0E16]" : "bg-[#373B53] hover:bg-[#1E2139]"}`}>
            <h4 className={`text-h4 font-bold ${theme === "light" ? "text-grey" : "text-desaturated-grey"}`}>{text}</h4>
        </button>
    )
}

export const DeleteButton = () => {
    return(
        <button className='bg-red transition-colors hover:bg-desaturated-red h-12 w-24 rounded-full'>
            <h4 className='text-h4 font-bold text-white'>Delete</h4>
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