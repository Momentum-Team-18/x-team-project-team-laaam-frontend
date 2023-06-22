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

  console.log(cards);

  return (
    <>
      <div>
        <h1>Card Feed</h1>
        <div className="containter">
          <div className="card>">
            {cards.map((card) => (
              <ul>{card.headline}</ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFeed;
