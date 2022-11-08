import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './datepicker.css'
import CalendarIcon from '../../assets/icon-calendar.svg'



export const DateDropDown = () => {
    const theme = useContext(ThemeContext)[0]
    const [startDate, setStartDate] = useState(new Date())
    return(
        <div className="">
            <label htmlFor="" className={`text-body-l font-light ${theme === "light" ? "text-sky-blue" : "text-desaturated-grey"} capitalize`}>Issue Date</label>
            <div className={`relative w-fit outline-none ${theme}`}>
                <DatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)}
                    dateFormat={"dd/MM/yyyy"}
                />
                <img src={CalendarIcon} alt="" className="absolute top-2/4 right-2 -translate-y-2/4"/>
            </div>
        </div>
    )
}