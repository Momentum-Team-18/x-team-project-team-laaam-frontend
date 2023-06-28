import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CardFeed = ({ token, username }) => {
  const [cards, setCards] = useState([]);
  const [profileName, setProfileName] = useState();
  const navigate = useNavigate();

  const baseURL = "https://cards-q6a8.onrender.com/";

  useEffect(() => {
    axios
      .get(`${baseURL}api/cards`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setCards(res.data);
      });
  }, [token]);

  console.log(cards);

  console.log(username);

  const handleUserName = (id) => {
    setProfileName(id);
    console.log("hi getting username");
  };

  const handleEdit = (cardId) => {
    navigate(`/edit/${cardId}`);
  };

  const handleDelete = (cardId) => {
    navigate(`/delete/${cardId}`);
    console.log(cardId);
  };

  return (
    <>
      <div>
        <h1>Card Feed!! Welcome {username} </h1>
        <div className="container">
          <div>
            {cards.map((card) => (
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
                {card.sent_by_user === username ? (
                  <>
                    <button onClick={() => handleEdit(card.id)}>Edit</button>
                    <button onClick={() => handleDelete(card.id)}>
                      Delete
                    </button>
                  </>
                ) : (
                  ""
                )}
                <h1>{card.headline}</h1>
                <p>{card.front_text}</p>
                <p>{card.date_created}</p>
                <button onClick={() => handleUserName(card.sent_by_user)}>
                  Created by: {card.sent_by_user}
                </button>
                <p>Sent to: {card.sent_to_user}</p>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFeed;

{
  /* <Link to="/cardedit">Edit Card</Link> */
}

// conditionals inside of card displaying the edit and delete buttons only appear if
// card.sent_by_user === username
