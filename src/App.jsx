import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import CardFeed from "./components/CardFeed";
import NewCard from "./components/NewCard";
import Card from "./components/Card"

function App() {
  const [token, setToken] = useState("");


  if (!token) {
    return <Login setToken={setToken} />;
  }

  console.log(token);

  return (
    <BrowserRouter>
    <nav>our nav bar</nav>
    {/* ERROR SAYING YOU CAN NOT HAVE A ROUTE IN ROUTE?? */}
      <Routes>
        <Route path="/" element={<CardFeed token={token} />}>
            <Route path="cardfeed/cardID" element={<Card />} />
            {/* <Route path="login" element={<Login ></Login>} /> */}
            <Route path="/newcard" element={<NewCard />} />
            <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer> our footer </footer>
    </BrowserRouter>
  );
}

export default App;

// QUESTION ABOUT PASSING TOKEN WITH ROUTER/ AUTHENTICATION 