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

    </>
  );
}

export default App;
