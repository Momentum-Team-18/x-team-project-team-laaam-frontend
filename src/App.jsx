import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import {Link} from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration";
import Login from "./components/Login";
import CardFeed from "./components/CardFeed";
import NewCard from "./components/NewCard";
import UserProfile from "./components/UserProfile";
import FriendList from "./components/FriendList";
import FriendProfile from "./components/FriendProfile.jsx";
import { GiSheep } from "react-icons/gi";
import { RiAddCircleFill } from "react-icons/ri";
import { PiUserCircleGearFill } from "react-icons/pi";
// import NavBar from "./components/NavBar";




function App() {
  // const [token, setToken] = useState("");
  const [token, setToken] = useLocalStorageState("reactCardsToken", "");

  const [id, setId] = useState("");

  // if (!token) {
  //   return <Register setId={setId} />;
  // } else {
  //   return <Login setToken={setToken} />;
  // }

  if (!token) {
    return <Login setToken={setToken} />;
  }

  console.log(token);

  return (
    <>
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/userprofile">
            <RiAddCircleFill className="navbar-icon" />
            UserProfile
          </Link>
          <br></br>
          <Link to="/" onClick="cardFeed">
            <GiSheep className="navbar-icon" />
            Card Feed Link
          </Link>
          <br></br>
          <Link to="/newcard" onClick="newCard">
            <PiUserCircleGearFill className="navbar-icon" />
            NewCard
          </Link>
        </div>
      </nav>
      </div>
  
      
      <Routes>
        <Route path="/registration" element={<Registration />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/userprofile" element={UserProfile} />
        <Route path="/" element={<CardFeed token={token} />} />
        <Route path="/cardfeed" element={<CardFeed token={token}/>} />
        <Route path="/newcard" element={<NewCard token={token} />} />
        <Route path="/friendlist" element={FriendList} />
        <Route path="/friendprofile" element={FriendProfile} />
        <Route path="*" element={<Error />} />
      </Routes>

      <footer> footer </footer>
    </>
  );
}

export default App;

// QUESTION ABOUT PASSING TOKEN WITH ROUTER/ AUTHENTICATION

// NavBar
// shows no matter if there is a token or not.
// 2 main roles
// - Login
// - Register

// SideBar
// - Create a card
// - All cards feed
// - Your card feed
// - Friends card feed

// Main Container
// -Display selected feed from sidebar.
// -Display create a card interface
