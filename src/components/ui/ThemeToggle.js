import React, { useContext } from 'react'
import LightThemeIcon from '../../assets/icon-sun.svg'
import DarkThemeIcon from '../../assets/icon-moon.svg'
import { ThemeContext } from '../../context/ThemeContext'

function ThemeToggle() {
    const theme = useContext(ThemeContext)[0]
    const toggleTheme = useContext(ThemeContext)[1]

  return (
    <button className='w-10 flex items-center justify-center' onClick={toggleTheme}>
        <img src={ theme === "light" ? DarkThemeIcon : LightThemeIcon } alt="" className='pointer-events-none'/>
    </button>
  )
}

export default ThemeToggle