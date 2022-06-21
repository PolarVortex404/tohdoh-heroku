import React from "react";
import { AuthenticationButton } from "./buttons/authentication-button";
import { ProtectedRoute } from "./ProtectedRoute";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// const NavUnlisted = styled.ul`
//   text-decoration: none;
// `;

const NavBar = () => {
  const { isAuthenticated } = useAuth0();

  // const StyledLink = styled(Link)`
  // color: Blue;
  // text-decoration: none;
  // margin: 1rem;
  // position: relative;
  // `

  return (
    <nav className="navigation">
      <Link to="/">TohDoh</Link>
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
            <AuthenticationButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
