import React from "react";
import { NavLink } from "react-dom";

const NavBar = () => {
  return (
    <NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Card Feed
      </NavLink>
      <NavLink
        to="/newcard"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        New Card
      </NavLink>
    </NavLink>
  );
};
export default NavBar;
