import React, { useEffect, useState } from "react";

const cardFeed = () => {
  const [cards, setCards] = useState([]);
  const apiURL = "";

  useEffect(() => {
    axios.get("apiURL").then((response) => setCards(response.data));
  });

  return <div>CARDFEED</div>;
};

export default cardFeed;
