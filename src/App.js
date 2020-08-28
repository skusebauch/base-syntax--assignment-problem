import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UsperInput";

class App extends Component {
  state = {
    usernames: [
      { username: "Sven" },
      { username: "Eileen" },
      { username: "Leon" },
    ],
  };

  switchUserHandler = (event) => {
    this.setState({
      usernames: [
        { username: event.target.value },
        { username: "Eileen" },
        { username: "Leon" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changeName={this.switchUserHandler}
          username={this.state.usernames[0].username}
        />
        <UserOutput username={this.state.usernames[0].username} />
        <UserOutput username={this.state.usernames[1].username} />
        <UserOutput username={this.state.usernames[2].username} />
        <UserOutput username={this.state.usernames[0].username} />
      </div>
    );
  }
}

export default App;
