import { useContext, useEffect, useRef, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css'
import CalendarIcon from '../../assets/icon-calendar.svg'



export const DateDropDown = ({label, onChange, defaultValue}) => {

    const theme = useContext(ThemeContext)[0]
    const [startDate, setStartDate] = useState(new Date())
    useEffect(() => {
        onChange(startDate)
    }, [startDate])

    return(
        <div className="">
            <label htmlFor="" className={`text-body-l font-light ${theme === "light" ? "text-sky-blue" : "text-desaturated-grey"} capitalize`}>{label}</label>
            <div className={`relative outline-none ${theme}`}>
                <DatePicker 
                    setDefaultLocale="gmt"
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                />
                <img src={CalendarIcon} alt="" className="absolute top-2/4 right-2 -translate-y-2/4"/>
            </div>
        </div>
    )
}