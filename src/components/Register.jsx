import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// to get a token
// form to make username and password

const Register = ({ setId }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const baseURL = "https://cards-q6a8.onrender.com/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    axios
      .post(`${baseURL}auth/users/`, {
        username: username.toLowerCase(),
        password: password,
      })
      .then((res) => {
        setId(username, password);
      })
      .catch((error) => {
        setError(error.message);
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
