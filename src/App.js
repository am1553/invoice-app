import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./layouts/Header";
import Home from "./pages/Home/Home";
import NewInvoice from "./pages/NewInvoice/NewInvoice";


function App() {
  const theme = useContext(ThemeContext)[0]
  
  return (
    <div className={`App min-h-screen md:flex ${theme === "light" ? "bg-desaturated-white text-grey" : "bg-desaturated-black text-desaturated-grey"}`}>
      <Header />
      <NewInvoice />
    </div>
  );
}

export default App;
