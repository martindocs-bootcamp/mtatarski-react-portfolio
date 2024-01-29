import Logo from './Logo';
import { NavLink } from "react-router-dom";

const Navigation = () => {

  // Render the navigation bar
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        {/* Logo brand */}
        <NavLink 
          to="/"
          className="navbar-brand" 
          aria-current="page"
        ><Logo /></NavLink>
        
        {/* Navbar toggler button for responsive design */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">             
              <NavLink 
                to="/" 
                className="nav-link" 
                aria-current="page"
              >Home</NavLink>
            </li>
            <li className="nav-item">           
              <NavLink 
                to="projects"
                className="nav-link" 
                aria-current="page"
              >Projects</NavLink>
            </li>          
            <li className="nav-item">              
              <NavLink 
                to="contact"
                className="nav-link"
                aria-current="page"
              >Contact</NavLink>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;