import React, { Component } from "react";

export class Input extends Component {
  render() {
    const { label, name, handeInputs } = this.props;
    return (
      <div>
        {label} : <input name={name} onChange={handeInputs} />
      </div>
    );
  }
}
