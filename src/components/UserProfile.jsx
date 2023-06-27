// GET USER NAME --> user id --- so it shows up in URL  /ID (USERNAME?)

/* ON THIS PAGE WE WANT TO DISPLAY :
  - PUBIC USER INFO 
            -USER NAME 
            -AVATAR 
   - CARDS USER HAS MADE 
   - CARDS USER HAS RECEIVED???   --- IS THAT GONNA SHOW UP IN THE SAME FEED OR 
                                     DO WE WANT TO TOGGLE BETWEEN SET AND RECEIVED MAPS/FEEDS IN USER VIEW
            

            */



import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";




const UserProfile = () => {

// const [userProfile, setUserProfile] = ("");
//   const baseURL = "https://cards-q6a8.onrender.com/";

//   useEffect(() => {
//     axios
//       .get(`${baseURL}api/profile/<int:pk>/`, {
//         headers: {
//           Authorization: `Token ${token}`,
//         },
//       })
//       .then((res) => {
//         setCards(res.data);
//       });
//   }, [token]);
  
return (
<>
        <div>
        <h1> U S E R N A M E</h1>
        <FaUserCircle className="avatar-userprofile"/>
        <br></br>
        <br></br>
        <button> FOLLOW </button>
        <br></br>
        </div>
        <div className="friend-links-container">
            <button className="following-btn">PEROPLE USER FOLLOW</button>
            <button className="following-btn">PEOPLE WHO FOLLOW USER</button>
        </div>
        <div className="userCardFeedcontainer"> 
            <h1>DISPLAY OF CARDS USER HAS MADE</h1>
            <h2>toggel between</h2>
            <h1>DISPLAY OF CARDS USER HAS RECEIVED</h1>
        </div>
</>
        
    )}

export default UserProfile