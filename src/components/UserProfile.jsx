
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const UserProfile = ({ token, username }) => {
  console.log(token);
  console.log(username);
  return (
    <>
      <div>
        <h1> {username}</h1>
        <FaUserCircle className="avatar-userprofile" />
        <br></br>
        <br></br>
        <button> FOLLOW </button>
        <br></br>
      </div>
      <div className="friend-links-container">
        <button className="following-btn">PEROPLE USER FOLLOW</button>
        <button className="following-btn">PEOPLE WHO FOLLOW USER</button>
      </div>
      <div className="userCardFeedcontainer">
        <h1>DISPLAY OF CARDS USER HAS MADE</h1>
        <h2>toggel between</h2>
        <h1>DISPLAY OF CARDS USER HAS RECEIVED</h1>
      </div>
    </>
  );
};

export default UserProfile;

