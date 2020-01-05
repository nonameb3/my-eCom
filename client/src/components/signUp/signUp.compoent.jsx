import React, { useState } from "react";
import { compose } from "redux";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import "./signUp.style.scss";

export function SignUpCompoent(props) {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleOnSubmit = async event => {
    event.preventDefault();
    const { history } = props;
    const additionalData = userCredentials;

    if (password !== confirmPassword) {
      alert("Password and confirm'password not match!");
      return;
    }

    dispatch(signUpStart({ additionalData, history }));
  };

  const handleOnChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signup">
      <h1>I do not have a account.</h1>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          handleOnChange={handleOnChange}
          value={displayName}
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          handleOnChange={handleOnChange}
          value={email}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          handleOnChange={handleOnChange}
          value={password}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          handleOnChange={handleOnChange}
          value={confirmPassword}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign-up</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default compose(withRouter)(SignUpCompoent);
