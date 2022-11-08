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
            <div className={`absolute top-20 left-0 right-0 bg-white shadow-lg rounded-md ${!isOpen ? "translate-y-[-100vh]" : "translate-y-2"}`} ref={dropDownRef}>
                {
                    options.map((option, i) => {
                        return(
                            <li key={i} className={`list-none ${i === options.length - 1 ? null : "border-b-[1px] border-desaturated-grey"} h-12 flex items-center cursor-pointer`} onClick={() => handleChange(option)}>
                                <h4 className={`text-h4 font-bold ml-6 ${option.value === selected ? "text-main-purple" : "text-black"}`}>{option.label}</h4>
                            </li>
                        )
                        
                    })
                }
            </div>
        )
    }

    return(
        <div className="relative w-[240px]">
            <label htmlFor="" className={`${theme === "light" ? "text-sky-blue" : "text-desaturated-grey"} capitalize font-light text-body-l`}>Payment Terms</label>

            <button className="h-12 w-full flex justify-between items-center rounded-md border border-desaturated-grey hover:border-main-purple px-4" onClick={() => setIsOpen(!isOpen)}>
                <h4 className="text-h4 font-bold capitalize">{selected}</h4>
                <img src={ArrowDownIcon} alt="" />
            </button>

            <OptionsList />
        </div>
    )
}