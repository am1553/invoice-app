import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

function Status({status}) {
    const theme = useContext(ThemeContext)[0]

    const Circle = ({background}) => {
      console.log(background)
      return(
        <div 
        className={
          `w-2 h-2 rounded bg-[${background}]`
        }>
        </div>
      )
    }

    const Text = ({text, color}) => {
      return(
        <h4 className={`
        capitalize 
        text-h4 
        font-bold 
        ${status === "paid" ? "text-[#33D69F]" : 
          status === "pending" ? "text-[#FF8F00]" :
          status === "draft" && theme === "light" ? "text-[#373B53]" :
          status === "draft" && theme === "dark" ? "text-[#0000000]" : null}`}
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
          } rounded-md flex items-center justify-center gap-2 w-28 h-10`}
    >
      {
        status === "paid" ? <Circle background={'#33D69F'}/> 
        : 
        status === "draft" ? <Circle background={theme === "light" ? "#373B53" : "#DFE3FA"}/>
        : <Circle background={'#FF8F00'}/> 
      }

      {
        status === "paid" ? <Text text={"paid"} color={"#33D69F"}/> :
        status === "draft" ? <Text text={"draft"} color={theme === "light" ? "#373B53" : "#DFE3FA"}/> :
        <Text text={"pending"} color={"#FF8F00"}/>
      }
    </div>
  )
}

export default Status