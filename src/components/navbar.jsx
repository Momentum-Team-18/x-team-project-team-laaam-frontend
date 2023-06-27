import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiSheep } from "react-icons/gi";
import { RiAddCircleFill } from "react-icons/ri";
import {FaUserCircle} from "react-icons/fa";

const NavBar = ({ token }) => {
    const handleClickUserProfile = () => {}
    const handleClickCardFeed = () => {}
    const handleClickNewCard= () => {}


  return (
    <>
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/userprofile" onClick={handleClickUserProfile}>
           <FaUserCircle className="navbar-icon" />
            
          </Link>
          <br></br>
          <Link to="/" onClick={handleClickCardFeed}>
            <GiSheep className="navbar-icon" />
           
          </Link>
          <br></br>
          <Link to="/newcard" onClick={handleClickNewCard}>
            <RiAddCircleFill className="navbar-icon" />
          </Link>
        </div>
      </nav>
      </div>
    </>
  );
};
export default NavBar;
