import { useContext } from "react"
import { ThemeContext } from '../../context/ThemeContext'
import { Label } from "./Label"
import TextInput from "./TextInput"

export const TextField = ({label, onChange, defaultValue}) => {
    const theme = useContext(ThemeContext)[0]
    return(
        <div className="flex flex-col">
            <Label label={label}/>
            <TextInput defaultValue={defaultValue} onChange={onChange}/>
        </div>
    )
}