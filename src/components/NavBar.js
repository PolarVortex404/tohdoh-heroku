import React from "react";

const NavBar = () => {
  return (
    <nav className="navigation">
      <a href="/" className="tohdoh">
        TohDoh
      </a>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/settings">Setting</a>
          </li>
          <li>
            <a href="/donations">Donations?</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar; 