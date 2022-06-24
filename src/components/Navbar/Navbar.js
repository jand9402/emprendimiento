import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/logo.png"

function Navbar(){
return(
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link to="/">
    <a className="navbar-brand" href="#"><img className="logoNav" src={logo} alt="logo"/></a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon navbar-toggler-icon-nav"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="Links" to="/">
          <a className="nav-link active" aria-current="page">Home</a>
          </Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="Links" to="/marketplace">
          <a className="nav-link">Nosotros</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="Link" to="/login">
          <a className="nav-link active">Contacto</a>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Ver todos</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Landing page</a></li>
            <li><a className="dropdown-item" href="#">E-commerce</a></li>
            <li><a className="dropdown-item" href="#">Marketplace</a></li>
            <li><a className="dropdown-item" href="#">¿Que necesito?</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}

export default Navbar