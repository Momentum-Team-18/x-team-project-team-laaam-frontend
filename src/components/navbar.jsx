import React, { useSate } from "react";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import { GiSheep } from "react-icons/gi";
import { RiAddCircleFill } from "react-icons/ri";
import { PiUserCircleGearFill } from "react-icons/pi";

const NavBar = ({ token }) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/UserProfile" onClick="userProfile">
            <RiAddCircleFill className="navbar-icon" />
            UserProfile
          </Link>
          <br></br>
          <Link to="/" onClick="cardFeed">
            <GiSheep className="navbar-icon" />
            Card Feed Link
          </Link>
          <br></br>
          <Link to="/NewCard" onClick="newCard">
            <PiUserCircleGearFill className="navbar-icon" />
            NewCard
          </Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
