import { useContext } from "react"
import { ThemeContext } from '../../context/ThemeContext'

export const TextField = () => {
    const theme = useContext(ThemeContext)[0]
    return(
        <div className="flex flex-col">
            <label htmlFor="" className={`${theme === "light" ? "text-sky-blue" : "text-desaturated-grey"} capitalize font-light text-body-l`}>Street Address</label>
            <input type="text" className={`h-12 w-[240px] text-h4 font-bold border ${theme === "light" ? "bg-white border-desaturated-grey text-black focus:border-main-purple" : "border-[#252945] bg-dark-greyish-blue text-white"} rounded-md outline-none px-2`} />
        </div>
    )
}