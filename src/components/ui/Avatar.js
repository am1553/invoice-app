import React, { useContext } from 'react'
import AvatarIcon from '../../assets/image-avatar.jpg'
import { ThemeContext } from '../../context/ThemeContext'
function Avatar() {

    const theme = useContext(ThemeContext)[0]

  return (
    <div className={`flex items-center justify-center max-md:w-[72px] max-md:h-[72px] md:w-[100px] md:h-[100px] md:border-t-[1px] max-md:border-l-[1px] border-[#494E6E] ${theme === "light" ? "border-opacity-90" : "border-opacity-25"}`}>
        <img src={AvatarIcon} alt="" className='h-8 w-8 rounded-full'/>
    </div>
  )
}

export default Avatar