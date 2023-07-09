import React , {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  // State Variables 

  const [mode , setMode] = useState('light');
  const [text , setText] = useState('Enable Dark Mode');
  const [textColor , setTextColor] = useState('dark');
  const [alert , setAlert] = useState(null);

  // Function for alerts 

  const showAlert = (message) => {
    setAlert ({
      msg:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
 
  // Function to switch modes 

  const toggleClick = () => {
      if(mode === 'light'){
         setMode('dark');
         setText('Enable Light Mode');
         setTextColor('light');
         document.body.style.backgroundColor = "black";
         document.body.style.color = "white";
         showAlert("dark mode has been enabled");
      }
      else {
        setMode('light');
        setText('Enable Dark Mode');
        setTextColor('dark');
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Light mode has been enabled");
      }
  }
  
  return (
  <>
  {/* <Router> */}
  <Navbar title = "Textutils" aboutText = "About" mode={mode} toggleClick={toggleClick} text={text} showAlert={showAlert} />
  < Alert alert={alert}/>
   {/* <Routes> */}
   <Textform  color={textColor} showAlert={showAlert}/>
   {/* <Route  exact path="/" element={ <Textform  color={textColor} showAlert={showAlert}/>}/> */}
    {/* <Route color={textColor} exact path="/about" element={ <About/>}/> */}
   {/* </Routes>
   </Router> */}
  </>
  );
}

export default App;
