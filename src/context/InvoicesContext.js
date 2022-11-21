import { createContext, useEffect, useState } from 'react'
import { collection, getDocs, getDoc, addDoc, setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useParams } from 'react-router-dom'

export const InvoicesContext = createContext()

export const InvoicesProvider = ({children}) => {

    const invoicesCollectionRef = collection(db, "invoices")
    const [allInvoices, setAllInvoices] = useState([])
    const [invoice, setInvoice] = useState(null)

    // get all invoices
    const getInvoices = async () => {
        const data = await getDocs(invoicesCollectionRef)
        setAllInvoices(data.docs.map(doc => ({...doc.data(), collection_id: doc.id})))
    }
    useEffect(() => {
        getInvoices()
    }, [])

    // get single invoice

    const getInvoice = (collection_id) => {
        return allInvoices.filter(invoice => invoice.collection_id === collection_id)
    }


    // create an invoice
    const createInvoice = async (data) => {
        await addDoc(invoicesCollectionRef, {...data})
        getInvoices()
    }

    // update invoice
    const updateInvoice = () => {

    }

    // delete invoice

    return(
        <InvoicesContext.Provider value={{all_invoices: allInvoices, create_invoice: createInvoice, get_invoice: getInvoice}}>
            {children}
        </InvoicesContext.Provider>
    )
}