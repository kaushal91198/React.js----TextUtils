
import "./App.css";

function App() {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtills</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

//If u create app from create raect app then whatever content in function will be rendered to browser
//Whatever wriiten in function is called as jsx in react
// we can write javascript also in this function in curly braces{} ex {logo}
// here class is classname bacause class is reserved keyword in javascript
// in label tag we can't use for because it is reserved
// class - className
// for - htmlFor (camelcase character)
// we can write only only one tag in function
// it will return only one tag see video at 11.20
//any tag which has no closing tag we have to write in reat app
// <img src="" alt="" > => <img src="" alt="" />
export default App;
