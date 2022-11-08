import React from 'react'
import LogoIcon from '../../assets/logo.svg'
function Logo() {
  return (
    <div className='relative w-[72px] h-[72px] bg-main-purple flex items-center justify-center rounded-r-[20px] overflow-hidden'>
        <img src={ LogoIcon } alt="" className='z-10'/>
        <div className="h-[72px] w-[72px] absolute bg-desaturated-purple bottom-0 rounded-l-[20px] top-2/4 -sz-1"></div>
    </div>
  )
}

export default Logo