import { useState } from "react";
import React from "react";
import "./Message.css";
function Message(props) {
  const { name, lastName, onbuttonclick } = props;
  const [sLastName, setSLastName] = useState(lastName);
  const buttonclicked = () => {
    setSLastName("Andrew");
    onbuttonclick("Welcome!");
    
  };
  return (
    <div className="welcome-login">
      Welcome Mr.{name} {sLastName}
      <button className="button-login" onClick={buttonclicked}>Click Here</button>
    </div>
  );
}

export default Message;
