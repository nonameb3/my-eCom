import React from 'react'

import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.compoent'
import './signIn.style.scss';

export default function() {
  return (
    <div className="signin-signup">
      <SignIn/>
      <SignUp/>
    </div>
  )
}
