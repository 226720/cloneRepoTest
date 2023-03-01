import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [suserName, setSUserName] = useState("");
  const [spassword, setSPassword] = useState("");
  const [serror, setSError] = useState("");
  const [ssuccess, setSSuccess] = useState("");
  const click = () => {
    if (suserName === "") {
      setSError("Enter a username");
      setSSuccess("");
    } else if (spassword === "") {
      setSError("Please enter a password");
      setSSuccess("");
    } else if (spassword.length < 5) {
      setSError("Password contains atleast 5 characters");
      setSSuccess("");
    } else if (suserName !== "admin" || spassword !== "password") {
      setSError("Invalid username or password");
      setSSuccess("");
    } else {
      console.log("loggedin");
      setSSuccess("Login successful!");
      setSError("");
    }
  };
  return (
    <div>
      <div class="form-container">
        UserName:
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
          value={suserName}
          onChange={(e) => setSUserName(e.target.value)}
        />
        <br />
        <br />
        Password:
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          value={spassword}
          onChange={(e) => setSPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="button" onClick={click}>
          Login
        </button>
        <div>{serror}</div>
        <div>{ssuccess}</div>
      </div>
    </div>
  );
}
export default Login;
