import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import ArrowDownIcon from '../../assets/icon-arrow-down.svg'
import useOnClickOutside from "../../hooks/useOnClickOutside"


export const DropDown = ({options, defaultValue, onSelect, label, class_Name}) => {

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
            <div 
                className={`absolute w-full top-20 left-0 right-0 z-10 shadow-xl rounded-md ${isOpen ? "top-[110%]" : "left-[-100vw]"} ${theme === "light" ? "bg-white" : "bg-[#252945]"} ${class_Name}` } 
                ref={dropDownRef}
            >
                {
                    options.map((option, i) => {
                        return(
                            <li 
                                key={i} 
                                className={`list-none pr-12 ${i === options.length - 1 ? null : theme === "light" ? "border-b-[1px] border-desaturated-grey border-opacity-50" : "border-b-[1px] border-desaturated-grey border-opacity-10"} h-12 flex items-center cursor-pointer`} 
                                onClick={() => handleChange(option)}
                            >
                                <h4 className={`text-h4 font-bold ml-6 ${option.value === selected ? "text-main-purple" : theme === "light" ? "text-black" : "text-white"} `}>{option.label}</h4>
                            </li>
                        )
                        
                    })
                }
            </div>
        )
    }

    return(
        <div className="relative w-full flex flex-col gap-2">
            {
                label ? 
                <label htmlFor="" className={`${theme === "light" ? "text-sky-blue" : "text-desaturated-grey"} capitalize font-light text-body-l`}>Payment Terms</label>
                : null
            }
            
            <button 
                className={`h-12 min-w-[120px] flex gap-2 justify-between items-center rounded-md border px-4 ${theme === "light" ? "hover:border-main-purple border-desaturated-grey" : "border-[#252945] bg-dark-greyish-blue"}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className={`text-h4 font-bold capitalize ${theme === "light" ? "text-black" : "text-white"}`}>
                    {selected || defaultValue}
                </h4>
                <img src={ArrowDownIcon} alt="" />
            </button>

            <OptionsList />
        </div>
    )
}