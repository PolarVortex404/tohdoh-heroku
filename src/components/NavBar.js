import React from "react";
import { AuthenticationButton } from "./buttons/authentication-button";
import { ProtectedRoute } from "./ProtectedRoute"
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navigation">
      <a href="/" className="tohdoh">
        TohDoh
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
           <Link to='/Settings'>Profile</Link>
          </li>
          <li>
            <Link to="/Donations">Donations?</Link>
    
          </li>
          <li>
            <AuthenticationButton />
    
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar; 