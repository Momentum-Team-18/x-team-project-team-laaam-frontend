import React from "react";
import { NavLink } from "react-dom";

const NavBar = () => {
  return (
    // IF I USE NAVLINK HERE DO I HAVE TO DO IT EVERYWHERE ELSE ?
    // WHAT DO I IMPORT INTO OTHER PAGES TO ACCESS THIS INFORMATION?
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
