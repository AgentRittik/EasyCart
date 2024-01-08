import React from 'react'
import { Link } from 'react-router-dom';
function Nabbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link  className="navbar-brand" to="#">Easy Cart</Link> 
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link  className="nav-link " aria-current="page" to="#">Home</Link> 
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="#">About</Link> 
              </li>
              <li className="nav-item dropdown">
                <Link  className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </Link> 
                <ul className="dropdown-menu">
                  <li><Link  className="dropdown-item" to="#">All</Link> </li>
                  <li><Link  className="dropdown-item" to="#">Another action</Link> </li>
                  <li><Link  className="dropdown-item" to="#">Something else here</Link> </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">Search <span>0</span></button>
            </form>
          </div>
        </div>
    </nav>
    </>
  )
}

export default Nabbar