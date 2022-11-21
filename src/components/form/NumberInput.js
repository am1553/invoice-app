import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const NumberInput = ({defaultValue, value, onChange, isDisabled, noDecimal }) => {
    const theme = useContext(ThemeContext)[0]

    return (
        <input 
            type="number" 
            onChange={(e) => onChange(e)}
            defaultValue={defaultValue}
            min={0}
            className={`h-12 w-full text-h4 font-bold border ${theme === "light" ? "bg-white border-desaturated-grey text-black focus:border-main-purple" : "border-[#252945] bg-dark-greyish-blue text-white"} rounded-md outline-none px-2`} style={isDisabled ? {background: "transparent", border: "none"} : null}/>
    )
}