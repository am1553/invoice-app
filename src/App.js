import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./layouts/Header";
import Home from "./pages/Home/Home";
import NewInvoice from "./pages/NewInvoice/NewInvoice";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'

function App() {
  const theme = useContext(ThemeContext)[0]

  const [invoices, setInvoices] = useState([])

  const invoicesCollectionRef = collection(db, "invoices")

  useEffect(() => {
    const getInvoices = async () => {
      const data = await getDocs(invoicesCollectionRef)
      setInvoices(data.docs.map(doc => ({...doc.data(), collection_id: doc.id})))
    }
    getInvoices()
  }, [])

  console.log(invoices)

  return (
      <div className={`App h-screen md:flex ${theme === "light" ? "bg-desaturated-white text-grey" : "bg-desaturated-black text-desaturated-grey"}`}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/new-invoice" exact element={<NewInvoice />}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
