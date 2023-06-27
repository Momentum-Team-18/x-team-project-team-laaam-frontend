import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// to get a token
// form to make username and password

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "https://cards-q6a8.onrender.com/";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    axios
      .post(`${baseURL}auth/token/login`, {
        // toLowerCase used for better UX, user can enter username anyway
        // left needs to match with database keypair
        username: username.toLowerCase(),
        password: password,
      })
      .then((res) => {
        const token = res.data.auth_token;
        setUser(token, username);
      });
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Username: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={username}
              // as the value in input changes, it's setting the value to setUserName
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input type="submit" value="Log In" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
