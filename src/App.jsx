import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import CardFeed from "./components/CardFeed";
import NewCard from "./components/NewCard";
import NewUser from "./components/NewUser";
import UserProfile from "./components/UserProfile";
import FriendList from "./components/FriendList";
import FriendProfile from "./components/FriendProfile";
import CardEdit from "./components/CardEdit";
import Followers from "./components/Followers";
import DeleteCard from "./components/DeleteCard";

function App() {
  const [token, setToken] = useLocalStorageState("reactCardsToken", "");
  const [username, setUsername] = useLocalStorageState("cardUserName", "");

  const setUser = (token, username) => {
    setToken(token);
    setUsername(username);
  };

  console.log(token);
  console.log(username);

  const handleLogout = () => {
    axios
      .post(
        "https://cards-q6a8.onrender.com/auth/token/logout/",
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() => {
        setUser("", null);
        navigate("/");
      });
  };

  return (
    <>
      <NavBar />

      {token ? (
        <>
          <Routes>
            <Route
              path="/"
              element={<CardFeed token={token} username={username} />}
            />
            <Route
              path="/newcard"
              element={<NewCard token={token} username={username} />}
            />
            <Route
              path="/userprofile"
              element={<UserProfile token={token} username={username} />}
            />
            <Route path="/followers" element={<Followers token={token} />} />
            <Route path="/friendlist" element={<FriendList token={token} />} />
            <Route
              path="/friendprofile/:userId"
              element={<FriendProfile token={token} />}
            />
            <Route
              path="/userprofile"
              element={<UserProfile token={token} username={username} />}
            />
            <Route
              path="/edit/:cardId"
              element={<CardEdit token={token} username={username} />}
            />
            <Route
              path="/delete/:cardId"
              element={<DeleteCard token={token} username={username} />}
            />
          </Routes>
          <footer>
            <button onClick={handleLogout}>Log Out</button>
          </footer>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<NewUser setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </>
      )}
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
