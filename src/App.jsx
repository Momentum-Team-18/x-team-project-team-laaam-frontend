import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import CardFeed from "./components/CardFeed";
import NewCard from "./components/NewCard";
import Card from "./components/Card"

function App() {
  const [token, setToken] = useState("");
  const [user,setUser]= useState(null)

  if (!token) {
    return <Login setToken={setToken} />;
  }

  console.log(token);

  return (
    <BrowserRouter>
    <nav>our nav bar</nav>
      <Routes>
        <Route path="/" element={<CardFeed />}>
            <Route path="cardfeed/cardID" element={<Card />} />
            <Route path="login" element={<Login setUser={setUser}></Login>} />
            <Route path="newcard" element={<NewCard />} />
            <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer> our footer </footer>
    </BrowserRouter>
  );
}

export default App;
