import React from "react";
import { ReactComponent as Logo } from "../../logo.svg";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
