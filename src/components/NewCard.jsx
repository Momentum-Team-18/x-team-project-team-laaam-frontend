import React, { useState } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";

// pass token
// create card, load preview

const NewCard = ({ token, username }) => {
  const [cardColor, setCardColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [font, setFont] = useState("");
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [headline, setHeadline] = useState("");
  const [textColor, setTextColor] = useState("");
  const [borderStyle, setBorderStyle] = useState("");
  const [sentToUser, setSentToUser] = useState("");

  const baseURL = "https://cards-q6a8.onrender.com/";

  `${baseURL}api/cards`; // this is the endpoint for creating a new card

  // axios get request to get data for dropdowns. array of background colors, border, fonts.
  // axios post request on endpoint above. fronttext, backtext, headline.
  // axios get request for displaying preview of card.
  // create handles for submitting, picking dropdowns

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${baseURL}api/cards/`,
        {
          background_color: cardColor,
          headline: headline,
          border_color: borderColor,
          font_color: textColor,
          border_decor: borderStyle,
          front_text: frontText,
          inner_text: backText,
          sent_by_user: username,
          sent_to_user: sentToUser,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setCardColor("");
        setHeadline("");
        setFont("");
        setBorderColor("");
        setTextColor("");
        setFrontText("");
        setBackText("");
        setBorderStyle("");
        setSentToUser("");
      })
      .catch((error) => {
        console.error(error);
      });
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
    if (userInput === "frontText") {
      setFrontText(e.target.value);
    }
    if (userInput === "backText") {
      setBackText(e.target.value);
    }
    if (userInput === "borderStyle") {
      setBorderStyle(e.target.value);
    }
    if (userInput === "sentToUser") {
      setSentToUser(e.target.value);
    }
  };

  return (
    // return a form
    // 3 drop downs, 3 character fields
    // Create Card button to submit/update database

    <>
      <div className="create-card">
        <div>
          <h1>Create a Card</h1>

          <div className="form">
            <form className="form" onSubmit={handleSubmit}>
              <label for="color-select">Background Color </label>
              <select
                id="color-select"
                onChange={(e) => handleChange("cardColor", e)}
              >
                <option value="">--Please choose a color--</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Purple">Purple</option>
              </select>
              <label for="borderColor-select">Border Color</label>
              <select
                id="borderColor-select"
                onChange={(e) => handleChange("borderColor", e)}
              >
                <option value="">--Please choose a color--</option>
                <option value="Blue">Blue</option>
                <option value="Yellow">Yellow</option>

                <option value="Purple">Purple</option>

              </select>
              <br></br>

              <label for="borderStyle-select">Border Style</label>
              <select
                id="borderColor-select"
                onChange={(e) => handleChange("borderStyle", e)}
              >
                <option value="">--Please choose a color--</option>
                <option value="Dotted">Dotted</option>
                <option value="Null">No Border</option>
                <option value="Solid">Solid</option>
              </select>

              <label for="font-select">Font </label>
              <select
                id="font-select"
                onChange={(e) => handleChange("font", e)}
              >
                <option value="">--Please choose a font--</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Arial">Arial</option>
              </select>
              <br></br>

              <label for="fontColor-select"> Font Color</label>
              <select
                id="textColor-select"
                onChange={(e) => handleChange("textColor", e)}
              >
                <option value="">--Please choose a color--</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Purple">Purple</option>
                <option value="Yellow">Yellow</option>
              </select>
              <br></br>
              <label for="headline">Headline </label>
              <input
                value={headline}
                type="text"
                id="headline"
                placeholder="Please enter a headline for your card."
                onChange={(e) => handleChange("headline", e)}
              ></input>
              <br></br>
              <label for="front-text">Front Card Text</label>
              <input
                value={frontText}
                type="text"
                id="front"
                placeholder="Please enter text for front of card."
                onChange={(e) => handleChange("frontText", e)}
              ></input>
              <br></br>
              <label for="back-text">Back Card Text</label>
              <input
                value={backText}
                type="text"
                id="inner"
                placeholder="Please enter text for back of card."
                onChange={(e) => handleChange("backText", e)}
              ></input>
              <br></br>
              <label for="card-image">Choose an image!</label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              ></input>
              <br></br>
              <label for="send-to-user">*Send this to: </label>
              <input
                value={sentToUser}
                type="text"
                id="sendto"
                placeholder="Please enter username."
                onChange={(e) => handleChange("sentToUser", e)}
              ></input>
              <br></br>
              <input type="submit"></input>
            </form>
          </div>
        </div>
      </div>
      <div className="create-card-preview-container">
        <div
          className="create-card-preview"
          style={{
            backgroundColor: cardColor,
            borderColor: borderColor,
            borderStyle: borderStyle,
            fontFamily: font,
            color: textColor,
          }}
        >
          <div className="img">📷 {cardColor}</div>
          <h1>{headline}</h1>
          <p>{frontText}</p>
        </div>
        <br></br>
        <div
          className="create-card-preview"
          style={{
            backgroundColor: cardColor,
            borderColor: borderColor,
            borderStyle: borderStyle,
            fontFamily: font,
            color: textColor,
          }}
        >
          <div className="img"></div>
          <p>{backText}</p>
          <p>Created by: {username}</p>
          <p>Sent to: {sentToUser}</p>
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
