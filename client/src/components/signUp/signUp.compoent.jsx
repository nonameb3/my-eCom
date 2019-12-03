import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import "./signUp.style.scss";

export class signUpCompoent extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleOnSubmit = async event => {
    event.preventDefault();
    const { signUpStart, history } = this.props;
    const { password, confirmPassword } = this.state;
    const additionalData = this.state;

    if (password !== confirmPassword) {
      alert("Password and confirm'password not match!");
      return;
    }

    signUpStart({ additionalData, history });
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signup">
        <h1>I do not have a account.</h1>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleOnSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Display Name"
            handleOnChange={this.handleOnChange}
            value={this.state.displayName}
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            handleOnChange={this.handleOnChange}
            value={this.state.email}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            handleOnChange={this.handleOnChange}
            value={this.state.password}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            handleOnChange={this.handleOnChange}
            value={this.state.confirmPassword}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign-up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUpStart: fromInput => dispatch(signUpStart(fromInput))
  };
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(signUpCompoent);
