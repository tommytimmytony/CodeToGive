import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/App.css"
const Login = () => {
    const navigate = useNavigate()
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const submit = async (e) => {
        e.preventDefault()
        // Don't Delete! MongoDb connection
        // try{
        //     await axios.post("http://localhost:4000/",{
        //         username, password
        //     }).then(res => {
        //         if (res.data == "exist"){
        //             navigate("/home", {state:{id:username}})
        //         } else if (res.data == "not exist"){
        //             alert("User have not sign up")
        //         }
        //     }).catch((e) => {
        //         alert("Either wrong details or DB is not connect please check")
        //         console.log(e)
        //     })
        // } catch{
        //     console.log(e)
        // }
        navigate("/home", {state: {id:username}})
    }
  return (
    <div className="login-container">
      <div className="login">
        <h1>Login</h1>
        <form action="POST">
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
        <Link to="/signup">Signup Page</Link>
      </div>
    </div>
  );
};

export default Login;
