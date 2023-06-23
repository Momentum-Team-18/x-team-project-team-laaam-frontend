import React, { useState, useEffect } from "react";
import axios from "axios";

// to get a token
// form to make username and password

const CreateCard = ({ token }) => {
  const [cards, setCards] = useState([]);
  const [background, setBackground] = useState("");
  const [border, setBorder] = useState("");
  const [font, setFont] = useState(null);

  const baseURL = "https://cards-q6a8.onrender.com/";

  //   useEffect(() => {
  //     axios
  //       .post(`${baseURL}api/cards`, {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         setCards(res.data);
  //       });
  //   }, [token]);

  //   console.log(cards);

  return (
    <>
      <div>
        <h1>Create a Card</h1>
      </div>
    </>
  );
};

export default CreateCard;
