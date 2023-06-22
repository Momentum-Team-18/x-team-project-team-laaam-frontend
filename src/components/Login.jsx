import { useState } from "react";
import axios from "axios";

// to get a token
// form to make username and password

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "https://cards-q6a8.onrender.com/";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}auth/token/login`, {
        // toLowerCase used for better UX, user can enter username anyway
        username: username.toLowerCase(),
        password: password,
      })
      .then((res) => setToken(res.data.auth_token));
    console.log("hi i'm getting a token");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username</label>
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
          <label htmlFor="password">Password</label>
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
    </>
  );
};

export default Login;