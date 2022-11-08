import React, { useContext } from 'react'
import AvatarIcon from '../../assets/image-avatar.jpg'
import { ThemeContext } from '../../context/ThemeContext'
function Avatar() {

    const theme = useContext(ThemeContext)[0]

  return (
    <div className={`flex items-center justify-center w-20 border-l-[1px] border-[#494E6E] ${theme === "light" ? "border-opacity-90" : "border-opacity-25"}`}>
        <img src={AvatarIcon} alt="" className='h-8 w-8 rounded-full'/>
    </div>
  )
}

export default Avatar