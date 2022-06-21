import React from "react";
import { AuthenticationButton } from "./buttons/authentication-button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="navigation">
      <span className="navBarTohDoh">
        <Link to="/">TohDoh</Link>
      </span>
      <div className="navigation-menu">
        <ul>
          <li className="navbarLinks">
            <Link to="/">Home</Link>
          </li>
          <li className="navbarLinks">
            <Link to="/about">About</Link>
          </li>
          {isAuthenticated && (
            <li className="navbarLinks">
              <Link to="/Settings">Profile</Link>
            </li>
          )}
          <li>
            <AuthenticationButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
