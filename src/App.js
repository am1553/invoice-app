import { useContext, useState } from 'react';
import { DropDown } from './components/form/DropDown'
import { ThemeContext } from './context/ThemeContext';


function App() {

  const options = [
    {label: "Net 1 Day", value: 'Net 1 Day'},
    {label: "Net 7 Day", value: 'Net 7 Day'},
    {label: "Net 14 Day", value: 'Net 14 Day'},
    {label: "Net 30 Day", value: 'Net 30 Day'},
  ]

  const [selectedValue, setSelectedValue] = useState()

  const toggleTheme = useContext(ThemeContext)[1]




  return (
    <div className="App">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <DropDown options={options} defaultValue={options[2].value} onSelect={setSelectedValue}/>
    </div>
  );
}

export default App;
