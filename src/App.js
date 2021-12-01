import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "2px solid white",
  });


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };


  //Removing the theme
  const removeTheme = ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }
  // adding classes of theme
  const theme = (cls) => {
    removeTheme()
    document.body.classList.add("bg-" + cls);
  };


  const toggleMode = () => {
    removeTheme()
    if (mode === "dark") {
      //Home
      setMode("light");
      document.body.style.backgroundColor = "white";

      //alert
      showAlert("Light mode has been enabled.", "Success");

      //title
      document.title = "Textutils";

      //about page
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    } else {
      //Home
      setMode("dark");
      document.body.style.backgroundColor = "#042743";

      //Alert
      showAlert("Dark mode has been enabled.", "Success");

      //title
      //if we we want to change the title dynamically
      document.title = "Textutils - Darkmode";

      //About
      setStyle({
        color: "white",
        backgroundColor: "#042743",
      });
      // see video(15) at 8.32
      /*
      setInterval(()=>{
      document.title = 'Textutils - Darkmode'
      },2000)
      setInterval(()=>{
      document.title = 'Textutils is amazing.'
      },1500)
      */
    }
  };

  

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutUs="About us"
          mode={mode}
          toggleMode={toggleMode}
          theme={theme}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="TextUtils - Word counter, Character counter, Remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={<About style={style} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

//If u create app from create raect app then whatever content in function will be rendered to browser
//Whatever wriiten in function is called as jsx in react
// we can write javascript also in this function in curly braces{} ex {logo}
// here class is classname beacause class is reserved keyword in javascript
// in label tag we can't use for because it is reserved
// class - className
// for - htmlFor (camelcase character)
// we can write only only one tag in function
// it will return only one tag see video at 11.20
//any tag which has no closing tag we have to write in reat app
// <img src="" alt="" > => <img src="" alt="" />
export default App;
