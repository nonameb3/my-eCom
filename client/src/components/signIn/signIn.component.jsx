import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utill';
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
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
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
          <CustomButton type="submit">Sigin</CustomButton>
          <CustomButton type="submit"onClick={signInWithGoogle} >Sigin with Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default signIn;
