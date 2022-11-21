import { useContext} from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./layouts/Header";
import Home from "./pages/Home/Home";
import NewInvoice from "./pages/NewInvoice/NewInvoice";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { InvoicesProvider } from "./context/InvoicesContext";
import ViewInvoice from "./pages/ViewInvoice/ViewInvoice";
import EditInvoice from "./pages/EditInvoice/EditInvoice";

function App() {
  const theme = useContext(ThemeContext)[0]

  return (
    <InvoicesProvider>
        <div className={`App md:h-screen md:overflow-hidden md:flex ${theme === "light" ? "bg-desaturated-white text-grey" : "bg-desaturated-black text-desaturated-grey"}`}>
          <Router>
            <Header />
              <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/new-invoice" exact element={<NewInvoice />}/>
                <Route path="/invoice/:collection_id" element={<ViewInvoice />}/>
                <Route path="/invoice/:collection_id/edit" element={<EditInvoice />}/>
              </Routes>
          </Router>
        </div>
      </InvoicesProvider>
  );
}

export default App;
