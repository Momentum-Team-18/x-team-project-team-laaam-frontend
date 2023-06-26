import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import {NavBar} from '/components/NavBar'

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
      {/* <NavBar /> */}
      <div>
        <h2>
          <Link to="/newcard" className="button" onClick={() => console.log("CLICK! - NEWCARD")}>
            Create New Card
          </Link>
          <br></br>
          <Link to="/test" className="button" onClick={() => console.log("CLICK! - TEST")}>
            Test
          </Link>
        </h2>
      </div>

      <div>
        <h1>Card Feed!!</h1>
        <div className="container">
          <div>
            <Link to="./cardfeed/cardID">
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFeed;
