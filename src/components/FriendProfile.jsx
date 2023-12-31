import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import ReactCardFlip from "react-card-flip";
import dayjs from "dayjs";
import FollowButton from "./FollowButton";

const FriendProfile = ({ token, username }) => {
  const [profileInfo, setProfileInfo] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const [flippedCardId, setFlippedCardId] = useState(null);
  const { userId } = useParams();
  const navigate = useNavigate();
  const [clickedUserName, setClickedUserName] = useState([]);

  const baseURL = "https://cards-q6a8.onrender.com/";

  useEffect(() => {
    axios
      .get(`${baseURL}api/profile/${userId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setProfileInfo(res.data);
        setUserCards(res.data.cards_sent);
        setClickedUserName(res.data.username);
        console.log("axios request");
      });
  }, [token]);

  console.log(clickedUserName);

  console.log(`We are looking at ${profileInfo.username} cards`);
  console.log(userCards);

  const flipCard = (id) => {
    setFlippedCardId(id === flippedCardId ? null : id);
    console.log(`hi this users card has an id of: ${id}`);
  };

  const handleClickFollowers = () => {
    navigate("/followers");
    console.log(handleClickFollowers);
  };
  const handleClickFriendList = () => {
    navigate("/friendlist");
  };

  return (
    <>
      <div>
        <h1> {profileInfo.username}</h1>
        <FaUserCircle className="avatar-userprofile" />
        <br></br>
        <br></br>
        <FollowButton token={token} clickedUserName={clickedUserName}/>
        <br></br>
      </div>
      <div className="friend-links-container">
        <button
          onClick={() => handleClickFriendList()}
          className="following-btn"
        >
          PEROPLE USER FOLLOW
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
              <div>
                <button onClick={() => handleUserProfile(card.sent_by_user)}>
                  Created by: {card.sent_by_user}
                </button>
              </div>
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

export default FriendProfile;
