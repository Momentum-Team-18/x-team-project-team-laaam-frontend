import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import CardFeed from "./components/CardFeed";
import NewCard from "./components/NewCard";
import NewUser from "./components/NewUser";
import NavBar from "./components/navbar";
import UserProfile from "./components/UserProfile";
import FriendList from "./components/FriendList";
import FriendProfile from "./components/FriendProfile";

function App() {
  const [token, setToken] = useLocalStorageState("reactCardsToken", "");
  const [username, setUsername] = useLocalStorageState("cardUserName", "");

  const setUser = (token, username) => {
    setToken(token);
    setUsername(username);
  };

  console.log(token);
  console.log(username);

  return (
    <>
      {token ? (
        <>
          <nav>
            <NavBar />
          </nav>
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
            <Route path="/friendlist" element={FriendList} />
            <Route path="/friendprofile" element={FriendProfile} />
            <Route path="/userprofile" element={<UserProfile />} />
          </Routes>
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
