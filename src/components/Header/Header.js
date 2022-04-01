import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-5">
      <nav>
        <ul className="flex gap-5 justify-center">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
