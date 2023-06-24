import React, { useState, useEffect } from "react";
import axios from "axios";

const CardFeed = ({ token }) => {
  const [cards, setCards] = useState([]);

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

  // console.log(cards);

  return (
    <>
      <div>
        <h1>Card Feed</h1>
        <div className="container">
          <div>
            {cards.map((card) => (
              <ul className="card" key={card.id}>
                <div className="img">📷</div>
                <h1>{card.headline}</h1>
                <p>{card.front_text}</p>
                <p>{card.back_text}</p>
                <p>Created by: {card.sent_by_user}</p>
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
