import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <header className="py-5">
      <nav>
        <ul className="flex gap-5 justify-center">
          <li>
            <CustomLink to="/home">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/grandpa">Grandpa</CustomLink>
          </li>
          <li>
            <CustomLink to="/blog">Blog</CustomLink>
          </li>
          <li>
            <CustomLink to="/login">Log in</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
