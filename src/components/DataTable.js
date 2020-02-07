import React, { Component } from "react";
import { Button } from "../components/Button";
export class DataTable extends Component {
  state = {
    pressed: undefined
  };

  handleScore = index => {
    this.setState({
      pressed: index
    });
  };

  render() {
    const { users } = this.props;
    console.log("users", users);
    return (
      <table>
        <tbody>
          <tr>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Username</td>
            <td>Games</td>
          </tr>
          {users.map((user, index) => (
            <tr key={user.username}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td>
                <Button
                  label={
                    this.state.pressed === index
                      ? `${user.username} played ${user.score}`
                      : "Show Game Played!"
                  }
                  handleClick={() => this.handleScore(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
