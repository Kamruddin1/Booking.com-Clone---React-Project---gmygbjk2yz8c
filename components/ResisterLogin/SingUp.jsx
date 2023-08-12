import React from "react";
import "./stylelogin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (input.name === "" || input.email === "" || input.password === "") {
      setError("Please fill in all fields.");
      return; 
    }

    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Sign Up</h1>
        <div className="form">
         
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Enter Your full name"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
           {error && <p className="error">{error}</p>}
            <button id="signUp-btn">Sign Up</button>

            <p>
              Have an Account?{" "}
              <span>
                <Link to="/login">Go To Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
