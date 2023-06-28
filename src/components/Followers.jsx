import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

const Followers = ({ token }) => {
  const baseURL = "https://cards-q6a8.onrender.com/";
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}api/user_followers/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setFollowers(res.data);
      });
  }, [token]);


  return (
    <>
      <div className="followers">
        {followers.map((follower) => (
          <ul className="follow-card" key={follower.id}>
            <FaUserCircle className="avatar-userprofile-follow" />
            <h1>{follower.this_user}</h1>
            <button className="follow-unfollow-btn">Remove</button>
            {/* Delete in button */}
          </ul>
        ))}
      </div>
    </>
  );
};

export default Followers;
