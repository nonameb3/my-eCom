import React, { Component } from "react";
import "./signIn.style.scss";

export class signIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1>
          Aliquip labore do nisi exercitation pariatur fugiat deserunt sunt quis
          et.
        </h1>
        <label>Dolor fugiat proident non adipisicing.</label>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="email"
            name="email"
            onChange={this.handleOnChange}
            value={this.state.email}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleOnChange}
            value={this.state.password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default signIn;
