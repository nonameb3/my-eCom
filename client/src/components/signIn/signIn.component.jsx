import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utill";
import "./signIn.style.scss";

export class signIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleOnSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email.trim(), password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error.message)
    }
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
          <div className="buttons">
            <CustomButton type="submit">Sign-in</CustomButton>
            <CustomButton googleSignInButton type="button" onClick={signInWithGoogle}>
              Sign-in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default signIn;
