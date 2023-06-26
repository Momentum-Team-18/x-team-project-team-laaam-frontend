import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import CardFeed from "./components/CardFeed";
import NewCard from "./components/NewCard";
import Register from "./components/Register";
// import Card from "./components/Card";
import Test from "./components/Test";




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
      <nav>our nav bar</nav>
      {/* ERROR SAYING YOU CAN NOT HAVE A ROUTE IN ROUTE?? */}
      <Routes>
        <Route path="/" element={<CardFeed token={token} />} />
        <Route path="/cardfeed" element={<CardFeed token={token}/>} />
        {/* <Route path="login" element={<Login ></Login>} /> */}
        <Route path="/newcard" element={<NewCard token={token} />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer> our footer </footer>
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
