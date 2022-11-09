import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function TextInput({onChange}) {
    const theme = useContext(ThemeContext)[0]
    
  return (
    <input 
        type="text"
        onChange={(e) => onChange(e)} 
        className={`h-12 w-full text-h4 font-bold border ${theme === "light" ? "bg-white border-desaturated-grey text-black focus:border-main-purple" : "border-[#252945] bg-dark-greyish-blue text-white"} rounded-md outline-none px-2`} />
  )
}

export default TextInput