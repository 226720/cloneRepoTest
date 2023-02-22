import React from "react";
import "./Register.css";
function register() {
  var buttonClick = () => {
    console.log("Registered successfully");
  };
 
  return (
    <div className="App">
      <h3>Registration Form</h3>
      <label>First Name:</label>
      <input type="text" name="fname" id="name" />
      <br />
      <br />
      <label>Last Name:</label>
      <input type="text" name="lname" id="name" />
      <br />
      <br />
      <label>Age:</label>
      <input type="number" name="age" id="name" />
      <br />
      <br />
      <label>Email:</label>
      <input type="email" name="email" id="name" />
      <br />
      <br />
      <label>Gender:</label>
      <input type="radio" name="gender" id="male" />
      <span id="male"> Male</span>
      <input type="radio" name="gender" id="female" />
      <span id="female"> Female</span>
      <br />
      <br />
      <label>Languages Known:</label>
      <input type="checkbox" name="language" id="language" />
      <span id="Hindi"> Hindi</span>
      &nbsp; &nbsp;
      <input type="checkbox" name="language" id="language" />
      <span id="English"> English</span>
      &nbsp; &nbsp;
      <input type="checkbox" name="language" id="language" />
      <span id="Malayalam"> Malayalam</span>
      <br />
      <br />
      <label> Select Religion </label>
      <select>
        <option value="Muslim">Muslim</option>
        <option value="Hindu">Hindu</option>
        <option value="Christian">Christian</option>
      </select>
      <br />
      <br />
      <center>
        <input
          type="submit"
          name="submit"
          id="submit"
          className="button-submit"
          onbuttonClick={buttonClick}
        />
      </center>
      <br />
      <br />
    </div>
  );
}
export default register;
