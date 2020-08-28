import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <div className="UserInput">
      <h3>Change the name of Username: {props.username}</h3>
      <input
        type="text"
        onChange={props.changeName}
        value={props.username}
      ></input>
    </div>
  );
};

export default userInput;
