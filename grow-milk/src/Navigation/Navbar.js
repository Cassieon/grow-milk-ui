import React from "react";
import '../CSS/Navbar.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


class Navbar extends React.Component {
  
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav1" id="nav">
  <Link to='/'><a className="navbar-brand" href="#home">Home</a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link to='/hook'><a className="nav-item nav-link" href="#hook">Products</a></Link>
      <a className="nav-item nav-link" href="#">Account</a>
      <a className="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
    )
  }
}
export default Navbar