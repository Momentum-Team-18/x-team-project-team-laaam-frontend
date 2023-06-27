import axios from "axios";
import { useState } from "react";

// to get a token
// form to make an account

const Registration = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "https://cards-q6a8.onrender.com/";

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}auth/users/`, {
        username: username,
        password: password,
      })
      .then((res) => {
        axios
          .post(`${baseURL}auth/token/login/`, {
            username: username,
            password: password,
          })
          .then((res) => {
            const token = res.data.auth_token;
            setUser(token, username);
            console.log(res.data);
            console.log("hi");
          });
      });
  };

  return (
    <>
      <h1>Welcome to LAAAM Cards</h1>
      <p>Please pick a username and password</p>
      <div>
        <form onSubmit={handleRegister}>
          <div>
            <label>
              <span>username: </span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div>
            <label>
              <span>password: </span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <p>--Make a decent password--</p>
          </div>
          <div>
            <button type="submit">Submit!</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
