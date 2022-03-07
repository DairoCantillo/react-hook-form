import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav>
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
  );
};

export default Header;
