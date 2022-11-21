import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoIcon from '../../assets/logo.svg'

function Logo() {

  const navigate = useNavigate()

  return (
    <div className='cursor-pointer relative max-md:w-[72px] max-md:h-[72px] md:w-[100px] md:h-[100px] bg-main-purple flex items-center justify-center rounded-r-[20px] overflow-hidden' onClick={() => navigate('/')}>
        <img src={ LogoIcon } alt="" className='z-10'/>
        <div className="max-md:w-[72px] max-md:h-[72px] md:w-[100px] md:h-[100px] absolute bg-desaturated-purple bottom-0 rounded-l-[20px] top-2/4 -sz-1"></div>
    </div>
  )
}

export default Logo