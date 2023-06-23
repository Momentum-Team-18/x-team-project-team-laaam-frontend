import React, { useState, useEffect } from "react";
import axios from "axios";

// pass token
// create card, load preview

const NewCard = ({ token, card }) => {
  const [cardColor, setCardColor] = useState("");
  const [border, setBorder] = useState("");
  const [font, setFont] = useState("");
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [headline, setHeadline] = useState("");
  const [cardPreview, setCardPreview] = useState();

  const baseURL = "https://cards-q6a8.onrender.com/";

  `${baseURL}api/cards`; // this is the endpoint for creating a new card

  // axios get request to get data for dropdowns. array of background colors, border, fonts.
  // axios post request on endpoint above. fronttext, backtext, headline.
  // axios get request for displaying preview of card.
  // create handles for submitting, picking dropdowns

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post(
  //     `${baseURL}api/cards`,
  //     {
  //       background_color: backgroundColor,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //     }.then((res) => {
  //       setBackgroundColor("");
  //     })
  //   );
  // };

  // const handleDisplay = (e) => {
  //   e.preventDefault();
  //   axios.get(
  //     `${baseURL}api/cards`,
  //     {
  //       background_color: backgroundColor,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //     }.then((res) => {
  //       setBackgroundColor("");
  //     })
  //   );
  // };

  const handleChange = (userInput, e) => {
    if (userInput === "cardColor") {
      setCardColor(e.target.value);
    }
  };

  // changing color of display card
  // const [isPink, setIsPink] = useState(false);
  // const handelClickColor = () => {
  //   setIsPink(!isPink);
  // };
  // <option onClick={handelClickColor} className={isPink ? 'pink-background'}>Pink</option>
  console.log(cardColor);

  // const handleDisplay = (preview, e) => {
  //   if (preview === ""
  // }

  return (
    // return a form
    // 3 drop downs, 3 character fields
    // Create Card button to submit/update database

    // Best way to display our preview?

    <>
      <div className="create-card">
        <div>
          <h1>Create a Card</h1>
          {/* <form onSubmit={handleSubmit}> */}
          <form className="form">
            <label for="color-select">Background Color </label>
            <select
              id="color-select"
              onChange={(e) => handleChange("cardColor", e)}
            >
              <option value="">--Please choose an color--</option>
              <option value="Pink">Pink</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
            </select>
          </form>
        </div>
        <div className="form">
          <form>
            <label for="font-select">Font </label>
            <select id="font-select">
              <option value="">--Please choose an font--</option>
              <option value="Serif">Serif</option>
              <option value="Sans">Sans</option>
              <option value="Sans Serif">Sans Serif</option>
              <option value="Times New Roman">Times New Roman </option>
              <option value="Arel">Ariel</option>
            </select>
            <br></br>
            <input type="submit"></input>
          </form>
        </div>
      </div>

      <div className="create-card">
        <div className="card">
          <div className="img">📷 {cardColor}</div>
          <h1></h1>
          <p></p>
          <p></p>
          <p>Created by: </p>
          <p>Sent to:</p>
        </div>
      </div>
    </>
  );
};

export default NewCard;

// token

// personal cards
// friends cards
// all cards

// update database:
// create a card
// edit card
// delete card
// friend an account
// unfriend account

// personal profile
// user profile
// friends list

// login page
// logout page -- put in navbar -- post request (auth/token/logout)
// registration page
