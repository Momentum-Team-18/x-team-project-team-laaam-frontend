import React, { useState, useEffect } from "react";
import axios from "axios";

const CardFeed = ({ token }) => {
  const [cards, setCards] = useState([]);
  const [userProfile, setUserProfile] = ("");
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

//    useEffect(() => {
//     axios 
//         .get(`${baseURL}api/profile/${userID}`)
//             headers: {
//                 Authorization: `Token ${token}`,
//             },
//         });
//         .then((res) => {
//             setUserProfile(response.data.id);
//         })
//    }), [token, userID]);


  // console.log(cards);

  const handleUserProfileId = (id) => {
    setUserProfile(id);
    console.log("Hi- Im getting User ID");
  };

  return (
    <>
      <div>
        <h1>Card Feed!!</h1>
        <div className="container">
          <div>
            {cards.map((card,user) => (
              <ul
                style={{
                  backgroundColor: card.background_color,
                  borderColor: card.border_color,
                  color: card.font_color,
                }}
                className="card"
                key={card.id}
              >
                <div className="img">📷</div>
                <h1>{card.headline}</h1>
                <p>{card.front_text}</p>
                <p>{card.date_created}</p>
                {/* <Link to="/userprofile" onClick={handleClickUserProfileId}></Link> */}
                {/* <button onClick={() => handleUserProfileId({card.sent_by_user})}>
                  Created by:{card.sent_by_user}
                </button> */}
                <br></br>
                <button>Sent to: {card.sent_to_user}</button>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFeed;

