import React from "react";
import { AuthenticationButton } from "./buttons/authentication-button";
import { ProtectedRoute } from "./ProtectedRoute";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="navigation">
      <a href="/" className="tohdoh">
        TohDoh
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/Settings">Profile</Link>
            </li>
          )}
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
