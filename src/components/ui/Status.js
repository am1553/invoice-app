import { ThemeContext } from '@emotion/react'
import React, { useContext } from 'react'

function Status({status}) {
    const theme = useContext(ThemeContext)[0]
    console.log(status)
  return (
    <div 
        className={`${status === "paid" ? "bg-[#33D69F10]" : status === "pending" ? "bg-[#FF8F0010]" : theme === "light" ? "bg-[#373B5310]" : "bg-[#DFE3FA10]"} rounded-md flex items-center justify-center gap-2 w-28 h-10`}
    >
        <div className={`w-2 h-2 rounded ${status === "paid" ? "bg-[#33D69F]" : status === "pending" ? "bg-[#FF8F00]" : theme === "light" ? "bg-[#373B53]" : "bg-[#DFE3FA]"}`}></div>

        <h4 className={`capitalize text-h4 font-bold ${status === "paid" ? "text-[#33D69F]" : status === "pending" ? "text-[#FF8F00]" : theme === "light" ? "text-[#373B53]" : "text-[#DFE3FA]"}`}>{status}</h4>

    </div>
  )
}

export default Status