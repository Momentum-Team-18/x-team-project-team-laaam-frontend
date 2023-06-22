import { useState, useEffect } from "react";
import axios from "axios";

const CardFeed = ({ token }) => {
  const [cards, setCards] = useState("");

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
      </div>
    </>
  );
};

export default CardFeed;
