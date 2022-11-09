import {createSlice} from '@reduxjs/toolkit'

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState: [],
    reducers: {
        addInvoice: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export const {addInvoice} = invoiceSlice.actions

export default invoiceSlice.reducer