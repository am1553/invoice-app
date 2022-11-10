import {createSlice} from '@reduxjs/toolkit'

const initialData = [
    {
        "id": "RT3080",
        "createdAt": "2021-08-18",
        "paymentDue": "2021-08-19",
        "description": "Re-branding",
        "paymentTerms": 1,
        "clientName": "Jensen Huang",
        "clientEmail": "jensenh@mail.com",
        "status": "paid",
        
        "senderAddress": {
          "street": "19 Union Terrace",
          "city": "London",
          "postCode": "E1 3EZ",
          "country": "United Kingdom"
        },
        
        "clientAddress": {
          "street": "106 Kendell Street",
          "city": "Sharrington",
          "postCode": "NR24 5WQ",
          "country": "United Kingdom"
        },
        
        "items": [
          {
            "name": "Brand Guidelines",
            "quantity": 1,
            "price": 1800.90,
            "total": 1800.90
          }
        ],
        
        "total": 1800.90
    },
    {
        "id": "XM9141",
        "createdAt": "2021-08-21",
        "paymentDue": "2021-09-20",
        "description": "Graphic Design",
        "paymentTerms": 30,
        "clientName": "Alex Grim",
        "clientEmail": "alexgrim@mail.com",
        "status": "pending",
        "senderAddress": {
          "street": "19 Union Terrace",
          "city": "London",
          "postCode": "E1 3EZ",
          "country": "United Kingdom"
        },
        "clientAddress": {
          "street": "84 Church Way",
          "city": "Bradford",
          "postCode": "BD1 9PB",
          "country": "United Kingdom"
        },
        "items": [
          {
            "name": "Banner Design",
            "quantity": 1,
            "price": 156.00,
            "total": 156.00
          },
          {
            "name": "Email Design",
            "quantity": 2,
            "price": 200.00,
            "total": 400.00
          }
        ],
        "total": 556.00
      }
]

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState: [initialData],
    reducers: {
        addInvoice: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export const {addInvoice} = invoiceSlice.actions

export default invoiceSlice.reducer