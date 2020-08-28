import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>
        Hello this is my first article which i am going to publish in an react
        app
      </p>
      <p className="UserOutput__username">
        This was written by {props.username}
      </p>
    </div>
  );
};

export default userOutput;
