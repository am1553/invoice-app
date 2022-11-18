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

    // create an invoice
    const createInvoice = async (data) => {
        console.log(data)
        await addDoc(invoicesCollectionRef, {...data})
        getInvoices()
        console.log('sent')
    }

    // update invoice

    // delete invoice

    return(
        <InvoicesContext.Provider value={{all_invoices: allInvoices, create_invoice: createInvoice}}>
            {children}
        </InvoicesContext.Provider>
    )
}