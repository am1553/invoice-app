import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import ArrowDownIcon from '../../assets/icon-arrow-down.svg'
import useOnClickOutside from "../../hooks/useOnClickOutside"


export const DropDown = ({options, defaultValue, onSelect}) => {

    const [selected, setSelected] = useState(defaultValue)

    const theme = useContext(ThemeContext)[0]
    const [isOpen, setIsOpen] = useState(false)
    const dropDownRef = useRef()

    
    useOnClickOutside(dropDownRef, () => setIsOpen(false));

    const handleChange = (option) => {
        onSelect(option.value)
        setSelected(option.value)
        setIsOpen(false)
    }

    const OptionsList = () => {


        return(
            <div className={`absolute top-20 left-0 right-0 shadow-lg rounded-md ${!isOpen ? "translate-y-[-100vh]" : "translate-y-2" && theme === "light" ? "bg-white" : "bg-[#252945]"}`} ref={dropDownRef}>
                {
                    options.map((option, i) => {
                        return(
                            <li key={i} className={`list-none ${i === options.length - 1 ? null : theme === "light" ? "border-b-[1px] border-desaturated-grey border-opacity-50" : "border-b-[1px] border-desaturated-grey border-opacity-10"} h-12 flex items-center cursor-pointer`} onClick={() => handleChange(option)}>
                                <h4 className={`text-h4 font-bold ml-6 ${option.value === selected ? "text-main-purple" : theme === "light" ? "text-black" : "text-white"} `}>{option.label}</h4>
                            </li>
                        )
                        
                    })
                }
            </div>
        )
    }

    return(
        <div className="relative w-[240px] flex flex-col gap-2">
            <label htmlFor="" className={`${theme === "light" ? "text-sky-blue" : "text-desaturated-grey"} capitalize font-light text-body-l`}>Payment Terms</label>

            <button className={`h-12 w-full flex justify-between items-center rounded-md border   px-4 ${theme === "light" ? "hover:border-main-purple border-desaturated-grey" : "border-[#252945] bg-dark-greyish-blue"}`} onClick={() => setIsOpen(!isOpen)}>
                <h4 className={`text-h4 font-bold capitalize ${theme === "light" ? "text-black" : "text-white"}`}>{selected}</h4>
                <img src={ArrowDownIcon} alt="" />
            </button>

            <OptionsList />
        </div>
    )
}