import React, { useContext } from 'react'
import Avatar from '../components/ui/Avatar'
import Logo from '../components/ui/Logo'
import ThemeToggle from '../components/ui/ThemeToggle'
import { ThemeContext } from '../context/ThemeContext'

function Header() {
    const theme = useContext(ThemeContext)[0]
  return (
    <div className={`flex justify-between ${theme === "light" ? "bg-[#373B53]" : "bg-dark-greyish-blue"}`}>
        <Logo />
        <div className="flex gap-2">
            <ThemeToggle />
            <Avatar />
        </div>
    </div>
  )
}

export default Header