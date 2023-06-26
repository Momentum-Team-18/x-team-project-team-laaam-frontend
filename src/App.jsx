import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import CardFeed from "./components/CardFeed";
import NewCard from "./components/NewCard";

function App() {
  const [token, setToken] = useState("");

  if (!token) {
    return <Login setToken={setToken} />;
  }

  console.log(token);

  return (
    <>
      <NewCard token={token} />

      <CardFeed token={token} />
    </>
  );
}

export default App;

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
