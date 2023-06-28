import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

// GET REQUEST - USER INFO  - USER end point
// USER CARD FEED
// DELETE CARD FROM ARRAY
//

// put in right url and token
// write a useEffect , make the get request, state variables , resposne setState

// grab sent_by_user value from CardFeed
// pass it to UserProfile
// get request
//
const UserProfile = ({ token, username }) => {
  const [profileInfo, setProfileInfo] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const baseURL = "https://cards-q6a8.onrender.com/";

  useEffect(() => {
    axios
      .get(`${baseURL}api/profile/${username}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setProfileInfo(res.data);
        console.log("1st axios get request");
      });
  }, [token, username]);

  useEffect(() => {
    axios
      .get(`${baseURL}api/cards/sent`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setUserCards(res.data);
        console.log("2nd axios get request");
      });
  }, [token]);

  // }]

  console.log(token);
  console.log(username);
  console.log(profileInfo);
  return (
    <>
      <div>
        <h1> {username}</h1>
        <FaUserCircle className="avatar-userprofile" />
        {/* <h3>Bio:{bio}</h3> */}
        <br></br>
        <button> FOLLOW </button>
        <br></br>
      </div>
      <div className="friend-links-container">
        <button className="following-btn">PEOPLE USER FOLLOW</button>
        <button className="following-btn">PEOPLE WHO FOLLOW USER</button>
      </div>
      <div className="userCardFeedcontainer">
        {userCards.map((card) => (
          <ul
            style={{
              backgroundColor: card.background_color,
              borderColor: card.border_color,
              color: card.font_color,
              borderStyle: card.border_decor,
            }}
            className="card"
            key={card.id}
          >
            <div className="img">📷</div>
            <h1>{card.headline}</h1>
            <p>{card.front_text}</p>
            <p>{card.date_created}</p>
            <a href="#">Created by: {card.sent_by_user}</a>
            <p>Sent to: {card.sent_to_user}</p>
          </ul>
        ))}
      </div>
    </>
  );
};

export default UserProfile;
