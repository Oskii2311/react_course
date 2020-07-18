import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul className="navigationList">
      <li>
        <NavLink to="/about">about</NavLink>
      </li>
      <li>
        <NavLink to="/todolist">todolist</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
