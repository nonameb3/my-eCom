import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";
import "./signIn.style.scss";

function SignIn(props) {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;

  const handleOnSubmit = async event => {
    event.preventDefault();
    props.emailSignInStart({ email, password });
  };

  const handleOnChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="signin">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          handleOnChange={handleOnChange}
          value={email}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          handleOnChange={handleOnChange}
          value={password}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign-in</CustomButton>
          <CustomButton
            googleSignInButton
            type="button"
            onClick={props.googleSignInStart}
          >
            Sign-in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn);
