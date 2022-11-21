import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function Status({status}) {
  console.log(status)
    const theme = useContext(ThemeContext)[0]

    const Circle = () => {
      return(
        <div 
        className={
          `w-2 h-2 rounded 
          ${status === "paid" ? "bg-[#33D69F]" : 
          status === "pending" ? "bg-[#FF8F00]" :
          status === "draft" && theme === "light" ? "bg-[#373B53]" :
          status === "draft" && theme === "dark" ? "bg-[#DFE3FA]" : null}`}
        >
        </div>
      )
    }

    const Text = ({text, color}) => {
      return(
        <h4 className={`capitalize text-h4 font-bold 
        ${status === "paid" ? "text-[#33D69F]" : 
          status === "pending" ? "text-[#FF8F00]" :
          status === "draft" && theme === "light" ? "text-[#373B53]" :
          status === "draft" && theme === "dark" ? "text-[#DFE3FA]" : null}`}
        >
            {status}
        </h4>
      )
    }

  return (
    <div 
        className={`${
            status === "paid" ? "bg-[#33D69F20]" 
            : 
            status === "pending" ? "bg-[#FF8F0020]" 
            :
            status === "draft" && theme === "light" ? "bg-[#373B5320]" : "bg-[#DFE3FA20]"
          } rounded-md w-28 h-10 grid grid-cols-2 items-center justify-items-start px-8`}
    >
      <Circle />
      <Text />
    </div>
  )
}

export default Status