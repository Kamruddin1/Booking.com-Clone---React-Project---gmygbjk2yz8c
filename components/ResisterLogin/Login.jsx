import React from "react";
import "./stylelogin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (input.email === "" || input.password === "") {
      setError("Please fill in both email and password fields.");
      return;
    }

    const logged = JSON.parse(localStorage.getItem("user"));

    if (input.email === logged.email && input.password === logged.password) {
      localStorage.setItem("loggin", true);
      navigate("/");
    } else {
      setError("Email or password is incorrect.");
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Login</h1>
        <div className="form">
        
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Enter Your password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
              {error && <p className="error">{error}</p>}
            <button id="login-btn">Login</button>

            <p>
              Not a Account?{" "}
              <span>
                <Link to="/signUp"> Create Account </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
