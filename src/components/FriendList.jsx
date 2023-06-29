import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

const FriendList = ({ token }) => {
  const baseURL = "https://cards-q6a8.onrender.com/";
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}api/user_following/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setFollowers(res.data);
      });
  }, [token]);

  console.log(followers);

  //   useEffect(() => {
  //     axios
  //       .delete(`${baseURL}api/unfollow_user/${follower.id}`, {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       })
  //   }, [token]);

  return (
    <>
      <div className="followers">
        {followers.map((follower) => (
          <ul className="follow-card" key={follower.id}>
            <FaUserCircle className="avatar-userprofile-follow" />
            <h1>{follower.user_this_user_is_following}</h1>
            <button className="follow-unfollow-btn">Remove</button>
            {/* Delete in button */}
          </ul>
        ))}
      </div>
    </>
  );
};

export default FriendList;
