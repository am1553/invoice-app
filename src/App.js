import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./layouts/Header";
import Home from "./pages/Home/Home";


function App() {
  const theme = useContext(ThemeContext)[0]
  
  return (
    <div className={`App h-screen overflow-hidden ${theme === "light" ? "bg-desaturated-white text-black" : "bg-desaturated-black text-white"}`}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
