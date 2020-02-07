import React, { Component } from "react";
import "./styles.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { DataTable } from "./components/DataTable";

const inputs = [
  { label: "first name", name: "firstName" },
  { label: "last name", name: "lastName" },
  { label: "username", name: "username" }
];
export class App extends Component {
  state = {
    users: [],
    user: {
      firstName: "",
      lastName: "",
      username: "",
      score: 0
    },
    disabled: true
  };
  onAddUser = () => {
    this.setState(state => ({
      users: [...state.users, state.user]
    }));
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState(currentState => ({
      user: {
        ...currentState.user,
        [name]: value
      }
    }));
    const { firstName, lastName, username } = this.state.user;
    if (firstName && lastName && username) {
      this.setState({ disabled: false });
    }
  };
  render() {
    return (
      <div className="App">
        {inputs.map((item, i) => (
          <Input
            key={Number(i)}
            handeInputs={this.handleInputChange}
            {...item}
          />
        ))}
        <Button
          label="Add user"
          disabled={this.state.disabled}
          handleClick={this.onAddUser}
        />
        {this.state.users.length !== 0 ? (
          <DataTable users={this.state.users} />
        ) : (
          <div>No data</div>
        )}
      </div>
    );
  }
}
