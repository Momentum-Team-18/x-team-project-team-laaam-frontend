import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const Followers = ({ token }) => {
  const baseURL = "https://cards-q6a8.onrender.com/";
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}api/cards/received/`, {
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
          <ul className="card" key={follower.id}>
            <h1>{follower.id}</h1>
            <p>Followers: {follower.sent_to_user}</p>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Followers;
