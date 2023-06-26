import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Login from "./components/Login";
import CardFeed from "./components/CardFeed";
import NewCard from "./components/NewCard";
import Register from "./components/Register";

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
