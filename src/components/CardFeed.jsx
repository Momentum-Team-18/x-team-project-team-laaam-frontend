import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import dayjs from "dayjs";

const CardFeed = ({ token, username }) => {
  const [cards, setCards] = useState([]);
  const [flippedCardId, setFlippedCardId] = useState(null);

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

  const flipCard = (id) => {
    setFlippedCardId(id === flippedCardId ? null : id);
    console.log(`hi the id is: ${id}`);
  };

  const handleEdit = (cardId) => {
    navigate(`/edit/${cardId}`);
  };

  const handleDelete = (cardId) => {
    navigate(`/delete/${cardId}`);
  };

  return (
    <>
      <div>
        <h1> Welcome {username}! Enjoy your time using Laaam Cards! </h1>
        <div className="container">
          {cards.map((card) => (
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
