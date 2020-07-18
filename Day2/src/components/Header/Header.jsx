import React from "react";
import Title from "../Title/Title";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = () => (
  <header className="header">
    <Title />
    <Navigation />
  </header>
);

export default Header;
