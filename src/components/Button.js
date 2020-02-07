import React, { Component } from "react";
export class Button extends Component {
  render() {
    const { disabled, label, handleClick } = this.props;
    return (
      <button disabled={disabled} onClick={() => handleClick()}>
        {label}
      </button>
    );
  }
}
