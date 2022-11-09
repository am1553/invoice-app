import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const Label = ({label}) => {
    const theme = useContext(ThemeContext)[0]
    return(
        <label 
            htmlFor="" 
            className={`${theme === "light" ? "text-sky-blue" : "text-desaturated-grey"} capitalize font-light text-body-l mb-2`}>
            {label}
        </label>
    )
}