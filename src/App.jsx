import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");

  if (!token) {
    return <Login setToken={setToken} />;
  }

  console.log(token);

  return (
    <>
      <h1>Feed of Cards</h1>
    </>
  );
}

export default App;
