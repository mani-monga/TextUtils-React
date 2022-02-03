import './App.css';
import React , { useState } from "react";
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const [theme, settheme] = useState(null);

  const showalert = (message,type) => {
      setalert({
        msg : message,
        types : type
      })
      setTimeout(() => {
        setalert(null)
      }, 2000);
  }


  const togglemode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#313436'
      showalert("Dark Mode Has Been Enabled","success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode Has Been Enabled","success");
    }
  }
  return (
    <> 
    {/* <Router> */}
    <Navbar title = "Text Utils" aboutText = "About" mode={mode} togglemode={togglemode} theme = {theme}/>
    {/* <Switch> */}
          {/* <Route exact path="/about"> */}
          {/* <About/> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showalert ={showalert} heading = "Your Text" mode={mode} togglemode={togglemode}/>  
          {/* </Route> */}
      {/* </Switch> */}
    
    <Alert alert = {alert}/>
    {/* </Router> */}
    </>
  );
}

export default App;
