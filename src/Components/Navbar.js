import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


export default function Navbar(props) {

  // Functions to change the themes 

  const themeSecondary = ()=>{
    document.body.style.backgroundColor = "#6c757d" ;
    props.showAlert("Theme has been enabled");
  }

  const themeSuccess = ()=>{
    document.body.style.backgroundColor = "#198754" ;
    props.showAlert("Theme has been enabled");
  }

  const themeDanger = ()=>{
    document.body.style.backgroundColor = "#dc3545" ;
    props.showAlert("Theme has been enabled");
  }

  const themeWarning = ()=>{
    document.body.style.backgroundColor = "#ffc107" ;
    props.showAlert("Theme has been enabled");
  }

  const themeInfo = ()=>{
    document.body.style.backgroundColor = "#0dcaf0" ;
    props.showAlert("Theme has been enabled");
  }

  
  return (
    <>
    <nav className= {`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">{props.aboutText}</Link>
        </li> */}
      </ul>
      <div className='d-flex mx-5'>
      <button type="button" onClick={themeSecondary} className="btn btn-secondary mx-2"style={{height:"30px",width:"30px",borderRadius:"50%"}}></button>
      <button type="button" onClick={themeSuccess} className="btn btn-success mx-2"style={{height:"30px",width:"30px",borderRadius:"50%"}}></button>
      <button type="button" onClick={themeDanger} className="btn btn-danger mx-2"style={{height:"30px",width:"30px",borderRadius:"50%"}}></button>
      <button type="button" onClick={themeWarning} className="btn btn-warning mx-2"style={{height:"30px",width:"30px",borderRadius:"50%"}}></button>
      <button type="button" onClick={themeInfo} className="btn btn-info mx-2"style={{height:"30px",width:"30px",borderRadius:"50%"}}></button>

      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleClick} />
        <label className={`form-check-label text-${props.mode === "light" ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.text}</label>
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

// Proptypes 

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// Default Props 

Navbar.defaultProps = {
    title : "Textutils" ,
    aboutText : "About" 
}
