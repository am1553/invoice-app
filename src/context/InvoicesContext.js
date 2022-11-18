import { createContext, useEffect, useState } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export const InvoicesContext = createContext()

export const InvoicesProvider = ({children}) => {

    const invoicesCollectionRef = collection(db, "invoices")


    // get all invoices

    const [allInvoices, setAllInvoices] = useState([])
    const getInvoices = async () => {
        const data = await getDocs(invoicesCollectionRef)
        setAllInvoices(data.docs.map(doc => ({...doc.data(), collection_id: doc.id})))
    }
    useEffect(() => {
        getInvoices()
    }, [])

    // get single invoice

    const getInvoice = (id) => {
        return allInvoices.filter(invoice => invoice.id === id)
    }

    // create an invoice
    const createInvoice = async (data) => {
        await addDoc(invoicesCollectionRef, {...data})
        getInvoices()
    }

    // update invoice

    // delete invoice

    return(
        <InvoicesContext.Provider value={{all_invoices: allInvoices, create_invoice: createInvoice, get_invoice: getInvoice}}>
            {children}
        </InvoicesContext.Provider>
    )
}