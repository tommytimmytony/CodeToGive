import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const PORT = 4000;


const Signup = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`http://localhost:${PORT}/signup/`, {
          username,
          password,
        })
        .then((res) => {
          console.log(res.data)
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "not exist") {
            navigate("/home", {state: { id: username } });
          }
        })
        .catch((e) => {
          alert("Incorrect details or Database is not connected, please check");
          console.log(e);
        });
    } catch {
      console.log(e);
    }
  };
  return (
    <div className="login-container">
      <div className="login">
        <h1>Signup</h1>
        <form>
          <input
            type="username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Username"
            name="username"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            name="password"
          />
          <input type="submit" onClick={submit} />
        </form>
        <br />
        <p>OR</p>
        <br />
        <Link to="/">Login Page</Link>
      </div>
    </div>
  );
};

export default Signup;
