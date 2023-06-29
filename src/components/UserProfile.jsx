import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import dayjs from "dayjs";


const UserProfile = ({ token, username }) => {
  const [profileInfo, setProfileInfo] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const [flippedCardId, setFlippedCardId] = useState(null);
  const baseURL = "https://cards-q6a8.onrender.com/";
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseURL}api/profile/${username}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setProfileInfo(res.data);
        // Not using This ^
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

  

  console.log(token);
  console.log(username);
  console.log(profileInfo);

  const handleClickFollowers = () => {
    navigate("/followers");
    console.log(handleClickFollowers);
  };
  const handleClickFriendList = () => {
    navigate("/friendlist");
  };

  const flipCard = (id) => {
    setFlippedCardId(id === flippedCardId ? null : id);
    console.log(`hi the card id is: ${id}`);
  };

  return (
    <>
      <div>
        <h1> {username}</h1>
        <FaUserCircle className="avatar-userprofile" />
        {/* <h3>Bio:{bio}</h3> */}
        <br></br>
        {/* < FollowButton /> */}
      </div>
      <div className="friend-links-container">
        <button
          onClick={() => handleClickFriendList()}
          className="following-btn"
        >
          PEOPLE USER FOLLOW
        </button>
        <button
          onClick={() => handleClickFollowers()}
          className="following-btn"
        >
          PEOPLE WHO FOLLOW USER
        </button>
      </div>
      <div className="container">
        {userCards.map((card) => (
          <ReactCardFlip
            key={card.id}
            flipDirection="horizontal"
            isFlipped={flippedCardId === card.id}
          >
            <div
              style={{
                backgroundColor: card.background_color,
                borderColor: card.border_color,
                color: card.font_color,
                borderStyle: card.border_decor,
              }}
              className="card"
              onClick={() => flipCard(card.id)}
            >
              <h1>{card.headline}</h1>
              <p>{card.front_text}</p>
              <p>Created by: {card.sent_by_user}</p>
              <p>Sent to: {card.sent_to_user}</p>
              {card.sent_by_user === username && (
                <>
                  <div>
                    <button onClick={() => handleEdit(card.id)}>Edit</button>
                    <br />
                    <button onClick={() => handleDelete(card.id)}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
            <div
              style={{
                backgroundColor: card.background_color,
                borderColor: card.border_color,
                color: card.font_color,
                borderStyle: card.border_decor,
              }}
              className="card"
              onClick={() => flipCard(card.id)}
            >
              <h2>{card.inner_text}</h2>
              <p>
                Card Creation Date:{" "}
                {dayjs(card.date_created).format("MM/DD/YYYY")}
              </p>
            </div>
          </ReactCardFlip>
        ))}
      </div>
    </>
  );
};

export default UserProfile;
