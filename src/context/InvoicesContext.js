import { createContext, useEffect, useState } from 'react'
import { collection, getDocs, getDoc, addDoc, setDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

export const InvoicesContext = createContext()

export const InvoicesProvider = ({children}) => {

    const invoicesCollectionRef = collection(db, "invoices")
    const [allInvoices, setAllInvoices] = useState([])

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

    const deleteInvoice = async (collection_id) => {
        const invoiceDoc = doc(db, "invoices", collection_id)
        await deleteDoc(invoiceDoc)
    }

    return(
        <InvoicesContext.Provider 
            value={
                {
                    all_invoices: allInvoices, 
                    create_invoice: createInvoice, 
                    get_invoice: getInvoice,
                    get_invoices: getInvoices,
                    delete_invoice: deleteInvoice
                }
            }
        >
            {children}
        </InvoicesContext.Provider>
    )
}