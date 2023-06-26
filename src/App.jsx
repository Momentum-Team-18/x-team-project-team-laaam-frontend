import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import CardFeed from "./components/CardFeed";
import NewCard from "./components/NewCard";
// import Card from "./components/Card";
import Test from "./components/Test";
import useLocalStorageState from 'use-local-storage-state'



function App() {
  const [token, setToken] = useLocalStorageState("laaamToken", "");

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
