import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const CardEdit = ({ token, username }) => {
  const { cardId } = useParams();
  const [headline, setHeadline] = useState("");
  const [cardColor, setCardColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [textColor, setTextColor] = useState("");
  const [borderStyle, setBorderStyle] = useState("");
  const [sentToUser, setSentToUser] = useState("");
  const navigate = useNavigate();

  console.log(cardId);

  // get request on this endpoint
  const URL = `https://cards-q6a8.onrender.com/api/cards/${cardId}/`;

  // take values from get request and plug into patch request
  useEffect(() => {
    axios
      .get(`${URL}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setHeadline(res.data.headline);
        setCardColor(res.data.background_color);
        setBorderColor(res.data.border_color);
        setTextColor(res.data.font_color);
        setFrontText(res.data.front_text);
        setBackText(res.data.inner_text);
        setBorderStyle(res.data.border_decor);
        setSentToUser(username);
      });
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(
        `${URL}`,
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
        setHeadline("");
        setCardColor("");
        setBorderColor("");
        setTextColor("");
        setFrontText("");
        setBackText("");
        setBorderStyle("");
        setSentToUser(username);
        navigate("/");
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
    <>
      <section className="section">
        <h2>Edit</h2>
      </section>
      <div>
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
              <option value="Green">Green</option>
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
            <select id="font-select" onChange={(e) => handleChange("font", e)}>
              <option value="">--Please choose a font--</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Arial">Arial</option>
            </select>
            <br></br>

            <label for="borderColor-select"> Font Color</label>
            <select
              id="textColor-select"
              onChange={(e) => handleChange("textColor", e)}
            >
              <option value="">--Please choose a color--</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Purple">Purple</option>
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
      <div className="create-card-preview-container">
        <div
          className="create-card-preview"
          style={{
            backgroundColor: cardColor,
            borderColor: borderColor,
            borderStyle: borderStyle,
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

export default CardEdit;

//
