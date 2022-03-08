import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header_nav">
        <ul>
          <li>
            <Link to="/">BasicForm</Link>
          </li>
          <li>
            <Link to="ReduxForm">StateForm</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
