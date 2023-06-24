import React, { useState, useEffect } from "react";
import axios from "axios";

// pass token
// create card, load preview

const NewCard = ({ token }) => {
  const [cardColor, setCardColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [font, setFont] = useState("");
  const [frontText, setFrontText] = useState("");

  const [headline, setHeadline] = useState("");
  const [textColor, setTextColor] = useState('')

  const baseURL = "https://cards-q6a8.onrender.com/";

  `${baseURL}api/cards`; // this is the endpoint for creating a new card

  // axios get request to get data for dropdowns. array of background colors, border, fonts.
  // axios post request on endpoint above. fronttext, backtext, headline.
  // axios get request for displaying preview of card.
  // create handles for submitting, picking dropdowns

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(
      `${baseURL}api/cards`,
      {
        background_color: cardColor,
        date_created: "",
        headline: headline,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }.then((res) => {
        setCardColor("");
      })
    );
  };

  const handleChange = (userInput, e) => {
    if (userInput === "cardColor") {
      setCardColor(e.target.value);
    }
    if (userInput === "headline") {
      setHeadline(e.target.value);
    }
    if (userInput === "font") {
      setFont(e.target.value);
    }
    if (userInput === "borderColor") {
      setBorderColor(e.target.value);
    }
    if (userInput === "textColor") {
        setTextColor(e.target.value);
    }
  };

  console.log(cardColor);
  console.log(font);

  return (
    // return a form
    // 3 drop downs, 3 character fields
    // Create Card button to submit/update database

    <>
      <div className="create-card">
        <div>
          <h1>Create a Card</h1>
          <div className="form-input">
            <form onSubmit={handleSubmit}>
              <label for="color-select">Background Color </label>
              <select
                id="color-select"
                onChange={(e) => handleChange("cardColor", e)}
              >
                <option value="">--Please choose a color--</option>
                <option value="pink">Pink</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
              </select>
            </form>
            <div className="form">
              <form>
                <label for="font-select">Font </label>
                <select
                  id="font-select"
                  onChange={(e) => handleChange("font", e)}
                >
                  <option value="">--Please choose a font--</option>
                  <option value="Serif">Serif</option>
                  <option value="Sans">Sans</option>
                  <option value="Times New Roman">Times New Roman</option>
                  <option value="Arial">Arial</option>
                  <option value="White">White</option>
                </select>
                <br></br>
              </form>
              <div className="form">
                <form>
                  <label for="borderColor-select"> Border</label>
                  <select
                    id="borderColor-select"
                    onChange={(e) => handleChange("borderColor", e)}
                  >
                    <option value="">--Please choose a color--</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="white">White</option>
                  </select>
                  </form>
                  <form>
                  <label for="borderColor-select"> Font Color</label>
                  <select
                    id="textColor-select"
                    onChange={(e) => handleChange("textColor", e)}
                  >
                    <option value="">--Please choose a color--</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="white">White</option>
                  </select>
                  <br></br>
                  <label for="headline">Headline </label>
              <input placeholder="Please enter a headline for your card."></input>
              <br></br>
                  <input type="submit"></input>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="create-card-preview"
          style={{ backgroundColor: cardColor, borderColor: borderColor }}
        >
          <div className="img">📷 {cardColor}</div>
          <h1 style={{ fontFamily: font, color : textColor }}>DEAR PERSON</h1>
          <p style={{ fontFamily: font, color : textColor }}>Hey what's going on</p>
          <p style={{ fontFamily: font, color : textColor }}>Created by: </p>
          <p style={{ fontFamily: font, color : textColor }}>Sent to:</p>
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
