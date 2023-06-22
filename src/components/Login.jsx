import { useState } from "react";
import axios from "axios";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://cards-q6a8.onrender.com/";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}auth/token/login/`, {
        username: username.toLowerCase(),
        password: password,
      })
      .then((res) => setToken(res.data.auth_token));
    console.log(res.data.auth_token);
  };

  return (
    <>
      <form className="m-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            id="name"
            value={username}
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
