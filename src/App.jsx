import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <h1>Login Page</h1>
    </>
  );
}

export default App;
