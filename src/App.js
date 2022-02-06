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

  const showalert = (message,type) => {
      setalert({
        msg : message,
        types : type
      })
      setTimeout(() => {
        setalert(null)
      }, 2000);
  }

  const removebdyclsses = () =>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-info');
  }

  const togglemode = (cls) => {
    
    removebdyclsses();
    if(cls === 'null'){if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#313436'
      showalert("Dark Mode Has Been Enabled","success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }}
    else{
      document.body.classList.add('bg-' + cls)
      showalert( cls +" theme Been Enabled",cls);
    }
  }
  return (
    <> 
    {/* <Router> */}
    <Navbar title = "Text Utils" aboutText = "About" mode={mode} togglemode={togglemode}/>
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
