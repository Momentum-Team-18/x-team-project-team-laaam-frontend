import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import CardFeed from "./components/CardFeed";

function App() {
  const [token, setToken] = useState("");

  if (!token) {
    return <Login setToken={setToken} />;
  }

  console.log(token);

  return (
    <>
      <CardFeed token={token} />
    </>
  );
}

export default App;
