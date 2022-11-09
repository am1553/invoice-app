import { useContext } from "react"
import { ThemeContext } from '../../context/ThemeContext'
import { Label } from "./Label"
import TextInput from "./TextInput"

export const TextField = ({label}) => {
    const theme = useContext(ThemeContext)[0]
    return(
        <div className="flex flex-col">
            <Label label={label}/>
            <TextInput />
        </div>
    )
}