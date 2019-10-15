import React, { Component } from "react";

import FormInput from '../form-input/form-input.component'
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
      <div className="signin">
        <h1>
          Aliquip labore do nisi exercitation pariatur fugiat deserunt sunt quis
          et.
        </h1>
        <label>Dolor fugiat proident non adipisicing.</label>
        <form onSubmit={this.handleOnSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            handleOnChange={this.handleOnChange}
            value={this.state.email}
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            handleOnChange={this.handleOnChange}
            value={this.state.password}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default signIn;
