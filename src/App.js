import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutUs="About us" />
      <div className="container my-3">
          <TextForm heading="Enter the text to analyse below"/>
        {/* <About/> */}
      </div>
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
