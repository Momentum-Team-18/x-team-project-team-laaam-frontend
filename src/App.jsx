import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <h1>Yo</h1>
      <Card />
      <h1>Login Page</h1>
    </>
  );
}

export default App;
