import { useState } from "react";
import axios from "axios";

// to get a token
// form to make username and password

const Register = ({ setId }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "https://cards-q6a8.onrender.com/";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}auth/users/`, {
        username: username.toLowerCase(),
        password: password,
      })
      .then((res) => {
        setId(username, password);
      });
  };

  return (
    <>
      <h1>Welcome to LAAAM Cards</h1>
      <p>Please register a username and password</p>
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
          <input type="submit" value="Register" />
        </div>
      </form>
    </>
  );
};

export default Register;
