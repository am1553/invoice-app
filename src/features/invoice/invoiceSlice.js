import {createSlice} from '@reduxjs/toolkit'
import data from '../../data.json'

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState: [data],
    reducers: {
        addInvoice: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export const {addInvoice} = invoiceSlice.actions

export default invoiceSlice.reducer